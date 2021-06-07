HOW THE CAROUSEL WORKS
HTML CODE
  We first have a section where we store all the images we want
  to be in the carousel. In our case we have 3 images. All our images have the same class name 
  which is 'mySlides' and it is used to apply the same styling and functionality to all of them
  without necessarily having to stle each individual image.

 JS CODE
 we declare a variable myIndex which stands for the number/index of the images in our html
 we then call a function 'carousel'.
 in our function we declare an abitrary variable (i) which in this case stands for the index position
 of each image. We then use the method (getElementsByClassName) to get all elements with the mySlides Name
 and store them as array elements in a variable x.
 we then use the DOM display method to hide the array (x) that we have just created

 Afterwards, we increment our images i.e move to the next image then set a condition to
 check whether the number of images are greater than the size of our array that we set aside to store the 
 images. If it is, we reset the myIndex variable to 1 once the last image is reached.
 Using the display block method we display the current image and set a timer for it to only last 3 seconds
 
 
 
 
 
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

OUTPUT OF ABOVE CODE:
outer func:  this.name = Lovelace
outer func:  self.name = Lovelace
inner func:  this.name = undefined
inner func:  self.name = Lovelace


outer func:  this.name = Lovelace
first output=>func is a method of the myObject object when we use this in an object method, 
this refers to the object which in this case is myObject and it accesses the name property which is Lovelace


outer func:  self.name = Lovelace
second output=> still in the func method we create a variable self and assign it our this which is 
our object myObject. thus by using the method self.name we are accessing the name property of our object
that is now stored in self. Self here refers to our object

inner func:  this.name = undefined
third output=>the method func has an inner anonymous function. Using my knowledge of scopes it is evident
that the anonymous inner function has no access to 'this',,our object, directly and that is why it brings an undefined
error

inner func:  self.name = Lovelace
fourth output=> variable self here that stores our object acts as a global variable this is why our
inner anonymous function has access to it. It is within its scope. hence the property name ,name can be accessed.


  
  
  
