import { useRef, useEffect, useState, useMemo, useId } from "react";
import "./CurvedLoop.css";

const CurvedLoop = ({
  marqueeText = "",
  speed = 1,
  className,
  curveAmount = 400,
  direction = "left",
  fontSize = 48
}) => {

  const text = useMemo(() => {
    return marqueeText.trim() + "\u00A0";
  }, [marqueeText]);

  const textPathRef = useRef(null);
  const pathRef = useRef(null);

  const [textWidth, setTextWidth] = useState(0);

  const uid = useId();
  const pathId = `curve-${uid}`;
  const pathD = `M-400,40 Q720,${40 + curveAmount} 1840,40`;

  // 🔥 Measure the actual curved rendered width
  useEffect(() => {
    if (!textPathRef.current) return;

    // Wait one frame so SVG fully lays out
    requestAnimationFrame(() => {
      const length = textPathRef.current.getComputedTextLength() / 3;
      setTextWidth(length);
    });
  }, [text, fontSize]);

  useEffect(() => {
    if (!textWidth || !textPathRef.current) return;

    let offset = 0;
    let frame;

    const animate = () => {
      offset += direction === "left" ? speed / 6 : -speed / 6;

      // PERFECT wrap using measured curved width
      if (offset >= textWidth) {
        offset -= textWidth;
      }
      if (offset <= -textWidth) {
        offset += textWidth;
      }

      textPathRef.current.setAttribute(
        "startOffset",
        -offset + "px"
      );

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [textWidth, speed, direction]);

  return (
    <div className="curved-loop-jacket">
      <svg className="curved-loop-svg" viewBox="0 0 1440 120">
        <defs>
          <path
            ref={pathRef}
            id={pathId}
            d={pathD}
            fill="none"
            stroke="transparent"
          />
        </defs>

        <text
          fontSize={fontSize}
          fontWeight="bold"
          className={className}
        >
          <textPath
            ref={textPathRef}
            href={`#${pathId}`}
          >
            {text + text + text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CurvedLoop;