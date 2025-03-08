import React from 'react'

const classes = {
    container: 'h-full flex flex-col m-auto justify-center items-center px-6',
    header: 'font-HelveticaNeueBD xl:text-5xl xl:text-shadow-3 lg:text-4xl sm:text-3xl text-2xl text-shadow-3',
    text: 'font-HelveticaNeueBD xl:text-4xl xl:text-shadow-3 lg:text-3xl text-xl text-shadow-3 text-center',
}

const NotFound = () => {
  return (
    <div className={classes.container}>
        <h1 className={classes.header}>404 - Not Found !</h1>
        <p className={classes.text}>The requested resource does not exist !</p>
    </div>
  )
}

export default NotFound