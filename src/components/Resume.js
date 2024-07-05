import React, { Fragment } from 'react'
import {  SiHackerrank } from 'react-icons/si';
import { MdOutlineFileDownload } from "react-icons/md";


function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="change-color ff-jose fw-bold ls-2">SHUBHAM VERMA</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="change-color ff-jose ls-2">EXPERIENCE</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">WEB DEVELOPMENT INTERN</h4>
                                <h6 className="blue-label px-2 py-1">June 2023 - August 2023</h6>
                                <p className="change-color m-0">National Crime Record Bureau</p>
                                <p className='change-color'>Delhi , India</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        
                        <h4 className="change-color ff-jose ls-2">EDUCATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Computer Science Engineering</h4>
                                <h6 className="blue-label px-2 py-1">2021 - 2025</h6>
                                <p className="change-color m-0">Nataji Subhas University of Technology</p>
                                <p className='change-color'>CGPA: 8.02</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Venkateshwar International School</h4>
                                <p className='change-color m-0'>XII - 90.4 %</p>
                                <p className='change-color'>X - 91.4 %</p>
                            </li>
                        </ul>

                    </div>
                </div>

                <hr></hr>
                
                <div className="row">
                    <div className="col-md-6 ">
                        <h4 className="change-color ff-jose ls-2">DOWNLOAD RESUME</h4>
                        <div>
                            <button className='MdOutlineFileDownload-btn'><a href="https://drive.google.com/file/d/1urAq-XKY669LS5SNC5XiVxrd_oGPLEkk/view?usp=sharing" target="/blank" className="text-white text-decoration-none ">
                                <MdOutlineFileDownload className="zoom-on-hover MdOutlineFileDownload"/>
                            </a> </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Resume
