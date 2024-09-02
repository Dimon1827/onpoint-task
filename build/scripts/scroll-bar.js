// source/scripts/scroll-bar.js
var $ = document.getElementById.bind(document);
var container = $("scrollbar-container");
var content = $("content");
var scroll = $("scrollbar");
content.addEventListener("scroll", () => {
  scroll.style.height = `${container.clientHeight * content.clientHeight / content.scrollHeight}px`;
  scroll.style.top = `${container.clientHeight * content.scrollTop / content.scrollHeight}px`;
});
var event = new Event("scroll");
window.addEventListener("resize", content.dispatchEvent.bind(content, event));
content.dispatchEvent(event);
scroll.addEventListener("mousedown", (start) => {
  start.preventDefault();
  const y = scroll.offsetTop;
  const onMove = function(end) {
    const delta = end.pageY - start.pageY;
    scroll.style.top = `${Math.min(
      container.clientHeight - scroll.clientHeight,
      Math.max(0, y + delta)
    )}px`;
    content.scrollTop = content.scrollHeight * scroll.offsetTop / container.clientHeight;
  };
  document.addEventListener("mousemove", onMove);
  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", onMove);
  });
});
//# sourceMappingURL=scroll-bar.js.map
