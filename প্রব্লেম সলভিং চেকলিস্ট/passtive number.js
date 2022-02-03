function posstive(number){
    let allNumber=[];
    for(const numbers of number){
        if (numbers>=0){
            allNumber.push(numbers);
        }
        else{
            break;
        }     
    }
    return allNumber;
}

const arrNumber=[20,30,-1,40,10,-10,50,20];
const total=posstive(arrNumber);
console.log(total);