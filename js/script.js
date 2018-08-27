$('#catImg').click(function(e) {
  var count = parseInt($('#count')[0].innerHTML); // access first eleemnt of jquery or use document.getElementById
  count = count+1;
  $('#count').text(count);
  console.log(count);
});