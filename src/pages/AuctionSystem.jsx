import React from "react";
import { Link } from "react-router-dom";

export default function AuctionSystem() {
  return (
     <>
    <div className="github-logo">
      <a href="https://github.com/mixhael11/Auction" target="_blank">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Repo" className="github-logo" height="100px"/>
      </a>
    </div>
    <div className="page-content">
      <Link to="/">← Back to Home</Link>
      <h1>Auction House Web Application</h1>
      <p>
        I worked in a team to develop a full-stack E-commerce auction platform supporting both Forward and Dutch auctions.
        The system allows users to browse items, place bids, and complete purchases with integrated payment and shipping handling.        
      </p>
      <h2>Key Features and Design Decisions</h2>
      <ul>
        <li><strong>MVC Architecture:</strong> Organized code into Model(Java Beans for items, bids, users), View (React.js UI), and Controller (Java Servlets handling HTTP requests), ensuring low coupling and high cohesion.</li>
        <li><strong>Design Patterns:</strong></li>
        <ul>
          <li><strong>Factory:</strong> Scalable creation of differetn auction types.</li>
          <li><strong>Strategy:</strong> Flexible auction algorithms for different auction types.</li>
          <li><strong>Singleton:</strong> Centralized configuration management for the application.</li>
          <li><strong>Observer:</strong> Real-Time bid updates for all users.</li>
          <li><strong>Facade:</strong> Simplifies communication with muliple backend services</li>
      </ul>
      <li><strong>Frontend:</strong> React.js with modular components for reusable, maintainable UI</li>
      <li><strong>Backend & Database</strong> Java Servlets, JDBC with SQLite, handling HTTP requests, sessions management, and attempted RESTful APIs for scalable service communication</li>
      <li><strong>Deployment & Architecture</strong> Microservices architecture with independent modules (Catalogue, Auction, Payment). Deployed backend with Apache Tomcat, then containerized the application with Docker for easy scaling and portability.</li>
      <li><strong>Development Process: </strong> Created sequence and activity diagrams for core user cases and followed test-driven development to ensure reliaility.</li>
      <h3>Tech Stack</h3>
      <ul>
        <li><strong>Languages:</strong> Java, JavaScript(React.js)</li>
        <li><strong>Frameworks/Libraries:</strong> React.js, Java Servlets, JDBC, SQLlite, Apache Tomcat</li>
        <li><strong>Tools:</strong> Docker, Git</li>
      </ul>
      </ul>
    </div>
    </>
  );
}
