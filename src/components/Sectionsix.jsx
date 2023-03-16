import React, { Component } from 'react'
import newone from "../assets/img/news-1.jpg"
import newtwo from "../assets/img/news-2.jpg"
import newthree from "../assets/img/news-3.jpg"
 class Sectionsix extends Component {
  render() {
    return (
        <div className="sectionsix">
        <div className="container ">
            <div className="writing d-flex justify-content-center align-items-center mt-3">
                <h3>Latest New</h3>
            </div>
         <div className="row mt-3">
            <div className="col-12 col-sm-6 col-md-4">
            <div class="card">
      <img src={newone} alt="" />
      <div class="card-body">
      <h5 class="card-title">Architecture</h5>
        <p class="card-text">Stylish ways to display your tv</p>
        <p>By: Steve Smith</p>
      </div>
    </div>
            </div>
    
            <div className="col-12 col-sm-6 col-md-4">
            <div class="card">
      <img src={newtwo} alt="" />
      <div class="card-body  ">
      <h5 class="card-title">Modern Designs</h5>
        <p class="card-text">Get pleasant dining experience</p>
       <p>By: James Davan</p>
      </div>
    </div>
            </div>
    
            <div className="col-12 col-sm-6 col-md-4">
            <div class="card">
      <img src={newthree} alt="" />
      <div class="card-body">
      <h5 class="card-title">Uncategorized</h5>
        <p class="card-text">Smart ways to store appliances</p>
        <p>By: Steve Smith</p>
      </div>
    </div>
            </div>
    
         </div>
    
         
          </div>
       </div>
    )
  }
}

export default Sectionsix