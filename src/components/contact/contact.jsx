

const Contact = () => {
    return (
        <div>
            <div className="page-title-area">
                <img src="assets/img/home-one/footer-car.png" alt="Title" />
                <div className="container">
                    <div className="page-title-content">
                        <h2>Contact</h2>
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <i className="bx bx-chevron-right" />
                            </li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="contact-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-item contact-left">
                                <h3>Our Located Place</h3>
                                <p>
                                When you step into our garage, we don’t want to just take care of your vehicle. We also want to take care of you. Our stellar customer service is one of the reasons why we’ve been a tried-and-true solution for vehicle owners all over Hertfordshire area, and make sure you are offered the same attention and care. Once you drop off, we make sure to keep you in the know via service updates that come through email, text or phone call. We will call an Uber to help you to get to your destination and we offer bus tickets as well. Oh, and we have also cute shop dog named King Tom, he loves visitors(and treats!) and will likely come over and say hi.
                                </p>
                                <ul>
                                    <li>
                                        <i className="bx bx-location-plus" />
                                        Address: 8 Wesley ave, Hertford Hertofrshire, SG13 8FL
                                    </li>
                                    <li>
                                        <i className="bx bx-phone-call" />
                                        <a href="tel:+07754125498">
                                        +07754125498
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-item contact-right">
                                <h3>Get In Touch</h3>
                                <form id="contactForm">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Name" />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="Email" />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" placeholder="Phone" />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-6">
                                            <div className="form-group">
                                                <input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" placeholder="Subject" />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-12">
                                            <div className="form-group">
                                                <textarea name="message" className="form-control" id="message" cols={30} rows={8} required data-error="Write your message" placeholder="Message" defaultValue={""} />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <div className="form-check agree-label">
                                                    <input name="gridCheck" defaultValue="I agree to the terms and privacy policy." className="form-check-input" type="checkbox" id="gridCheck" required />
                                                    <label className="form-check-label" htmlFor="gridCheck">
                                                        Accept <a href="terms-condition.html">Terms &amp; Conditions</a> And <a href="privacy-policy.html">Privacy Policy.</a>
                                                    </label>
                                                    <div className="help-block with-errors gridCheck-error" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-12">
                                            <button type="submit" className="contact-btn btn">
                                                Send Message
                                            </button>
                                            <div id="msgSubmit" className="h3 text-center hidden" />
                                            <div className="clearfix" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;