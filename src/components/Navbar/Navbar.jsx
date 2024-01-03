import "./navbar.scss";

function Navbar() {
  return (
    <div className="wrapper">
      <strong className="logo">Eniola</strong>
      <div className="options">
        <img src="./facebook.png" alt="facebook" />
        <img src="./instagram.png" alt="instagram" />
        <img src="./youtube.png" alt="youtube" />
        <img src="./dribbble.png" alt="dribble" />
      </div>
    </div>
  );
}

export default Navbar;
