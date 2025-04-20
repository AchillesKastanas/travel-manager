import BackButton from "@assets/back.svg";
import ForwardButton from "@assets/forward.svg";

import "./PageNavigation.scss";

const PageNavigation = () => {
  return (
    <div className="page-navigation-container">
      <div className="button-back">
        <BackButton />
      </div>
      <div className="number-container">
        <div className="button-number">1</div>
        <div className="button-number">2</div>
        <div className="button-number">3</div>
      </div>
      <div className="button-forward">
        <ForwardButton />
      </div>
    </div>
  );
};

export default PageNavigation;
