var total = ""
var number = []
function numbers(num){
    console.log(num)
    strNum=num.toString()
    total+=num
}

function equals(){
    number.push(total)
    console.log(total)
    console.log(number)
    grandTotal=0
    tempNum=0
    for (let i=1; i<number.length; i++){
        if (i==1){
            if (number[i]=="*"){
                grandTotal = Number(number[0])*Number(number[i+1])
            }
            else if (number[i]=="/"){
                grandTotal = Number(number[0])/Number(number[i+1])
            }
            else if (number[i]=="+"){
                grandTotal = Number(number[0])+Number(number[i+1])
            }
            else if (number[i]=="-"){
                grandTotal = Number(number[0])-Number(number[i+1])
            }
        }
        else{
            if (number[i]=="*"){
                grandTotal = grandTotal*Number(number[i+1])
            }
            else if (number[i]=="/"){
                grandTotal = grandTotal/Number(number[i+1])
            }
            else if (number[i]=="+"){
                grandTotal = grandTotal+Number(number[i+1])
            }
            else if (number[i]=="-"){
                grandTotal = grandTotal-Number(number[i+1])
            }
        }
    }
    console.log(grandTotal)

}

function operator(op){
    number.push(total)
    total = ""
    if (op == '*'){
        number.push("*")
    }
    else if (op == '/'){
        number.push("/")
    }
    else if (op == '+'){
        number.push("+")
    }
    else if (op == '-'){
        number.push("-")
    }
}