

const Features = () => {
    return (
        <div className="feature-area">
            <div className="feature-shape">
                <img src="assets/img/home-one/feature-shape.png" alt="Feature" />
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 p-0">
                        <div className="feature-img">
                            <img className="mx-auto" height={500} src="assets/image/dog.jpeg" alt="Feature" />
                        </div>
                    </div>
                    <div className="col-lg-6 p-0">
                        <div className="feature-content">
                            <h2>Family & dog friendlys</h2>
                            <p className="p-3 text-white">
                                When you step into our garage, we don’t want to just take care of your vehicle. We also want to take care of you. Our stellar customer service is one of the reasons why we’ve been a tried-and-true solution for vehicle owners all over Hertfordshire area, and make sure you are offered the same attention and care. Once you drop off, we make sure to keep you in the know via service updates that come through email, text or phone call. We will call an Uber to help you to get to your destination and we offer bus tickets as well. Oh, and we have also cute shop dog named King Tom, he loves visitors(and treats!) and will likely come over and say hi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Features;