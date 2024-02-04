import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.config";
import { useEffect, useState } from "react";
import api from "../../util/Api";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";


const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [currentUser, setCurrentUser] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        api.get(`/user/${user?.email}`)
            .then(res => setCurrentUser(res.data))
    }, [user])
    if (loading) {
        return <Loader />
    }
    if (currentUser.role === 'admin') {
        return children
    }
    else if (currentUser?.role === 'user') {
        navigate('/dashboard')
    }
};



export default RequireAdmin;