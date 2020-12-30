function diamond(tinggi){

    let spasi = 0;
    let output = "";
    for(let i=tinggi;i>0;i--){
        output = "";
        for(let j=1;j<=(tinggi*2)-1;j++){
            if(j === i || j === tinggi + spasi )
                output+= "*";
            else
                output+=" ";
        }
        spasi++;
        console.log(output);
    }
    for(let i=1;i<tinggi;i++){
        output = "";
        for(let j=0;j<=(tinggi*2)-2;j++){
            if(j === i || j === (tinggi + spasi)-3 )
                output+= "*";
            else
                output+=" ";
        }
        spasi--;
        console.log(output);
    }

}

diamond(10);