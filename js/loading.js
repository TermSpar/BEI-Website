window.addEventListener("load", () => {
  const wrapper = document.getElementById("page-wrapper");
  if (wrapper) wrapper.classList.add("loaded");

  // Hide skeleton, show content
  const skeleton = document.getElementById("skeleton-loader");
  const content = document.getElementById("page-content");
  if (skeleton) skeleton.style.display = "none";
  if (content) content.style.display = "block";
});
