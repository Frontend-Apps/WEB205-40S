let limit = 10;
let currentPage = 1;

function fetchJobs() {
  let apiURL = `https://66e6aa9517055714e58a3149.mockapi.io/jobs?page=${currentPage}&limit=${limit}`;

  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      jobData = data;
      displayCards(data);
      //update page number
      document.querySelector("span").innerText = currentPage;
    });
}
fetchJobs();

function changePage(direction) {
  console.log(direction);
  if (direction === "next") {
    currentPage++;
  } else if (direction === "prev" && currentPage > 1) {
    currentPage--;
  }

  fetchJobs();
}

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
                        <a href="jobDetails.html?id=${elem.id}">Details</a>
                </div>
        </div>
                `;
  });
}
