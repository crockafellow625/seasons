import React from 'react'
import './css/SeasonDisplay.css'

const seasonConfig = {
  Summer: {
    textHelper: "It is summer",
    iconName: 'sun'
  },
  Winter: {
    textHelper: 'It is winter',
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter'
  } else {
    return lat > 0 ? 'Winter' : 'Summer'
  }
}

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth())
  const { textHelper, iconName } = seasonConfig[season]

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{textHelper}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  )
}

export default SeasonDisplay
