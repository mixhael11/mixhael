import React from "react";
import { Link } from "react-router-dom";
import GroundTruth from '../assets/groundtruthreal.png';
import Approximation from '../assets/approximationreal.png';

export default function WikipediaStreams() {
  return (
     <>
    <div className="github-logo">
      <a href="https://github.com/mixhael11/Yelp-Review-Classifer" target="_blank">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Repo" className="github-logo" height="100px"/>
      </a>
      </div>
    <div className="page-content">
      <Link to="/">← Back to Home</Link>
      <h1>Frequency Estimation of Wikipedia Streams</h1>
      <p>
        In this project, I built a system to analyze live Wikipedia edit streams using the DGIM algorithm for approximate frequecnt counting. Instead of storing the entire stream, 
        DGIM maintains a compact synopsis allowing efficient queries with guaranteed error bounds.
        
      </p>
      <p>
        Using a fixed stream of the Wikipedia stream, as to not overload the API, I injested this stream, tracked user activity, and compared DGIM's approximations against ground truth using 
        histograms, absolute error, and relative error plots. The results showed that DGIM can estimate event counts within a small error margin while using far less memeory.
      </p>
      <p>
        This project highlights the trade-off between accuracy and memory efficiency in real-time stream processing and demonstrates how paramater choices (like bukcey size R) affect performance.
        Overall, it was a great exercise in implementing streaming algorithms and working with real-world data streams
      </p>
       <img 
              src={GroundTruth} 
              alt="Ground Truth" 
              className="project-image"
            />
      <img 
              src={Approximation} 
              alt="Approximation" 
              className="project-image"
            />
      <ul></ul>
      <h3>Tech Stack</h3>
      <ul>
        <li><strong>Languages:</strong> Python</li>
        <li><strong>Frameworks/Libraries:</strong> Numpy, Matplotlib</li>
        <li><strong>Techniques:</strong> Streaming algorithm (DGIM), data ingestion, frequency approximation, error analysis (absolute & relative) </li>
      </ul>
    </div>
    </>
  );
}
