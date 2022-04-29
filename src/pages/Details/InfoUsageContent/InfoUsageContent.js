const infoUsageContent = ({ title, desc }) => {
  return (
    <div className="usageText">
      <h3 className="title">{title}</h3>
      <p className="text">{desc}</p>
    </div>
  );
};

export default infoUsageContent;
