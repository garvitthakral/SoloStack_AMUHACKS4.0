import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import Navbar from '../Navbar';
import Hero from './Hero';
import Why from './Why';
import Footer from '../Footer';

const Home = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <Hero />
      <Why />
      <Footer/>
    </div>
  )
}

export default Home