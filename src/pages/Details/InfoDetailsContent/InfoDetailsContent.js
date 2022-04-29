const InfoDetailsContent = ({ title, desc }) => {
  return (
    <div className="infoContent">
      <h3 className="title">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default InfoDetailsContent;
