import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./compare.css";
import { CChart } from "@coreui/react-chartjs";

const Compare = () => {
  const navigate = useNavigate();
  const [u1, setU1] = useState([]);
  const [u2, setU2] = useState([]);
  const [username1, setUsername1] = useState("");
  const [username2, setUsername2] = useState("");
  const [submissions1, setSubmissions1] = useState([]);

  useEffect(() => {
    let usernames = JSON.parse(localStorage.getItem("users"));
    if (usernames[0] === "" && usernames[1] === "")
      navigate("/", { replace: true });
    else {
      const url1 = `https://leetcode-stats-api.herokuapp.com/${usernames[0]}`;
      const url2 = `https://leetcode-stats-api.herokuapp.com/${usernames[1]}`;
      const getUser1Data = async () => {
        try {
          const res = await axios.get(url1);
          setU1(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      const getUser2Data = async () => {
        try {
          const res = await axios.get(url2);
          setU2(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      getUser1Data();
      getUser2Data();
    }
  }, []);

  useEffect(() => {
    let usernames = JSON.parse(localStorage.getItem("users"));
    setUsername1(usernames[0]);
    setUsername2(usernames[1]);
    // setSubmissions1(Object.values(u1.submissionCalendar));
    // console.log(Object.keys(u1.submissionCalendar));
    if (u1.status === "error" || u2.status === "error") {
      alert("Couldn't find user! Please Try Again");
      navigate("/", { replace: true });
    }
  }, [u1, u2]);

  return (
    <>
      {" "}
      <div class="grand_parent">
        <div class="parents">
          <div class="child">
            <div className="chart">
              <CChart
                type="bar"
                data={{
                  labels: [username1, username2],
                  datasets: [
                    {
                      label: "Problems Solved",
                      backgroundColor: "#f87979",
                      data: [
                        u1.totalSolved,
                        u2.totalSolved,
                        Math.max(u1.totalSolved, u2.totalSolved) + 50,
                      ],
                    },
                  ],
                }}
                labels="months"
              />
            </div>
          </div>
          <div class="child">
            <div className="chart">
              <CChart
                type="bar"
                data={{
                  labels: [username1, username2],
                  datasets: [
                    {
                      label: "Easy Solved",
                      backgroundColor: "#9ACD32",
                      data: [
                        u1.easySolved,
                        u2.easySolved,
                        Math.max(u1.easySolved, u2.easySolved) + 50,
                      ],
                    },
                  ],
                }}
                labels="months"
              />
            </div>
          </div>
          <div class="child">
            <div className="chart">
              <CChart
                type="bar"
                data={{
                  labels: [username1, username2],
                  datasets: [
                    {
                      label: "Medium Solved",
                      backgroundColor: "#FF7F50",
                      data: [
                        u1.mediumSolved,
                        u2.mediumSolved,
                        Math.max(u1.mediumSolved, u2.mediumSolved) + 50,
                      ],
                    },
                  ],
                }}
                labels="months"
              />
            </div>
          </div>
        </div>
        <div class="parents">
          <div class="child">
            <div className="chart">
              <CChart
                type="bar"
                data={{
                  labels: [username1, username2],
                  datasets: [
                    {
                      label: "Hard Solved",
                      backgroundColor: "#FF4500",
                      data: [
                        u1.hardSolved,
                        u2.hardSolved,
                        Math.max(u1.hardSolved, u2.hardSolved) + 50,
                      ],
                    },
                  ],
                }}
                labels="months"
              />
            </div>
          </div>
          <div class="child">
            <div className="chart">
              <CChart
                type="bar"
                data={{
                  labels: [username1, username2],
                  datasets: [
                    {
                      label: "Acceptance Rate",
                      backgroundColor: "#98FB98",
                      data: [u1.acceptanceRate, u2.acceptanceRate],
                    },
                  ],
                }}
                labels="months"
              />
            </div>
          </div>
          <div class="child">
            <div className="chart">
              <CChart
                type="bar"
                data={{
                  labels: [username1, username2],
                  datasets: [
                    {
                      label: "Ranking",
                      backgroundColor: "#696969",
                      data: [
                        u1.ranking,
                        u2.ranking,
                        Math.max(u1.ranking, u2.ranking) + 50,
                      ],
                    },
                  ],
                }}
                labels="months"
              />
            </div>
          </div>
          {/* <div class="graph-card">
            <div className="graph">
            <CChart
              type="line" 
              data={{
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                  {
                    label: "My First dataset",
                    backgroundColor: "rgba(220, 220, 220, 0.2)",
                    borderColor: "rgba(220, 220, 220, 1)",
                    pointBackgroundColor: "rgba(220, 220, 220, 1)",
                    pointBorderColor: "#fff",
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
                  },
                  {
                    label: "My Second dataset",
                    backgroundColor: "rgba(151, 187, 205, 0.2)",
                    borderColor: "rgba(151, 187, 205, 1)",
                    pointBackgroundColor: "rgba(151, 187, 205, 1)",
                    pointBorderColor: "#fff",
                    data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
                  },
                ],
              }}
            />
            </div>
          </div> */}
        </div>
      </div>

    </>
  );
};

export default Compare;

