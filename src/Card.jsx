export default function Card(props) {
  let badgeText;
  if (props.spots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className="flex card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
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
