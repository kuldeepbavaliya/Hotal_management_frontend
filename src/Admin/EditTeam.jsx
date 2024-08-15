import React, { useEffect, useMemo, useState } from 'react'
import Anavbar from './Anavbar'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams } from 'react-router-dom';

export default function EditTeam() {

    const { Id } = useParams()

    const [team, setteam] = useState({
        id: '',
        name: '',
        age: '',
        department: '',
        image: ''
    })

    const { name, age, department, image } = team

    const submit = async () => {
        const result = await axios.put(`http://localhost:8080/team/update/${Id}`, team)
        toast.success("Update Team member !")
    }
    return (
        <div>
            <div className='card shadow' style={{ width: '52%', marginBottom: '5%', marginLeft: '29%', marginTop: '9%' }}>
                <form method='POST' style={{ margin: '9%' }}>

                    <h5>Update Team Member</h5>
                    <div data-mdb-input-init className="form-outline mb-4" style={{ marginTop: '13%' }}>
                        <label className="form-label" htmlFor="form2Example1">Name</label>
                        <input type="text" name='name' value={name} onChange={e => { setteam({ ...team, name: e.target.value }) }} id="form2Example1" className="form-control" />
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Age</label>
                        <input type="text" name='age' value={age} onChange={e => { setteam({ ...team, age: e.target.value }) }} id="form2Example2" className="form-control" />
                    </div>


                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Department</label>
                        <input type="text" name='department' value={department} onChange={e => { setteam({ ...team, department: e.target.value }) }} id="form2Example2" className="form-control" />
                    </div>


                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Select Image</label>
                        <input type="file" name='image' value={image} onChange={e => {
                            setteam({ ...team, image: e.target.value })
                        }} id="form2Example2" className="form-control" />
                    </div>


                    <button type="button" onClick={(e) => submit(e)} data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4 w-100">Continue with email</button>
                    <ToastContainer />

                    <Link className="btn btn-primary btn-block mb-4 w-100" to='/DisplayTeam'>Go Back</Link>
                </form>
            </div>
        </div>
    )
}
