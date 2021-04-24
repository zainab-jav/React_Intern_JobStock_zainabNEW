import React from 'react'
import ManageResumeSearch from '../components/ManageResumeSearch'
import ManageResumeArticle from '../components/ManageResumeArticle'
// import img1 from '../img/client-1.jpg'
// import img2 from '../img/client-2.jpg'
// import img4 from '../img/client-4.jpg'
// import img5 from '../img/client-5.jpg'
import ResumeData from '../data/employee/Resume'


// const ManageResumeData = [
//     {
//         img:img1,
//         name:"Alexander Weir",
//         desg:"(Web Developer)",
//         time:"10 Hour Ago",
//         rate:"$17/Hour"
//     },
//     {
//         img:img2,
//         name:"Henry Crooks",
//         desg:"(PHP Developer)",
//         time:"2 Hour Ago",
//         rate:"$15/Hour"
//     },
//     {
//         img:img2,
//         name:"Zara Clow",
//         desg:"(IOS Developer)",
//         time:"22 Min Ago",
//         rate:"$16/Hour"
//     },
//     {
//         img:img4,
//         name:"Joseph Macfarlan",
//         desg:"(SEO Expert)",
//         time:"58 Min Ago",
//         rate:"$12/Hour"
//     },
//     {
//         img:img5,
//         name:"Ethan Marion",
//         desg:"(UX/UI Designer)",
//         time:"05 Hour Ago",
//         rate:"$17.5/Hour"
//     },
//     {
//         img:img1,
//         name:"Daniel Dax",
//         desg:"(Web Developer)",
//         time:"10 Hour Ago",
//         rate:"$17/Hour"
//     },

// ]

const ManageResumeList = () => {
    
    return (
        <>
        <section class="manage-resume gray">
			<div class="container">
              <ManageResumeSearch/>
              <div class="row">
					<div class="col-md-12">
                      {ResumeData.map ((data) => {
                          const {id,profileImg,name,tagline,onlineStatus,hourlyRate,skills} = data
                          return(
                              <ManageResumeArticle
                                  key = {id}
                                  id = {id}
                                  name = {name}
                                  profileImg = {profileImg}
                                  tagline = {tagline}
                                  onlineStatus = {onlineStatus}
                                  hourlyRate = {hourlyRate}
                                  skills = {skills}
                                  
                                 
                              />
                          )})}
                    </div>
                </div>
                <div class="row">
					<ul class="pagination">
						<li><a href="#">&laquo;</a></li>
						<li class="active"><a href="#">1</a></li>
						<li><a href="#">2</a></li>
						<li><a href="#">3</a></li> 
						<li><a href="#">4</a></li> 
						<li><a href="#"><i class="fa fa-ellipsis-h"></i></a></li> 
						<li><a href="#">&raquo;</a></li> 
					</ul>
				</div>
            </div>
        </section>
        </>
    )
}

export default ManageResumeList