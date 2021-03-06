function start(){
    let cods = document.getElementById('programm').value;
    //let value = eval(cods);

    let value = eval(cods);

    // let answer = document.getElementById('answer');
    // answer.innerHTML = "<h1> ERROR </h1>";
    // return false;

    let answer = document.getElementById('answer');
    answer.innerHTML = value;
}