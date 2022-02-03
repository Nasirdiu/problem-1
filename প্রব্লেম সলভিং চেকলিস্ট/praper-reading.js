function paperRequirements (first,secend,thard){
    const fFirst =100;
    const sSecend=200;
    const tThard =300;
    let totalNeedpage= 0;
    const bookpageF=first*fFirst;
    const bookpageS=secend*sSecend;
    const bookpageT=thard*tThard;
    totalNeedpage=bookpageF+bookpageS+bookpageT;
    return ('firsr book :'+first+'||'+'secend book :'+secend+'||'+'thard book:'+thard+'||'+'total page :'+totalNeedpage);

}

const praberNumber=paperRequirements(5,1,1);
console.log(praberNumber);



