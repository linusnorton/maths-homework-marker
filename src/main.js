import './style.css'

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const video = document.getElementById('video');

// Get access to the camera!
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  const options = {
    video: {
      facingMode: 'environment'
    },
    audio: false
  };
  navigator.mediaDevices.getUserMedia(options).then(function(stream) {
    //video.src = window.URL.createObjectURL(stream);
    video.srcObject = stream;
    video.play();
  });
}

// Trigger photo take
document.getElementById("snap").addEventListener("click", function() {
  context.drawImage(video, 0, 0, 640, 480);
});
