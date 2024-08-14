import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { ModalButton } from "./Main";
import { useNavigate } from "react-router-dom";
import { Line } from "react-chartjs-2";
import Select from "react-select";
import {
  registerables,
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  ...registerables
);

const DivDashboard = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: white;
`;

const DivGraph = styled.div`
  width: 70vw;
  height: 80vh;
`;

const DivOption = styled.div`
  display: flex;
  flex-direction: row;

`

const API_URL = process.env.REACT_APP_URL;

const Dashboard = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear().toString();
  const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, "0");

  const [data, setData] = useState(null);
  const [month, setMonth] = useState(currentMonth); // 기본값은 이번 달로 설정
  const [year, setYear] = useState(currentYear); // 기본값은 이번 년도로 설정

  // 월이 선택되면 해당 월의 데이터만 필터링
  const filteredData = data?.filter((item) => {
    const itemDate = new Date(item.date);
    return (
      itemDate.getFullYear() === parseInt(year) &&
      (itemDate.getMonth() + 1).toString().padStart(2, "0") === month
    );
  }).sort((a, b) => new Date(a.date) - new Date(b.date)); // 날짜 오름차순으로 정렬

  // 그래프 데이터 설정
  const chartData = {
    labels: filteredData?.map((item) => item.date.split("-")[2]), // 일자
    datasets: [
      {
        label: `${year}-${month}`,
        data: filteredData?.map((item) => item.number),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  // 그래프 옵션 설정
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // 데이터 가져오기
  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}?year=${year}&month=${month}`);
      setData(response.data);
      console.log("Data fetched successfully:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // 컴포넌트가 처음 렌더링될 때 데이터를 가져옴
  useEffect(() => {
    fetchData();
  }, [year, month]); // year와 month가 변경될 때마다 데이터를 다시 가져옴

  // 월 선택 옵션
  const monthOptions = [
    { value: "01", label: "1월" },
    { value: "02", label: "2월" },
    { value: "03", label: "3월" },
    { value: "04", label: "4월" },
    { value: "05", label: "5월" },
    { value: "06", label: "6월" },
    { value: "07", label: "7월" },
    { value: "08", label: "8월" },
    { value: "09", label: "9월" },
    { value: "10", label: "10월" },
    { value: "11", label: "11월" },
    { value: "12", label: "12월" },
  ];

  // 년도 선택 옵션
  const yearOptions = [
    { value: "2024", label: "2024년" },
    { value: "2025", label: "2025년" },
  ];

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DivDashboard className="Modal">
        <DivOption>
          {/* 년도 선택 셀렉트 박스 */}
          <Select
            options={yearOptions}
            value={yearOptions.find((option) => option.value === year)}
            onChange={(selectedOption) => setYear(selectedOption.value)}
          />
          {/* 월 선택 셀렉트 박스 */}
          <Select
            options={monthOptions}
            value={monthOptions.find((option) => option.value === month)}
            onChange={(selectedOption) => setMonth(selectedOption.value)}
          />
        </DivOption>
        {/* 그래프 표시 */}
        <DivGraph>
          <Line data={chartData} options={chartOptions} />
        </DivGraph>
        {/* 뒤로 가기 버튼 */}
        <ModalButton onClick={() => navigate("/")}>뒤로 가기</ModalButton>
      </DivDashboard>
    </div>
  );
};

export default Dashboard;