import { useState, useEffect } from "react";
import axios from "axios";

export interface NewsProps {
  title: string;
  description: string;
  url: string;
  socialimage: string | null;
}

export const useNews = () => {
  const [news, setNews] = useState<NewsProps[]>([]);
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
              maxrecords: 10, // Limit the number of records
              format: "json",
              sourcelang: "english",
            },
          }
        );
        setNews(response.data.articles); // Adjust if needed based on API response structure
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
