// import Navbar from "./Navbar";
import "./home.css"; 

function HomePage(){
    return (
        <div className="home">
            {/* <Navbar /> */}
            <div className="main-content">
                <h1 className="title">Beyond comfort.</h1>
                <div className="shoe-image">
                    <img src="https://i.pinimg.com/564x/e9/93/e0/e993e0d27f8903922d3d61da6f070f2c.jpg" alt="Shoe" />
                </div>
                <div className="overlay-text">
                    <span>Shoeniverse</span>
                </div>
                
            </div>
        </div>
    );
}

export default HomePage;
