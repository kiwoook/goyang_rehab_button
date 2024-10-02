import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { ModalButton } from "./Main";
import axios from "axios";

const API_URL = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_AWS_API_KEY;

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center; /* 수직 가운데 정렬 */
  flex-direction: column;
  width: 100vw;
`;

const Emotion_Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center; /* 수직 가운데 정렬 */
  width: 100%;
`;

const Survey = () => {
  const [age, setAge] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async(event) => {
    event.preventDefault(); // 페이지 리로드 방지

    const formData = {
      age,
      rating,
    };

    try{
      const response = await axios.post(
        API_URL+"/survey",
        {
          age: age,
          rating:rating
        },
        {
          headers: {
            'x-api-key': API_KEY,
          },
        }
      );
      console.log(response.data)
      alert("전송 완료!");

    }catch(err){
      console.error("Error : " ,err)
    }
    console.log("Form Data:", formData);

    // 초기화
    setAge('');
    setRating('');
  };

  return (
    <div className="survey-background">
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <form className="rating-form" onSubmit={handleSubmit}>
          <Container>
            <div
              className="age"
              style={{
                marginBottom : "5vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center", // 수직 가운데 정렬
              }}
            >
              <div className="age-button">
                <input
                  type="radio"
                  id={"radio-1"}
                  name="age"
                  value={"10"}
                  checked={age === "10"}
                  onChange={(e) => setAge(e.target.value)}
                />
                <label htmlFor="radio-1">10대</label>
              </div>
              <div className="age-button">
                <input
                  type="radio"
                  id={"radio-2"}
                  name="age"
                  value={"20"}
                  checked={age === "20"}
                  onChange={(e) => setAge(e.target.value)}
                />
                <label htmlFor="radio-2">20대</label>
              </div>
              <div className="age-button">
                <input
                  type="radio"
                  id={"radio-3"}
                  name="age"
                  value={"30"}
                  checked={age === "30"}
                  onChange={(e) => setAge(e.target.value)}
                />
                <label htmlFor="radio-3">30대</label>
              </div>
              <div className="age-button">
                <input
                  type="radio"
                  id={"radio-4"}
                  name="age"
                  value={"40"}
                  checked={age === "40"}
                  onChange={(e) => setAge(e.target.value)}
                />
                <label htmlFor="radio-4">40대</label>
              </div>
              <div className="age-button">
                <input
                  type="radio"
                  id={"radio-5"}
                  name="age"
                  value={"50"}
                  checked={age === "50"}
                  onChange={(e) => setAge(e.target.value)}
                />
                <label htmlFor="radio-5">50대 이상</label>
              </div>
            </div>
            <div className="rating" style={{ marginBottom: "3vh" }}>
              <Emotion_Container>
                <label htmlFor="super-happy" className="rating-label">
                  <input
                    type="radio"
                    name="rating"
                    className={"super-happy"}
                    id="super-happy"
                    value="5"
                    checked={rating === "5"}
                    onChange={(e) => setRating(e.target.value)}
                  />
                  <svg viewBox="0 0 24 24">
                    <path d="M12,17.5C14.33,17.5 16.3,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5M8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11M15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                  <span className="rating-text">매우 만족</span>
                </label>
                <label htmlFor="happy" className="rating-label">
                  <input
                    type="radio"
                    name="rating"
                    className="happy"
                    id="happy"
                    value="4"
                    checked={rating === "4"}
                    onChange={(e) => setRating(e.target.value)}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" />
                  </svg>
                  <span className="rating-text">만족</span>
                </label>
                <label htmlFor="neutral" className="rating-label">
                  <input
                    type="radio"
                    name="rating"
                    className="neutral"
                    id="neutral"
                    value="3"
                    checked={rating === "3"}
                    onChange={(e) => setRating(e.target.value)}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.5,11A1.5,1.5 0 0,1 7,9.5A1.5,1.5 0 0,1 8.5,8A1.5,1.5 0 0,1 10,9.5A1.5,1.5 0 0,1 8.5,11M15.5,11A1.5,1.5 0 0,1 14,9.5A1.5,1.5 0 0,1 15.5,8A1.5,1.5 0 0,1 17,9.5A1.5,1.5 0 0,1 15.5,11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M9,14H15A1,1 0 0,1 16,15A1,1 0 0,1 15,16H9A1,1 0 0,1 8,15A1,1 0 0,1 9,14Z" />
                  </svg>
                  <span className="rating-text">보통</span>
                </label>
                <label htmlFor="sad" className="rating-label">
                  <input
                    type="radio"
                    name="rating"
                    className="sad"
                    id="sad"
                    value="2"
                    checked={rating === "2"}
                    onChange={(e) => setRating(e.target.value)}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M12,14C13.75,14 15.29,14.72 16.19,15.81L14.77,17.23C14.32,16.5 13.25,16 12,16C10.75,16 9.68,16.5 9.23,17.23L7.81,15.81C8.71,14.72 10.25,14 12,14Z" />
                  </svg>
                  <span className="rating-text">불만족</span>
                </label>
                <label htmlFor="super-sad" className="rating-label">
                  <input
                    type="radio"
                    name="rating"
                    className="super-sad"
                    id="super-sad"
                    value="1"
                    checked={rating === "1"}
                    onChange={(e) => setRating(e.target.value)}
                  />
                  <svg viewBox="0 0 24 24">
                    <path d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M16.18,7.76L15.12,8.82L14.06,7.76L13,8.82L14.06,9.88L13,10.94L14.06,12L15.12,10.94L16.18,12L17.24,10.94L16.18,9.88L17.24,8.82L16.18,7.76M7.82,12L8.88,10.94L9.94,12L11,10.94L9.94,9.88L11,8.82L9.94,7.76L8.88,8.82L7.82,7.76L6.76,8.82L7.82,9.88L6.76,10.94L7.82,12M12,14C9.67,14 7.69,15.46 6.89,17.5H17.11C16.31,15.46 14.33,14 12,14Z" />
                  </svg>
                  <span className="rating-text">매우 불만족</span>
                </label>
              </Emotion_Container>
            </div>
            <div>
              <ModalButton
                type="submit"
                style={{ height: "10vh", width: "10vw" }}
              >
                <span style={{fontSize:"2.5rem"}}>전송</span>
              </ModalButton>
            </div>
          </Container>
        </form>
      </div>
    </div>
  );
};

export default Survey;
