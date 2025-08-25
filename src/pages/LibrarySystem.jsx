import React from "react";
import { Link } from "react-router-dom";
import ComponentDiagram from '../assets/ComponentDiagram.png';
import factorypattern from '../assets/factorypattern.png';
export default function LibrarySystem() {
  return (
     <>
    <div className="github-logo">
      <a href="https://github.com/mixhael11/LibrarySystem" target="_blank">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Repo" className="github-logo" height="100px"/>
      </a>
    </div>
    <div className="page-content">
      <Link to="/">← Back to Home</Link>
      <h1>Library System</h1>
      <p>
        Developed a JavaFX-based GUI application in a team of 5, designed to streamline library operations for students, faculty, staff and visitors. The system allows users to register accounts with secure credentials, 
        borrow and track physical items such as books, magazines and CDs, access virtual textbooks for courses, subscribe to paid newsletters, and receive timely notifications about due dates and overdue items.
      </p>
      <p>
        Contributed to the requirments analysis, use case diagrams and activity diagrams, translating raw client requirements into detailed system specifications. Implemented data managemetn using CSV/Excel files and ensured robustness through automated testing and Randoop and version control with Git.

      </p>
      <img 
              src={ComponentDiagram} 
              alt="ComponentDiagram" 
              className="large-project-image"
            />
       <h2>Tech Stack</h2>
  <ul>
    <li><strong>Languages:</strong> Java</li>
    <li><strong>Libraries/Frameworks:</strong> JavaFX (GUI)</li>
    <li><strong>Tools:</strong> UMLet, Lucidchart, Draw.io (for diagrams), Git, Randoop</li>
    <li><strong>Techniques:</strong> Requirement analysis, Use Case modeling, Activity modeling, Sequence diagram design, Junit testing</li>
  </ul>
    </div>
    </>
  );
}
