import React from "react";
import Card from "../data/Card";
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a react app to leave a feedback for a specific product</p>
        <p>Version 1.1.0</p>
        <p>
          {" "}
          <a href="/"> Back to home</a>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
