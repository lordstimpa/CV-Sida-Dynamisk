let url = "script/cv.json";

async function getData() {
  let response = await fetch(url);

  if (response.ok) {
    let data = await response.json();

    console.log(data);

    // create the div container for ***EDUCATION**
    // and all the created elements and data it contains from JSON file
    let eduContainer = document.getElementById("education");
    let eduDiv = document.createElement("div");
    eduContainer.appendChild(eduDiv);

    let eduH2 = document.createElement("h2");
    eduH2.innerHTML = data.titleOne;
    eduDiv.appendChild(eduH2);

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
      eduDiv.appendChild(eduH3);
      eduDiv.appendChild(eduH4);
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
    let workContainer = document.getElementById("work");
    let workDiv = document.createElement("div");
    workContainer.appendChild(workDiv);

    let workH2 = document.createElement("h2");
    workH2.innerHTML = data.titleTwo;
    workDiv.appendChild(workH2);

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
      workDiv.appendChild(workH3);
      workDiv.appendChild(workH4);
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

    // create the div container for ***MERITS*** and all it contains
    // and all the created elements and data it contains from JSON file
    let meritsContainer = document.getElementById("merits");
    let meritsDiv = document.createElement("div");
    meritsContainer.appendChild(meritsDiv);

    let meritsH2 = document.createElement("h2");
    meritsH2.innerHTML = data.titleThree;
    meritsDiv.appendChild(meritsH2);

    for (let item in data.Merits) {
      let meritH3 = document.createElement("h3");
      meritH3.setAttribute("id", "merit" + item);
      meritH3.innerHTML = data.Merits[item].Merit;
      meritsDiv.appendChild(meritH3);
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

    console.log("async function");
  } else {
    console.log("HTTP-Error: " + response.status);
  }
}

getData();
