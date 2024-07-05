import React, { Fragment } from 'react'
import { SiLeetcode , SiGithub, Si1Password , SiGmail } from 'react-icons/si'
import { FaLinkedin } from "react-icons/fa";



function Home() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center"> 

            <div className="container">

              <div className="row">

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <button className="btn border-none"><SiLeetcode /> <a className="leetcode" target = "_blank" href='https://leetcode.com/u/shubhamv888/' >LeetCode</a></button>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 text-end">
                  <button className="btn border-none"><SiGithub /><a className = "leetcode" target = "_blank" href='https://github.com/Shubhamv888'> Github</a></button>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                  <div>
                    <h1 className="m-0 font-big slide-in-top">Hi,</h1>
                    <h1 className="m-0 font-big animate-charcter">I'm Shubham Verma,</h1>
                    <p className="ls-2 mt-2 slide-in-bottom">Full Stack Developer / Computer Science Engineer </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12">
                  <img className="img-fluid" src="../images/nomad-bro.png" alt="..."></img>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <button className="btn border-none"><SiGmail /> <a className="leetcode" href="mailto:sbh0888@gmail.com" target = "_blank">Mail</a></button>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 text-end">
                  <button className="btn border-none"><FaLinkedin /><a className = "leetcode" href='https://www.linkedin.com/in/shubhamv888/' target = "_blank"> LinkedIn</a></button>
                </div>

              </div>



            </div>
            
        </div>
       
    </Fragment>
  )
}

export default Home