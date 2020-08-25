    function generateQuiz(v) {
      document.querySelector("#que").innerHTML = `<div id="innerque"  class="list-group  shadow p-1 bg-white rounded">
  <div  class="list-group-item list-group-item-action list-group-item-info fade show active" aria-current="true">
  ${v.value.question}

</div>
  </div>`
      for (let i = 1; i <= 4; i++) {
        document.querySelector("#innerque").innerHTML += `
      <button  type="button" class="delay-list list-group-item list-group-item-action list-group-item-success  d-flex justify-content-between align-items-center"  onclick="checkAnswer(this)" value=${v.value['option' + i]}>${v.value['option' + i]}
      </button>`
      }
    }

    function checkAnswer(e) {
      if (question.done != true) {
        let userChoice = e.innerText.slice(2).trim();
        let answer = question.value.answer.split('Answer:')[1].toString().trim();
        console.log(userChoice, answer);
        if (userChoice == answer) {
          score += 1;
          e.innerHTML +=
            `
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
            `
          document.querySelector("#scr").innerText = score;
          for (let i = 2; i <= 5; i++) {
            document.querySelector(`#innerque > button:nth-child(${i})`).disabled = true;
            document.querySelector(`#innerque > button:nth-child(${i})`).style.opacity = 0.7;
          }
          e.style.opacity = 1;
        } else {
          for (let i = 2; i <= 5; i++) {
            let v = '';
            v = document.querySelector(`#innerque > button:nth-child(${i})`);
            if (v.innerText.slice(2).trim() == answer) {
              v.disabled = true;
              v.innerHTML +=
                `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>`
              v.style.opacity = 1;
            } else {
              document.querySelector(`#innerque > button:nth-child(${i})`).classList.add("disabled")
              document.querySelector(`#innerque > button:nth-child(${i})`).disabled = true;
              document.querySelector(`#innerque > button:nth-child(${i})`).style.opacity = 0.7;
            }
          }
          e.innerHTML +=
            `  <svg id="icon2" class="test-icon wrapper wrapper--close" width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="white" 
       stroke-width="3" stroke-dasharray="100">
    <path class="icon-path" id="check" d="M 15,15 L 32,33 M 32,15 L 15,33"></path>
  </svg>`

        }
        setTimeout(() => {
          nextQuestion();
        }, 2000);
      }
    }

    function nextQuestion() {
      question = eArr.next();
      if (question.done == false) {
        generateQuiz(question);

      } else {
        document.getElementById("que").remove();
        document.querySelector("#scorecard").innerHTML = `<div class="card bg-success"  style="width: 50rem;height: 30rem;    align-items: center;
    justify-content: center;"><h2>Your score ${score}/${getData.length}</h2>
    
    </div>`;

      }
    }
 
