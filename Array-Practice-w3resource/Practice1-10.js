// This will be my practice on learning how to use arrays in different situations //
// There are a total of 42 exercises and I will be separating them in groups. //
// I am using https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php as my resource for these exercises. //

// Exercises 1 to 10 on JavaScript Arrays //

// Exercise 1 //

var is_array = function(input){                             // defining is_array //
    if (toString.call(input) === "[object Array]"){
        return true;
    } else {
      return false;
    }
}

console.log(is_array('w3resource'));                        // testing if each inputs are arrays //
console.log(is_array([1, 2, 4, 0]));

// Exercise 2 //
