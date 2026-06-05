let fund = JSON.parse(localStorage.getItem("fund")) || {
  goal: 5000,
  raised: 120
};

let comments = JSON.parse(localStorage.getItem("comments")) || [];

/* ---------------- FUND ---------------- */

function renderFund(){
  let percent = (fund.raised / fund.goal) * 100;

  let stats = document.getElementById("stats");
  if(stats){
    stats.innerText = `$${fund.raised} raised of $${fund.goal}`;
    document.getElementById("bar").style.width = percent + "%";
  }

  localStorage.setItem("fund", JSON.stringify(fund));
}

renderFund();

/* ---------------- COMMENTS ---------------- */

function renderComments(){
  let box = document.getElementById("comments");
  if(!box) return;

  box.innerHTML = "";

  comments.forEach(c => {
    box.innerHTML += `
      <div class="comment">
        <b>${c.name}</b>
        <p>${c.text}</p>
      </div>
    `;
  });
}

function addComment(){
  comments.push({
    name: document.getElementById("name").value,
    email: document.getElementById("email").value, // private
    text: document.getElementById("text").value
  });

  localStorage.setItem("comments", JSON.stringify(comments));
  renderComments();
}

/* ---------------- ADMIN ---------------- */

function login(){
  let pass = document.getElementById("pass").value;

  if(pass === "admin123"){
    document.getElementById("panel").style.display = "block";
  } else {
    alert("Wrong password");
  }
}

function updateFund(){
  fund.goal = Number(document.getElementById("goal").value);
  fund.raised = Number(document.getElementById("raised").value);

  localStorage.setItem("fund", JSON.stringify(fund));
  alert("Updated");
}

function resetData(){
  localStorage.clear();
  location.reload();
}

/* INIT */
renderFund();
renderComments();
