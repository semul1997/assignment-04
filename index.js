function getElement(id){
    let element = document.getElementById(id);
return element;
}


let reminingBalance = parseFloat(getElement('remaining-balance').innerText);
let noakhaliDonation = parseFloat(getElement('noakhali-donation').innerText)
let feniDonation = parseFloat(getElement('feni-donation').innerText);
let quotaDonation = parseFloat(getElement('quota-donation').innerText);
let donateNoakhali = getElement('donate-noakhali');
let donateFeni = getElement('donate-feni');
let blogButton = getElement('blog-button');
let donationButton = getElement('donation');
let historyButton = getElement('history');
let donateQuota = getElement('donate-quota');


donateNoakhali.addEventListener('click', function(){
    let noakhaliDonation = parseFloat(getElement('noakhali-donation').innerText)
    let reminingBalance = parseFloat(getElement('remaining-balance').innerText);
    let donationHistory = getElement('donation-history')
    
 
    let inputNoakhali = parseFloat(getElement('input-noakhali').value);
    if(inputNoakhali < 0 || isNaN(inputNoakhali)){
        alert('please enter valid input')
    }
    
    let newAmount = inputNoakhali + noakhaliDonation;
    getElement('noakhali-donation').innerText = newAmount;

    getElement('remaining-balance').innerText = reminingBalance - inputNoakhali;
    getElement('input-noakhali').value = "";

    let newDiv = document.createElement("div");
    newDiv.className = "my-5 border p-5 rounded-md"
    
    newDiv.innerHTML =  `
                        <p  class = "font-bold"> ${inputNoakhali} Taka is Donated For flood relief in 2024 at  Noakhali, Bangladesh </p> 
                        <p> ${new Date()} </p>
                        `;
    donationHistory.insertBefore(newDiv, donationHistory.firstChild)

    let modal = getElement('open-modal')
    modal.classList.remove('hidden')

})

let modal = getElement('open-modal')
let closeModal = getElement('modal-close');
closeModal.addEventListener('click', function(){
    
    modal.classList.add('hidden')
})
