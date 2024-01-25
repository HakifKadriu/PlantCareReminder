// const axios = require('axios');
import axios from "axios";

// let contentUrl =
//   "https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=revisions&rvprop=content&format=json&titles=";

function fetchWikiExtract(param) {
  let wikiEndpoint = "https://simple.wikipedia.org/w/api.php";
  let wikiParams =
    "?action=query" +
    "&prop=extracts" +
    // "&exsentences=2" + // veq dy fjalit e para
    "&exlimit=1" +
    "&titles=" +
    "Aglaonema" + //e specifikojna se cilit artikull me ja marr t'dhanat
    "&format=json" +
    "&formatversion=2" + // vizualizim ma i kuptueshem
    "&origin=*"; // bypass CORS error, pa ta s'funksionon

  const wikiLink = wikiEndpoint + wikiParams;

  var wikiConfig = {
    timeout: 6500,
  };

  async function getJsonResponse(url, config) {
    const res = await axios.get(url, config);
    return res.data; //opens up veq layerin e par tjson files
  }

  return getJsonResponse(wikiLink, wikiConfig)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
}

const fetchData = async () => {

    let wikiEndpoint = "https://simple.wikipedia.org/w/api.php";
    let wikiParams =
      "?action=query" +
      "&prop=extracts" +
      // "&exsentences=2" + // veq dy fjalit e para
      "&exlimit=1" +
      "&titles=" +
      "Aglaonema" + //e specifikojna se cilit artikull me ja marr t'dhanat
      "&format=json" +
      "&formatversion=2" + // vizualizim ma i kuptueshem
      "&origin=*"; // bypass CORS error, pa ta s'funksionon
  
    const wikiLink = wikiEndpoint + wikiParams;


    const response = await fetch(wikiLink);
    // const dataa = await wikiLink.json();
    console.log(wikiLink);
    console.log(response.query.pages[0].extract);
};

export default fetchData;
