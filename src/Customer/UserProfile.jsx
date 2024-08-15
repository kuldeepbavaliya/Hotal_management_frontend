import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'

export default function UserProfile() {

    const naviget=useNavigate()

    const singout=()=>
    {
        console.log("singout")
        localStorage.removeItem('email')
        localStorage.removeItem('pass')
        naviget("/")
    }
    
    return (
        <div>
            <Header/>
            <section className="vh-100" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-12 col-xl-4">

                            <div className="card" style={{borderRadius: '15px'}}>
                                <div className="card-body text-center">
                                    <div className="mt-3 mb-4">
                                        <img src="user.png"
                                            className="rounded-circle img-fluid" style={{width: '100px'}} />
                                    </div>
                                    <h4 className="mb-2">User</h4>
                                    <p className="text-muted mb-4">{localStorage.getItem('email')}<span className="mx-2">|</span> 
                                    <Link to="/Booking">booking</Link></p>
                                    <div className="mb-4 pb-2">
                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-floating">
                                            <i className="fab fa-facebook-f fa-lg"></i>
                                        </button>
                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-floating">
                                            <i className="fab fa-twitter fa-lg"></i>
                                        </button>
                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-floating">
                                            <i className="fab fa-skype fa-lg"></i>
                                        </button>
                                    </div>
                                    <button type="button" onClick={singout}  data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-rounded btn-lg">
                                       Sing out
                                    </button>
                                    <div className="d-flex justify-content-between text-center mt-5 mb-2">
                                        <div>
                                            <p className="mb-2 h5">8471</p>
                                            <p className="text-muted mb-0">Wallets Balance</p>
                                        </div>
                                        <div className="px-3">
                                            <p className="mb-2 h5">8512</p>
                                            <p className="text-muted mb-0">Income amounts</p>
                                        </div>
                                        <div>
                                            <p className="mb-2 h5">4751</p>
                                            <p className="text-muted mb-0">Total Transactions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
