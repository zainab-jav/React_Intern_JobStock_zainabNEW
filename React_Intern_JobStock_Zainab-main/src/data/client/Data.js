import JobPosted from "./JobsPosted"
const ClientData = [
  {
    name:[],
    designation:"",
    profile:"",
    coverPhoto:"",
    email:"",
    location:{
      city:"",
      zip:71000,
      state:"",
      country:"",
      Address:"",
    },
    password:"",
    phone:"",
    organization:"",
    description:"",
    // rating:"",
    // verified:true,
    //skills:[],
    jobPost:200,
    jobShared:450,
    Liked:189,
    socialLinks:[
      {
        web:"",
        blog:"",
        portfolio:"",
        facebook:"",
        linkdin:"",
        pintererst:"",
        instagram:"",
        twitter:""
      }
    ],
    messages:[{}],
    online:true,
    friends:[{}],
    jobs: JobPosted,
    // reviews:[
    //   {
    //     clientName:"",
    //     tagline:"",
    //     time:"",
    //     message:""
    //   }
    // ]
  }
]
export default ClientData;