import React from "react";

function Dashboard() {
  return (
    <div className="dashboard">
      <section>
        <h2>TasteBuddy Summary</h2>
        <div className="flex">
          <h3>Total TasteBuddy Sheets</h3>
          <p>4 in the last 30 days</p>
          <h3>Your average score</h3>
          <p>70 points UP</p>
          <h3>Common varietals</h3>
          <p>Malbec, Pinot Noir, Torrontes.</p>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
