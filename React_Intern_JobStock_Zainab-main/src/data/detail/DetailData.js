import React from 'react'
import client1 from '../../img/client-1.jpg'
import com1 from '../../img/com-1.jpg'

const DetailData = [
    {
        row1:"row mrg-0",
        img: client1,
        status:"7 Hour Days Ago",
        row2:"row bottom-mrg mrg-0",
        name:"Daniel Dax",
        desg:"Web Developer",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        
        skills:[ "HTML","css","photoshop","java","php","bootstrap"],
        span1:"Menlo Park, CA",
        span2:"danieldax704@gmail.com",
        li3:"fa fa-phone",
        span3:"0 123 456 7859",
        li4:"fa fa-money",
        span4:"$52/Hour",
        row3:"row no-padd mrg-0",
        footerBtn1:"Hire Now",
        footerBtn2:"Edit"
    },
    {
        row1:"row",
        img: com1,
        status:"10 Min Days Ago",
        row2:"row bottom-mrg",
        name:"Microsoft",
        desg:"Software Development Company",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        span1:"Menlo Park, CA",
        span2:"danieldax704@gmail.com",
        li3:"fa fa-globe",
        span3:"microft.com",
        li4:"fa fa-phone",
        span4:"0 123 456 7859",
        li5:"fa fa-users",
        span5:"1000 -1200",
        row3:"row no-padd",
        footerBtn1:"Favourite",
        footerBtn2:"Save Draft"
    }
]


const ResumeDetailDesc2Data = [
    {
        title:"Apps Development",
        value:"90%",

    },
    {
        title:"iPhone Development",
        value:"80%",

    },
    {
        title:"Digital Marketing",
        value:"65%",

    },
    {
        title:"SEO/SMO",
        value:"52%",

    },
]
const styleObj1 = [
    {
      width: "90%",
      background:"#26a9e1"
  },
  

  {
      width: "80%",
      background:"#f6931e"
  },
  

   {
      width: "65%",
      background:"#8bc43f"
  },

  {
      width: "52%",
      background:"#d20001"
  }
]
const styleObj2 = [
  {
      borderColor: "#26a9e1" ,
      color :"#26a9e1"
  },
  {
      borderColor: "#f6931e" ,
      color :"#f6931e"
  },
  {
      borderColor: "#8bc43f" ,
      color :"#8bc43f"
  },
  {
      borderColor: "#d20001" ,
      color :"#d20001"
  }
]

export {DetailData,ResumeDetailDesc2Data,styleObj1,styleObj2}