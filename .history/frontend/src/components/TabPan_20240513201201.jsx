import React, { useState } from "react";

const TabPan = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  return (
    <div className="flex flex-col">
      <div className="flex space-x-4 w-full justify-center">
        {children.map((child) => {
          const { label } = child.props;
          return (
            <button
              key={label}
              onClick={() => setActiveTab(label)}
              className={`px-4 py-2 rounded-md ${
                activeTab === label
                  ? "bg-blue-500 border-2 border-bottom-yellowClaire text-yellowClaire"
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
