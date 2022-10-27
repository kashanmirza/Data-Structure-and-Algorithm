function outer(){
    var sum = 0;

    function inner(){
        console.log(sum + 1);
    }

    return inner;
}

outer()()