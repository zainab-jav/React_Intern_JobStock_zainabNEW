import React from 'react'

const ResumeDetailDesc2 = ({skill,level}) => {
	var blue = "#26a9e1"
	var orange = "#f6931e"
	var green = "#8bc43f"
	var red = "#d20001"
	var setClr 
	if(level>=90) setClr = blue
    else if(level >=80) setClr = orange
    else if(level >= 65) setClr = green
    else setClr = red
    return (
        <>         
		<h3 className="progressbar-title">{skill}</h3>
		<div className="progress">
		    <div className="progress-bar" style={{width:`${level}%`,background:setClr}}>
				<span className="progress-icon fa fa-plus" style={{borderColor:setClr,color:setClr}}></span>
				<div className="progress-value">{`${level}%`}</div>
			</div>
		</div>
        </>
    )
}

export default ResumeDetailDesc2