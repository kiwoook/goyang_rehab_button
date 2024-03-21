import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Modal from "react-modal";

const Score = styled.div`
  position: absolute;
  right: 3vw;
  top: 6.5vh;
  font-size: 70px;
  font-family: "Suez one", serif;
  font-weight: 400;
  color: white;
`;

const StyledButton = styled(motion.div)`
  width: auto;
  display: inline-flex;
  justify-content: center;
  margin-top: 50vh;
  overflow: hidden;
`;

const Image = styled.img`
  height: 25vh;
  cursor: pointer;
  object-fit: fill;
`;

const Menu = styled.button`
  position: absolute;
  bottom: 5%;
  left: 5%;
  align-self: center;
  background-color: #fff;
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-family: Neucha, sans-serif;
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: .75rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-family: "Suez one", serif;


`;

function App() {

  
  const [number, setNumber] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const showModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const onIncrease = () => {
    setNumber(number + 1);
  };

  const resetNumber = () => {
    setNumber(0);
  };

  useEffect(() => {
    const storedNumber = localStorage.getItem("number");
    if (storedNumber !== null) {
      setNumber(parseInt(storedNumber));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("number", number);
  }, [number]);


  return (
    <div className="Background">
      <div className="App">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={showModal}
          className={"ModalContainer"}
          ariaHideApp={false}
        >
          <div className="Modal">
            <button onClick={resetNumber}>초기화</button>
          </div>
        </Modal>
        <Score>TODAY : {number}</Score>
        <StyledButton whileTap={{ scale: 1.5 }} onClick={onIncrease}>
          <Image src="button1.png" />
        </StyledButton>
        <Menu onClick={showModal} className="Menu">
          Menu
        </Menu>
      </div>
    </div>
  );
}

export default App;
