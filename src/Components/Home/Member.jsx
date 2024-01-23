import member from '../../assets/member.jpg'
import Event from './Event';

const Member = () => {
    return (
        <div className='w-1/2'> 
            <div>
                <Event></Event>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20'>
                <img src={member} alt="" />
                <img src={member} alt="" />
                <img src={member} alt="" />
                <img src={member} alt="" />
                <img src={member} alt="" />
                <img src={member} alt="" />
            </div>
        </div>
    );
};

export default Member;