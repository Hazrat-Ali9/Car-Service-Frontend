import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.config";
import { useNavigate } from "react-router-dom";


const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate()
    if (user) {
        return children
    }
    else if (loading) {
        return "Loading..."
    }
    else if (!user) {
        navigate('/login')
    }
};

export default RequireAuth;