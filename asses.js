var myObject = {
    name: "Lovelace",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};
myObject.func();

//OUTPUT
// outer func:  this.name = Lovelace
// first output=>func is a method of the myObject object when we use this in an object method, 
// this refers to the object which in this case is myObject and it accesses the name property which is Lovelace


// outer func:  self.name = Lovelace
//  second output=> still in the func method we create a variable self and assign it our this which is 
//  our object myObject. thus by using the method self.name we are accessing the name property of our object
//  that is now stored in self. Self here refers to our object

// inner func:  this.name = undefined
// third output=>the method func has an inner anonymous function. using my knowledge of scopes it is evident
// that the anonymous inner function has no access to 'this',,our object directly and that is why it brings an undefined
// error

// inner func:  self.name = Lovelace
// fourth output=> variable self here that stores our object acts as a global variable this is why our
// inner anonymous function has access to it hence the property name ,name can be accessed.

