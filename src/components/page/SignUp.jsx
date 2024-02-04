
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { toast } from "react-hot-toast";
import api from "../../util/Api";
import { Link } from "react-router-dom";
import { auth } from "../Auth/firebase.config";

const SignUp = () => {

    const formHandler = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user
                api.post('/user/register', { name, email, password, role: "user" })
                updateProfile(user, {
                    displayName: name
                })
                    .then(() => {
                        // Profile updated
                        toast.success("User created successfully")
                    })
                    .catch(() => {
                        // An error occurred
                        toast.error("Something went wrong")
                    })
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode)
                toast.error(errorCode?.split("/")[1])
            });
    }
    return (
        <div id="signUpModal" className="login" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" 
        style={{ display: "block" }}
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fs-4" id="exampleModalCenterTitle">Create a new account</h5>
                    </div>
                    <div className="modal-body py-4">
                        <form onSubmit={formHandler}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Full Name</label>
                                <input type="text"
                                    name="name"
                                    className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Full Name" />
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email"
                                    name="email"
                                    className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input
                                    name="password"
                                    type="password" className="form-control mt-1" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <button type="submit" className="button mt-2">
                                Register
                            </button>
                        </form>
                        <hr />
                        <Link
                            to="/login"
                            className="d-block text-center">
                            Alrady have an account? Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignUp;