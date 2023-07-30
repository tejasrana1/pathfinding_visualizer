import React, { useEffect, useState } from "react";
import GridStructure from "./GridStructure";
// import { useDispatch } from "react-redux";
// import {
//   gridComponent,
//   selectGridComponent,
// } from "../../store/slices/dataSlice";
// import { useSelector } from "react-redux";

const Grid = () => {
  // useEffect(() => {
  //   console.log(grid);
  // }, [grid]);
  const handleClick = () => {
    // dispatch(start(true));
  };
  return (
    <div className="Grid">
      {/* Passing the generated grid to GridStructure component for further operations */}
      <GridStructure />
      <button onClick={handleClick}>start</button>
    </div>
  );
};

export default Grid;
