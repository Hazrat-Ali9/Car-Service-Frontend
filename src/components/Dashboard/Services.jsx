import { useEffect, useState } from "react";
import api from "../../util/Api";
import toast from "react-hot-toast";


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        api.get('/services')
            .then(res => {
                setServices(res.data)
            })
    }, [])
    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState({})
    const update = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const desc = e.target.desc.value;
        const image = e.target.image.value;
        const newService = {
            name,
            desc,
            image
        }
        api.put(`/services/${selected._id}`, newService)
            .then(res => {
                if (res.status === 200) {
                    toast.success("Service updated successfully")
                    setShow(false)
                    setSelected({})
                    api.get('/services')
                        .then(res => setServices(res.data))
                }
            })
    }
    // const deleteService = (service) => {
    //     const confirm = window.confirm(`Are you sure you want to delete ${service.name}`)
    //     if (confirm) {
    //         api.delete(`/services/${service._id}`)
    //             .then(res => {
    //                 setServices(services.filter(s => s._id !== service._id))
    //             })
    //     }
    // }
    return (
        <div>
            <div className="services">
                {
                    services.map(service => {
                        return <div key={service._id}
                            className="card">
                            <img width={"100%"} src={`/assets/image/services/${service.image ? service.image : "break-replacement.jpeg"}`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{service.name}</h5>
                                <p className="card-text">
                                    {service.desc}
                                </p>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button
                                    onClick={() => {
                                        setSelected(service)
                                        setShow(true)
                                    }}
                                    className="btn btn-primary">Update</button>
                            </div>
                        </div>
                    })
                }
            </div>
            {
                show &&
                <div id="serviceModal" className="modal fade show " tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" style={{ display: "block" }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">{selected.name}</h5>
                                <button type="button " className="close btn btn-danger"
                                    onClick={() => {
                                        setShow(false)
                                        setSelected({})
                                    }}
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <form onSubmit={update} className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Servce Name</label>
                                    <input
                                        defaultValue={selected.name}
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Service name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Image  Link</label>
                                    <input
                                        defaultValue={selected.image}
                                        type="text"
                                        className="form-control" id="image"
                                        name="image"
                                        placeholder="Service Image"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                                    <textarea
                                        name="desc"
                                        className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={selected.desc} />
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Services;