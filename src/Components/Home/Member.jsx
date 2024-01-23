import member from '../../assets/member.jpg'

const Member = () => {
    return (
        <div className='grid grid-cols-3 gap-6'>
            <img src={member} alt="" />
            <img src={member} alt="" />
            <img src={member} alt="" />
            <img src={member} alt="" />
            <img src={member} alt="" />
            <img src={member} alt="" />
        </div>
    );
};

export default Member;