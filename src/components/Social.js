import React from 'react';

const Social = () => {
  return (
<>
  <div className="social-wrapper">
    <ul className="social">
      <li>
        <a href="https://www.linkedin.com/in/yann-tarot/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/YannTarot" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/yann.tarot/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
      </li>
      <li>
        <a href="http://www.twitter.com/yann_tarot" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
    </ul>
  </div>
</>
  );
};

export default Social;
