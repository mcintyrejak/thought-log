//USING FILESAVER.JS
// function SaveAsFile(t, f, m) {
//   try {
//     var b = new Blob([t], { type: m });
//     saveAs(b, f);
//   } catch (e) {
//     window.open("data:" + m + "," + encodeURIComponent(t), "_blank", "");
//   }
// }

// SaveAsFile("text", "filename.txt", "text/plain;charset=utf-8");

const date = document.querySelector(".input-date");
const entry = document.querySelector(".input-entry");
const submitBtn = document.querySelector(".input-submit");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(date.value, entry.value);
});
