import React, { Component } from 'react'
import girl from "../assets/img/girl.jpg"
import boy from "../assets/img/boy.jpg"
class Sectionfive extends Component {
  render() {
    return (
    <div className="sectionfive">
   <div className="container mt-5">
   <div className="row  " >
   <div className=" leftside col-12 col-sm-12 col-md-6">
        <h2>CUSTOMER FEEDBACK</h2>
    </div>
    <div className="rightside col-12 col-sm-12 col-md-6">
        <p>Being the largest in-home decorationg service in newyork city, you can work with us from anywhere!.</p>
    </div>
 
   <div className="main d-flex">
    <div className="left ">
        <div className="col-12 col-sm-12 col-md-6">
            <div className="seklbir">
                <img src={girl}  alt="" />
            </div>
            <div className="yazibir">
                <p>take a trival example praising pain was born i will give you a complete account of system</p>
            </div>
        </div>
    </div>

    <div className="right d-flex">
        <div className="col-12 col-sm-12 col-md-6">
            <div className="sekliki">
                <img src={boy} alt="" />
            </div>
            <div className="yaziiki">
            <p>take a trival example praising pain was born i will give you a complete account of system</p>
            </div>
        </div>
    </div>
   </div>
 


   </div>

  
   </div>
    </div>
    )
  }
}

export default Sectionfive