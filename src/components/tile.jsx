function Tile({ id, changeState }) {
  return <div onClick={changeState} className={`tile${id} tile`}></div>;
}

export default Tile;
