let letter=[20,70,80,85,90,100,400,500,10,20];

for (const number of letter){
    if (number<80){
        continue;
    }
    console.log(number);
}