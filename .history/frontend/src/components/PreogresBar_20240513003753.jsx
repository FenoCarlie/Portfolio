import React from "react";

export default function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-greyGlass rounded-full h-2.5">
      <div
        className="bg-grey1 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
