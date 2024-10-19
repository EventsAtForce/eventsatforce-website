import React from 'react'
import Team from '../components/Team'

const classes = {
  TeamPageContainer: 'flex flex-col items-center justify-center xl:gap-16 lg:gap-14 md:gap-12 gap-8 w-full h-full max-w-1440 xl:px-[100px] xl:pt-[100px] xl:pb-8 lg:px-[80px] lg:pt-[80px] lg:pb-6 sm:px-[60px] sm:pt-[60px] sm:pb-4 px-6 pt-[60px] pb-4'
}

const Teams = () => {
  return (
    <div className={classes.TeamPageContainer}>
      <Team />
    </div>
  )
}

export default Teams