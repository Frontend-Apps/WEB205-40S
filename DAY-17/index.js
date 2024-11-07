function fetchUsers() {
  fetch("https://masai-7b971-default-rtdb.firebaseio.com/users.json", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => displayUsers(data))
    .catch((err) => console.log(err));
}

fetchUsers();

function displayUsers(data) {
  document.querySelector("#container").innerHTML = "";
  let users = Object.entries(data);
  users.forEach(function (elem) {
    let userId = elem[0];
    let { email, name } = elem[1];
    document.querySelector("#container").innerHTML += `
        <div class="border ">
                <h2 class="text-red-500">${name.toUpperCase()}</h2>
                <p>${email}</p>
                <button id="delete-btn" onclick="deleteUser('${userId}')">Delete</button>
                <button id="edit-btn" onclick="editUser('${userId}')">Edit</button>
        </div>
`;
  });
}

function editUser(userId) {
  console.log(userId);
  window.location.href = `editUser.html?id=${userId}`;
}

function deleteUser(userId) {
  console.log(userId);
  fetch(
    `https://masai-7b971-default-rtdb.firebaseio.com/users/${userId}.json`,
    {
      method: "DELETE",
    }
  )
    .then((res) => res.json())
    .then(() => {
      fetchUsers();
    });
}
