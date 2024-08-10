import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export interface NewsProps {
  title: string;
  description: string;
  url: string;
  socialimage: string | null;
}

export const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "http://api.gdeltproject.org/api/v2/doc/doc?",
          {
            params: {
              query: "vessel", // Customize your query as needed
              mode: "ArtList", // Use ArtList to get articles
              maxrecords: 20, // Limit the number of records
              format: "json",
              sourcelang: "english",
            },
          }
        );
        console.log(response.data);
        setNews(response.data.articles); // This might vary depending on the response structure of GDELT
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

  return { news, loading, error };
};

export const NewsCarousel = ({ articles }: { articles: NewsProps[] }) => {
  return (
    <Carousel
      showArrows
      infiniteLoop
      showThumbs={false}
      autoPlay
      interval={5000}
      showStatus={false}
      className='news-carousel'
    >
      {articles.map((article, index) => (
        <div key={index} className='p-4 border rounded shadow'>
          <h3 className='text-lg font-semibold'>{article.title}</h3>
          <p className='text-gray-800'>{article.description}</p>
          {article.socialimage ? (
            <div className='relative w-full h-56'>
              <Image
                alt={article.title}
                src={article.socialimage}
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
