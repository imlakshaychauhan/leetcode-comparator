import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./compare.css";
import { CChart } from "@coreui/react-chartjs";
import Button from 'react-bootstrap/Button';
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import Spinner from "react-bootstrap/Spinner";

const Compare = () => {
  const navigate = useNavigate();
  const [u1, setU1] = useState([]);
  const [u2, setU2] = useState([]);
  const [username1, setUsername1] = useState("");
  const [username2, setUsername2] = useState("");
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [gotTheData, setGotTheData] = useState(false);

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
    setUrl1(`https://leetcode.com/${username1}`);
    setUrl2(`https://leetcode.com/${username2}`);
    if (u1.status === "error" || u2.status === "error") {
      alert("Couldn't find user! Please Try Again");
      navigate("/", { replace: true });
    }
    setGotTheData(true);
  }, [u1, u2]);

  return (
    <>
      {(gotTheData) ? (
        <>

      <div class="back-btn">
        <Link to="/">
          <Button variant="dark"> < BsFillArrowLeftSquareFill/></Button>
        </Link>
      </div>
      <div class="main-heading">
      <h1> {username1} VS {username2} </h1>
      </div>
      <div class="grand_parent">
        <div class="parents">
          <div class="stats-card">
            <h4 style={{ color: "orchid" }}>{username1}'s LeetCode Stats</h4>
            <h6>Ranking: {u1.ranking}</h6>
            <h6>
              Total Questions Solved: {u1.totalSolved}/{u1.totalQuestions}
            </h6>
            <h6 style={{ color: "green" }}>
              Easy Questions Solved: {u1.easySolved}/{u1.totalEasy}
            </h6>
            <h6 style={{ color: "orange" }}>
              Medium Questions Solved: {u1.mediumSolved}/{u1.totalMedium}
            </h6>
            <h6 style={{ color: "red" }}>
              Hard Questions Solved: {u1.hardSolved}/{u1.totalHard}
            </h6>
              <Button variant="primary" size="sm">
                <a href={url1} style={{ textDecoration: "none", color: "white", fontSize: "18px" }}>
                    Check LeetCode Profile
                </a>
              </Button>
          </div>
          <div class="stats-card">
            <h4 style={{ color: "orchid" }}>{username2}'s LeetCode Stats</h4>
            <h6>Ranking: {u2.ranking}</h6>
            <h6>
              Total Questions Solved: {u2.totalSolved}/{u2.totalQuestions}
            </h6>
            <h6 style={{ color: "green" }}>
              Easy Questions Solved: {u2.easySolved}/{u2.totalEasy}
            </h6>
            <h6 style={{ color: "orange" }}>
              Medium Questions Solved: {u2.mediumSolved}/{u2.totalMedium}
            </h6>
            <h6 style={{ color: "red" }}>
              Hard Questions Solved: {u2.hardSolved}/{u2.totalHard}
            </h6>
            <Button variant="primary" size="sm">
                <a href={url2} target="_blank" style={{ textDecoration: "none", color: "white", fontSize: "18px" }}>
                    Check LeetCode Profile
                </a>
              </Button>
          </div>
        </div>
      </div>
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
        </div>
      </div>
      </>
      ):(<div className="d-flex justify-content-center my-4">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>)}
    </>
  );
};

export default Compare;
