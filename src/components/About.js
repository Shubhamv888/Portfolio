import React, { Fragment } from 'react'

function About() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image"> 

            <div className="container">
                <div className="row">




                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-red slide-in-top">About Me</h1>
                            <hr></hr>
                            <p className='slide-in-bottom'>Enthusiastic about Data Structures and Algorithms with expertise as a full-stack developer and a strong team player<br></br>
                            </p>
                            <p className='slide-in-bottom'>
                            Currently seeking new opportunities in the industry and eager to work on challenging, diverse projects utilizing the latest technologies.
                            </p>
                            <p className='slide-in-bottom'>
                                Previously worked as Full stack web developer.<br></br>
                                The technology I've worked on : <span className="text-red ls-2">Javascript , React JS , Node JS , Mongo DB, Express , CSS , HTML , Django ,  BootStrap  </span>
                            </p>
                            <p className='slide-in-bottom'>
                                Currently diving into Competitive Programming
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src="../images/nomad-amico.png" alt="..."></img>
                    </div>



                </div>
            </div>

            
        </div>
    </Fragment>
  )
}

export default About