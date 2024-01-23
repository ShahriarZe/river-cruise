const Event = () => {
    return (
        <div className="card  text-neutral border border-blue-300">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">Upcoming Events!</h2>
                <p>Exciting & Tech Related Events Happenig</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-blue-300 text-white text-xl">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Event;