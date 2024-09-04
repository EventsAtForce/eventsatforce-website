import React from 'react'

const classes = {
  TeamContainer: "w-[86.111vw] max-w-[1240px] xl:px-[100px] xl:pt-[100px] xl:pb-8 lg:px-[80px] lg:pt-[80px] lg:pb-6 sm:px-[60px] sm:pt-[60px] sm:pb-4 px-6 pt-[60px] pb-4",
  Header: "text-4xl font-bold text-center mt-10",
}

const Team = () => {
  return (
    <div className={classes.TeamContainer}>
      <div classeName={classes.Header}> 
        The Team
      </div>
    </div>
  )
}

export default Team