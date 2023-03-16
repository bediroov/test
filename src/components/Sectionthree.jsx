import React, { Component } from 'react'
import serviceone from "../assets/img/servis.jpg"
import servicetwo from "../assets/img/servistwo.jpg"
import servicethree from "../assets/img/servisthree.jpg"
 class Sectionthree extends Component {
  render() {
    return (
   <div className="sectionthree">
    <div className="container">
        <div className="writing d-flex justify-content-center align-items-center mt-3">
            <h3>SERVICES WE DO</h3>
        </div>
     <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
        <div class="card">
  <img src={serviceone} alt="" />
  <div class="card-body">
    
    <p class="card-text">Desires to obtain pain of itself, because it‘s but because occasionally.</p>
    <a href="#" class="btn btn-dark">read more</a>
  </div>
</div>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
        <div class="card">
  <img src={servicetwo} alt="" />
  <div class="card-body">
  
    <p class="card-text">Explain to you how this mistaken idea denouncing of pleasure.</p>
    <a href="#" class="btn btn-dark">read more</a>
  </div>
</div>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
        <div class="card">
  <img src={servicethree} alt="" />
  <div class="card-body">
  
    <p class="card-text">It is a long established fact that reader will be distracted looking.</p>
    <a href="#" class="btn btn-dark">read more</a>
  </div>
</div>
        </div>

     </div>

     <div className="link">
        <a href=""><button>View All</button></a>
     </div>
      </div>
   </div>
    )
  }
}

export default Sectionthree