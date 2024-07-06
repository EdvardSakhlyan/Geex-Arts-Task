import client from "../client";

async function getNews() {
  const { data: news, error } = await client.from("news").select("*");

  console.error(error);

  return news;
}

export default getNews;
