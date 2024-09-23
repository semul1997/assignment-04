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
let mainContainer = getElement('main-container')
let donationHistory = getElement('donation-history')
let modal = getElement('open-modal')
let closeModal = getElement('modal-close');
// donaation for Noakhali

donateNoakhali.addEventListener('click', function(){
    let noakhaliDonation = parseFloat(getElement('noakhali-donation').innerText)
    let reminingBalance = parseFloat(getElement('remaining-balance').innerText);
    let donationHistory = getElement('donation-history')
    
 
    let inputNoakhali = Number(getElement('input-noakhali').value);
    if(inputNoakhali <= 0 || isNaN(inputNoakhali)){
        getElement('input-noakhali').value = "";
        return alert('please enter valid amount')
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


closeModal.addEventListener('click', function(){
    
    modal.classList.add('hidden')
})


// Donation for feni

donateFeni.addEventListener('click', function(){
    let feniDonation = parseFloat(getElement('feni-donation').innerText)
    let reminingBalance = parseFloat(getElement('remaining-balance').innerText);
    let donationHistory = getElement('donation-history')
    
 
    let inputFeni = Number(getElement('input-feni').value);
    if(inputFeni<= 0 || isNaN(inputFeni)){
        getElement('input-feni').value = "";
       return alert('please enter valid amount')
    }
    
    let newAmount = inputFeni + feniDonation;
    getElement('feni-donation').innerText = newAmount;

    getElement('remaining-balance').innerText = reminingBalance - inputFeni;
    getElement('input-feni').value = "";

    let newDiv = document.createElement("div");
    newDiv.className = "my-5 border p-5 rounded-md"
    
    newDiv.innerHTML =  `
                        <p  class = "font-bold"> ${inputFeni} Taka is Donated For flood relief in 2024 at  Feni, Bangladesh </p> 
                        <p> ${new Date()} </p>
                        `;
    donationHistory.insertBefore(newDiv, donationHistory.firstChild)

    let modal = getElement('open-modal')
    modal.classList.remove('hidden')

})


closeModal.addEventListener('click', function(){
    
    modal.classList.add('hidden')
})


// donation for quota-injured


donateQuota.addEventListener('click', function(){
    let quotaDonation = parseFloat(getElement('quota-donation').innerText)
    let reminingBalance = parseFloat(getElement('remaining-balance').innerText);
    let donationHistory = getElement('donation-history')
    
 
    let inputquota = Number(getElement('input-quota').value);
    if(inputquota <= 0 || isNaN(inputquota)){
        getElement('input-quota').value = "";
       return alert('please enter valid amount')
    }
    
    let newAmount = inputquota + quotaDonation;
    getElement('quota-donation').innerText = newAmount;

    getElement('remaining-balance').innerText = reminingBalance - inputquota;
    getElement('input-quota').value = "";

    let newDiv = document.createElement("div");
    newDiv.className = "my-5 border p-5 rounded-md"
    
    newDiv.innerHTML =  `
                        <p  class = "font-bold"> ${inputquota} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh </p> 
                        <p> ${new Date()} </p>
                        `;
    donationHistory.insertBefore(newDiv, donationHistory.firstChild)

    let modal = getElement('open-modal')
    modal.classList.remove('hidden')

})


closeModal.addEventListener('click', function(){
    
    modal.classList.add('hidden')
})





// history button functionality 


historyButton.addEventListener('click', function(){
    mainContainer.classList.add('hidden')
    historyButton.classList.remove('border', 'bg-gray-300','border-inputBorder')
    historyButton.classList.add('bg-btn-bg')
    donationButton.classList.remove('bg-btn-bg')
    donationButton.classList.add('border', 'bg-gray-300','border-inputBorder')

    donationHistory.classList.remove('hidden')
    getElement('footer').classList.add('hidden')

})

// donation Button functionality

donationButton.addEventListener('click', function(){
    mainContainer.classList.remove('hidden')
    historyButton.classList.add('border', 'bg-gray-300','border-inputBorder')
    historyButton.classList.remove('bg-btn-bg')
    donationButton.classList.add('bg-btn-bg')
    donationButton.classList.remove('border', 'bg-gray-300','border-inputBorder')

    donationHistory.classList.add('hidden')
    getElement('footer').classList.remove('hidden')
})

// blog button functionality

blogButton.addEventListener('click', function(){
    window.location.href = "./home.html"
})

// navbar scroll function 
let header = getElement('header')
let navbar = getElement('navbar');

window.addEventListener('scroll', function(){

    if(window.pageYOffset > 50 ){
        header.classList.add('backdrop-blur');
        navbar.classList.add('backdrop-blur');
        navbar.classList.remove('bg-navBg') 

    }else{
        navbar.classList.add('bg-navBg');
        header.classList.remove('backdrop-blur')

        

    }

        
    

})
