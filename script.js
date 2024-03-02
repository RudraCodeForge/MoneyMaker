function toggleMenu() {
    const hamburger = document.querySelector('.HAMBURGER');   
    const menu = document.querySelector('.nav-links');
    hamburger.classList.toggle('active');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    const gem =document.querySelector('.Branding');
    gem.style.display = (gem.style.display === 'none') ? 'block' : 'none';
}
function showpopup(number){
    document.getElementById('popup').style.display = 'block';
    document.getElementById('popup').setAttribute('data-number', number);
    document.getElementById('popup').scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function sendWhatsApp() {
    const number = document.getElementById("popup").getAttribute("data-number");
    const amount = document.getElementById("amount").value;
    if(amount>=10){
        const message = "Number: " + number + ", Amount: " + amount;
        const url = "https://wa.me/7037042767?text=" + encodeURIComponent(message);
        window.open(url, "_blank");
        document.getElementById("popup").style.display = "none";
    }
    else{
        document.getElementById("error").innerHTML = "<strong>Amount should be greater or equal to 10₹</strong><br>";
        
    }
    
}
function goBack() {
      window.history.back();
}
