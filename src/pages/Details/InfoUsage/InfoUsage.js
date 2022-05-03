import React, { useEffect, useState } from 'react';
import InfoUsageContent from '../InfoUsageContent/InfoUsageContent';

const InfoUsage = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetch('/data/usageInfo.json')
      .then(res => res.json())
      .then(data => setContents(data));
  }, []);

  return (
    <div className="information usageInfo">
      {contents.map(({ title, desc }) => (
        <div className="infoContent">
          <h3 className="title">{title}</h3>
          <p className="text">{desc}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoUsage;
