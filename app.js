// Language toggle (KO / EN). Initial language is set inline in <head> to
// avoid a flash; this only wires the toggle buttons and persists the choice.
(function () {
  var root = document.documentElement;

  function apply(lang) {
    root.dataset.lang = lang;
    try { localStorage.setItem("lang", lang); } catch (e) {}
    var btns = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute(
        "aria-pressed",
        btns[i].getAttribute("data-set-lang") === lang ? "true" : "false"
      );
    }
  }

  apply(root.dataset.lang || "en");

  document.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-set-lang]") : null;
    if (b) { e.preventDefault(); apply(b.getAttribute("data-set-lang")); }
  });
})();
