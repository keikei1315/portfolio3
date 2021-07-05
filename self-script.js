'use strict';

const animationTargetElements = document.querySelectorAll(".textAnimation");
for (let i = 0; i < animationTargetElements.length; i++) {
  const targetElement = animationTargetElements[i],
        texts = targetElement.textContent,
        textsArray = [];

        targetElement.textContent = '';

        for (let j = 0; j < texts.split("").length; j++) {
          if(texts.split("")[j] === " "){
            textsArray.push(" ");
          }else{
          textsArray.push('<span><span style="animation-delay: '+ (j*.05) + 's;">' + texts.split("")[j] + '</span></span>')
          }
        }

        for (let k = 0; k < textsArray.length; k++) {
          targetElement.innerHTML += textsArray[k];
        }
}

// スクロールイベント
$(function () {
  var topBtn1 = $('#aboutScroll');
  //スルスルっとスクロールでトップへもどる
  topBtn1.click(function () {
      $('body,html').animate({
          scrollTop: 727
      }, 500);
      return false;
  });
});
$(function () {
  var topBtn2 = $('#createScroll');
  //スルスルっとスクロールでトップへもどる
  topBtn2.click(function () {
      $('body,html').animate({
          scrollTop: 1300
      }, 500);
      return false;
  });
});
$(function () {
  var topBtn3 = $('#contactScroll');
  //スルスルっとスクロールでトップへもどる
  topBtn3.click(function () {
      $('body,html').animate({
          scrollTop: 1700
      }, 500);
      return false;
  });
});


document.getElementById('textAnimation').addEventListener('animationend',function(){
  document.getElementById('headerAnimation').classList.add('hidden');
  setTimeout(function(){
    document.getElementById('fullName').classList.add('fullNameOpen');
  },2000);
});
document.getElementById('textAnimation').addEventListener('webkitAnimationEnd',function(){
  document.getElementById('headerAnimation').classList.add('hidden');
  setTimeout(function(){
    document.getElementById('fullName').classList.add('fullNameOpen');
  },2000);
});


const images=['main-image1','main-image2','main-image3','main-image4'],
      indicator=['indicator1','indicator2','indicator3','indicator4'];

let current = 0,
    firstCurrent = 10,
    prevCurrent = 10,
    selectCurrent = -1;
function changeImages(num){
  if(firstCurrent <= images.length){
  document.getElementById(images[current]).style.opacity = 0;
  document.getElementById(indicator[current]).style.backgroundColor = 'white';
  }
  firstCurrent = -1;
  prevCurrent = current;
  current += num;
  if(selectCurrent < 0){
    if(current  >= 0 && current  < images.length){
      document.getElementById(images[prevCurrent]).classList.remove('openSlide');
      document.getElementById(images[prevCurrent]).style.opacity = '';
      document.getElementById(images[current]).classList.add('openSlide')
      document.getElementById(indicator[current]).style.backgroundColor = 'black';
      
    }else if(current > images.length -1){
      current = 0;
      document.getElementById(images[prevCurrent]).classList.remove('openSlide');
      document.getElementById(images[prevCurrent]).style.opacity = '';
      document.getElementById(images[current]).classList.add('openSlide')
      document.getElementById(indicator[current]).style.backgroundColor = 'black';
      
    }else if(current < 0){
      current = images.length -1
      document.getElementById(images[prevCurrent]).classList.remove('openSlide');
      document.getElementById(images[prevCurrent]).style.opacity = '';
      document.getElementById(images[current]).classList.add('openSlide')
      document.getElementById(indicator[current]).style.backgroundColor = 'black';
      
    }
  }else if(selectCurrent >= 0){
      document.getElementById(images[prevCurrent]).classList.remove('openSlide');
      document.getElementById(images[prevCurrent]).style.opacity = '';
      document.getElementById(images[selectCurrent]).classList.add('openSlide')
      document.getElementById(indicator[selectCurrent]).style.backgroundColor = 'black';
      current = selectCurrent;
      selectCurrent = -1;
  }
};

function selectSlide(num){
  document.getElementById('indicator'+num).addEventListener('click',function(){
    selectCurrent = num-1;
    changeImages(0);
  })
}


window.onload=function(){
  changeImages(0);
}

const timer = setInterval(function(){
  changeImages(1);
},6000)
document.getElementById('prev').onclick = function(){
  changeImages(-1);
  // timer = setInterval(function(){
  //   changeImages(1);
  // },6000)
};
document.getElementById('next').onclick = function(){
  changeImages(1);
};


selectSlide(1);
selectSlide(2);
selectSlide(3);
selectSlide(4);





// 時計
setInterval(() => {
  const now = new Date();
  
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  
  const degH = h * (360 / 12) +  m * (360 / 12 /60);
  const degM = m * (360 / 60);
  const degS = s * (360 / 60);
  
  document.querySelector('.lineHour').style.transform = `rotate(${degH}deg)`;
  document.querySelector('.lineMin').style.transform = `rotate(${degM}deg)`;
  document.querySelector('.lineSec').style.transform = `rotate(${degS}deg)`;
  },1000);

   // 自己紹介
   const targetElement = document.querySelectorAll(".allSelfIntroduction");
   console.log("画面の高さ",window.innerHeight);
   document.addEventListener("scroll", function() {
     for (let i = 0; i < targetElement.length; i++){
       const getElementDistance = targetElement[i].
       getBoundingClientRect().top + targetElement[i].clientHeight * .6
       if (window.innerHeight > getElementDistance){
         targetElement[i].classList.add("show");
       }
     }
   })
   