import { Link, Outlet } from "react-router-dom";
import { auth } from "../Auth/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import api from "../../util/Api";
import Loader from "../Loader/Loader";


const Dashboard = () => {
    const [user, loading] = useAuthState(auth)
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {
        api.get(`/user/check/${user?.email}`)
            .then(res => setCurrentUser(res.data))
    }, [user])
    if (loading) {
        return <Loader />
    }
    return (
        <section className="pb-70 pt-100 " id="services">
            <div className="container">
                <div className="section-title px-5">
                    <span className="sub-title">Hello, {currentUser?.role}</span>
                </div>
                <div className="row">
                    <div className="col-lg-2 p-2">
                        <ul className="list-group">
                            {
                                currentUser?.role === "admin"
                                && <>
                                    <li className="list-group-item">
                                        <Link to="users">
                                            Users
                                        </Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to="services">
                                            Services
                                        </Link>
                                    </li>
                                </>
                            }

                            <li className="list-group-item">
                                <Link to="appointments">Appointments</Link>
                            </li>
                            <li className="list-group-item">Settings</li>
                            <li className="list-group-item">
                                <div onClick={() => {
                                    auth.signOut();
                                }}
                                    style={{ cursor: "pointer" }}
                                >
                                    Logout
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-10" style={{
                        minHeight: "80vh"
                    }}>
                        <Outlet />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Dashboard;