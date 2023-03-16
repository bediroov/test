import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/sass/style.scss';

import Main from './components/Main';
import Navbar from './components/Navbar';
import Sectionfive from './components/Sectionfive';
import Sectionfour from './components/Sectionfour';
import Sectionone from './components/Sectionone';
import Sectionseven from './components/Sectionseven';

import Sectionsix from './components/Sectionsix';
import Sectionthree from './components/Sectionthree';
import Sectiontwo from './components/Sectiontwo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <>
 <Navbar/>
 <Sectionone/>
 <Main/>
<Sectiontwo/>
<Sectionthree/>
<Sectionfour/>
<Sectionfive/>
<Sectionsix/>
<Sectionseven/>

 </>
  </React.StrictMode>
)


