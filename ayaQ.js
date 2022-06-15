

// //Q1
// let sec = 9630;
// let h = sec / 3600;
// fh = Math.floor(h);
// console.log(h);
// console.log(fh);
// m = (sec% 3600)/60;
// fm = Math.floor(m) ;
// console.log(m);
// console.log(fm);
// s = ((sec% 3600)%60) ;
// fs = Math.floor(s)
// console.log(s);
// console.log(fs);

// console.log(`${fh}:${fm}:${fs}`);

// //Q2
// let timeA = [2 , 40 , 30];
// let time = timeA.join(':')
// console.log(time);
// let h1 = timeA[0] *3600;
// let m1 = timeA[1] *60;
// let s1 = timeA[2];
// let res = h1 + m1 +s1;
// console.log('the time of seconds : '+res);

// //Q3
// let num = 3245;



//simple calculator of 2 numbers and test on the opretions by if statments
// let a = 5;
// let b = 0 ;
// let operator = '*';
// let res ;

// if(operator == '+'){
//     res = a+b;
// }else if(operator == '-'){
//     res = a-b;
// }else if(operator == '/' ){
//     res = a/b;
//     if(b == 0){
//         console.log('connot divide');
//     }
// }else {
//     res = a*b;
// }
// console.log(res);



// console.log(typeof NaN);
// console.log(Math.round(.55)*100);

// let x1 ;
// x1 == 20;
// if (x1 == 20)
//     console.log("true");
// else
//     console.log("false");

// for (i = 0; i < 30; i++) {
//     if (i == 10)
//         continue;
//     console.log(i);
// }

/////q3
let lenght = 10;
let width = 5 ;
let frameType = 'luxury' ;
let normalFramePrice = 0.15;
let luxuryFramePrice = 0.25;
let coloringPrice = 0.10;
let cartonPrice = 0.02;
let glassPrice = 0.07;
let crownPrice = 0.35;
let framePrice;
let coloring = true;
let withCrown = true;
let numOfCrown = 3;

console.log("length: " + lenght);
console.log("width: " + width);
console.log("frame Type: " + frameType);

costofNormal = normalFramePrice*width*lenght *cartonPrice*glassPrice;
costofluxury = luxuryFramePrice*width*lenght *cartonPrice*glassPrice;
console.log('noramal frame cost :'+ costofNormal);
console.log('luxury frame cost :' +costofluxury);

if(frameType === 'normal' && coloring == true){
    NoramlFrameWithColoring = costofNormal*coloringPrice;
    console.log('normal frame with coloring '+NoramlFrameWithColoring);
    if(withCrown == true){
        normalWithCrown = NoramlFrameWithColoring*crownPrice*numOfCrown;
        console.log('normal frame with crown : '+normalWithCrown);
    }
}else if(frameType === 'luxury' && coloring == true){
    luxuryFrameWithColoring = costofluxury*coloringPrice;
    console.log('luxury frame with coloring '+luxuryFrameWithColoring);
    if(withCrown == true){
        luxuringWithCrown = luxuryFrameWithColoring * crownPrice*numOfCrown;
        console.log('luxury frame with crown : '+luxuringWithCrown);
    }
}



// console.log("Length : " + lenght);
// console.log("Width : " + width);
// console.log("Frame Type : " + frameType);

// if(frameType === "luxury" && coloring === true){
//     framePrice = lenght * width * luxuryFramePrice * coloring;
//     console.log("Frame Price" + framePrice);
// }else if(frameType === "normal" && coloring === true){
//     framePrice = lenght * width * normalFramePrice * coloringPrice;
//     console.log("Frame Price" + framePrice);
// }else if(frameType === "luxury" && coloring === true && withCrown === true && numOfCrown === 3){
//     framePrice = lenght * width * luxuryFramePrice * coloringPrice * crownPrice * num;
//     console.log("Frame Price" + framePrice)
// }else if(frameType === "normal" && coloring === true && withCrown === true && numOfCrown === 3){
//     framePrice = lenght * width * normalFramePrice * coloringPrice * crownPrice * num;
//     console.log("Frame Price" + framePrice);
// }

// to sort x y z 
let x = 2 ; 
let y = 1 ; 
let z  = 3 ; 
///xyz xzy yxz yzx zxy zyx 
if(x > y && y > z){
    console.log('1: '+z , y , x);
}else if(x > z && z > y){
    console.log('2 :' +y , z , x );
}else if(y > x && x > z ){
    console.log('3 : '+z , x , y);
}else if (y > z && z > x){
    console.log('4 : '+x , z , y);
}else if(z > x && x > y){
    console.log('5 :'+y , x , z);
}else if(z > y && y > x ){
    console.log('6 :' +x , y , z);
}

let a = 4;
let b = 2;
oper = '/';
let res ;
if(oper == '+'){
    res = a + b;
    console.log(a + '+' + b +'=' +res);
}else if (oper == '-'){
    res = a-b;
    console.log(a + '-' + b +'=' + res);
}else if(oper == '*'){
    res = a*b;
    console.log(a + '*' + b +'=' +res);
}else if (oper == '/'){
    res = a/b;
    if(b == 0){
        console.log('connot divid by 0');
    }else {
        console.log(a + '/' + b +'=' +res);
    }
}
