for (var i=0;i<document.querySelectorAll(".btn").length;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function (){
        operation(this.value);
    });
}

function operation(key){
    if(key=="="){            
        (document.querySelector(".dScreen").value)=eval(document.querySelector(".dScreen").value);
        }
    else if(key=="AC"){
            document.querySelector(".dScreen").value="";
        }
    else if(key=="DE"){
            document.querySelector(".dScreen").value=document.querySelector(".dScreen").value.toString().slice(0,-1);
        }
    else{
        console.log(key);
        document.querySelector(".dScreen").value += key;
        console.log(document.querySelector(".dScreen").value);
    }
}