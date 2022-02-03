

function bestFriend (names){
    let elementName= names[0];
    let allName=elementName.length;
    for(const name of names){
        if(allName<name.length){
            elementName=name;
        }
    }
    return elementName;
}

let friend=['Nasir','pallob','redu','arif','ilass','riyed'];

const result=bestFriend(friend);
console.log(result);