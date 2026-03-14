import React, { useState, useEffect } from 'react';
import LinkItem from './LinkItem';

const UrlShortener = () => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [links, setLinks] = useState(() => {
    const saved = localStorage.getItem('shortenedLinks');
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('shortenedLinks', JSON.stringify(links));
  }, [links]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url.trim()) {
      setError('Please add a link');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const response = await fetch('https://cleanuri.com/api/v1/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ url: url }),
      });

      if (!response.ok) {
        throw new Error('Failed to shorten url');
      }

      const data = await response.json();
      
      const newLink = {
        originalUrl: url,
        shortUrl: data.result_url
      };

      setLinks([newLink, ...links]);
      setUrl('');
      
    } catch (err) {
      setError('An error occurred. Please check the URL and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="url-manager container">
      <div className="url-shortener">
        <form className="url-shortener__form" onSubmit={handleSubmit}>
          <div className="url-shortener__input-container">
            <input
              type="text"
              className={`url-shortener__input ${error ? 'error' : ''}`}
              placeholder="Shorten a link here..."
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                if (error) setError('');
              }}
            />
            {error && <span className="url-shortener__error-msg">{error}</span>}
          </div>
          <button type="submit" className="btn btn-square url-shortener__btn" disabled={loading}>
            {loading ? 'Shortening...' : 'Shorten It!'}
          </button>
        </form>
      </div>

      <div className="url-results">
        {links.map((link, index) => (
          <LinkItem 
            key={index} 
            originalUrl={link.originalUrl} 
            shortUrl={link.shortUrl} 
          />
        ))}
      </div>
    </section>
  );
};

export default UrlShortener;
