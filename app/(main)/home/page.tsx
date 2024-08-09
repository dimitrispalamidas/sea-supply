"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  image: string | null;
}

const NewsCarousel = ({ articles }: { articles: NewsArticle[] }) => {
  return (
    <Carousel
      showArrows
      infiniteLoop
      showThumbs={false}
      autoPlay
      interval={3000}
      showStatus={false}
      className='news-carousel'
    >
      {articles.map((article, index) => (
        <div key={index} className='p-4 border rounded shadow'>
          <h3 className='text-lg font-semibold'>{article.title}</h3>
          <p className='text-gray-800'>{article.description}</p>
          {article.image ? (
            <div className='relative w-full h-56'>
              <Image
                alt={article.title}
                src={article.image}
                layout='fill'
                objectFit='cover'
                className='rounded'
              />
            </div>
          ) : (
            <p className='text-gray-500'>No image available</p>
          )}
          <a
            href={article.url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:underline'
          >
            Read more
          </a>
        </div>
      ))}
    </Carousel>
  );
};

const Home = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://gnews.io/api/v4/top-headlines",
          {
            params: {
              token: "00ffdc031906f952da33636a53812a41",
              lang: "en",
              max: 5,
            },
          }
        );
        setNews(response.data.articles);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className='min-h-screen'>
      <header className='text-gray-500 p-4'>
        <h1 className='text-3xl font-bold'>Welcome, [User]!</h1>
      </header>
      <section className='p-6 grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div className='bg-white p-4 shadow rounded'>
          <h2 className='text-xl font-semibold'>Order Status</h2>
          <p className='text-gray-700'>
            Current orders, pending approvals, recent deliveries...
          </p>
        </div>
        <div className='bg-white p-4 shadow rounded'>
          <h2 className='text-xl font-semibold'>Profile Overview</h2>
          <p className='text-gray-700'>Summary of your profile...</p>
        </div>
      </section>
      <section className='p-6'>
        <div className='bg-white p-4 shadow rounded mb-6'>
          <h2 className='text-xl font-semibold'>Global News</h2>
          {loading ? (
            <p>Loading news...</p>
          ) : error ? (
            <p className='text-red-500'>Error loading news: {error}</p>
          ) : (
            <NewsCarousel articles={news} />
          )}
        </div>
        <div className='bg-white p-4 shadow rounded'>
          <h2 className='text-xl font-semibold'>Weather Updates</h2>
          <p className='text-gray-700'>Real-time weather conditions...</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
