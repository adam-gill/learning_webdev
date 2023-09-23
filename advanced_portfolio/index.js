// template_69kgbdi
// service_p287ikn
// VJJJ44OmvL3UOF4J0

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs.sendForm(
            'service_p287ikn', 
            'template_69kgbdi', 
            event.target, 
            'VJJJ44OmvL3UOF4J0').then(() => {
        }).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert("The email service is temporarily unavailable. Please contact me directly at adam.douglas.gill@gmail.com")
        
        })
}

// 2:08:46