let urlPortfolioImg = "./script/project-img.json";
let urlPortfolioGit = "https://api.github.com/users/lordstimpa/repos";
const loader = document.querySelector("#loading");

function displayLoading() {
  loader.classList.add("display");
  setTimeout(() => {
    loader.classList.remove("display");
  }, 3000);
}

function hideLoading() {
  loader.classList.remove("display");
}

async function getDataPortfolio() {
  displayLoading();
  let response = await fetch(urlPortfolioImg);
  let response2 = await fetch(urlPortfolioGit);

  if (response.ok && response2.ok) {
    let dataImg = await response.json();
    let dataGit = await response2.json();
    hideLoading();
    // Log JSON data in console
    console.log(dataImg);
    console.log(dataGit);

    let rockImg = document.getElementById("rock-paper-scissors");
    let rockGit = document.getElementById("rockGit");

    let pigImg = document.getElementById("pig-game");
    let pigGit = document.getElementById("pigGit");

    let pigTitle = document.getElementById("pigTitle");
    let modalTitlePig = document.getElementById("modalTitlePig");

    let rockTitle = document.getElementById("rockTitle");
    let modalTitleRock = document.getElementById("modalTitleRock");

    pigTitle.innerHTML = dataGit[3].name;
    modalTitlePig.innerHTML = dataGit[3].name;

    rockTitle.innerHTML = dataGit[5].name;
    modalTitleRock.innerHTML = dataGit[5].name;

    let img1 = document.createElement("img");
    img1.setAttribute("class", "website");
    img1.src = dataImg[0].src;
    pigImg.appendChild(img1);
    pigGit.href = dataGit[3].html_url;

    let img2 = document.createElement("img");
    img2.setAttribute("class", "website");
    img2.src = dataImg[1].src;
    rockImg.appendChild(img2);
    rockGit.href = dataGit[5].html_url;

    console.log("async function");
  } else {
    console.log("HTTP-Error:" + response.status + response2.status);
  }
}

getDataPortfolio();
