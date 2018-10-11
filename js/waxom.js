"use strict"
window.onload = function() {
    var slider = tns({
        container: '.my-slider',
        items: 1,
        slideBy: 'page',
        autoplay: false
    });



    var slider = tns({
        container: '.data-slider',
        items: 1,
        responsive: {
            640: {
                edgePadding: 20,
                gutter: 20,
                items: 2
            },
            700: {
                gutter: 30
            },
            900: {
                items: 3
            }
        }
    });




    $('#responsiveTabsDemo').responsiveTabs({
        startCollapsed: 'accordion'
    });



    //BUTTON

    document.querySelector('.btn-menu').addEventListener('click', showMenu);

    function showMenu() {
        let menu = document.querySelector('.menu');
        if (menu.className === "menu") {
            menu.className += ' open';
        } else {
            menu.className = 'menu';
        }
    }

    //VIDEO BUTTON

    document.querySelector('.play').addEventListener('click', showVideo);

    function showVideo(event) {
        if (event) {
            document.querySelector('.img-video').style.display = 'none';
        }
        let autoPlay = document.querySelector('.resp-iframe');
        autoPlay.src += ('?autoplay=1');
    }

    document.querySelector(' .resp-iframe').addEventListener('click', showBlock);

    function showBlock(event) {
        console.log(event)
        if (event) {
            document.querySelector('.img-video').style.display = 'block';
        }
    }

    //BUTTON-TOP


    document.querySelector(".btn-top").addEventListener("click", topFunction);

    function scrollFunction() {
        let scrolDown = 20;
        if (document.body.scrollTop > scrolDown || document.documentElement.scrollTop > scrolDown) {
            document.querySelector(".btn-top").style.display = "block";
        } else {
            document.querySelector(".btn-top").style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    window.onscroll = function() { scrollFunction() };

};

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
function sortByLength (arr) {

arr.sort(compareNumeric);
return arr
};
sortByLength(['A', 'Dog', 'Food', 'Of'])

function sortByLength (arr) {

// Return an array containing the same strings, ordered from shortest to longest
let i, j, c
for(i =0; i< arr.length; i++){
  for(j = i+1; j< arr.length; j++){
    if(arr[i].length > arr[j].length){
      c = arr[i];
      arr[i]= arr[j];
      arr[j]= c;
    }
  }
}
return arr
};

sortByLength(["Beg", "Life", "I", "To"])

function findSum(n) {
let num =0;
let i
for( i = 1; i< n.length; i++){
  if (i % 3 == 0 || i % 5 ==0){
  num += i;
  }
}
  return num;
}

findSum(10)