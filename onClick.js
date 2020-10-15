

function calculate(a){
    alert("This should work");
    var x = parseInt(document.calcform.num1.value);
    var y = parseInt(document.calcfom.num2.value);
    var z = document.calcform.result;
    
    if(a.value=="Add"){
         z.value = x+y;
        
    }else if (a.value=="Sub"){
         z.value = x-y;
        
    }else if (a.value=="Mul"){
         z.value = x*y;
        
    }else if (a.value=="Div"){
         z.value = x/y;
        
    }else{
         z.value = x%y;
        
    }
}
