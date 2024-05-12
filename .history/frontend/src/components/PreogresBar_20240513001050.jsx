import React from "react";

export default function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-yellowClaire rounded-full h-2.5">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
