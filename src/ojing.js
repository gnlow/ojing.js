export default class Ojing {
    constructor(numbers, accu){
        this.accu = accu;
        this.numbers = numbers;
        this.intervals = this.numbers.map( (n, i, arr) => n - (arr[i-1] ? arr[i-1] : n));
        this.unit = this.getUnit();
    }
    getUnit(){
        var result = 0;
        this.intervals.forEach(
            n => {
                result = this.gcd(result, n);
            }
        );
        return result;
    }
    gcd(a, b){
        if(a < b){
            return this.gcd(b, a);
        }
        if(Math.abs(b) < 10**-this.accu){
            return a;
        }else{
            return this.gcd(b, a - Math.floor(a / b) * b);
        }
    }
    simplify(){
        return this.numbers.map( (n, i, arr) => Math.floor( (n-arr[0]) / this.unit * 10**this.accu ) / 10**this.accu );
    }
}