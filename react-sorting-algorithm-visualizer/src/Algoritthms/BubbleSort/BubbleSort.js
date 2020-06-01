import React, { useEffect, useState } from "react";

import "./BubbleSort.css";

const BubbleSort = (props) => {




  const [arrayState, setArrayState] = useState({ array: [] });

  const resetArray = () => {
    const array = [];
    for (let i = 0; i <= 100; i++) {
      array.push(Math.floor(Math.random() * (100 - 5 + 1) + 5));
      console.log(array[i]);
    }
    setArrayState(array);
  };

  const bubbleSortAlgo = () => {
    let sortedArray = arrayState;
    for (let i = sortedArray.length - 1; i > 1; i--) {
      for (let j = 0; j <= i; j++) {
        if (sortedArray[j] > sortedArray[j + 1]) {
          let temp = sortedArray[j];
          sortedArray[j] = sortedArray[j + 1];
          sortedArray[j + 1] = temp;
        }
      }
    }
    setArrayState(sortedArray);
  }

  useEffect(() => {
    resetArray();
  }, []);

  return (
    <div>
      <p> bubbleSort </p>
      <div className="bars-wrapper">
        {arrayState.length ? arrayState.map((value, index) => (
          <div className="array-bar"
            key={index}
            style={{ height: `${value}px` }}></div>
        )) : <div>nada</div>}
      </div>
      <button onClick={bubbleSortAlgo}> Sort Array </button>
    </div>
  );
};

export default BubbleSort;
