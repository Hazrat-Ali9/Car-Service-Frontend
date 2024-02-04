

const Banner = () => {
    return (
        <div className="banner-area">
            <div className="banner-img">
                <img src="https://www.eclipseonestop.co.uk/wp-content/uploads/2023/05/3.jpg" alt="Banner" />
                <img className="wow fadeInRightBig" src="assets/img/home-one/banner-car.png" alt="Banner" />
            </div>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="banner-text">
                            <h1>Wheel be Alright – car fix n Hertford</h1>
                            <p>
                                Welcome to Wheel Be Alright auto repair service. Since opening our doors in 2015, we’ve helped vehicle owners across Hertfordshire and surrounding areas. We provide our valued customers with friendly service and great value at great prices. Come and visit us here or enquire by phone or email.
                            </p>
                            <div className="cmn-btn">
                                <a className="banner-btn-left" href="#services">
                                    <i className="bx bx-meteor" />
                                    Explore Service
                                </a>
                                <a className="banner-btn-right" href="tel:+07754125498">
                                    <i className="bx bx-phone-call" />
                                    07754125498
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;