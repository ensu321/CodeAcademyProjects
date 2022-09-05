// 



function SuskaiciuotiPlota() {
    let krastineA = document.getElementById('input1').value;
let krastineB = document.getElementById('input2').value;

let krastineC = document.getElementById('input3').value;
let krastineD = document.getElementById('input4').value;
    let staciakampis1 = krastineA * krastineB;
    console.log('Pirmoje staciakampio plotis: ', staciakampis1);
    let staciakampis2 = krastineC * krastineD;
    console.log('Antrojo staciakampio plotis: ', staciakampis2);

    console.log(staciakampis1 >= staciakampis2 ? "Staciakampis pirmas didesnis" : "Staciakampis pirmas mazesnis");
    
}

