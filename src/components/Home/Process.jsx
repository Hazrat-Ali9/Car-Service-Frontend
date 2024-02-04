

const Process = () => {
    return (
        <section className="process-area pt-100 pb-70">
            <div className="process-shape">
                <img src="assets/img/home-one/car-shadow.png" alt="Shape" />
            </div>
            <div className="section-title">
                <span className="sub-title">process</span>
                <h2>Our Working Process</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="process-item">
                            <div className="process-inner process-one">
                                <i className="bx bxs-car-mechanic" />
                                <h3>Identify Problems</h3>
                            </div>
                            <div className="process-inner">
                                <i className="bx bxs-car-garage" />
                                <h3>Start Servicing</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="process-item">
                            <div className="process-img">
                                <img src="assets/img/home-one/tyre.png" alt="Process" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="process-item">
                            <div className="process-inner process-two">
                                <i className="bx bxs-car-crash" />
                                <h3>Trial For Make Sure</h3>

                            </div>
                            <div className="process-inner process-three">
                                <i className="bx bxs-car-wash" />
                                <h3>Deliver Service</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Process;