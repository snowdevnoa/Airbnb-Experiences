export default function Card(props) {
  console.log(props);

  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.card.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className="flex card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.card.coverImg} />
      <div className="flex description">
        <img src="/star.png" alt="star" id="star" />
        <p>
          {props.card.stats.rating} ({props.card.stats.reviewCount}) · USA
        </p>
      </div>
      <span>{props.card.title}</span>
      <p>
        <strong>From ${props.card.price}</strong> / person
      </p>
    </div>
  );
}
