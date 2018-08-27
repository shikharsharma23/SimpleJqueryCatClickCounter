$('#catImg1').click(function(e) {
  var count1 = parseInt($('#count1')[0].innerHTML); // access first eleemnt of jquery or use document.getElementById
  count1 = count1+1;
  $('#count1').text(count1);
  console.log(count1);
});

$('#catImg2').click(function(e) {
  var count2 = parseInt($('#count2')[0].innerHTML); // access first eleemnt of jquery or use document.getElementById
  count2 = count2+1;
  $('#count2').text(count2);
  console.log(count2);
});