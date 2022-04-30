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
      {contents.map(({ id, title, desc }) => (
        <InfoUsageContent key={id} title={title} desc={desc} />
      ))}
    </div>
  );
};

export default InfoUsage;
