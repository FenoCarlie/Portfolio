import React, { useState } from "react";

const TabPan = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  return (
    <div className="flex flex-col">
      <div className="flex space-x-4 w-full justify-center ">
        {children.map((child) => {
          const { label } = child.props;
          return (
            <button
              key={label}
              onClick={() => setActiveTab(label)}
              className={`px-6 py-2  ${
                activeTab === label
                  ? "bg-blue-500 border-yellowClaire border-b-2 text-yellowClaire"
                  : "text-grey1"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div className="mt-4 md:mt-0">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

const TabContent = ({ children, label }) => {
  return { label, children };
};

export { TabPan, TabContent };