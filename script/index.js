document.querySelector('#roll').addEventListener("click",myFunction)

function myFunction(){
    let a=getRandomInt(1, 7)
    document.querySelector('#member-1').innerText=a

     let b=getRandomInt(1, 7)
    document.querySelector('#member-2').innerText=b

    let c=getRandomInt(1, 7)
    document.querySelector('#member-3').innerText=c


    if(a>b && a>c && a!=b && b!=c&& a!=c){
        document.querySelector('#winner').innerText=a
    }
    else if(b>a&& b>c && a!=b && b!=c&& a!=c)
    {
        document.querySelector('#winner').innerText=b
    }
    else if(c>a && c>b && a!=b && b!=c&& a!=c){
        document.querySelector('#winner').innerText=c
    }
    else if(a==b || a==c || b==c){
        document.querySelector('#winner').innerText="Draw"
    }




    if(b==c || a==c  ||a==b){
        document.querySelector('#member-1').style.backgroundColor="blue"
        document.querySelector('#member-2').style.backgroundColor="blue"
        document.querySelector('#member-3').style.backgroundColor="blue"
    }
    else if(a!=b || a!=c){
        if(a>b && a>c ){
            document.querySelector('#member-1').style.backgroundColor="green" 
        }
        else if(((b>a) && (a>c)) ||((c>a) && (a>b))){
            document.querySelector('#member-1').style.backgroundColor="yellow"
        }
        else if((b>a)&&(c>a)){
            document.querySelector('#member-1').style.backgroundColor="red"
        }

    }
     if(b!=a || b!=c){
        if(b>a && b>c ){
            document.querySelector('#member-2').style.backgroundColor="green" 
        }
        else if(((a>b) && (b>c)) ||((c>b) && (b>a))){
            document.querySelector('#member-2').style.backgroundColor="yellow"
        }
        else if((a>b)&&(c>b)){
            document.querySelector('#member-2').style.backgroundColor="red"
        }

    }


    if(c!=a || c!=b){
        if(c>a && c>b ){
            document.querySelector('#member-3').style.backgroundColor="green" 
        }
        else if(((a>c) && (c>b)) ||((b>c) && (c>a))){
            document.querySelector('#member-3').style.backgroundColor="yellow"
        }
        else if((a>c)&&(b>c)){
            document.querySelector('#member-3').style.backgroundColor="red"
        }

    }

    
     
}




    function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
