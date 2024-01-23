import one from '../../assets/sliderOne.jpg'
import two from '../../assets/sliderTwo.jpg'
import three from '../../assets/sliderThree.jpg'
import four from '../../assets/sliderFour.jpg'


import Marquee from "react-fast-marquee";

const Slider = () => {
    return (
        <div className='mt-10'>
            <Marquee speed={100} pauseOnClick>
                <div className="mr-20">
                    <img className="w-[200px]  rounded shadow" src={one} alt="" />
                    
                </div>
                <div className="mr-20">
                    <img className="w-[200px] h-[132px] rounded shadow" src={two} alt="" />
                    
                </div>
                <div className="mr-20">
                    <img className="w-[200px]  rounded shadow" src={three} alt="" />
                    
                </div>
                <div className="mr-20">
                    <img className="w-[200px]  rounded shadow" src={four} alt="" />
                    
                </div>
            </Marquee>
        </div>
    );
};

export default Slider;