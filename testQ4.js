var url = "https://en.wikipedia.org/wiki/Document"
var response = require("axios");
var getData = response.get(url);
getData.then((data)=>{
    console.log("data scraped")
})
.catch((err)=>{
    console.log("ops!! something went wrong")
})
console.log("welcome")



// var fs = require("fs");
// fs.readFile('testQ5.js','utf8',fileContent);
// function fileContent(err,data) {
//   if(!err) {
//      console.log("file scraped");
//   }
// }
// console.log("---welcome---")