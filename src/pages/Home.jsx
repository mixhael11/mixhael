import React from "react";
import { Link } from "react-router-dom";
import profileImage from '../assets/profile.jpg';
import textclassification from '../assets/textclassification.png';
import auctionlogo from '../assets/logo.png';
import '../App.css';

export default function Home() {
  return (
    <div className="page">
      {/* Fixed Profile Image */}
      <div className="image-wrapper">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>

      {/* Intro Section */}
      <div className="content">
        <h1>Welcome to my page</h1>
        <p>I'm Michael Angelo and I'm an aspiring Software developer.</p>
        <p>Below are some of my projects, click them to learn more.</p>

        {/* Projects Grid */}
        <div className="projects-grid">
          {/* Project 1 */}
          <Link to="/YelpReviewClassifier" className="project-card">
            <img 
              src={textclassification} 
              alt="Text Classification" 
              className="project-image" 
            />
            <h2 className="project-title">Yelp Review Classifier</h2>
          </Link>

          {/* Project 2 */}
          <Link to="/Auction" className="project-card">
          <img 
            src={auctionlogo} 
            alt="Auction System" 
            className="project-image" 
          />
            <h2 className="project-title">Auction System</h2>
          </Link> 
        </div>
      </div>
    </div>
  );
}
