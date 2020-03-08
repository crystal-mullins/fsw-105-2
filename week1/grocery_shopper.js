var shopper = {
    firstName  : "Crystal",
    age        : 38,
    isfemale   : true,
    groceryCart: ["Avocados", "nuts", "fruit"],
    
    printShopper: function() {
        return this.firstName + " " + this.age + " " + this.isfemale + " " + this.groceryCart;
    }  
};
console.log(shopper.printShopper())