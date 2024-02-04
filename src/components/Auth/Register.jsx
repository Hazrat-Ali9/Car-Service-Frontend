
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase.config";
import { toast } from "react-hot-toast";
import api from "../../util/Api";

const Register = () => {
    const hideForm = () => {
        const form = document.getElementById("signUpModal");
        form.setAttribute("style", "display: none;");
        form.removeAttribute("aria-modal");
    }
    const showLogin = () => {
        const form = document.getElementById("signUpModal");
        form.setAttribute("style", "display: none;");
        form.removeAttribute("aria-modal");
        // Hide this form
        const login = document.getElementById("loginModal");
        login.setAttribute("style", "display: block;");
        login.removeAttribute("aria-modal");
    }
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
                        hideForm();
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
        <div id="signUpModal" className="modal fade show " tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fs-4" id="exampleModalCenterTitle">Create a new account</h5>
                        <button
                            onClick={hideForm}
                            type="button" className="close btn btn-danger">
                            <span aria-hidden="true">×</span>
                        </button>
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
                        <a
                            href="#"
                            onClick={showLogin}
                            className="d-block text-center">
                            Alrady have an account? Login
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;