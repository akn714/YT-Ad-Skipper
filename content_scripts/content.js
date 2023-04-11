let div = document.createElement("div");
div.setAttribute("class", "yt-ad-skipper-div");
div.innerText = "yt-ad-skipper is activated";
div.setAttribute(
  "style",
  `background: rgba(95, 95, 95, 0.37);
            color: rgb(175, 175, 175);
            position: fixed;
            top: 20px;
            right: 40px;
            height: 50px;
            width: 210px;
            z-index: 10000;
            font-size: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid rgb(159, 159, 159);
            border-radius: 11px;
            backdrop-filter: blur(2px);`
);
document.body.appendChild(div);

setTimeout(() => {
  div.style.display = "none";
}, 6000);

setInterval(() => {
  let video = document.querySelectorAll(".video-stream");
  if (document.querySelector("div.ad-showing")) {
    if (document.querySelector(".ytp-ad-skip-button")) {
      document.querySelector(".ytp-ad-skip-button").click();
    } else {
      video[0].currentTime = video[0].duration;
    }
  }
}, 1000);
