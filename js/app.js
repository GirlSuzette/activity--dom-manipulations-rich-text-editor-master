/**
 * TASK 1: Add an event listener to the `<button class="rte-italics">`.
 *
 *         When user clicks, it should toggle the `fontStyle` property
 *         value of the `<p class="textbox"></p>` to «italic».
 */

document.querySelector(".rte-italics").addEventListener("click", function() {
  var italics = document.querySelector(".textbox");
  italics.classList.toggle("rte-italics");
});
/**
 * TASK 2: Add an event listener to the `<button class="rte-bold"></button>`.
 *
 *         When user clicks, it should toggle the `fontWeight` property
 *         value of the `<p class="textbox"></p>` to 700.
 */
document.querySelector(".rte-bold").addEventListener("click", function() {
  var bold = document.querySelector(".textbox");
  bold.classList.toggle("rte-bold");
});

/**
 * TASK 3:
 * Add event listeners to the `<button class="rte-fontsize"></button>` elements.
 *
 *         When user clicks, it should change the `fontSize` property of the
 *         `<p class="textbox"></p>` to the value of the button that was clicked.
 */

// document.querySelector(".rte-fontsize").addEventListener("click", function () {

document.querySelectorAll(".rte-fontsize").forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    // var text = document.querySelectory(".textbox")
    // text.style.fontSize = btn.textContent
    txt.style.fontSize = e.target.dataset.fontSize;
  });
});

// })
/**
 * TASK 4:
 * Add event listener to the `<button class="rte-fontcolor"></button>` elements.
 *
 *         When user clicks, it should take the value from the `data-color`
 *         attribute and set the `color` property of the `<p class="textbox"></p>`
 *
 *         To access data-* attributes
 *         https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
 */

var txt = document.querySelector(".textbox");
// event delegeichon
document.querySelector(".color-palette").addEventListener("click", function(e) {
  txt.style.color = e.target.dataset.color;
});
