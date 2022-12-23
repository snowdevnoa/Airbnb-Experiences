export default function Card(props) {
  return (
    <div className="flex card">
      <img src={props.image} />
      <div className="flex description">
        <img src="../public/images/star.png" alt="star" id="star" />
        <p>
          {props.rating} ({props.count}) · USA
        </p>
      </div>
      <span>{props.title}</span>
      <p>
        <strong>From ${props.price}</strong> / person
      </p>
    </div>
  );
}
