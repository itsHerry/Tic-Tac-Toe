import Tile from "./tile";

function Tiles({ tilesData, changeState }) {
  return (
    <div className="tiles">
      {tilesData.map((tileData) => (
        <Tile
          key={tileData.id}
          id={tileData.id}
          changeState={() => changeState(tileData.id)}
        />
      ))}
    </div>
  );
}

export default Tiles;
