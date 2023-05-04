import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import Tiles from "./components/tiles";
import useWindowSize from "react-use/lib/useWindowSize";
import "./styles.css";

function App() {
  const [tracker, setTracker] = useState(true);
  const [win, setWin] = useState(false);
  const { height, width } = useWindowSize;
  const [tilesData, setTilesData] = useState([
    { id: 1, state: Number },
    { id: 2, state: Number },
    { id: 3, state: Number },
    { id: 4, state: Number },
    { id: 5, state: Number },
    { id: 6, state: Number },
    { id: 7, state: Number },
    { id: 8, state: Number },
    { id: 9, state: Number }
  ]);

  useEffect(() => {
    if (
      (tilesData[0].state === 1 &&
        tilesData[1].state === 1 &&
        tilesData[2].state === 1) ||
      (tilesData[0].state === 0 &&
        tilesData[1].state === 0 &&
        tilesData[2].state === 0)
    ) {
      setWin(true);
    } else if (
      (tilesData[3].state === 1 &&
        tilesData[4].state === 1 &&
        tilesData[5].state === 1) ||
      (tilesData[3].state === 0 &&
        tilesData[4].state === 0 &&
        tilesData[5].state === 0)
    ) {
      setWin(true);
    } else if (
      (tilesData[6].state === 1 &&
        tilesData[7].state === 1 &&
        tilesData[8].state === 1) ||
      (tilesData[6].state === 0 &&
        tilesData[7].state === 0 &&
        tilesData[8].state === 0)
    ) {
      setWin(true);
    } else if (
      (tilesData[0].state === 1 &&
        tilesData[3].state === 1 &&
        tilesData[6].state === 1) ||
      (tilesData[0].state === 0 &&
        tilesData[3].state === 0 &&
        tilesData[6].state === 0)
    ) {
      setWin(true);
    } else if (
      (tilesData[1].state === 1 &&
        tilesData[4].state === 1 &&
        tilesData[7].state === 1) ||
      (tilesData[1].state === 0 &&
        tilesData[4].state === 0 &&
        tilesData[7].state === 0)
    ) {
      setWin(true);
    } else if (
      (tilesData[2].state === 1 &&
        tilesData[5].state === 1 &&
        tilesData[8].state === 1) ||
      (tilesData[2].state === 0 &&
        tilesData[5].state === 0 &&
        tilesData[8].state === 0)
    ) {
      setWin(true);
    } else if (
      (tilesData[0].state === 1 &&
        tilesData[4].state === 1 &&
        tilesData[8].state === 1) ||
      (tilesData[0].state === 0 &&
        tilesData[4].state === 0 &&
        tilesData[8].state === 0)
    ) {
      setWin(true);
    } else if (
      (tilesData[2].state === 1 &&
        tilesData[4].state === 1 &&
        tilesData[6].state === 1) ||
      (tilesData[2].state === 0 &&
        tilesData[4].state === 0 &&
        tilesData[6].state === 0)
    ) {
      setWin(true);
    }
  }, [tilesData]);

  const changeState = (id) => {
    const tiles = Array.from(document.getElementsByClassName("tile"));

    !win &&
      setTilesData(
        tilesData.map((tileData) => {
          if (tileData.id === id && tileData.state !== 0 && tracker === true) {
            setTracker(!tracker);
            tiles[id - 1].classList.add("zero");
            return { id, state: 1 };
          } else if (
            tileData.id === id &&
            tileData.state !== 1 &&
            tracker === false
          ) {
            setTracker(!tracker);
            tiles[id - 1].classList.add("cross");
            return { id, state: 0 };
          } else {
            return tileData;
          }
        })
      );
  };

  return (
    <>
      <h1 className="tictactoe">TicTacToe</h1>
      <Tiles tilesData={tilesData} changeState={changeState} />
      {win && <Confetti width={width} height={height} />}
    </>
  );
}

export default App;
