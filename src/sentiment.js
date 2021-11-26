// User text -> google api -> sentiment numbers

async function getSentiment(story) {
  const url = new URL("https://sentim-api.herokuapp.com/api/v1/");

  if (story === "") return null;

  // prettier-ignore
  let sBody = { "text": story };
  let jsonBody = JSON.stringify(sBody);

  let sHeaders = new Headers();
  sHeaders.append("Accept", "application/json");
  sHeaders.append("Content-Type", "application/json");

  let init = {
    method: "POST",
    headers: sHeaders,
    body: jsonBody,

    mode: "cors",
    cache: "default",
  };

  let req = new Request(url, init);

  const res = await fetch(req);
  const resJson = await res.json();
  let polarity = resJson.result.polarity;
  return polarity;
}
export default getSentiment;
