const total = document.querySelector('button');
const totalText = document.getElementById('total');
const checkBox = document.getElementById('assurance');
const seatNb = document.getElementById('nbseat');
let totalValue = 0;

total.addEventListener('click', ()=>{
    if (checkBox.checked == true){
        totalValue = 20;
        totalValue += seatNb.value * 45;
        totalText.innerText = "Total de la réservation : " + totalValue;
    }
    else {
        totalValue = 0;
        totalValue += seatNb.value * 45;
        totalText.innerText = "Total de la réservation : " + totalValue;
    }
});