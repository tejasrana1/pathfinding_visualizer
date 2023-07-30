import React, { useEffect } from "react";
import GridColumns from "./GridColumns";

const GridRows = (props) => {
  const {
    grid,
    setGrid,
    startElement,
    endElement,
    setStartElement,
    setEndElement,
    way,
  } = props;
  // useEffect(() => {
  // console.log("G");
  // }, [grid]);
  const { el } = props;
  const mappedColumns = (cl, id) => {
    return (
      <GridColumns
        key={id}
        el={cl}
        grid={grid}
        setGrid={setGrid}
        startElement={startElement}
        endElement={endElement}
        setStartElement={setStartElement}
        setEndElement={setEndElement}
        way={way}
      />
    );
  };
  return (
    <>
      <div className="divRow">{el.map(mappedColumns)}</div>
    </>
  );
};

export default GridRows;
