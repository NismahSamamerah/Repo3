
class NumberConverter{
    valid(){

    }
    convertToDecimalNumber(){

    }
}

class Hex extends NumberConverter{
    isValidNumber(hexNumber){
        let rejex = /[0-9A-Fa-f]{6}/;
        if (!(rejex.test(hexNumber))){
            throw new Error (`not hex value`)
        }
    }

    convertToDecimalNumber(hexNumber){
        this.isValidNumber(hexNumber);
        let res = parseInt(hexNumber ,16 );
        return res;

    }
}
class Binary extends NumberConverter {
    isValidNumber(binaryNumber){
        let rejex =  /[01]{8}/;
        if (!(rejex.test(binaryNumber))){       
            throw new Error('not binary value')
        }
    }
    convertToDecimalNumber(binaryNumber){
        this.isValidNumber(binaryNumber);
        let res = parseInt(binaryNumber , 2);
        return res;
    }
}

const hex1 = new Hex ();
console.log((hex1.convertToDecimalNumber('AAAA99')));
const binary1 = new Binary();
console.log(binary1.convertToDecimalNumber('10101010'));

