import React, { useState, useRef, useEffect } from "react";
import "./card.css";

export function Card({
  isRoundLogo,
  image,
  duration,
  position,
  companyName,
  description,
}) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (
      descriptionRef.current.scrollHeight >
      descriptionRef.current.clientHeight + 2
    ) {
      setShowFullDescription(false);
    } else {
      setShowFullDescription(true);
    }
  }, [description]);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className={`card-container ${showFullDescription ? "expanded" : ""}`}>
      <img
        style={{ borderRadius: isRoundLogo ? "999px" : "" }}
        className="company-logo"
        src={`./${image}`}
        alt={`${companyName} logo`}
      />
      <h4>{duration}</h4>
      <h4>{position}</h4>
      <h4>{companyName}</h4>
      <p
        className={showFullDescription ? "full-description" : ""}
        ref={descriptionRef}
      >
        {description}
      </p>
      {showFullDescription ? (
        <button className="more-info-btn" onClick={toggleDescription}>
          <span className="material-symbols-outlined">expand_less</span>
        </button>
      ) : (
        <button className="more-info-btn" onClick={toggleDescription}>
          <span className="material-symbols-outlined">expand_more</span>
        </button>
      )}
    </div>
  );
}
