import React, { useState } from "react";
import ForActvity from "./ForActvity";
import ForEveryday from "./ForEveryday";
import ForTravel from "./ForTravel";

const ClientsFaviroute = () => {
  const [activeTab, setActiveTab] = useState("ForActvity");

  const renderComponent = () => {
    switch (activeTab) {
      case "ForActvity":
        return <ForActvity />;
      case "ForEveryday":
        return <ForEveryday />;
      case "ForTravel":
        return <ForTravel />;
      default:
        return null;
    }
  };

  return (
    <div className="ClientsFaviroute">
      <p>Clients Favourite</p>
      <div>
        <div className="buttonContainer">
          <button
            className={`tab ${activeTab === "ForEveryday" && "activeTab"}`}
            onClick={() => setActiveTab("ForEveryday")}
          >
            ForEveryday
          </button>
          <button
            className={`tab ${activeTab === "ForActvity" && "activeTab"}`}
            onClick={() => setActiveTab("ForActvity")}
          >
            ForActvity
          </button>
          <button
            className={`tab ${activeTab === "ForTravel" && "activeTab"}`}
            onClick={() => setActiveTab("ForTravel")}
          >
            ForTravel
          </button>
        </div>
        {renderComponent()}
      </div>
    </div>
  );
};

export default ClientsFaviroute;
