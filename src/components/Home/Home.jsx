import About from "./About";
import Address from "./Address";
import Banner from "./Banner";
import Features from "./Features";
import Process from "./Process";
import Services from "./Services";


const Home = () => {
    return (
        <div>
            <Banner />
            <Address />
            <Process />
            <Services />
            <About />
            <Features />
        </div>
    );
};

export default Home;