import React, { useState, useEffect } from 'react';
import './media.css'; // CSS dosyasını içe aktarıyoruz

function Media() {
  const [news, setNews] = useState([]);
  const url = 'https://newsapi.org/v2/top-headlines?country=tr&apiKey=bf5ab742834e4cacbaa6edb32164aa1c';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.articles) {
          setNews(data.articles);
        }
      })
      .catch((error) => {
        console.error('Haberler alınamadı: ', error);
      });
  }, []);

  return (
    <div>
      <h1 className='header_news'>SELÇUK HABER TV</h1>
      <ul className="news-list"> {/* Haber kartlarını sarmak için bir liste kullanıyoruz */}
        {news.map((article, i) => (
          <li key={i} className="news-card"> {/* Haber kartlarını temsil etmek için bir sınıf ekliyoruz */}
            <h2>{article.title}</h2>
            <p>{article.author}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Habere Git
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Media;
