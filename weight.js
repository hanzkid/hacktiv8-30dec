function convertWeight(summation, unitWeight) {

    const unitSI = {
        "ton" : 1000,
        "kwintal" : 100,
        "kg" : 1,
        "hg" : 0.1,
        "ons" : 0.1,
        "dag" : 0.01,
        "g" : 0.001,
        "dg" : 0.0001,
        "cg" : 0.00001,
        "mg" : 0.000001
    }

    let arrayUnit = summation.split('+');
    arrayUnit = arrayUnit.map(unit => unit.trim().split(' '));
    let output = 0;
    arrayUnit.forEach((unit, index) => {
        output+= (Number(unitSI[unit[1]]) / Number(unitSI[unitWeight]) ) * unit[0];
    });
    
    return `${output} ${unitWeight}`
}

console.log(convertWeight('1 ton +10 ons+2 kwintal', 'kg')) //1201 kg

console.log(convertWeight('1 ton +10 ons+2 kwintal', 'g')) //1201000 g

console.log(convertWeight('2 ton +500 kwintal+3 kg+350 ons', 'kg'))  //52038 kg