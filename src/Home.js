import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://trak.in/wp-content/uploads/2020/10/images-2020-10-24T153811.037-2-1280x720.jpeg"
          alt=""
        />

        <div className="home__row">
          <Product 
          id = "551218"
          title='The lean startup'
          price={19.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" 
          rating={3} />
          <Product 
          id ="55689"
          title="elegante Metal Body Square Inspired from Kabir Singh Sunglass for Men and Boys"
          price={500.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51uYuk9R8pL._UL1500_.jpg"/>
        </div>

        <div className="home__row">
          <Product 
          id = "123469"
          title="Bags Delta 39 L Polyester Navy Blue 15.6 inch Laptop Backpack"
          price={55.49}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51ajOC3fziL._SX679_.jpg"/>
          <Product 
          id="154879"
          title="adidas Men's Agora 1.0 Multisport Training Shoes"
          price={80.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81pr9v3HhaL._UL1500_.jpg"/>
          <Product 
          id="55541"
          title="AmazonBasics Yoga Mat"
          price={12.40}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71WvSKldySL._SL1500_.jpg"/>
        </div>

        <div className="home__row">
          <Product 
          id="123456"
          title="OnePlus 8 (Glacial Green 6GB RAM+128GB Storage)"
          price={499.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71SxKcUeSDL._SL1500_.jpg"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
