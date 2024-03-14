import "./card.css";
export function Card({isRoundLogo, image, duration, position, companyName, description }) {
;
 
  return (
      <div className="card-container" >
        <img
        style={{borderRadius: isRoundLogo ? "999px" : ""}}
          className="company-logo"
          src={`./${image}`}
          alt={`${companyName} logo`}
        />
        <h4>{duration}</h4>
        <h4>{position}</h4>
        <h4>{companyName}</h4>
        <p>{description}</p>
      </div>
  );
}
