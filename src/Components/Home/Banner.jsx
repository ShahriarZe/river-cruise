import cruise from '../../assets/cruise.jpg'
import blur from '../../assets/cruiseBlur.png'

const Banner = () => {
    return (
        <div className="diff aspect-[16/9]">
            <div className="diff-item-1">
                <img alt="daisy" src={cruise} />
            </div>
            <div className="diff-item-2">
                <img alt="daisy" src={blur} />
            </div>
            <div className="diff-resizer"></div>
        </div>
    );
};

export default Banner;