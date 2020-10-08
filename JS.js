document.getElementById("btn_send").addEventListener("click", calc)

function calc() {
    let screw = document.getElementById("input_screw").value;
    let screwwnut = document.getElementById("input_screwnut").value;
    let grommet = document.getElementById("input_grommet").value;

    if (!isvalidnumber(screw)) document.getElementById("error_screw").innerText = "Bitte Zahl bei Schrauben angeben.";
    if (!isvalidnumber(screwwnut)) document.getElementById("error_screw").innerText = "Bitte Zahl bei Mutter angeben.";
    if (!isvalidnumber(grommet)) document.getElementById("error_screw").innerText = "Bitte Zahl bei Unterlagsschrauben angeben.";

    let calculate = (screw * 0.2 + screwwnut * 0.1 + grommet * 0.05).toFixed(2);
    let forhtml = "➸ " + calculate.toString();

    document.getElementById("result").innerText = forhtml;
}

function isvalidnumber(number) {
    return /^\d+$/.test(number)
}