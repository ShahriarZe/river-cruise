import Banner from "./Banner";
import Member from "./Member";
import Slider from "./Slider";


const Home = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-col lg:flex-row gap-6 container mx-auto mt-10">
                <Banner></Banner>
                <Member></Member>
            </div>

            <Slider></Slider>
        </div>
    );
};

export default Home;