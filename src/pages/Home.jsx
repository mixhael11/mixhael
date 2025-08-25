import React from "react";
import { Link } from "react-router-dom";
import profileImage from '../assets/profile.jpg';
import textclassification from '../assets/textclassification.png';
import auctionlogo from '../assets/logo.png';
import confusionmatrix from '../assets/confusionmatrix.png';
import LibrarySystem from '../assets/LibrarySystem.png';
import Twitterdata from '../assets/Twitterdata.png';
import wikilogo from '../assets/wikilogo.jpg';
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


          {/* Project 3 */}
          <Link to="/WikipediaStream" className="project-card">
          <img 
            src={wikilogo}
            alt="WikipediaStream" 
            className="project-image" 
          />
            <h2 className="project-title">Frequency Estimation of Wikipedia Streams</h2>
          </Link>

          {/* Project 4 */}
          <Link to="/LibrarySystem" className="project-card">
          <img 
            src={LibrarySystem}
            alt="Library System" 
            className="project-image"
          />
            <h2 className="project-title">Library System</h2>
          </Link>
          
          {/* Project 5 */}
          <Link to="/TwitterDataMine" className="project-card">
          <img 
            src={Twitterdata}
            alt="Twitter Data Mine" 
            className="project-image"
          />
            <h2 className="project-title">Twitter Bot Detection & Analysis</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
