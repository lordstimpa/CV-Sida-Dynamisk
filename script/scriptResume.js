let urlResume = "script/cv.json";
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

async function getDataResume() {
  displayLoading();
  let response = await fetch(urlResume);

  if (response.ok) {
    hideLoading();
    let data = await response.json();

    console.log(data);

    // create a total of 6 sections
    // 3 sections for all data containing under the 3 headers
    let sectionContainer = document.querySelector(".wrap-resume");

    for (let i = 0; i < 6; i++) {
      let section = document.createElement("section");
      section.setAttribute("id", "section" + i);
      sectionContainer.appendChild(section);
    }

    // 3 sections for img
    let img0 = document.createElement("img");
    img0.setAttribute("id", "img0");
    img0.src = "/img/hatt.png";
    let src = document.getElementById("section0");
    src.appendChild(img0);

    let img1 = document.createElement("img");
    img1.setAttribute("id", "img1");
    img1.src = "/img/bag.png";
    let src1 = document.getElementById("section2");
    src1.appendChild(img1);

    let img2 = document.createElement("img");
    img2.setAttribute("id", "img2");
    img2.src = "/img/medal.png";
    let src2 = document.getElementById("section4");
    src2.appendChild(img2);

    // create the div container for ***EDUCATION**
    // and all the created elements and data it contains from JSON file
    let eduContainer = document.getElementById("section1");
    let eduDiv = document.createElement("div");
    eduContainer.appendChild(eduDiv);

    let eduH2 = document.createElement("h2");
    eduH2.setAttribute("id", "educationH2");
    eduH2.innerHTML = data.titleOne;
    eduDiv.appendChild(eduH2);

    let eduDivAnim = document.createElement("div");
    eduDivAnim.setAttribute("id", "eduDivAnim");
    eduDiv.appendChild(eduDivAnim);

    for (let item in data.Education) {
      let eduH3 = document.createElement("h3");
      let eduH4 = document.createElement("h4");
      eduH4.setAttribute("id", "education" + item);
      eduH3.innerHTML = data.Education[item].EducationalLevel;
      eduH4.innerHTML =
        data.Education[item].Date.Start.Year +
        " - " +
        data.Education[item].Date.End.Year +
        "<br> Field of Study: " +
        data.Education[item].FieldOfStudy +
        "<br> Specialization: " +
        data.Education[item].Specialization +
        "<br> School: " +
        data.Education[item].School +
        "<br> Location: " +
        data.Education[item].Location.City +
        ", " +
        data.Education[item].Location.Country;
      eduDivAnim.appendChild(eduH3);
      eduDivAnim.appendChild(eduH4);
    }

    let eduUl = document.createElement("ul");
    document.getElementById("education0").after(eduUl);

    for (let i = 0; i < data.Education[0].Courses.length; i++) {
      let eduLi = document.createElement("li");
      eduLi.innerHTML = data.Education[0].Courses[i];
      eduUl.appendChild(eduLi);
    }

    // create the div container for ***WORK***
    // and all the created elements and data it contains from JSON file
    let workContainer = document.getElementById("section3");
    let workDiv = document.createElement("div");
    workContainer.appendChild(workDiv);

    let workH2 = document.createElement("h2");
    workH2.setAttribute("id", "workH2");
    workH2.innerHTML = data.titleTwo;
    workDiv.appendChild(workH2);

    let workDivAnim = document.createElement("div");
    workDivAnim.setAttribute("id", "workDivAnim");
    workDiv.appendChild(workDivAnim);

    for (let item in data.WorkExperience) {
      let workH3 = document.createElement("h3");
      let workH4 = document.createElement("h4");
      workH4.setAttribute("id", "work" + item);
      workH3.innerHTML = data.WorkExperience[item].FieldOfWork;
      workH4.innerHTML =
        data.WorkExperience[item].Date.Start.Month +
        " " +
        data.WorkExperience[item].Date.Start.Year +
        " - " +
        data.WorkExperience[item].Date.End.Month +
        " " +
        data.WorkExperience[item].Date.End.Year +
        "<br> Company: " +
        data.WorkExperience[item].Company +
        "<br> Location: " +
        data.WorkExperience[item].Location.City +
        ", " +
        data.WorkExperience[item].Location.Country;
      workDivAnim.appendChild(workH3);
      workDivAnim.appendChild(workH4);
    }

    let workUl0 = document.createElement("ul");
    document.getElementById("work0").after(workUl0);
    let workUl1 = document.createElement("ul");
    document.getElementById("work1").after(workUl1);
    let workUl2 = document.createElement("ul");
    document.getElementById("work2").after(workUl2);

    for (let i = 0; i < data.WorkExperience[0].Responsibilities.length; i++) {
      let workLi = document.createElement("li");
      workLi.innerHTML = data.WorkExperience[0].Responsibilities[i];
      workUl0.appendChild(workLi);
    }
    for (let i = 0; i < data.WorkExperience[1].Responsibilities.length; i++) {
      let workLi = document.createElement("li");
      workLi.innerHTML = data.WorkExperience[1].Responsibilities[i];
      workUl1.appendChild(workLi);
    }
    for (let i = 0; i < data.WorkExperience[2].Responsibilities.length; i++) {
      let workLi = document.createElement("li");
      workLi.innerHTML = data.WorkExperience[2].Responsibilities[i];
      workUl2.appendChild(workLi);
    }

    // create the div container for ***MERITS***
    // and all the created elements and data it contains from JSON file
    let meritsContainer = document.getElementById("section5");
    let meritsDiv = document.createElement("div");
    meritsContainer.appendChild(meritsDiv);

    let meritsH2 = document.createElement("h2");
    meritsH2.setAttribute("id", "meritsH2");
    meritsH2.innerHTML = data.titleThree;
    meritsDiv.appendChild(meritsH2);

    let meritsDivAnim = document.createElement("div");
    meritsDivAnim.setAttribute("id", "meritsDivAnim");
    meritsDiv.appendChild(meritsDivAnim);

    for (let item in data.Merits) {
      let meritH3 = document.createElement("h3");
      meritH3.setAttribute("id", "merit" + item);
      meritH3.innerHTML = data.Merits[item].Merit;
      meritsDivAnim.appendChild(meritH3);
    }

    let meritDateCert = document.createElement("h4");
    document.getElementById("merit0").after(meritDateCert);
    meritDateCert.innerHTML =
      "Issued " +
      data.Merits[0].Date.Month +
      " " +
      data.Merits[0].Date.Year +
      "<br> Credential ID: " +
      data.Merits[0].CredentialId;

    let meritDateDrive = document.createElement("h4");
    document.getElementById("merit1").after(meritDateDrive);
    meritDateDrive.innerHTML =
      "Issued " +
      data.Merits[1].Date.Month +
      " " +
      data.Merits[1].Date.Year +
      "<br>Type: " +
      data.Merits[1].Type;

    let meritProgUl = document.createElement("ul");
    document.getElementById("merit2").after(meritProgUl);

    for (let i = 0; i < data.Merits[2].Programs.length; i++) {
      let meritProgLi = document.createElement("li");
      meritProgLi.innerHTML = data.Merits[2].Programs[i];
      meritProgUl.appendChild(meritProgLi);
    }

    let meritDateMed = document.createElement("h4");
    document.getElementById("merit3").after(meritDateMed);
    meritDateMed.innerHTML =
      "Issued: " +
      data.Merits[3].Date.Start.Year +
      " - " +
      data.Merits[3].Date.End.Year;

    // ON-click function to make div that contains data
    // appear when h2 is clicked.

    let div1 = document.getElementById("eduDivAnim");
    let div2 = document.getElementById("workDivAnim");
    let div3 = document.getElementById("meritsDivAnim");

    document.getElementById("educationH2").onclick = function () {
      if (div1.style.display === "block") {
        div1.style.display = "none";
      } else {
        div1.style.display = "block";
      }
    };
    document.getElementById("workH2").onclick = function () {
      if (div2.style.display === "block") {
        div2.style.display = "none";
      } else {
        div2.style.display = "block";
      }
    };
    document.getElementById("meritsH2").onclick = function () {
      if (div3.style.display === "block") {
        div3.style.display = "none";
      } else {
        div3.style.display = "block";
      }
    };
    console.log("async function");
  } else {
    console.log("HTTP-Error: " + response.status);
  }
}

getDataResume();
