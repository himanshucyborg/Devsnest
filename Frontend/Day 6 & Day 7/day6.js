// 1st question
function is_Array(arr) {
    return Array.isArray(arr);
}
console.log(is_Array([1,2,4,0]));

// 2nd question
function array_Clone(arr) {
    var cloneArr = arr.slice(); //or cloneArr[] = [...arr];
    return cloneArr
}
console.log(array_Clone([1, 2, [4, 0]]));

// 3rd question
function first(arr) {
    var n = arr.shift();
    return n
}
console.log(first([[], [4, 0], 5]));

// 4th question
function myColor(arr) {
    var str = arr.join();
    var str2 = arr.join(" + ")
    console.log(str, '\n', str2)
    return str
}
console.log(myColor( ["Red", "Green", "White", "Black"]));

// 5th question
function mostFrequent(arr1) {
    var a = 0;
    var b = 1;
    var item;

    for(var i = 0; i < arr1.length; i++){

        for (var j = i; j < arr1.length; j++) {

            if (arr1[i] == arr1[j]) b++;
            if (a < b) {
              a = b;
              item = arr1[i];
            }
        }
        
          b = 0;
    }

    console.log(item + " ( " + a + " times ) ");
}
console.log(mostFrequent([3, 'a', 'a', 'a', 2, 'a', 3, 'a', 2, 4, 9, 3]));