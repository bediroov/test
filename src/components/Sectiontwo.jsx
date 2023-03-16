import React, { Component } from 'react'
import cardone from "../assets/img/card.jpg"
import interior from "../assets/img/servis.jpg"

class Sectiontwo extends Component {
    render() {
        return (
            <div className="sectiontwo">
                <div className="container">
                    <div className="row">
                        <div className="writing  ">
                            <div className="leftside ">
                                <h3>Our specialization</h3>
                            </div>
                            <div className="rightside">
                                <p>Being the largest in-home decorationg service in newyork city, you can work with us from anywhere!.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6">
                            <div className="cardone">
                                <img src={cardone} width={500} alt="" />

                                <div className="boxone">
                                    <h6> We provide clients with the highest possible level
                                        of service anywhere in the world.</h6>

                                       <div className="sekl d-flex justify-content-space-between">
                                       <img src={interior} width={100} alt="" />
                                        <img src={interior} width={100} alt="" />
                                        <img src={interior} width={100} alt="" />
                                       </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6">
                            <div className="cardtwo">
                                <img src={cardone} width={500} alt="" />

                                <div className="boxtwo d-flex justify-content-flex-start">
                               <h6>We stand out from all of our competitors.</h6>
                               <p>Must explain you how all this mistaken idea of denouncing pleasure.</p>
                                </div>
                                {/* <div className="boxthree">
                                <h2>Years Of Experience 14</h2>

                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sectiontwo;