import { useEffect, useState } from "react";
import NewsPaper from "../../components/NewsPaper";
import INew from "../../types/news";
import getNews from "../../supabase/services/getNews";
import Loader from "../../components/Loader";

const NewsContainer = () => {
  const [news, setNews] = useState<INew[] | null>(null);

  useEffect(() => {
    void getNews().then(setNews).catch(console.error);
  }, []);

  if (news) {
    return (
      <>
        {news.map(
          ({ comments, date, description, title, views, images, videoUrl }) => {
            return (
              <NewsPaper
                comments={comments}
                commentsCount={comments?.length || 0}
                date={date}
                description={description}
                title={title}
                views={views}
                images={images}
                videoUrl={videoUrl}
              />
            );
          }
        )}
      </>
    );
  }

  return <Loader />;
};

export default NewsContainer;
