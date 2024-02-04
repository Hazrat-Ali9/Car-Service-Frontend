

const Address = () => {
    return (
        <div className="address-area">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <div className="address-item">
                            <i className="bx bxs-paper-plane" />
                            <h3>Location</h3>
                            <span>8 Wesley ave, Hertford Hertofrshire, SG13 8FL</span>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="address-item">
                            <i className="bx bxs-phone-call" />
                            <h3>Call Us</h3>
                            <a href="tel:+07754125498">+07754125498</a>
                        </div>
                    </div>
                    <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                        <div className="address-item address-one">
                            <i className="bx bxs-time-five" />
                            <h3>Schedule</h3>
                            <span>Monday to Sunday</span>
                            <span>8:00 AM to 8.00 PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Address;