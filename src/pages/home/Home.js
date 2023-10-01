import React from "react";
import "./home.css";
import First from "../../components/first/First";
import Second from "../../components/second/Second";
function Home() {
  return (
    <div className="home">
      <div className="content h-100">
        <div className="container-fluid pt-2">
          {/* first part */}
          <First />
          {/* second part */}
          <Second />
        </div>
      </div>
    </div>
  );
}

export default Home;
