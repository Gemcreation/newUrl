import React, { useState } from 'react';

const LinkItem = ({ originalUrl, shortUrl }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="link-item">
      <div className="link-item__original">
        <p>{originalUrl}</p>
      </div>
      <div className="link-item__shortened">
        <p>{shortUrl}</p>
        <button 
          className={`btn btn-square ${copied ? 'btn--copied' : ''}`}
          onClick={handleCopy}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default LinkItem;
