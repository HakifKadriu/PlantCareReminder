const axios = require('axios');

// let contentUrl =
//   "https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=revisions&rvprop=content&format=json&titles=";

function fetchWikiExtract() {
  let wikiEndpoint = "https://simple.wikipedia.org/w/api.php";
  let wikiParams =
    "?action=query" +
    "&prop=extracts" +
    "&exsentences=10" + // veq dy fjalit e para
    "&exlimit=1" +
    "&titles=" + "Houseplant" + //e specifikojna se cilit artikull me ja marr t'dhanat
    "&format=json" +
    "&formatversion=2" + // vizualizim ma i kuptueshem
    "&origin=*"; // bypass CORS error, pa ta s'funksionon

    const wikiLink = wikiEndpoint + wikiParams;
    console.log(wikiLink);
}

export default fetchWikiExtract;
