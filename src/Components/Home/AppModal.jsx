/* eslint-disable react/prop-types */
import Modal from 'react-modal';
import modalImg from '../../assets/modal.png';

const AppModal = ({ isOpen, onRequestClose }) => {
  const imgWidth = 600; 
  const imgHeight = 400; 

  const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    content: {
      border: 'none', 
      background: 'transparent', 
      maxWidth: imgWidth, 
      maxHeight: imgHeight, 
      margin: 'auto',
      overflow: 'hidden', 
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      style={modalStyle}
    >
      <button
        className="btn btn-error text-white font-bold   rounded absolute top-2 right-1/2"
        onClick={onRequestClose}
      >
        X
      </button>
      <img src={modalImg} alt="" className="max-w-full max-h-full" />
    </Modal>
  );
};

export default AppModal;
