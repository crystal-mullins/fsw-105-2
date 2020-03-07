// greet4.js called a function constructer
function Greetr() {
    this.greeting = "Hello John Mayer!!!";
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr;

