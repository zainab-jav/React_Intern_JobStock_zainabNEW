
// const FreelancerData = [
//   {
//     id:0,
//     name:"",
//     designation:"",
//     profile:"",
//     place: "",
//     location:"",
//     availability:"",
//     age:20,
//     phone:"",
//     expereince:"",
//     description:"",
//     rating:"",
//     verified:true,
//     skills:[],
//     hourlyRate:65,
//     jobsDone:70,
//     rehired:10,
//     languages:[],
//     portfolio:[
//       {
//         web:"",
//         blog:"",
//         portfolio:"",
//         facebook:"",
//         linkdin:"",
//         pintererst:"",
//         instagram:"",
//         twitter:""
//       }
//     ],
//     online:true,
//     reviews:[
//       {
//         clientName:"",
//         tagline:"",
//         time:"",
//         message:""
//       }
//     ]
//   }
// ]
// export default FreelancerData
import img1 from "../../img/client-1.jpg"
import img2 from "../../img/client-2.jpg"
import img3 from "../../img/client-4.jpg"
import img4 from "../../img/client-5.jpg"
import img5 from "../../img/can-5.png"
import img6 from "../../img/can-2.png"
import img7 from "../../img/can-3.png"

const FreelancerData = [
    {
        id: 0,
        name:"Janelia Fragrintio",
        designation:"Full Stack PHP Developer",
        profile:img5,
        place: "Mack Star",
        location:"United Kingdom",
        availability:"Full Time",
        age:27,
        phone:"",
        experience:"5 Years",
        description:[
            {
                p1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium\n" +
                    "                                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint\n" +
                    "                                    occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt\n" +
                    "                                    mollitia animi, id est laborum et dolorum fuga.",
                p2:"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum\n" +
                    "                                    soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime\n" +
                    "                                    placeat facere possimus.",
                p3:"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum\n" +
                    "                                    soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime\n" +
                    "                                    placeat facere possimus."
            }
        ],
        rating:"4.2",
        verified:true,
        skills:[ "HTML5","CSS3","Photoshop","Wordpress","PHP","JavaScript"],
        hourlyRate:"$44/hr",
        jobsDone:70,
        rehired:10,
        languages:["English","French","Dutch"],
        portfolio:
            {
                web:"www.mywebsite.com",
                blog:"My blog",
                portfolio:"my Portfolio",
                facebook:"fa fa-facebook",
                linkedin:"fa fa-linkedin",
                pinterest:"fa fa-pinterest",
                instagram:"fa fa-instagram",
                twitter:"fa fa-twitter"
            },
        
        online:true,
        reviews:[
            {
                imgSrc:img1,
                clientName:"Daniel Luke",
                tagline:"Web Developer",
                time:"3 days ago",
                message:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis\n" +
                    "                    praesentium voluptatum deleniti atque corrupti quos dolores et quas\n" +
                    "                    molestias excepturi sint occaecati cupiditate non provident, similique sunt\n" +
                    "                    in culpa qui officia deserunt mollitia animi, id est laborum et dolorum\n" +
                    "                    fuga."
            },
            {
                imgSrc:img2,
                clientName:"Ned Stark",
                tagline:"App Developer",
                time:"5 days ago",
                message:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis\n" +
                    "                    praesentium voluptatum deleniti atque corrupti quos dolores et quas\n" +
                    "                    molestias excepturi sint occaecati cupiditate non provident, similique sunt\n" +
                    "                    in culpa qui officia deserunt mollitia animi, id est laborum et dolorum\n" +
                    "                    fuga."
            },
            {
                imgSrc:img3,
                clientName:"Jon Snow",
                tagline:"Web Developer",
                time:"10 days ago",
                message:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis\n" +
                    "                    praesentium voluptatum deleniti atque corrupti quos dolores et quas\n" +
                    "                    molestias excepturi sint occaecati cupiditate non provident, similique sunt\n" +
                    "                    in culpa qui officia deserunt mollitia animi, id est laborum et dolorum\n" +
                    "                    fuga."
            },
            {
                imgSrc:img4,
                clientName:"Daniel Luke",
                tagline:"App Developer",
                time:"15 days ago",
                message:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis\n" +
                    "                    praesentium voluptatum deleniti atque corrupti quos dolores et quas\n" +
                    "                    molestias excepturi sint occaecati cupiditate non provident, similique sunt\n" +
                    "                    in culpa qui officia deserunt mollitia animi, id est laborum et dolorum\n" +
                    "                    fuga."
            }
        ]
    }
]

const StarRatingData = [
    {
        icon: 'fa fa-star fill'
    },
    {
        icon: 'fa fa-star fill'
    },
    {
        icon: 'fa fa-star fill'
    },
    {
        icon: 'fa fa-star fill'
    },
    {
        icon: 'fa fa-star-half fill'
    }
]

const SimilarProfileData = [
    {
        ImgSrc: img5,
        name: "Adam Crivatinly",
        designation: "Web Developer",
        occupation: "Freelancer"
    },
    {
        ImgSrc: img6,
        name: "Adam Creek",
        designation: "App Developer",
        occupation: "Freelancer"
    },
    {
        ImgSrc: img7,
        name: "Adam Sandler",
        designation: "Python Developer",
        occupation: "Freelancer"
    }

]

const SocialShareData = [
    {
        facebook: "fa fa-facebook",
        twitter: "fa fa-twitter",
        instagram: "fa fa-instagram",
        gplus: "fa fa-google-plus",
        linkedin: "fa fa-linkedin",
        beshare: "fa fa-behance"
    }
]

export {FreelancerData, StarRatingData, SimilarProfileData, SocialShareData}

