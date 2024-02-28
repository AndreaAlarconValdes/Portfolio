import './Title.css'

export  function Title({ color, children }) {
  return (
    <div className="title-container">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width={50}>
        <path
          fill={color}
          stroke="black"
          strokeWidth="5"
          d="M43.8,-26.3C52.6,-10,52.7,10.2,43.9,24.7C35.2,39.2,17.6,47.9,-4.4,50.5C-26.4,53.1,-52.9,49.4,-60.3,35.7C-67.7,22,-56.1,-1.9,-42.9,-20.7C-29.7,-39.5,-14.8,-53.3,1.3,-54.1C17.5,-54.9,35,-42.6,43.8,-26.3Z"
          transform="translate(100 100)"
        />
      </svg>
      {children}
    </div>
  );
}
