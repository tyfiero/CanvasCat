import React, { useEffect, useState } from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Scale,
  Scales,
  Animations,
} from "chart.js";

// import faker from 'faker';
// const { faker } = require("@faker-js/faker");

const MRRChart = (props) => {
  const [color, setColor] = useState("hsla(206,91%,64%,1)");
  const [color2, setColor2] = useState("hsla(178,100%,50%,1)");

  useEffect(() => {
    let blobc1 = localStorage.getItem("blob1") || "hsla(206,91%,64%,1)";
    let blobc5 = localStorage.getItem("blob5") || "hsla(178,100%,50%,1)";
    setColor(blobc1);
    setColor2(blobc5);
  }, []);
  let passedData = props.chartDataPoints;

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const labels = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  const chartData = {
    labels,
    datasets: [
      {
        label: "MRR Growth",
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 20 })),
        data: passedData[0],
        borderColor: color,
        backgroundColor: color,
        borderWidth: 6,
        hoverBorderWidth: 15,
        // pointStyle: "circle",
        hitRadius: 9,
        tension: 0.3,
        borderJoinStyle: "round",
        pointRadius: 0,
      },
      {
        label: "Profit Growth",
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 20 })),
        data: passedData[1],
        borderColor: color2,
        backgroundColor: color2,
        borderWidth: 6,
        hoverBorderWidth: 15,
        // pointStyle: "circle",
        hitRadius: 9,
        tension: 0.3,
        borderJoinStyle: "round",
        pointRadius: 0,
      },
    ],
  };

  return (
    <div className=" md:w-[35em] sm:w-[95%] pr-5  bg-clear-snow rounded-2xl items-center flex-col flex">
      <div className="flex items-center w-full">
        <p className="mt-10 ml-2">$</p>
        <Line
          data={chartData}
          className="mr-2"
          options={{
            responsive: true,

            plugins: {
              title: {
                display: true,
                text: "MRR Growth",
                font: {
                  size: 24,
                  family: "Freude",
                  color: "#2549A8",
                },
              },
              legend: {
                display: true,
                position: "top",
              },
              scales: {},
            },
          }}
        />
      </div>
      <p>Months</p>
    </div>
  );
};

export default MRRChart;
