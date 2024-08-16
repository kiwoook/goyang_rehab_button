import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import clickSound from "../sounds/click.mp3"

const API_URL = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_AWS_API_KEY;
const API_PASSWORD = process.env.REACT_APP_PASSWORD

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
  &:focus {
    outline: none;
  }
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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

export const ModalButton = styled.button`
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

const Main = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const buttonSoundRef = useRef(new Audio(clickSound));

  const showModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const onIncrease = () => {
    const clickSound = buttonSoundRef.current;
    clickSound.currentTime = 0;
    clickSound.play();
    setNumber(number + 1);
  };

  const resetNumber = () => {
    setNumber(0);
  };

  const sendNumber = async () => {
    const password = prompt("비밀번호를 입력해주세요!");

    if (password === API_PASSWORD) {
      try {
        console.log(API_URL);
        const response = await axios.post(
          API_URL, 
          { number: number },
          {
            headers: {
              'x-api-key': API_KEY
            }
          }
        );
        console.log("Data sent successfully:", response.data);
        alert("전송 완료!");
      } catch (error) {
        console.error("Error sending data:", error);
        alert("에러 발생!");
      }
    } else {
      alert("비밀번호 불일치!");
    }
  };

  const onDirectDashboard = () => {
    const password = prompt("비밀번호를 입력해주세요!");
    console.log(API_PASSWORD)
    if (password === API_PASSWORD) {
      navigate("/dashboard");
    } else {
      alert("비밀번호 불일치!");
    }
  };

  const onFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
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
    <>
  
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={showModal}
        className={"ModalContainer"}
        ariaHideApp={false}
      >
        <div className="Modal">
          <ModalButton onClick={sendNumber}>데이터 전송하기</ModalButton>

          <ModalButton onClick={onDirectDashboard}>대시보드 이동</ModalButton>
          <ModalButton onClick={resetNumber}>초기화</ModalButton>
          <ModalButton onClick={onFullScreen}>전체 화면</ModalButton>
        </div>
      </Modal>
      <Score>TODAY : {number}</Score>
      <StyledButton whileTap={{ scale: 1.5 }} onClick={onIncrease}>
        <Image src={`${process.env.PUBLIC_URL}/button1.png`} />
      </StyledButton>
      <Menu onClick={showModal} className="Menu">
        Menu
      </Menu>
    </>
  );
};

export default Main;
