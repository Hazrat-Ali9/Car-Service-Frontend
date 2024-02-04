import api from "../../util/Api"
import { auth } from "../Auth/firebase.config"

const getUser = async (user) => {
    if (typeof window !== 'undefined') {
        if (user) {
            const res = await api.get(`/user/${auth?.currentUser?.email}`)
            return res.data
        }
        else {
            return null
        }
    }
}
export default getUser