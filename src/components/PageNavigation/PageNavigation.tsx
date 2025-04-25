import { useState } from "react";

import { IconBack, IconForward } from "@/assets";

import "./PageNavigation.scss";

const PageNavigation = () => {
  const [selectedPageIndex, setSelectedPageIndex] = useState(1);

  const handlePageClick = (pageIndex: number) => {
    setSelectedPageIndex(pageIndex);
  };

  return (
    <div className="page-navigation-container">
      <div className="button-back">
        <IconBack />
      </div>
      <div className="number-container">
        {[1, 2, 3].map((pageIndex) => (
          <div
            key={pageIndex}
            className={`button-number ${
              selectedPageIndex === pageIndex ? "selected" : ""
            }`}
            onClick={() => handlePageClick(pageIndex)}
          >
            {pageIndex}
          </div>
        ))}
      </div>
      <div className="button-forward">
        <IconForward />
      </div>
    </div>
  );
};

export default PageNavigation;
