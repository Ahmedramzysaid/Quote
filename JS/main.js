
var arr = [{ 
    subject:'"Be yourself; everyone else is already taken."',
    author:"--Oscar Wilde" 
},

 { 
    subject:'"So many books, so little time."',
    author:"--Frank Zappa" 
}
,
 { 
    subject:"A room without books is like a body without a soul.",
    author:"--Marcus Tullius Cicero" 
}
,
 { 
    subject:'"You only live once, but if you do it right, once is enough."',
    author:"--Mae West" 
}
,
 { 
    subject:'"Be the change that you wish to see in the world."',
    author:"--Mahatma Gandhi" 
},
{
     subject:'"Without music, life would be a mistake"',
    author:"--Friedrich Nietzsche"
},

];
var  lastindx = -1 ;
function  output()
{
    var newindex =  (parseInt(Math.random()*10))%arr.length ;
    if(lastindx!=newindex)
   document.getElementById("answer").innerHTML= ( `${arr[newindex].subject}<br>${arr[newindex].author}`) ;
else output() ;
lastindx=  newindex ;
}
    

