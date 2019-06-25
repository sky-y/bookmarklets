const urlOutline = "https://dynalist.io/d/CWpI8XVImyGQ7f2tLmB_7z7k#z=ueW6b-FKoI9cAC8Qa52px_E-";
const re = new RegExp("https://dynalist.io/d/(.+)");
const urlMindmap = urlOutline.replace(re, "https://dynalist.io/mindmap/$1");

console.log(urlMindmap);