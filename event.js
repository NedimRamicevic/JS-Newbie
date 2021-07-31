function onClick(e) {
  e.parentNode.style.backgroundColor = "red";
}
function mouseOver(node) {
  node.parentNode.style.backgroundColor = "purple";
}
function mouseLeave(node) {
  node.parentNode.style.backgroundColor = "blue";
  console.log("node : " + node);
  node.parentNode.addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = "red";
    console.log("e : " + e.target);
  });
}
