setInterval(() => {
  let div = document.createElement("div");
  div.setAttribute("class", "yt-ad-skipper-div");
  div.innerText = "yt-ad-skipper is activated";
  div.setAttribute(
    "style",
    "background: #0064ff5e; color: white; position: fixed; top: 20px; right: 40px; height: 50px; width: 210px; z-index: 10000;font-size: 15px;display: flex;justify-content: center;align-items: center;border: 1px solid blue;border-radius: 11px;"
  );
  document.body.appendChild(div);

  let video = document.querySelectorAll(".video-stream");
  if (document.querySelector("div.ad-showing")) {
    if (document.querySelector(".ytp-ad-skip-button")) {
      document.querySelector(".ytp-ad-skip-button").click();
    } else {
      video[0].currentTime = video[0].duration;
    }
  }
  console.log("checking");
}, 1000);
