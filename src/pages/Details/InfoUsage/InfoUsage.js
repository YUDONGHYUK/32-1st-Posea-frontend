import React, { useEffect, useState } from 'react';
import InfoUsageContent from '../InfoUsageContent/InfoUsageContent';

const InfoUsage = props => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetch('/data/usageInfo.json')
      .then(res => res.json())
      .then(data => setContents(data));
  }, []);

  return (
    <div className="information usageInfo">
      {contents.map(content => (
        <InfoUsageContent
          key={content.id}
          title={content.title}
          desc={content.desc}
        />
      ))}
    </div>
  );
};

export default InfoUsage;
