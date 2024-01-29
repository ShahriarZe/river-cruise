import member from '../../assets/member.jpg'
import Event from './Event';

const Member = () => {
    return (
        <div className='lg:w-1/2'> 

            {/* Upcoming Events */}
            <div>
                <Event></Event>
            </div>

            {/* All Members */}
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                <img className='rounded-xl' src={member} alt="member1" data-aos="zoom-in" data-aos-duration="1500"/>
                <img className='rounded-xl' src={member} alt="member2" data-aos="zoom-in" data-aos-duration="1500"/>
                <img className='rounded-xl' src={member} alt="member3" data-aos="zoom-in" data-aos-duration="1500"/>
                <img className='rounded-xl' src={member} alt="Member4" data-aos="zoom-out" data-aos-duration="1500"/>
                <img className='rounded-xl' src={member} alt="Member5" data-aos="zoom-out" data-aos-duration="1500"/>
                <img className='rounded-xl' src={member} alt="Member6" data-aos="zoom-out" data-aos-duration="1500"/>
            </div>
        </div>
    );
};

export default Member;