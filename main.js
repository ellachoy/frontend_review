console.log("hi")
var target = document.querySelector('body')
// function LinksSetColor(color) {
//     var alist =document.querySelectorAll('a');
//        var i =0;
//        while(i < alist.length){
//            alist[i].style.color = color;
//            i = i + 1;
//        }
// }
var Links = {
    setColor:function(color){
      var alist = document.querySelectorAll('a');
      var i = 0;
      while(i < alist.length){
        alist[i].style.color = color;
        i = i + 1;
      }
    }
  }
var Body ={
    setColor:function(color){
        document.querySelector('Body').style.color = color;
    },
    setBackgroundColor:function(color){
        document.querySelector('Body').style.backgroundColor = color;
    }
}
// function BodySetColor(color){
//     target.style.color =color; 
// }
// function BodySetBackgroundColor(color){
//     target.style.backgroundColor =color; 
// }
function nightDayHandler(self){
    // var target = document.querySelector('body')
    if (self.value === 'night'){
    //    target.style.backgroundColor ='black';
    Body.setBackgroundColor('black')
       Body.setColor('white')
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
    Body.setBackgroundColor('white')
       Body.setColor('black')
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
