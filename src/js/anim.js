var gallerie = document.querySelectorAll('#gallerie .slide');
var overlay = document.querySelector('#overlay');
var content1 = document.querySelector('.content-1');
var content2 = document.querySelector('.content-2');
var content3= document.querySelector('.content-3');
var content4 = document.querySelector('.content-4');
var content5 = document.querySelector('.content-5');
var content6 = document.querySelector('.content-6');
var content7 = document.querySelector('.content-7');
var content8 = document.querySelector('.content-8');
var content9 = document.querySelector('.content-9');
var content10 = document.querySelector('.content-10');
var body = document.querySelector('body');
// overlay.style.display = 'none';
var count = null;
          // overlay.style.display = 'none';
          // content1.style.display = 'none';
          content2.style.display = 'none';
          content3.style.display = 'none';
          content4.style.display = 'none';
          content5.style.display = 'none';
          content6.style.display = 'none';
          content7.style.display = 'none';
          content8.style.display = 'none';
          content9.style.display = 'none';
          content10.style.display = 'none';

gallerie.forEach(item => {
  item.addEventListener('dblclick', function() {
      count = Array.from(gallerie).indexOf(item);
      overlay.style.display = 'block';
      body.style.overflow = 'hidden';
      // overlay.style.overflow = 'auto';
      // overlay.style.animation = 'display 0.5s ease';

        if (count == 0) {
          content1.style.display = 'block';
          console.log('0');
      } else if (count == 1) {
          content2.style.display = 'block';
          console.log('1');
      } else if (count == 2) {
          content3.style.display = 'block';
          console.log('2');
      } else if (count == 3) {
           content4.style.display = 'block';
      } else if (count == 4) {
            content5.style.display = 'block';
      } else if (count == 5) {
            content6.style.display = 'block';
      } else if (count == 6) {
           content7.style.display = 'block';
      } else if (count == 7) {
           content8.style.display = 'block';
      } else if (count == 8) {
           content9.style.display = 'block';
      } else if (count == 9) {
        content10.style.display = 'block';
    }
      
      else {
          overlay.style.display = 'none';
      }

  });
});


  function on() {
    document.getElementById("overlay").style.display = "block";
  }
      // if {
      //   document.getElementsByClassName("content1").style.display =(".project_description" , "content1"),
      // }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  } 
