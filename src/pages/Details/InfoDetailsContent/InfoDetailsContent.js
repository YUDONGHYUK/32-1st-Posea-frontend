const InfoDetailsContent = ({ title, desc, onModalShowBtnClick }) => {
  return (
    <div className="infoContent">
      <h3 className="title">{title}</h3>
      {title === '주요성분' && (
        <div className="btnBox">
          <button className="btnComponent" onClick={onModalShowBtnClick}>
            +
          </button>
        </div>
      )}
      <p>{desc}</p>
    </div>
  );
};

export default InfoDetailsContent;
