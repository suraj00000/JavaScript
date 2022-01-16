console.log("Iterator");


function fruitsIterators(values) {
    let index = 0;
    return {
        next: function () {
            if (index < values.length) {
                //    we will return this object
                return {
                    value: values[index++],
                    done: false
                }
            } else {
                return {
                    done: true
        }
    }
},
};
}

let myarray = ["apples", "Grapes", "tomato", "bhindi"];
console.log(myarray);

// using the iterators
const fruits = fruitsIterators(myarray);
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
