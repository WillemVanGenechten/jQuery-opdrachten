// Write your solution here

$("input").focusout(function () {
  $(this).css("border", "2px solid red");
});

$("input").focusin(function () {
  $(this).css("border", "2px solid green");
});