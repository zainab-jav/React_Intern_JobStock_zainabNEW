import React from "react"
const Heading = ({topText,title1,title2})=>{
  return(
    <div className="main-heading">
  <p>{topText}</p>

  <h2>{title1}<span>{title2}</span></h2>
</div>
  )
}
export default Heading;