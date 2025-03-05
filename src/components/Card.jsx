const Card = ({ title, text, imagePosition = "left" }) => {
    return (
      <div className={`article-card ${imagePosition}`}>
        <div className="article-content">
          {imagePosition === "left" && (
            <div className="article-image">
              <h3>{title}</h3>
              <div className="image-placeholder">Image</div>
            </div>
          )}
          <p>{text}</p>
          {imagePosition === "right" && (
            <div className="article-image">
              <h3>{title}</h3>
              <div className="image-placeholder">Image</div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Card;