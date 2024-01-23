import Banner from "./Banner";
import Member from "./Member";


const Home = () => {
    return (
        <div className="flex gap-6 container mx-auto mt-20">
            <Banner></Banner>
            <Member></Member>
        </div>
    );
};

export default Home;