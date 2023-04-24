import React from 'react'
import { Link } from 'react-router-dom'

//Active states UI pending
 
export default function Verticalmenu() {
    return (
        <div className='bg-dark rounded container-fluid'>
            <div className="d-flex flex-column">
                <Link to='/' className='text-decoration-none text-white 4 p-2 my-3   active'>Home</Link>
                <Link to='/trending' className='text-decoration-none text-white 4 p-2 my-3 '>Trending</Link>
                <Link to='/favourites' className='text-decoration-none text-white 4 p-2 my-3 '>Favourites</Link>
                <Link to='/videopodcasts' className='text-decoration-none text-success 4 p-2 my-3 '>Switch to video podcasts</Link>
            </div>

            <hr className='text-white' />

            <div className="d-flex flex-column">
                <Link to='/settings' className='text-decoration-none text-white 4 p-2 my-3 '>Settings</Link>
                <Link to='/help' className='text-decoration-none text-white 4 p-2 my-3 '>Help</Link>
                <Link to='/feedback' className='text-decoration-none text-white 4 p-2 my-3 '>Feedback</Link>
            </div>

            <hr />


        </div>
    )
}
