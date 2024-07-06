import client from "../client";

async function getEvent() {
  const { data: event, error } = await client.from("event").select("*");

  console.error(error);

  return event?.[0];
}

export default getEvent;
