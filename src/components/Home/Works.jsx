

const Works = () => {
    return (
        <section className="work-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">works</span>
                    <h2>Latest Works For Clients</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="sorting-menu">
                    <ul>
                        <li className="filter active" data-filter="all">all</li>
                        <li className="filter" data-filter=".tyre">wheels</li>
                        <li className="filter" data-filter=".web">steering</li>
                        <li className="filter" data-filter=".ui">brakes</li>
                        <li className="filter" data-filter=".ux">suspention</li>
                        <li className="filter" data-filter=".branding">tyre</li>
                    </ul>
                </div>
                <div id="Container" className="row">
                    <div className="col-sm-6 col-lg-3 mix web ui">
                        <div className="work-item">
                            <img src="assets/img/home-one/work/1.jpg" alt="Work" />
                            <div className="cmn-btn">
                                <a className="banner-btn-left" href="#">
                                    Read More
                                    <i className="bx bx-right-arrow-alt" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 mix tyre ux">
                        <div className="work-item">
                            <img src="assets/img/home-one/work/2.jpg" alt="Work" />
                            <div className="cmn-btn">
                                <a className="banner-btn-left" href="#">
                                    Read More
                                    <i className="bx bx-right-arrow-alt" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-6 mix ui branding">
                        <div className="work-item">
                            <img src="assets/img/home-one/work/3.jpg" alt="Work" />
                            <div className="cmn-btn">
                                <a className="banner-btn-left" href="#">
                                    Read More
                                    <i className="bx bx-right-arrow-alt" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 mix ux tyre">
                        <div className="work-item">
                            <img src="assets/img/home-one/work/4.jpg" alt="Work" />
                            <div className="cmn-btn">
                                <a className="banner-btn-left" href="#">
                                    Read More
                                    <i className="bx bx-right-arrow-alt" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-6 mix branding ui">
                        <div className="work-item">
                            <img src="assets/img/home-one/work/5.jpg" alt="Work" />
                            <div className="cmn-btn">
                                <a className="banner-btn-left" href="#">
                                    Read More
                                    <i className="bx bx-right-arrow-alt" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 mix tyre web">
                        <div className="work-item">
                            <img src="assets/img/home-one/work/6.jpg" alt="Work" />
                            <div className="cmn-btn">
                                <a className="banner-btn-left" href="#">
                                    Read More
                                    <i className="bx bx-right-arrow-alt" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Works;