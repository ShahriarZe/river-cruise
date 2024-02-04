import { Link } from 'react-router-dom';
import cruise from '../../assets/cruise.jpg'

const Details = () => {
    return (
        <div>
            <div className="hero min-h-[90vh]" style={{ backgroundImage: `url(${cruise})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello There</h1>
                        <p className="mb-5 text-xl">Explore Cutting-Edge Innovations, Network with Tech Enthusiasts, and witness groundbreaking projects at our Tech Fair Event. Unleash the Future!</p>
                       <Link to='/'><button className="btn btn-primary text-xl">Go Back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;