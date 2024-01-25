import { useState } from "react";
import Banner from "./Banner";
import Member from "./Member";
import Slider from "./Slider";
import AppModal from "./AppModal";


const Home = () => {

    const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };
    return (
        <div>
            <div className="flex flex-col md:flex-col lg:flex-row gap-6 container mx-auto mt-10">
                <Banner></Banner>
                <Member></Member>
            </div>

            <Slider></Slider>

            <AppModal isOpen={modalIsOpen} onRequestClose={closeModal} />
        </div>
    );
};

export default Home;