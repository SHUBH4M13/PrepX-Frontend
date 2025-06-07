const TacticalGrid = () => {
    return (
      <div className="absolute inset-0 opacity-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern id="tactical-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 0h40v40H0z" fill="none" stroke="#4D5D53" strokeWidth="1"></path>
            <path d="M20 0v40M0 20h40" stroke="#4D5D53" strokeWidth="0.5"></path>
          </pattern>
          <rect width="100%" height="100%" fill="url(#tactical-grid)"></rect>
        </svg>
      </div>
    );
  };
  
  export default TacticalGrid;
  