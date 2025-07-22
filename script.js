
function uploadVideo() {
  const file = document.getElementById('upload-input').files[0];
  if (file) {
    alert("Video uploaded: " + file.name);
    // Future: send to backend
  }
}

function startStudio() {
  alert("Launching online film studio...");
  // Future: integrate with webcam/recording
}
