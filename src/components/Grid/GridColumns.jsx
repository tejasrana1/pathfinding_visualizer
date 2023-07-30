import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   startElement,
//   endElement,
//   selectStartElement,
//   selectEndElement,
// } from "../../store/slices/dataSlice";

const GridColumns = (props) => {
  const {
    grid,
    setGrid,
    startElement,
    endElement,
    setStartElement,
    setEndElement,
    way,
  } = props;

  // const start = useSelector(selectStartElement);
  // const end = useSelector(selectEndElement);
  // const dispatch = useDispatch();
  const { el } = props;
  useEffect(() => {
    if (el.way === true) {
      console.log(el);
      const columnElement = document.getElementById(`${el.i}.${el.j}`);
      if (!columnElement.classList.contains("wayElement"))
        columnElement.classList.add("wayElement");
    }
    if (el.wall == true) {
      const columnElement = document.getElementById(`${el.i}.${el.j}`);
      if (!columnElement.classList.contains("wallElement"))
        columnElement.classList.add("wallElement");
    }
    if (el === startElement) {
      const columnElement = document.getElementById(`${el.i}.${el.j}`);
      columnElement.classList.add("startElement");
    } else {
      const columnElement = document.getElementById(`${el.i}.${el.j}`);
      columnElement.classList.remove("startElement");
    }
    if (el === endElement) {
      const columnElement = document.getElementById(`${el.i}.${el.j}`);
      columnElement.classList.add("endElement");
    } else {
      const columnElement = document.getElementById(`${el.i}.${el.j}`);
      columnElement.classList.remove("endElement");
    }
  }, [startElement, endElement, way.current]);
  useEffect(() => {
    // console.log(grid.i);
    if (el.visited === true) {
      const columnElement = document.getElementById(`${el.i}.${el.j}`);
      if (!columnElement.classList.contains("visitedElement"))
        columnElement.classList.add("visitedElement");
    }
  }, [grid, el]);
  // Event for creating obstacles for the algorithm
  //   just done the css part, main logic remaining
  const handleDrag = (event) => {
    if (event.buttons == 1) {
      // if (startElement.i)
      var newGrid = [...grid];
      newGrid[el.i][el.j]["wall"] = true;
      setGrid(newGrid);
      console.log(el);
      const columnElement = document.getElementById(`${el.i}.${el.j}`);
      if (!columnElement.classList.contains("wallElement"))
        columnElement.classList.add("wallElement");
    } else {
      // console.log(el.way);
      // console.log(el.parent);
    }
  };
  const handleClick = () => {
    if (!el.wall) {
      // console.log(el);
      setStartElement(el);
      var newGrid = [...grid];
      newGrid[el.i][el.j]["wall"] = false;
      setGrid(newGrid);
      // if (startElement.i) {
      //   const columnElement = document.getElementById(
      //     `${startElement.i}.${startElement.j}`
      //   );
      //   // columnElement.classList.remove("startElement");
      // }
      console.log(startElement);
    }
  };
  const handleDoubleClick = () => {
    // if (endElement) {
    //   const columnElement = document.getElementById(
    //     `${endElement.i}.${endElement.j}`
    //   );
    //   columnElement.classList.remove("endElement");
    // }
    setEndElement(el);
  };
  return (
    <div
      onClick={handleClick}
      onContextMenu={handleDoubleClick}
      onMouseMove={handleDrag}
      className="divColumn"
      id={`${el.i}.${el.j}`}></div>
  );
};

export default GridColumns;
