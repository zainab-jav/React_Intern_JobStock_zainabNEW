import React from 'react'
import {FullDetail1,FullDetail2} from '../../components/FullDetailCard'
import CreateJobData from '../../data/CreateJobData'

const FullDetail = () => {
    return(
        <>
        <section className="full-detail">
			<div className="container">
              <div className="row bottom-mrg extra-mrg">
              {CreateJobData.map((data) => {
                const { title,icon1,ph1,icon2,ph2,icon3,ph3,icon4,ph4,icon5,ph5,icon6,id,en,mode,min,max,days,dataId,dataTheme,rO,ph6 } = data;
                return (
                  <FullDetail1
                    key={title}
                    title = {title}
                    icon1 = {icon1}
                    ph1 = {ph1}
                    icon2 = {icon2}
                    ph2 = {ph2}
                    icon3 = {icon3}
                    ph3 = {ph3}
                    icon4 = {icon4}
                    ph4 = {ph4}
                    icon5 = {icon5}
                    ph5 = {ph5}
                    icon6 = {icon6}
                    id = {id}
                    en = {en}
                    mode = {mode}
                    min = {min}
                    max = {max}
                    days = {days}
                    dataId = {dataId}
                    dataTheme = {dataTheme}
                    rO = {rO}
                    ph6 = {ph6}
                  />
                );
              })}
            
                <FullDetail2/>
              </div>
            </div>
        </section>
        </>
    )
}

export default FullDetail