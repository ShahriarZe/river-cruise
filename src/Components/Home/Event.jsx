import { Link } from "react-router-dom";


const Event = () => {

    return (
        <div className="card hover:bg-blue-100 hover:cursor-pointer  text-neutral border border-blue-300" data-aos="fade-up" data-aos-duration="1500">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">Upcoming Events!</h2>
                <p>Exciting & Tech Related Events Happenig</p>
                <div className="card-actions justify-end">
                   <Link to='/details'><button className="btn bg-blue-300 text-white text-xl">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Event;