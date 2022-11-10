let urlPortfolioImg = "./script/project-img.json";
let urlPortfolioGit = "https://api.github.com/users/lordstimpa/repos";

async function getDataPortfolio() {
  let response = await fetch(urlPortfolioImg);
  let response2 = await fetch(urlPortfolioGit);

  if (response.ok && response2.ok) {
    let dataImg = await response.json();
    let dataGit = await response2.json();

    // Log JSON data in console
    console.log(dataImg);
    console.log(dataGit);

    let rockImg = document.getElementById("rock-paper-scissors");
    let rockGit = document.getElementById("rockGit");

    let pigImg = document.getElementById("pig-game");
    let pigGit = document.getElementById("pigGit");

    let img1 = document.createElement("img");
    img1.setAttribute("class", "website");
    img1.src = dataImg[0].src;
    pigImg.appendChild(img1);
    pigGit.href = dataGit[4].html_url;

    let img2 = document.createElement("img");
    img2.setAttribute("class", "website");
    img2.src = dataImg[1].src;
    rockImg.appendChild(img2);
    rockGit.href = dataGit[6].html_url;

    console.log("async function");
  } else {
    console.log("HTTP-Error:" + response.status + response2.status);
  }
}

getDataPortfolio();
