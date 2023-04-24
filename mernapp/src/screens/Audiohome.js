import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Verticalmenu from '../components/Verticalmenu'
import Musiccard from '../components/Musiccard'
import Captions from '../components/Captions'

//React rendering according to data --pending


export default function Audiohome() {



  return (
    <div className='bg-secondary mt-5 pt-5'>

      <div> <Navbar /></div>

      <div className="container-fluid">
        <div className="row">

          <div className="col-3 rounded my-3 ">
            <Verticalmenu />
          </div>

          <div className="col-6 rounded my-3">
            <Musiccard />
            <Musiccard />
            <Musiccard />
            <Musiccard />
            <Musiccard />
          </div>

          <div className="col-3 rounded my-3 text-white">
            <Captions />
          </div>

        </div>
      </div>

      <br />
      <br />
      <br />
      <hr className='border border-3' />
      <br />
      <br />

      <div className="container-fluid">

        <div className="d-flex mx-auto">

          <div className=" rounded my-3 p-2 mx-auto">
            <h3 className='bg-success rounded rounded ps-4 p-3'>All time hits</h3>
            <Musiccard />
            <Musiccard />
            <Musiccard />
            <Musiccard />
          </div>

          <div className=" rounded my-3 p-2 mx-auto">
          <h3 className='bg-success rounded rounded ps-4 p-3'>Need a Centerpiece!</h3>
            <Musiccard />
            <Musiccard />
            <Musiccard />
            <Musiccard />
          </div>

        </div>
      </div>

      <div><Footer /></div>
    </div>
  )
}
