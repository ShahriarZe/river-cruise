import one from '../../assets/sliderOne.jpg'
import two from '../../assets/sliderTwo.jpg'
import three from '../../assets/sliderThree.jpg'


import Marquee from "react-fast-marquee";

const Slider = () => {
    return (
        <div className='mt-20' data-aos="zoom-in" data-aos-duration="1500">
            <Marquee speed={100} pauseOnClick >
                <div className="mr-20" >
                    <img className="w-[200px]  rounded shadow" src={one} alt="Marquue-One" />
                    
                </div>
                <div className="mr-20">
                    <img className="w-[200px] h-[132px] rounded shadow" src={two} alt="Marquue-Two" />
                    
                </div>
                <div className="mr-20">
                    <img className="w-[200px]  rounded shadow" src={three} alt="Marquue-Three" />
                    
                </div>
                
                <div className="mr-20">
                    <img className="w-[200px]  rounded shadow" src={one} alt="Marquue-Four" />
                    
                </div>
                <div className="mr-20">
                    <img className="w-[200px]  rounded shadow" src={three} alt="Marquue-Five" />
                    
                </div>
            </Marquee>
        </div>
    );
};

export default Slider;