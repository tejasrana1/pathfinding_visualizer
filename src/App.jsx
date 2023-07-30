import { useEffect, useState } from "react";
import Header from "./components/Header";
import Grid from "./components/Grid/Grid";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { gridComponent, selectGridComponent } from "./store/slices/dataSlice";

function App() {
  // const grid = useSelector(selectGridComponent);
  const dispatch = useDispatch();

  return (
    <div className="root">
      {/* Header component will be for speed control size control and all the extra stuff */}
      <Header />
      {/* Grid will be the main component that consist of the main grid */}
      <Grid />
    </div>
  );
}

export default App;
