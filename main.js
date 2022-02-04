console.log("hi")

function LinksSetColor(color) {
    var alist =document.querySelectorAll('a');
       var i =0;
       while(i < alist.length){
           alist[i].style.color = color;
           i = i + 1;
       }
}
function setColor(color){
    target.style.color =color; 
}
function nightDayHandler(self){
    var target = document.querySelector('body')
    if (self.value === 'night'){
       target.style.backgroundColor ='black';
       setColor('white')
    //   target.style.color ='white';
      self.value = 'day';

      LinksSetColor('red');
       
    //    var alist =document.querySelectorAll('a');
    //    var i =0;
    //    while(i < alist.length){
    //        alist[i].style.color = 'red';
    //        i = i + 1;
    //    }
    }
    else {
       target.style.backgroundColor='white';
       setColor('black')
    //    target.style.color='black';
       self.value = 'night'; 

       LinksSetColor('green')
       
    //    var alist =document.querySelectorAll('a');
    //    var i =0;
    //    while(i < alist.length){
    //        alist[i].style.color = 'green';
    //        i = i + 1;
    //    }
   }
}
