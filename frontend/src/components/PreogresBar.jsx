import React from "react";

export default function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-grey1 rounded-full h-2.5">
      <div
        className="bg-greyGlass h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
