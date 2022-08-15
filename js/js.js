let btn = document.getElementById('togglebtn');

let bulb = document.getElementById('bulb');
btn.addEventListener('click',togglebulb);
function togglebulb() {
    if (btn.textContent.includes('On')) {
        bulb.src = "download (1).png"
        btn.textContent = "Turn off";
    } else {
    bulb.src = "2.png";
    btn.textContent = "Turn On"
    }
}


    
