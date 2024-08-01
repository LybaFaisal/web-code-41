//Simple Calculator operations

function addition(x,y){
    return x+y;
}

function subtraction(x,y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}

function division(x,y){
    if(y==0)return 'It cant be divided by zero';
    return x/y;
}

function calculator(x , y , operation){
    if(operation == '+'){
        return addition(x,y);
    }

    else if(operation == '-'){
        return subtraction(x,y);
    }

    else if(operation == '*'){
        return multiply(x,y);
    }
        
    else if(operation == '/'){
        return division(x,y);
    }
    else{
        return 'Invalid Operation!'
    }        
}
console.log(calculator(10,90,'+'));
console.log(calculator(20,90,'-'));
console.log(calculator(70,70,'*'));
console.log(calculator(10,0,'/'));
console.log(calculator(90,90,'*'));