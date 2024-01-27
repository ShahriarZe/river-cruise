import one from '../../assets/sliderOne.jpg'
import two from '../../assets/sliderTwo.jpg'
import three from '../../assets/sliderThree.jpg'


import Marquee from "react-fast-marquee";

const Slider = () => {
    return (
        <div className='mt-20' data-aos="zoom-in" data-aos-duration="1500">
            <Marquee speed={100} pauseOnClick >
                <div className="mr-20" >
                    <img className="w-[200px]  rounded shadow" src={one} alt="one" />
                    
                </div>
                <div className="mr-20">
                    <img className="w-[200px] h-[132px] rounded shadow" src={two} alt="two" />
                    
                </div>
                <div className="mr-20">
                    <img className="w-[200px]  rounded shadow" src={three} alt="three" />
                    
                </div>
                
                <div className="mr-20">
                    <img className="w-[200px]  rounded shadow" src={one} alt="four" />
                    
                </div>
                <div className="mr-20">
                    <img className="w-[200px]  rounded shadow" src={three} alt="fivvve" />
                    
                </div>
            </Marquee>
        </div>
    );
};

export default Slider;