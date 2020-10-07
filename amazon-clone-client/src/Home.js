import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://i.ytimg.com/vi/FG1EByNnHUU/maxresdefault.jpg"
          alt="amazon banner"
        />

        <div className="home_row">
          <Product
            id="1"
            title="The Art of Resilience"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51eK5eCWRyL.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Can't Hurt Me"
            price={19.99}
            image="https://m.media-amazon.com/images/I/81eO3s9VJ4L.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="3"
            title="Living with a Seal"
            price={19.99}
            image="https://m.media-amazon.com/images/I/51EAJroqoWL.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="Breath"
            price={14.99}
            image="https://m.media-amazon.com/images/I/41o5B3nR1gL.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="The World's Fittest Book"
            price={14.99}
            image="https://m.media-amazon.com/images/I/51yr9sCjg6L._SX260_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="6"
            title="Born to Run: A Hidden Tribe, Superathletes, and the Greatest Race the World Has Never Seen"
            price={12.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61KQDhUPv1L.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
