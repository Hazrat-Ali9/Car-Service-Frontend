import { useEffect, useState } from "react";
import api from "../../util/Api";
import { auth } from "../Auth/firebase.config";
import moment from "moment";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "../Loader/Loader";
import toast from "react-hot-toast";



const Users = () => {
    const [user, loading] = useAuthState(auth)
    const [users, setUsers] = useState([])
    const [repatch, setRepatch] = useState()
    const [admins, setAdmins] = useState([])
    useEffect(() => {
        api.post('/user/all', { email: user?.email })
            .then(res => {
                setUsers(res.data)
                setAdmins(res.data.filter(user => user.role === 'admin'))
            })
    }, [repatch, user])
    const makeAdmin = (current, email) => {
        try {
            if (current === "admin") {
                api.put(`/user/${email}`, { role: 'user' })
                    .then(res => {
                        setRepatch(res)
                        toast.success("User removed from admin successfully")
                    })
            }
            else {
                api.put(`/user/${email}`, { role: 'admin' })
                    .then(res => {
                        setRepatch(res)
                        toast.success("Admin created successfully")
                    })
            }
        } catch (error) {
            toast.error(error.response.data.err)
        }
    }
    if (loading) {
        return <Loader />
    }
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Join Time</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((us, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{us?.name}</td>
                                <td>{us?.email}</td>
                                <td>{us?.role}</td>
                                <td>
                                    {moment(us?.createdAt).format("MMMM Do YYYY")}
                                </td>
                                <td>
                                    <button disabled={admins.length >= 1} onClick={() => {
                                        makeAdmin(us?.role, us?.email)
                                    }} className={`btn ${us?.role === "admin" ? "btn-danger" : "btn-success"}`}>
                                        {us?.role === "admin" ? "Remove Admin" : "Make Admin"}
                                    </button>

                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
};

export default Users;