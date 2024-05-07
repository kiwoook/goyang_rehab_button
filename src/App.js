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
  color: #5185d7;
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
  &:focus{
    outline: none;
  }
  -webkit-tap-highlight-color: rgba(0,0,0,0);
`;

const Menu = styled.button`
  width: 12%;
  height: 8%;
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
  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-family: Neucha, sans-serif;
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: 0.75rem;
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

const ModalButton = styled.button`
  width: 50%;
  height: 15%;
  margin: 1rem;
  align-items: center;
  background-color: #fff;
  border: 2px solid #000;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: inline-flex;
  fill: #000;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: -0.8px;
  line-height: 24px;
  min-width: 140px;
  outline: 0;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
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

  const onFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
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
            <ModalButton >구글 스프레드 시트로 보내기</ModalButton>
            <ModalButton onClick={resetNumber}>초기화</ModalButton>
            <ModalButton onClick={onFullScreen}>전체 화면</ModalButton>
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
