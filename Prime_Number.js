
let num=13;
let f=true;
    for(let i=2; i<=num-1; i++){
        if(num%i==0){
          f=false ;
          break;
        }
    }
    if(f==true){
        console.log("Prime Number")
    }else{
        console.log("Not Prime Number")
    }