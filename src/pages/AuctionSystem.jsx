import React from "react";
import { Link } from "react-router-dom";

export default function AuctionSystem() {
  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← Back to Home</Link>
      <h1>Auction System</h1>
      <p>
        Collaborated with teamates to develop a full-stack auction system including Dutch and Standard auctions in Java using Apache Tomcat and Sqllite.
        Also implremented key components like user authentication, item management, and real-time bidding, using docker for modular deployment.
        
      </p>
    </div>
  );
}
