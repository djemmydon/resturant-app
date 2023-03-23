import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

function Loading() {
  return (
    <div className="loaderitem">
      <ScaleLoader color="#ed1d24" size={30} />
    </div>
  );
}

export default Loading;
