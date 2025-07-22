const storageKey = 'betmob_videos';

document.addEventListener("DOMContentLoaded", () => {
  const uploadForm = document.getElementById("uploadForm");
  const videoList = document.getElementById("videoList");
  const library = document.getElementById("library");
  const loginForm = document.getElementById("loginForm");

  const videos = JSON.parse(localStorage.getItem(storageKey) || "[]");
  const user = localStorage.getItem("betmob_user");

  if (uploadForm) {
    uploadForm.onsubmit = e => {
      e.preventDefault();
      const title = document.getElementById("title").value;
      const price = document.getElementById("price").value;
      videos.push({ title, price, views: 0 });
      localStorage.setItem(storageKey, JSON.stringify(videos));
      alert("Video uploaded (simulated)!");
    };
  }

  if (videoList) {
    videos.forEach((v, i) => {
      const div = document.createElement("div");
      div.innerHTML = `<b>${v.title}</b> - $${v.price} | Views: ${v.views}
        <button onclick="watch(${i})">Watch</button>`;
      videoList.appendChild(div);
    });
  }

  if (library) {
    library.innerHTML = "<h3>Your Videos</h3>";
    videos.forEach(v => {
      library.innerHTML += `<p>${v.title} - $${v.price} | ${v.views} views</p>`;
    });
  }

  if (loginForm) {
    loginForm.onsubmit = e => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      localStorage.setItem("betmob_user", username);
      alert("Logged in as " + username);
      window.location.href = "index.html";
    };
  }
});

function watch(index) {
  const videos = JSON.parse(localStorage.getItem("betmob_videos") || "[]");
  videos[index].views++;
  localStorage.setItem("betmob_videos", JSON.stringify(videos));
  alert("Thanks for watching! You earned $0.10 (simulated)");
  location.reload();
}