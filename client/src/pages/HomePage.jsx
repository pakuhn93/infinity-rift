// import NavBar from '../Components/NavBar';
// import { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
        <NavBar/>
        <p className='home-announcments'>HOME PAGE</p>
        <Footer/>
    </div>
  );
}
