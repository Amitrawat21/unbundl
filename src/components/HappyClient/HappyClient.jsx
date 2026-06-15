import { useEffect, useState } from "react";
import "./HappyClient.css";

function TestimonialCard({ imgSrc, imgAlt }) {
  return (
    <div className="card">
      <div className="cardHeader">
        <div className="logoo">
          <span className="logoMainn">Whistle</span>
          <span className="logoSubb">AND SMILE</span>
        </div>
      </div>

      <div className="imageBox">
        <img src={imgSrc} alt={imgAlt} />
        <span className="quoteBottom">&rdquo;</span>
      </div>

      <div className="cardFooter">
        <p className="cardLabel">
          HAPPY- MONIALS
          <span className="cardBy">BY WHISTLE</span>
        </p>
      </div>
    </div>
  );
}

export default function HappySmilers() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 5)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="section">
      <h2 className="title">Happy Smilers!</h2>

      <div className="wrapper">
        {products.map((item) => (
          <TestimonialCard
            key={item.id}
            imgSrc={item.image}
            imgAlt={item.title}
          />
        ))}
      </div>
      <div className="wrapper-mobile">
        {products.map((item) => (
          <TestimonialCard
            key={item.id}
            imgSrc={item.image}
            imgAlt={item.title}
          />
        ))}
      </div>
    </section>
  );
}
