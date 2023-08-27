
var isstaus=document.querySelector('h5');

var addFriend=document.querySelector('#add');

var temp=0;


addFriend.addEventListener("click",function(){
    if(temp==0){
    isstaus.innerHTML="Friends";
    isstaus.style.color="green";
    addFriend.innerHTML="Remove ";
    temp=1;
    }
    else{
        isstaus.innerHTML="Stranger";
        isstaus.style.color="red";
        addFriend.innerHTML="Add Friend";
        temp=0;
    }
})

