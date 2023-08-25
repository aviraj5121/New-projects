import axios from "axios"
import react, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import './user.css'
function User() {
    const [isOverlined, setIsOverlined] = useState(false);
    const toggleOverline = (userId) => {
        setUsers(prevUsers => prevUsers.map(user => {
            if (user._id === userId) {
                return { ...user, isOverlined: !user.isOverlined };
            }
            return user;
        }));
    };

    const [users, setUsers] = useState([])
    const getdata = async () => {
        const response = await axios.get('http://localhost:5121')
        const data = response.data
        setUsers(data)
    }
    useEffect(() => {
        getdata()

    }, [])

    const del = (id) => {
        console.log(id)
        axios.delete('http://localhost:5121/deleteuser/' + id)
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <header>
                <h1> Things To Watch After Placement</h1>
            </header>
            <div >
                <div className="navbar">
                    <Link to="/create">Add +</Link>
                </div>
                <div className="Table">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Genre</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => {
                                    return (
                                        <tr key={user._id}>
                                            <td style={{ textDecoration: user.isOverlined ? 'line-through' : 'none' }}>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.age}</td>
                                            <td className="btn">
                                                <Link to={`/update/${user._id}`} className="button-52" style={{textDecoration:'none',color:'white'}}>Update</Link>
                                                <button onClick={(e) => del(user._id)} className="button-52" >Delete</button>
                                                <button onClick={() => toggleOverline(user._id)} className="button-52">Done</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default User





/* CSS */
