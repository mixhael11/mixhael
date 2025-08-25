import React from "react";
import { Link } from "react-router-dom";
import DistilRoBERTa from '../assets/distilbertaimage.png';
export default function YelpReviewClassifier() {
  return (
    <>
    <div className="github-logo">
      <a href="https://github.com/mixhael11/Yelp-Review-Classifer" target="_blank">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Repo" className="github-logo" height="100px"/>
      </a>
    </div>
    <div className="page-content">
      <Link to="/">← Back to Home</Link>
      <h1>Text Classificaction with Bag of Words and Embeddings</h1>
      <p>
        For this project, I set out to build a sentiment classifier and compare two approaches: the Bag of Words (BOW) method and modern text embeddings.
      </p>
      <p>
        With the BOW approach, I started by cleaning the text -- lowercasing, tokenizing, and removing punctuation and stop words. I then compared Random Forest, AdaBoost, and XGBoost and found that XGBoost consistently performed best.
        After applying SMOTE to balance the dataset and tuning hyperparameters like feature counts and estimator values, I was able to significantly improve the weighted F1 score, though the model still struggled with the neutral class.
        
      </p>
      <p>
        Next, I explored text embeddings using several Hugging Face models, including MiniLM, DistilRoBERTa, and MPNet. While embeddings were much more computationally expensive (taking up to 30 minutes per run compared to 5 minutes for BOW), they provided stronger results, raising the weighted F1 score to 0.84, especially after applying SMOTE to better handle the neutral class.

      </p>

      <p>
        In the end, I found that the Bag of Words approach was faster and more efficient, but embeddings captured semantic meaning more effectively, resulting in higher accuracy. This project helped me develop a deeper understanding of preprocessing, class rebalancing, model selection and the trade-offs between traditional and modern NLP techniques.
      </p>
      <img 
        src={DistilRoBERTa} 
        alt="DistilRoBERTa Model" 
        className="project-image"
      />
      <h2>Tech Stack</h2>
  <ul>
    <li><strong>Languages:</strong> Python</li>
    <li><strong>Libraries/Frameworks:</strong> scikit-learn, Hugging Face Transformers, XGBoost, Random Forest, AdaBoost</li>
    <li><strong>Techniques:</strong> Text preprocessing, Bag of Words, Text embeddings, SMOTE balancing, Hyperparameter tuning</li>
  </ul>
    </div>
    </>
  );
}
