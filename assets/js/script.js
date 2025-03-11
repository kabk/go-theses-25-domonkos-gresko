


// we make sure the JavaScript file loads after our HTML by using a function test if the HTML is loaded

function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
      // call on next available tick
      setTimeout(fn, 1);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}   



docReady(function() {

	// functions
	// go
	// here

});











// const audio = document.getElementById("audio1");
// const playPauseBtn = document.getElementById("playPauseBtn");
// const progress = document.getElementById("progress");

// playPauseBtn.addEventListener("click", () => {
//     if (audio.paused) {
//         audio.play();
//         playPauseBtn.innerHTML = "&#10074;&#10074;"; // ❚❚ as HTML entities
//     } else {
//         audio.pause();
//         playPauseBtn.innerHTML = "&#9658;"; // ▶ as HTML entities
//     }
// });

// audio.addEventListener("timeupdate", () => {
//     const percentage = (audio.currentTime / audio.duration) * 100;
//     progress.style.width = `${percentage}%`;
// });

document.querySelectorAll(".rectangle").forEach(container => {
    const audio = container.querySelector("audio");
    const playPauseBtn = container.querySelector(".play-button");
    const progress = container.querySelector(".progress");

    playPauseBtn.addEventListener("click", () => {
        if (audio.paused) {
            // Pause all other audio elements before playing the current one
            document.querySelectorAll("audio").forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                    otherAudio.closest(".rectangle").querySelector(".play-button").innerHTML = "&#9658;";
                }
            });

            audio.play();
            playPauseBtn.innerHTML = "&#10074;&#10074;"; // ❚❚
        } else {
            audio.pause();
            playPauseBtn.innerHTML = "&#9658;"; // ▶
        }
    });

    audio.addEventListener("timeupdate", () => {
        const percentage = (audio.currentTime / audio.duration) * 100;
        progress.style.width = `${percentage}%`;
    });

    // Optional: Reset button when audio ends
    audio.addEventListener("ended", () => {
        playPauseBtn.innerHTML = "&#9658;"; // ▶
    });
});












// function updateMaskSize() {
//     const mask = document.querySelector(".png-mask");
  
//     if (!mask) return;
  
//     // Reapply size to ensure it stretches across the full viewport
//     mask.style.width = `${window.innerWidth}px`;
//     mask.style.height = `${window.innerHeight}px`;
//   }
  
//   // Event listener for window resize, zooming, and orientation changes
//   window.addEventListener("resize", updateMaskSize);
//   window.addEventListener("orientationchange", updateMaskSize);
//   window.addEventListener("load", updateMaskSize);












function updateMaskHeight() {
    document.querySelector(".png-mask").style.height = `${window.innerHeight}px`;
  }
  
  window.addEventListener("resize", updateMaskHeight);
  window.addEventListener("load", updateMaskHeight);
  window.addEventListener("orientationchange", updateMaskHeight);






// document.addEventListener('touchmove', function (e) {
//     e.preventDefault(); // Prevent zooming on touch devices
//   }, { passive: false });




  

// const audio = document.getElementById("audio1");
// const playPauseBtn = document.getElementById("playPauseBtn");
// const playSvgPath = document.querySelector("#play-svg path");
// const progress = document.getElementById("progress");

// const playIconPath = "m155.58,64.95c-.18-.24-.31-.55-.31-.8,0-.49.06-.8.18-.98.06-.12.12-.31.12-.55s-.12-.8-.49-1.59c-.37-.73-.98-1.96-1.83-3.49-.49-1.04-1.1-1.9-1.9-2.51-.8-.67-1.71-1.22-2.87-1.77h-.31c-.67,0-1.16-.37-1.35-1.16-1.16,0-2.14-.31-2.94-.98-.79-.61-1.71-.98-2.87-.98h-2.69c-1.1,0-1.9-.06-2.39-.18-.43-.12-1.22-.43-2.32-.98,1.1,0,.98-.18-.37-.55-1.35-.43-2.45-.61-3.36-.61-.49-.24-.8-.49-1.04-.8-.18-.24-.55-.37-.98-.37h-1.04c-1.77-.49-3.85-1.04-6.05-1.53-2.26-.55-4.53-1.47-6.79-2.75-2.94-.49-5.69-1.35-8.32-2.51-2.57-1.16-5.81-3.18-9.6-6.05-1.35-.24-2.75-.61-4.1-1.16-1.1-.49-2.32-.92-3.55-1.16-1.22-.24-2.2-.49-2.87-.8v.8l-6.42-3.12c-.43,0-1.35-.37-2.69-1.16-1.35-.73-2.81-1.77-4.4-3.12-1.83-1.04-3.85-2.45-6.12-4.28-2.45-1.28-4.83-2.2-7.09-2.69-2.26-.55-4.28-1.04-6.05-1.53-2.94-1.35-5.57-2.2-7.83-2.75-2.2-.55-4.04-1.04-5.38-1.59-3.36,0-5.87.73-7.46,2.2q-.06.06-.12.12c.06-.24.12-.49.18-.73-1.28-2.2-3.18-4.16-5.5-5.75-2.39-1.53-4.77-2.81-7.28-3.67-2.51-.92-4.89-1.59-7.09-2.08-2.2-.43-3.73-.67-4.53-.67C5.14.24,3.31,0,2.27,0H.31C-.24,4.28-.06,7.71.86,10.15c.98,2.51,2.2,4.95,3.73,7.46-2.08,3.36-2.39,6.48-.98,9.3,1.47,2.81,2.2,5.38,2.2,7.58l1.16,18.96c1.04,4.28,1.28,8.38.61,12.17-.67,3.85-.18,7.03,1.35,9.48,0,6.54,1.16,13.58,3.36,21.16s4.4,14.98,6.48,22.14c.8,1.16,2.14,2.14,3.97,2.87,1.83.8,3.67,1.41,5.5,1.9,1.83.43,3.55.8,5.08,1.04,1.59.18,2.63.43,3.18.67l.8-3.73c.24-.98.49-1.96.67-2.94.43-.06.92-.24,1.41-.37,3.49-1.04,6.73-2.39,9.66-3.91l5.38-2.32c0,.8.67.37,2.02-1.16,1.41-1.04,3.55-2.2,6.48-3.49,2.94-1.35,5.75-2.2,8.44-2.75.43-.55.98-1.04,1.65-1.53.49-.55,1.1-.98,1.9-1.41.8-.37,1.53-.8,2.2-1.35.67,0,1.04-.37,1.04-1.16h.98c1.83-.49,3.79-1.35,5.93-2.51,2.14-1.16,3.85-2.51,5.26-4.1,7.89-3.12,15.23-5.93,21.95-8.56,5.87-2.08,11.37-4.04,16.57-5.81,5.2-1.83,8.68-2.75,10.52-2.75h6.42c2.45,0,4.83-.37,7.09-1.16s3.36-3.36,3.36-7.77c0-.24-.18-.67-.67-1.16Zm-56.45.8c-.92.24-1.77.37-2.57.37h-1.53c-.67,1.04-1.71,1.83-3.06,2.32-1.35.55-2.69,1.04-4.04,1.53-1.59.55-3.3,1.1-5.08,1.59-1.35.8-3.73,2.2-7.09,4.28-3.42,2.08-7.03,4.22-10.82,6.42-3.85,2.2-7.58,4.1-11.19,5.63-3.61,1.53-6.18,2.32-7.77,2.32-.92,0-3.24.55-7.09,1.59-.43.12-.86.24-1.22.37-.12-1.16-.31-2.45-.61-3.67-.37-1.9-.73-3.67-1.16-5.26-.37-1.59-.61-2.69-.61-3.36-.49-4.77-.49-9.23,0-13.58.55-4.28.18-7.64-1.16-10.09-.8-.92-1.41-2.39-1.96-4.4-.55-2.08-.92-4.22-1.16-6.48-.24-2.2-.43-4.4-.43-6.54v-.31l13.7,3.91c1.41,0,2.94.31,4.77.98,1.77.67,3.61,1.77,5.38,3.3,1.35,1.04,2.63,1.96,3.73,2.75,2.26,1.77,4.53,2.69,6.79,2.69.43,0,1.77.37,4.04.98,2.26.67,4.77,1.47,7.64,2.51,2.81,1.04,5.63,2.2,8.44,3.49,2.81,1.35,4.89,2.63,6.24,3.91l4.77,1.16h3.06c2.2,0,3.36.37,3.36,1.16-1.35.31-2.51.43-3.36.43Z"; // Simple Play triangle
// const pauseIconPath = "m6.47,34.69c0-2.27-.8-4.82-2.41-7.65s-1.23-5.95,1.09-9.35c-1.75-2.49-3.13-4.98-4.17-7.47C-.04,7.71-.27,4.32.32,0h2.2c1.18,0,3.22.24,6.15.68.88,0,2.58.24,5.06.69,2.49.46,5.13,1.13,7.91,2.03,2.79.91,5.49,2.16,8.14,3.74,2.63,1.59,4.69,3.53,6.15,5.78-.59,2.05-.8,5-.66,8.84.14,3.86-.07,7.94-.66,12.25-.29,1.13-.45,2.78-.45,4.93s.16,4.37.45,6.63c.3,2.27.73,4.43,1.32,6.46.59,2.05,1.32,3.53,2.2,4.43,1.47,2.49,1.9,5.9,1.31,10.2-.57,4.32-.57,8.84,0,13.6,0,.68.23,1.83.66,3.4.45,1.59.88,3.35,1.32,5.27.45,1.92.73,3.79.88,5.6.16,1.83-.07,3.29-.66,4.43,2.06,2.49,2.93,5.6,2.65,9.35-.29,3.74-1.18,8.22-2.65,13.42l-.88,3.75c-.59-.22-1.75-.46-3.51-.68-1.77-.22-3.67-.57-5.72-1.02-2.04-.46-4.1-1.08-6.15-1.87-2.04-.79-3.52-1.76-4.4-2.89-2.34-7.25-4.76-14.68-7.24-22.28-2.49-7.6-3.74-14.67-3.74-21.26-1.75-2.49-2.27-5.66-1.54-9.52.73-3.85.52-7.93-.66-12.25l-1.32-19.04Z " ; // Pause bars

// playPauseBtn.addEventListener("click", () => {
//     if (audio.paused) {
//         audio.play();
//         playSvgPath.setAttribute("d", pauseIconPath);
//     } else {
//         audio.pause();
//         playSvgPath.setAttribute("d", playIconPath);
//     }
// });

// audio.addEventListener("timeupdate", () => {
//     const percentage = (audio.currentTime / audio.duration) * 100;
//     progress.style.width = `${percentage}%`;
// });