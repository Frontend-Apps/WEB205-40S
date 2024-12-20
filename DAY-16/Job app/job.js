let jobData = [];
function fetchJobs() {
  let sortBy = document.querySelector("#sort").value;
  let filterBy = document.querySelector("#filter").value;
  let apiURL = "https://66e6aa9517055714e58a3149.mockapi.io/jobs";
  if (filterBy === "ft") {
    apiURL += "?fullTime=true";
  } else if (filterBy === "pt") {
    apiURL += "?fullTime=false";
  }
  if (sortBy === "asc" || sortBy === "desc") {
    apiURL += `?sortBy=salary&order=${sortBy}`;
  }
  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      jobData = data;
      displayCards(data);
    });
}
fetchJobs();

function displayCards(data) {
  document.querySelector("#job-list").innerHTML = "";
  data.forEach(function (elem) {
    let date = elem.createdAt.split("T")[0];
    document.querySelector("#job-list").innerHTML += `
        <div class="job-card">
                <div class="date">${date}</div>
                <div class="job-content">
                        <h2>${elem.company_name}</h2>
                        <p>${elem.job}</p>
                        <div class="job-tags">
                        <span>${
                          elem.fullTime ? "Full Time" : "Part Time"
                        }</span>
                        <span>${elem.country}</span>
                        <span>Openings:${elem.openings}</span>
                        </div>
                </div>
                <div class="job-footer">
                        <p>$${elem.salary}/hr</p>
                        <a href="#">Details</a>
                </div>
        </div>
                `;
  });
}
