const closeBtn = document.querySelector(".close");
const topNotice = document.querySelector(".top-notice");

closeBtn.addEventListener("click", function () {
    topNotice.style.display = "none";
});