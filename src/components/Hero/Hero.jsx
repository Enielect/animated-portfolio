import './hero.scss'

function Hero() {
  return (
    <div className="hero">
      <div className="first">
        <span>Harvey Tyler</span>
        <h1 className='section-content'>Web developer and UI designer</h1>
        <div className="buttons">
          <button>See the Latest Works</button>
          <button>Contact Me</button>
        </div>
      </div>
      <div className="image">
        <img src="./hero.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
