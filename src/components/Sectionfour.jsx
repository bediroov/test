import React, { Component } from 'react'
import project from "../assets/img/project.jpg"
 class Sectionfour extends Component {
  render() {
    return (
     <div className="sectionfour">
        <div className="container mt-5">
            <div className="writing d-flex justify-content-center align-items-center mt-5">
            <h3>LATEST PROJECTS</h3>
            </div>
            <div className="row g-5 mt-3">
                <div className="col-12 col-sm-12 col-md-6">
                <div class="card" >
  <img src={project} alt="" />
  <div class="card-body">
<h1>Modern Living Room</h1>
  </div>
</div>
                </div>

                <div className="col-12 col-sm-12 col-md-6">
                <div class="card" >
  <img src={project} alt="" />
  <div class="card-body">
   <h1>Modern Commercial Building</h1>
  </div>
</div>
                </div>

                <div className="col-12 col-sm-12 col-md-6">
                <div class="card" >
  <img src={project} alt="" />
  <div class="card-body">
  <h1>Koubba Luxury Bar</h1>
  </div>
</div>
                </div>

                <div className="col-12 col-sm-12 col-md-6">
                <div class="card" >
  <img src={project} alt="" />
  <div class="card-body">
    <h1>Wooden Small House</h1>

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

export default Sectionfour