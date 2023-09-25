const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

let textContent;
let textContentError;

if (window.location.pathname === '/lang/pt/') {
	textContent = '✅ Sua mensagem foi enviada!';
	textContentError = '❌ Sua mensagem não pôde ser enviada!';
} else if (window.location.pathname === '/lang/fr/') {
	textContent = '✅ Votre message a bien été envoyé !';
	textContentError = "❌ Votre message n'a pas pu être envoyé !";
} else {
	textContent = '✅ Your message has been sent!';
	textContentError = '❌ Your message could not be sent!';
};

const sendEmail = (event) => {
	event.preventDefault();

	emailjs.sendForm('serviceNoowzPortfolio', 'templateNoowzPortfolio', '#contact-form', 'hS9ISc4uvj248x6XN').then(() => {
		contactMessage.textContent = textContent;

        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);

        contactForm.reset();
	}, () => {
		contactMessage.textContent = textContentError;
	});
};

contactForm.addEventListener('submit', sendEmail);