const allButtons = document.querySelectorAll('.faq-question')

allButtons.forEach((button, i) => {
    
    (button.addEventListener('click', () => {
        const answers = document.querySelectorAll('.faq-answer')

        answers.forEach(answer => {
            answer.classList.add('closed')
        })
        answers[i].classList.remove('closed')
        
    }));
})