import "./parallax.scss";

function Parallax({ type }) {
  return (
    <div className="parallax" style={{ background:
        type === "services"
          ? "linear-gradient(180deg, #111132, #0c0c1d)"
          : "linear-gradient(180deg, #111132, #505064)",}}>
        <img src="./stars.png" className="stars" alt="" />
        <img src="./planets.png" className="planets" alt="" />
        <img src="./mountains.png" className="mountains" alt="" />
    </div>
  );
}

export default Parallax;
