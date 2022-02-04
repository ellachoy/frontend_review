console.log("hi")
var target = document.querySelector('body')
function LinksSetColor(color) {
    var alist =document.querySelectorAll('a');
       var i =0;
       while(i < alist.length){
           alist[i].style.color = color;
           i = i + 1;
       }
}
function BodySetColor(color){
    target.style.color =color; 
}
function BodySetBackgroundColor(color){
    target.style.backgroundColor =color; 
}
function nightDayHandler(self){
    // var target = document.querySelector('body')
    if (self.value === 'night'){
    //    target.style.backgroundColor ='black';
    BodySetBackgroundColor('black')
       BodySetColor('white')
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
    //    target.style.backgroundColor='white';
    BodySetBackgroundColor('white')
       BodySetColor('black')
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
