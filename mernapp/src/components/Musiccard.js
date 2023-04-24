import React from 'react'

//Props are completely pending

export default function Musiccard() {
    return (
        <div>
            {/* <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img className="card-img-top" src="https://mdbootstrap.com/wp-content/uploads/2019/02/flam.jpg"
                        alt="Card image cap" />
                    <a href="#!">
                        <div className="mask" style={{"background-color": "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                </div>
                <div className="card-body text-center">

                    <h5 className="h5 font-weight-bold"><a href="#" target="_blank">Dj Flam</a></h5>
                    <p className="mb-0">Urban Bachata remix</p>

                    <audio id="music" preload="true">
                        <source src="#" />
                    </audio>
                    <div id="audioplayer">
                        <i id="pButton" className="fas fa-play"></i>
                        <div id="timeline">
                            <div id="playhead"></div>
                        </div>
                    </div>

                </div>
            </div> */}

            <div className="card bg-dark mb-2" style={{ "width": "100%", "height": "100px" }}>
                <div className="d-flex">

                    <div className="bd-highlight">
                        <img src="https://mdbootstrap.com/wp-content/uploads/2019/02/flam.jpg" className="img-fluid rounded-start" width={"100px"} height={"8px"} alt="..." />
                    </div>

                    <div className="card-body">
                        <h6 className="card-title text-info">Who are you?</h6>
                        <div className="d-flex ms=5">
                            <div className='d-flex me-auto text-white  ' id='playbutton'>

                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
                                        <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                                    </svg>
                                </div>

                                <div className='border border-2 my-auto mx-auto' style={{ width: "400px", height: "2px" }}></div>

                            </div>


                            <div className='col-1 text-white' id='likebutton'>

                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
