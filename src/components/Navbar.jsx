import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (

      <header>
        <nav className='d-flex align-items-center justify-content-center' >
         
            <ul>
            <li><a href="#">Make a Call:+8(321)666-12-34</a></li>

            <li><a href="#">Visit us on:217 Royal Garden,NY</a></li>
          </ul>
            
         
       
          <div className='icons'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-google"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div className='button'>
            <a href="#">Card 0 item(s)-$0.00</a>
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>


        </nav>
      </header>

    )
  }
}

export default Navbar