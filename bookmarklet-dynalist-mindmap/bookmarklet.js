if(location.hostname == "dynalist.io"){
    const urlOutline = window.location.href;
    const re = new RegExp("https://dynalist.io/d/(.+)");
    const urlMindmap = urlOutline.replace(re, "https://dynalist.io/mindmap/$1");
    // console.log(urlMindmap);
    window.location = urlMindmap;
}