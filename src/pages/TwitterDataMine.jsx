import React from "react";
import { Link } from "react-router-dom";
import botsfollowinghumans from '../assets/botsfollowinghumans.png';
import finalbotsfollowinghumans from '../assets/finalbotsfollowinghumans.png';

export default function TwitterDataMine() {
  return (
     <>
    <div className="github-logo">
      <a href="https://github.com/mixhael11/Twitter-Bot-Detection-Analysis" target="_blank">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Repo" className="github-logo" height="100px"/>
      </a>
    </div>
    <div className="page-content">
      <Link to="/">← Back to Home</Link>
      <h1>Twitter Bot Detection & Analysis</h1>
      <p>
        This project explored how to detect Twitter bot accounts and understand their impact on real human communities. Using datasets like cresci-rtbust-2019 and TwiBot-22, my partner and I trained and evaluted muliple machine leranign models such as Random Forest, Logistic Regression and AdaBoost, to classify accounts as either bots or humans.
        
      </p>
      <p>
        Beyond detection, we investigated how bots interact with real users by building and visualizign graphs of social networks, analyzing relationships such as:
        <ul>
          <li>Human to Human (organic communities) </li>
          <li>Bot to Bot (isolated bot networks)</li>
          <li>Bot to Human (inflating follower counts)</li>
          <li>Human to Bot (real users following bots)</li>
          <li>Bots liking Human posts (fake engagement)</li>
        </ul>
        <img 
                src={finalbotsfollowinghumans} 
                alt="finalbotsfollowinghumans" 
                className="analysis-image"
              />
        <h3>Key Findings</h3>
        <ul>  
          <li>Models reached ~70% accuracy on richer datasets (cresci-rtbust-2019), but struggled (~50%) on less authentic data.</li>
          <li>A small number of bots can generate masstive amounts of fake connections.</li>
          <li>Network analysis showed bots infalte human follower counts and spread interactions, amplifying misinformation</li>
       </ul>
       <h3>Tech Stack</h3>
      <ul>
      <li><strong>Languages:</strong> Python</li>
      <li><strong>Libraries/Frameworks:</strong> scikit-learn, pandas, matplotlib, networkx</li>
      <li><strong>Techniques:</strong> Machine learning (classification), Graph Analysis, Data Visualization</li>
      <li><strong>Datasets:</strong> Twitter Bot Detection Dataset, cresci-rtbust-2019, TwiBot-22</li>
    </ul>
      </p>
    </div>
    </>
  );
}
