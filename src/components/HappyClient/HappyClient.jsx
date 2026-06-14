import { useEffect, useState } from "react";
import "./HappyClient.css";

function TestimonialCard({ imgSrc, imgAlt }) {
  return (
    <div className="card">
      <div className="cardHeader">
        <div className="logo">
          <span className="logoMain">whistle</span>
          <span className="logoSub">AND SMILE</span>
        </div>
      </div>

      <div className="imageBox">
        <span className="quoteTop">&ldquo;</span>

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
      .then((data) => {
        setProducts(data.slice(0, 5)); // ✅ only first 5
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="section">
      <h2 className="title">Happy Smilers!</h2>

      <div className="wrapper">
        {products.map((item) => (
          <TestimonialCard
            key={item.id}
            imgSrc={item.image} // ✅ API image
            imgAlt={item.title}
          />
        ))}
      </div>
    </section>
  );
}
