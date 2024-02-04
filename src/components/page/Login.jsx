import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";

import toast from "react-hot-toast";
import { useState } from "react";
import { auth } from "../Auth/firebase.config";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const hideForm = () => {
        const form = document.getElementById("loginModal");
        form.setAttribute("style", "display: none;");
        form.removeAttribute("aria-modal");
    }

    const navigate = useNavigate()
    const formHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                // Signed in 
                toast.success("User logged in successfully")
                hideForm();
                navigate("/dashboard")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                toast.error(errorCode?.split("/")[1])
            })
    }
    const [emailAn, setEmailAn] = useState(false)
    const forgetPassword = () => {
        if (emailAn) {
            sendPasswordResetEmail(auth, emailAn)
                .then((res) => {
                    toast.success("Password reset email sent Please")
                    console.log(res)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    toast.error(errorCode?.split("/")[1])
                })
        }
        else {
            toast.error("Please enter your email")
        }
    }
    return (
        <div id="loginModal" className="login" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-modal="true" style={{ display: "block" }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fs-4" id="exampleModalCenterTitle">Welcome back</h5>
                    </div>
                    <div className="modal-body py-4">
                        <form onSubmit={formHandler}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email"
                                    name="email"
                                    onClick={(e) => setEmailAn(e.target.value)}
                                    className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    className="form-control mt-1" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <a href="#" onClick={forgetPassword} className="d-block mt-4 text-end">Forgate Password</a>
                            <button type="submit" className="button mt-3">Login Now</button>
                        </form>
                        <hr />
                        <Link to="/signup" className="d-block text-center mt-3">
                            Create New Account
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Login;