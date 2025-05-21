import React from "react";
import { useTaskContext } from "../contexts/TaskContext";
import "../styles/Puzzle.css";
import { Button } from "@radix-ui/themes";
import {useNavigate } from "react-router";

const images = [
  "puzzle1.png",
  "puzzle2.png",
  "puzzle3.png",
  "puzzle4.png",
  "puzzle5.png",
  "puzzle6.png",
  "puzzle7.png",
  "puzzle8.png",
  "puzzle9.png",
];

const sakura = [
  "puzzle10.png",
  "puzzle11.png",
  "puzzle12.png",
  "puzzle13.png",
  "puzzle14.png",
  "puzzle15.png",
  "puzzle16.png",
  "puzzle17.png",
  "puzzle18.png",
];

const momizi = [
  "puzzle19.png",
  "puzzle20.png",
  "puzzle21.png",
  "puzzle22.png",
  "puzzle23.png",
  "puzzle24.png",
  "puzzle25.png",
  "puzzle26.png",
  "puzzle27.png",
];

const Puzzle = () => {
  const { point } = useTaskContext();
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>パズル</h1>
      <div className="puzzle-grid">
        {images.map((img, idx) => (
          <div className="puzzle-piece"  key={img}>
            {point > idx ? (
              <img src={img} alt={`piece${idx + 1}`} />
            ) : (
            <div className="puzzle-placeholder" />
            )}
          </div>
        ))}
         
      </div>
      <p>ポイント: {point} / 9</p>
      {point >= 9 && <p>完成おめでとう！</p>}
      <div className="puzzle-grid">
        {sakura.map((img, idx) => (
          <div className="puzzle-piece"  key={img}>
            {point > idx ? (
              <img src={img} alt={`piece${idx + 1}`} />
            ) : (
            <div className="puzzle-placeholder" />
            )}
          </div>
        ))}
      </div>
      <div className="puzzle-grid">
        {momizi.map((img, idx) => (
          <div className="puzzle-piece"  key={img}>
            {point > idx ? (
              <img src={img} alt={`piece${idx + 1}`} />
            ) : (
            <div className="puzzle-placeholder" />
            )}
          </div>
        ))}
      </div>
      <Button onClick={() => navigate("/")}>Homeへ</Button>
    </div>
  );
};

export default Puzzle;
