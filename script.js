//Exercise 1

$(function() {
  console.log("Exercise #1 is working!");

  $('.accordion-header').on('click', function() {
    console.log("Selected header clicked");
    $(this).next('.accordion-content').slideToggle(1000);
  });
});
