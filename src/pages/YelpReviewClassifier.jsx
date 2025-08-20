import React from "react";
import { Link } from "react-router-dom";

export default function YelpReviewClassifier() {
  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← Back to Home</Link>
      <h1>Yelp Review Classifier</h1>
      <p>
        Built sentiment classification models in Python using XGBoost and spaCy.
        Achieved 84% accuracy with embeddings. Full pipeline included data cleaning,
        feature extraction, and hyperparameter tuning.
      </p>
    </div>
  );
}
