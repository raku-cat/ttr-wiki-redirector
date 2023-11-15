const hostname = location.hostname;
const pathname = location.pathname;
const newWiki = "https://toontownrewritten.wiki";
const oldWiki = "toontownrewritten.fandom.com";


if (hostname === oldWiki || hostname.startsWith("www.google")) {
  if (pathname.startsWith("/wiki/") && hostname === oldWiki) {
    let convertedPath = convertWiki(pathname);
    let newURL = constructNewURL(convertedPath);
    window.location.replace(newURL);
  }

  else if (hostname.startsWith("www.google")) {
    let oldWikiResult = getResult();
    oldWikiResult.forEach(result => {
      result.removeAttribute("onmousedown");
      let oldWikiPath = result.href.split(oldWiki)[1];
      let newWikiPath = convertWiki(oldWikiPath);
      result.href = constructNewURL(newWikiPath);
      console.log(result)
      if (result.querySelector("cite")) {
        result.querySelector("cite").textContent = constructNewURL(newWikiPath);
      }
    });
  }
}

function convertWiki(oldWikiPath) {
  return oldWikiPath.replace("/wiki/", "/");
}

function getResult() {
  let oldWikiResult = document.querySelectorAll("a[href*='" + oldWiki + "']");
  return oldWikiResult.length ? oldWikiResult : null;
}

function constructNewURL(path) {
  return newWiki + path;
}