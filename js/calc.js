document.getElementById("btn_cl").addEventListener("click", calcul);
document.getElementById("btn_rl").addEventListener("click", function() {
    location.reload();
});

function calcul() {
    document.getElementById("ex").innerHTML = "";
    var fst = document.getElementById("1st").value;
    var op = document.getElementById("op").value;
    var scnd = document.getElementById("2nd").value;
    var result;
    fst = Number(fst);
    scnd = Number(scnd);
    if (op == "+") {
        result = fst + scnd;
    } else if (op == "-") {
        result = fst - scnd;
    } else if (op == "x") {
        result = fst * scnd;
    } else if (op == "/") {
        result = fst / scnd;
    } else if (op == "%") {
        exResult = fst % scnd;
        result = Math.floor(fst / scnd);
        document.getElementById("ex").innerHTML = "Remiander is: " + exResult;
    } else if (op == "^") {
        result = fst ** scnd;
    } else {
        alert("invalid");
        location.reload();
    }
    if (result === NaN) {
        alert("invalid");
        location.reload();
    }
    document.getElementById("ans").innerHTML = "Answer is " + result;
    console.log(result);

}