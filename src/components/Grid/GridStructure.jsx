/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import "./Grid.css";
import GridRows from "./GridRows";

const GridStructure = () => {
  const [grid, setGrid] = useState([]);
  useEffect(() => {
    setGrid([]);
    // generating the array for the grid
    for (let i = 0; i < 40; i++) {
      let column = [];
      for (let j = 0; j < 60; j++) {
        if (i == 0 || j == 0 || i == 39 || j == 59)
          column.push({
            i,
            j,
            visited: false,
            wall: true,
            parent: null,
            way: false,
          });
        else
          column.push({
            i,
            j,
            visited: false,
            wall: false,
            parent: null,
            way: false,
          });
      }
      setGrid((prev) => [...prev, [...column]]);
    }
  }, []);
  const [startElement, setStartElement] = useState({});
  const [endElement, setEndElement] = useState({});
  const way = useRef(0);
  const startVisiting = (visElement, parentElement) => {
    if (visElement === endElement) endElement.parent = parentElement;
    if (visElement.wall || visElement.visited || endElement.visited) return;
    visElement.parent = parentElement;
    visElement.visited = true; // This will eventually set `endElement.visited`
    setGrid([...grid]);
    setTimeout(() => {
      const { i, j } = visElement; // Destructure to make code below more readable
      if (i > 0) startVisiting(grid[i - 1][j], visElement);
      if (i < 39) startVisiting(grid[i + 1][j], visElement);
      if (j > 0) startVisiting(grid[i][j - 1], visElement);
      if (j < 59) startVisiting(grid[i][j + 1], visElement);
    }, 100);
  };

  const array = useRef([]);
  useEffect(() => {
    if (startElement.i && startElement.j) {
      startVisiting(
        grid[startElement.i][startElement.j],
        grid[startElement.i][startElement.j]
      );
    }
  }, [startElement]);
  useEffect(() => {
    if (endElement.parent) {
      var currentElement = endElement.parent;
      while (currentElement !== startElement) {
        // console.log(currentElement);
        currentElement.way = true;
        // console.log(currentElement.way);
        currentElement = currentElement.parent;
        way.current = way.current + 1;
      }
    }
  }, [grid]);
  const mappedRows = (el, id) => {
    return (
      <>
        <GridRows
          key={id}
          el={el}
          grid={grid}
          setGrid={setGrid}
          startElement={startElement}
          endElement={endElement}
          setStartElement={setStartElement}
          setEndElement={setEndElement}
          way={way}
        />
      </>
    );
  };
  // Require mapping 2 times, once for the rows and then for the columns. First done for rows,done second time in the rows file for the columns
  return (
    <div>
      {grid.map(mappedRows)}
      <button
        onClick={() => {
          // ar.forEach((el) => {
          //   if (el.i === true) console.log(el);
          // });
          console.log(array);
        }}>
        s
      </button>
    </div>
  );
};

export default GridStructure;

// const stopVisiting = useRef(false);
// var startVisiting = (visElement, ar) => {
//   if (stopVisiting.current === true) {
//     console.log(visElement);

//     return ar.push(visElement);
//   }
//   if (visElement.i === endElement.i && visElement.j === endElement.j) {
//     stopVisiting.current = true;
//   }
//   if (visElement.wall === true) return;

//   if (visElement["visited"] === false) {
//     var newGrid = [...grid];
//     newGrid[visElement.i][visElement.j]["visited"] = true;
//     setGrid(newGrid);
//     visElement["visited"] = true;
//     setTimeout(() => {
//       if (visElement["i"] > 0) {
//         startVisiting(grid[visElement.i - 1][visElement.j], ar);
//       }
//       if (visElement["i"] < 39) {
//         startVisiting(grid[visElement.i + 1][visElement.j], ar);
//       }
//       if (visElement["j"] > 0) {
//         startVisiting(grid[visElement.i][visElement.j - 1], ar);
//       }
//       if (visElement["j"] < 59) {
//         startVisiting(grid[visElement.i][visElement.j + 1], ar);
//       }
//       return;
//     }, 500);
//   }
// };
