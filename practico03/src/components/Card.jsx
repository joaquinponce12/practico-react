import "./Card.css";

export function Card({ code, description, price, status }) {
  return (
    <div className="card">
      <div className="overflow">
        <h1 className="cardtop">{status}</h1>
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{code}</h4>
        <p className="card-text text-secondary">{description}</p>
        <h1 className="cardfoot">{price}</h1>
      </div>
    </div>
  );
}
