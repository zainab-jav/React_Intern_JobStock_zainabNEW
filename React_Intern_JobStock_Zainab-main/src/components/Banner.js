import React from "react"
 
const Banner = ({bgImg,title,cname,gray})=> {
  return(
    <>
    <section
        className={`${cname?cname:'inner-header-title'} ${gray&&"gray-bg"}`}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <h1>{title}</h1>
        </div>
      </section>
      <div class="clearfix"></div>
    </>
  )
}
export default Banner