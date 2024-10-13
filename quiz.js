function calculateScore() {
    const correctAnswers = {
        country: 'china',
        home: 'gumi',
        food: 'gal',
        size: '250',
        song: 'indi'
    };

    let score = 0;
    const form = document.getElementById('quizForm');
    const answerDisplay = document.getElementById('answerDisplay');
    answerDisplay.innerHTML = '';

    for (let question in correctAnswers) {
       
        const selectedAnswer = form.elements[question].value;

        if (selectedAnswer === correctAnswers[question]) {
            score += 20;
        }

        const correctInput = Array.from(form.elements[question]).find(input => input.value === correctAnswers[question]);
        if (correctInput) {
            correctInput.checked = true; 
        }
    }

    document.getElementById('scoreDisplay').innerHTML = `당신의 점수는 ${score}점입니다.`;
}

function setNightMode() {
    document.querySelector('body').style.backgroundColor = 'rgb(30,30,30)';
    document.querySelectorAll('*').forEach(el => el.style.color = 'white');
  }

  function setDayMode() {
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelectorAll('*').forEach(el => el.style.color = 'rgb(30,30,30)');
  }