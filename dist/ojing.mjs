var t=function(t,n){void 0===n&&(n=2),this.accu=n,this.numbers=t,this.intervals=this.numbers.map(function(t,n,i){return t-(i[n-1]?i[n-1]:t)}),this.unit=this.getUnit()};t.prototype.getUnit=function(){var t=this,n=0;return this.intervals.forEach(function(i){n=t.gcd(n,i)}),n},t.prototype.gcd=function(t,n){return t<n?this.gcd(n,t):Math.abs(n)<Math.pow(10,-this.accu)?t:this.gcd(n,t-Math.floor(t/n)*n)},t.prototype.simplify=function(){var t=this,n=this.numbers.map(function(n,i,r){return Math.floor((n-r[0])/t.unit*Math.pow(10,t.accu))/Math.pow(10,t.accu)});return n.unit=this.unit,n.start=this.numbers[0],n},t.fromArray=function(n){return new t(n)};export default t;
