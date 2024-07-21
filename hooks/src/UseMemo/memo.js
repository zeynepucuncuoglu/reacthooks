import React, { useState, useEffect, useMemo } from 'react';

const MemoExample = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  // we only want to compute this function when the data we fetch has changed.
  const findMaxValue = (values) => {
    if (!values || values.length === 0) return null;

    let maxValue = values[0];
    for (let i = 1; i < values.length; i++) {
      if (values[i] > maxValue) {
        maxValue = values[i];
      }
    }

    console.log("This was computed");
    return maxValue;
  };

  // we only want to recompute this when the data has changed so we put [data]
  const getMaxValue = useMemo(() => findMaxValue(data), [data]);

  return (
    <div>
      <div>{getMaxValue}</div>
    </div>
  );
};

export default MemoExample;
