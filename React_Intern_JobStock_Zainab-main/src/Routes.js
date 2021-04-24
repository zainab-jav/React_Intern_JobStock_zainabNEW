import {Route,Switch} from "react-router-dom"
import React from "react"
import Home from "./pages/Home";
import Blog from "./pages/Blog"
import Freelancing from "./pages/Freelancing"
import FreelancerDetail from "./pages/DetailedFreelancer";
import CreateJob from "./pages/CreateJob";
import Payment from "./pages/Payment";
import Pricing from "./pages/Pricing";
import ClientProfile from "./pages/ClientProfile";
import ResumeDetail from './pages/ResumeDetail'
import CompanyDetail from './pages/CompanyDetail'
import ManageResume from './pages/ManageResume'
import ResumeData from './data/employee/Resume'
import CompanyData from './data/company/Data'

const Routes = () => {
  return(
    <Switch >
      <Route exact path="/" render={props => <Home {...props} />}/>
      <Route exact path="/blog" render={props => <Blog {...props} />}/>
      <Route exact path="/createJob" render={props => <CreateJob {...props} />}/>
      <Route exact path="/Freelancing" render={props => <Freelancing {...props} />}/>
      <Route exact path="/FreelancerDetail" render={props => <FreelancerDetail {...props} />}/>
      <Route exact path="/Pricing" render={props => <Pricing {...props} />}/>
      <Route exact path="/Client" render={props => <Home {...props} />}/>
      <Route exact path="/Payment" render={props => <Payment {...props} />}/>
      <Route exact path="/clientProfile" render={props => <ClientProfile {...props} />}/>
     
      {ResumeData.map(data=>{
                const {id} = data;
                return(
                    <Route key={id} exact path={`/resumeDetail/${id}`} render={(props) => <ResumeDetail {...props} data={data}/> } />

                )
            })}
      {CompanyData.map(data=>{
                const {id} = data;
                return(
                    <Route key={id} exact path={`/companyDetail/${id}`} render={(props) => <CompanyDetail {...props} data={data}/> } />

                )
            })}
    
      <Route exact path="/manageResume" render={props => <ManageResume {...props} />}/>


    </Switch>
  )
}
export default Routes