import { useEffect, useState } from "react";
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import api from "../../util/Api";
import Services from "../Home/Services";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Auth/firebase.config";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";
const Appointment = () => {
    const location = useLocation()
    const [id, setId] = useState("")
    const [date, setDate] = useState(dayjs(new Date()))
    const [service, setService] = useState("")
    const [services, setServices] = useState([])
    const [user, loading] = useAuthState(auth)
    const [patching, setPatching] = useState(false)
    useEffect(() => {
        (
            async () => {
                try {
                    setPatching(true)
                    await api.get('/services')
                        .then(res => setServices(res.data))
                    setPatching(false)
                    if (id) {
                        api.get(`/services/${id}`)
                            .then(res => setService(res.data.name))
                    }
                } catch (error) {
                    setPatching(false)
                }
            }
        )()

    }, [id])
    useEffect(() => {
        setId(location.search.split('=')[1] || "")
    }, [location])
    const showModal = () => {
        const form = document.getElementById("appointmentModal");
        form.setAttribute("style", "display: block;");
        form.removeAttribute("aria-modal");
    }
    const showForm = () => {
        const form = document.getElementById("loginModal");
        form.setAttribute("style", "display: block;");
        form.removeAttribute("aria-modal");
    }
    const hideModal = () => {
        const form = document.getElementById("appointmentModal");
        form.setAttribute("style", "display: none;");
        form.removeAttribute("aria-modal");
    }
    const submitAppointment = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = user.email;
        const phone = e.target.phone.value;
        const service = e.target.service.value;
        const newAppintment = {
            name,
            email,
            phone,
            date,
            service,
            service_id: id
        }
        try {
            const res = await api.post('/appointment', newAppintment)
            if (res.data) {
                toast.success("Appointment created successfully")
                hideModal();
                setDate(dayjs(new Date()))
                setService('')
            }

        } catch (error) {
            toast.error(error.response.data.err)
        }
    }

    if (loading || patching) {
        return <Loader />
    }
    return (
        <>
            <div className="pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">appointment</span>
                        <h2>Book an Appointment</h2>
                    </div>
                    
                    <div className="d-lg-flex mt-5 justify-content-center">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Choose Date"
                                value={date}
                                onChange={(newValue) => setDate(newValue)}
                            />
                        </LocalizationProvider>
                        <FormControl className="mt-lg-0 mt-sm-2 ms-sm-0 ms-lg-3" sx={{ minWidth: 250 }}>
                            <InputLabel id="services">Select Service</InputLabel>
                            <Select
                                labelId="services"
                                id="services"
                                value={service}
                                label="Select Service"
                                onChange={(e) => {
                                    setService(e.target.value)
                                }}
                            >
                                {
                                    services.map(service => <MenuItem
                                        onClick={() => setId(service._id)}
                                        key={service._id} value={service.name}>{service.name}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                    </div>
                    <div className="mt-4 d-flex justify-content-center">
                        <button
                            onClick={() => {
                                if (!user) {
                                    showForm()
                                } else {
                                    showModal()
                                }
                            }}
                            className="button">Book Now</button>
                    </div>
                    <hr className="mt-5" />
                </div>
                <div id="appointmentModal" className="modal fade show " tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle">
                    <div className="modal-dialog modal-dialog-centered" role="document">

                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Book Appointment</h5>
                                <button type="button " className="close btn btn-danger"
                                    onClick={() => {
                                        hideModal()
                                    }}
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <form onSubmit={submitAppointment}>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="name">Service</label>
                                        <select className="form-select"
                                            name="service"
                                            aria-label="Default select example"
                                            value={service}
                                            onChange={(e) => {
                                                setService(e.target.value)
                                            }}
                                        >
                                            {
                                                services.map(service => <option key={service._id} value={service.name}>{service.name}</option>)
                                            }
                                        </select>

                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            defaultValue={user?.displayName}
                                            className="form-control" id="name" placeholder="Enter Name" />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="email">Email address</label>
                                        <input
                                            name="email"
                                            type="email"
                                            readOnly
                                            defaultValue={user?.email}
                                            className="form-control mt-1" id="email" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group mt-2">
                                        <label htmlFor="phone">Phone Nuber</label>
                                        <input
                                            required
                                            type="text"
                                            name="phone"
                                            className="form-control mt-1" id="phone" placeholder="Enter Phone" />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="submit"
                                        className="button px-5">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <Services />
        </>
    );
};

export default Appointment;