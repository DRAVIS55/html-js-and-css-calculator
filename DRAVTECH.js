let expression=[];
let buttons=["1","2","3","4","5","6","7","8","9","0","power",
    "clear","division","sum","modulus","minus","mult","equals"];

buttons.forEach(butt=>{
    let buttonElement=document.getElementById(butt);
    if(buttonElement){
        buttonElement.addEventListener('click',()=>reveal(butt));
    }
});
function reveal(element){
    let textField=document.getElementById('screen2');
    switch(element){
        case "1": textField.innerText="1"; expression.push(1); break;
        case "2":textField.innerText="2";expression.push(2); break;
         case "3":  textField.innerText="3";expression.push(3); break;
        case "4": textField.innerText="4"; expression.push(4);   break;
        case "5":  textField.innerText="5"; expression.push(5);  break;
         case "6":textField.innerText="6"; expression.push(6);  break;
        case "7":textField.innerText="7"; expression.push(7);  break;
        case "8":  textField.innerText="8"; expression.push(8);  break;
        case "9": textField.innerText="9"; expression.push(9); break;
        case "0":textField.innerText="0"; expression.push(0); break;
         case "power":  textField.innerText="^"; expression.push("**");  break;
        case "division": textField.innerText="/"; expression.push("/");   break;
        case "sum":  textField.innerText="+"; expression.push("+");  break;
         case "modulus":textField.innerText="%"; expression.push("%");  break;
        case "minus":textField.innerText="-"; expression.push("-");  break;
        case "mult":  textField.innerText="*"; expression.push("*");  break;
        case "equals":textField.innerText=evaluation();   break;
        case "clear":  textField.innerText=" "; expression=[]; ExpressionBox.innerText=" "; break;

         default: textField.innerText="calculator error";
    }
    expressionFunction();
    
}

function expressionFunction(){
    let ExpressionBox=document.getElementById("screen1");
    for(i=0; i<expression.length;i++){
        let expressionM=" =";
        expressionM=expressionM+expression.join(" ");
        ExpressionBox.innerText=expressionM;
        
    }
}

function evaluation(){
    
    let results=eval(expression.join(" "));
    results=" ="+String(results);
    return results;
}