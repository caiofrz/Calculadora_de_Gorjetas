function calculateTip(event){
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQuality = document.getElementById('serviceQuality').value;
    let people = document.getElementById('people').value;

    if (serviceQuality == 0) {
        alert('Preencha todos os campos!');
        return;
    }

    if (people <= 0) {
        alert('Campo de pessoas não está preenchido corretamente!');
        document.getElementById('total-tip').style.display="none";
        document.getElementById('each').style.display="none";
        document.location.reload(true);        
        return;
    } else if (people == 1){
        document.getElementById('each').style.display="none";
    } else{
        document.getElementById('each').style.display="block";
    }

    let totalTip = (bill * serviceQuality)/people;

    totalTip = totalTip.toFixed(2);

    document.getElementById('tip').innerHTML = totalTip;
    document.getElementById('total-tip').style.display="block";

}


document.getElementById('total-tip').style.display="none";
document.getElementById('each').style.display="none";

document.getElementById('forms').addEventListener('submit', calculateTip);