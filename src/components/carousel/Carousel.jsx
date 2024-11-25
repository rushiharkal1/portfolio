import './Carousel.css';

function Carousel() {
  return (
    <>
      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">

          <div className="carousel-item active">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
              <rect width="100%" height="100%" fill="#6c757d" />
            </svg>

            {/*<img src="https://inkscape.org/gallery/item/12639/view/" className="d-block w-100" alt="First Slide" />*/}

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Welcome to Our Platform</h1>
                <p className="opacity-75">Discover amazing features and benefits.</p>
                <p><a className="btn btn-lg btn-primary shadow rounded-pill" href="#">Sign up today</a></p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
              <rect width="100%" height="100%" fill="#343a40" />
            </svg>
            <div className="container">
              <div className="carousel-caption">
                <h1>Stay Updated</h1>
                <p className="opacity-75">Sign up to receive the latest updates.</p>
                <p><a className="btn btn-lg btn-primary shadow rounded-pill" href="#">Learn more</a></p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
              <rect width="100%" height="100%" fill="#495057" />
            </svg>
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>Join Us</h1>
                <p className="opacity-75">Be part of our growing community.</p>
                <p><a className="btn btn-lg btn-primary shadow rounded-pill" href="#">Join now</a></p>
              </div>
            </div>
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    </>
  );
}

export default Carousel;
