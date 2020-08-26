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
            ` <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"/>
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
        document.querySelector("#scorecard").innerHTML = `

   <svg version="1.1" id="type-writer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px" width="295px" height="380px" viewBox="0 0 295 380" enable-background="new 0 0 295 380" xml:space="preserve">
<path fill="#353535" d="M26.676,97.369c0,0,2.745,2.421,2.745,10.317h-2.745V97.369z"/>
<path fill="#353535" d="M268.324,97.369c0,0-2.745,2.421-2.745,10.317h2.745V97.369z"/>
<rect id="bg2" x="26.676" y="107.686" fill="#444444" width="252.344" height="30.691"/>
<g id="paper">
	<g>
		<linearGradient id="paper_1_" gradientUnits="userSpaceOnUse" x1="146.4551" y1="217.3887" x2="146.4551" y2="122.72">
			<stop  offset="0" style="stop-color:#FFFFFF"/>
			<stop  offset="1" style="stop-color:#ebebeb"/>
		</linearGradient>
		<path fill="url(#paper_1_)" d="M254.817,119.055H37.79c-7.496,16.316-10.967,45.144-12.506,72.279v66.098h242.342
			V197.16C266.265,168.412,262.854,136.546,254.817,119.055z"/>
	</g>


        <g class="typewriter" font-size="30" font-family="sans-serif" fill="black" stroke="none"">
  

  <style>
    div{
      text-align: center;
    }
    .typewriter h5 {
    overflow: hidden;
    /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange;
    /* The typwriter cursor */
    white-space: nowrap;
    /* Keeps the content on a single line */
    /* Gives that scrolling effect as the typing happens */
    letter-spacing: .01em;
    /* Adjust as needed */
    animation:
      typing 3.5s steps(40, end),
      blink-caret .75s step-end 4s;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0
    }

    to {
      width: 100%
    }
   
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {

    0%,
    50% {
      border-color: transparent;
    }

  
    
  }
  </style>
  <foreignObject x="70" y="90"  width="180" height="150">

    <div class="typewriter">
  <h5>Your score  ${score}/${getData.length}</h5>
</div>
  </foreignObject>
  </g>

  
</g>

<g id="print-bar">
	<polygon fill="#DCDBD3" points="57.741,123.571 57.741,140.477 59.796,140.477 59.796,129.482 63.908,129.482 63.908,140.477 
		65.964,140.477 65.964,123.571 	"/>
	<rect x="43.184" y="116.021" fill="#222223" width="37.339" height="12.002"/>
	<polygon fill="#E5E5D8" points="56.519,121.355 56.519,140.692 59.185,140.692 59.185,129.023 64.52,129.023 64.52,140.692 
		67.187,140.692 67.187,121.355 	"/>
	<polygon fill="#353535" points="80.523,116.021 43.184,116.021 44.184,113.688 79.523,113.688 	"/>
</g>
<g id="bg1">
	<path fill="#2D2D2D" d="M26.676,138.376c-2.9,0-5.251-9.18-5.251-20.504s2.351-20.503,5.251-20.503V138.376z"/>
	<g>
		<path fill="#2D2D2D" d="M268.324,97.369c2.9,0,5.252,9.18,5.252,20.503s-2.352,20.504-5.252,20.504V97.369z"/>
		<path fill="#444444" d="M273.576,117.872c0-11.324-2.352-20.503-5.252-20.503h21.705v0.232c2.543,1.425,4.5,9.945,4.5,20.271
			c0,10.325-1.957,18.844-4.5,20.271v0.232h-21.705C271.225,138.375,273.576,129.195,273.576,117.872z"/>
	</g>
	<path fill="#444444" d="M21.425,117.872c0-11.324,2.351-20.503,5.251-20.503H4.971v0.232c-2.543,1.426-4.5,9.946-4.5,20.271
		c0,10.325,1.957,18.844,4.5,20.271v0.233h21.706C23.776,138.376,21.425,129.195,21.425,117.872z"/>
	<g>
		<g>
			<g>
				<g>
					<path fill="#324D63" d="M71.854,376.998c-4.137,0-7.501-3.365-7.501-7.501v-11.223c0-5.986-2.354-14.732-5.359-19.907
						l-47.818-82.368c-0.44-0.759-0.712-1.475-0.808-2.104l273.712,0.001c-0.099,0.628-0.369,1.346-0.81,2.104l-47.819,82.368
						c-3.007,5.18-5.359,13.923-5.359,19.905v11.224c0,4.136-3.365,7.501-7.502,7.501L71.854,376.998L71.854,376.998z"/>
					<polygon fill="#324D63" points="289.371,138.376 4.971,138.376 7.971,226.451 286.371,226.451 					"/>
					<path fill="#273D51" d="M286.371,250.895c0,0-2.086-1.523-2.086-12.223c0-10.697,2.086-12.223,2.086-12.223H7.971
						c0,0,2.084,1.523,2.084,12.223c0,10.697-2.084,12.223-2.084,12.223H286.371z"/>
					<path fill="#324D63" d="M107.013,135.375c0,16.718,17.363,30.271,38.782,30.271c21.42,0,38.783-13.552,38.783-30.271"/>
					<path fill="#273D51" d="M192.956,138.376c0,20.609-21.407,37.319-47.815,37.319c-26.407,0-47.814-16.709-47.814-37.319
						l9.687-3.001c0,16.718,17.363,30.271,38.782,30.271c21.42,0,38.783-13.552,38.783-30.271L192.956,138.376z"/>
				</g>
				<circle fill="#273D51" cx="61.279" cy="182.413" r="34.602"/>
				<circle fill="#273D51" cx="227.559" cy="182.413" r="34.602"/>
			</g>
			<path fill="#262626" d="M230.486,143.81l0.799,4.012c16.018,0.458,28.915,14.634,28.915,31.995
				c0,10.048-4.256,19.32-11.675,25.434c-0.194,0.162-17.853,14.639-41.223,14.639c-20.461,0-39.135-10.838-55.521-32.217h-0.002
				c-1.557-2.066-4.324-3.445-7.493-3.445l-0.019,4.301l-0.02-4.301c-3.167,0-5.937,1.379-7.494,3.445h-0.001
				c-16.388,21.379-35.061,32.217-55.522,32.217c-23.37,0-41.028-14.477-41.222-14.639c-7.419-6.112-11.675-15.385-11.675-25.434
				c0-17.36,12.898-31.537,28.916-31.995l0.799-4.012c-18.461,0-33.429,16.121-33.429,36.007c0,11.664,5.149,22.033,13.132,28.613
				c0,0,18.459,15.459,43.479,15.459c16.594,0,36.071-6.809,54.974-29.419c0.989-1.169,3.669-5.835,8.062-5.836
				c4.391,0.001,7.071,4.667,8.061,5.836c18.904,22.61,38.381,29.419,54.975,29.419c25.021,0,43.479-15.459,43.479-15.459
				c7.982-6.58,13.134-16.949,13.134-28.613C263.914,159.931,248.948,143.81,230.486,143.81z"/>
			<circle fill="#E5E5D8" cx="144.268" cy="194.135" r="5.292"/>
		</g>
		<path fill="#355170" d="M7.971,250.895c-1.036,1.801-0.82,4.146,0.609,6.608l47.819,82.369c2.731,4.706,4.954,12.961,4.954,18.4
			v11.224c0,5.79,4.711,10.502,10.502,10.502H222.59c5.791,0,10.502-4.71,10.502-10.502v-11.222c0-5.439,2.225-13.692,4.955-18.399
			l47.818-82.37c1.43-2.462,1.646-4.81,0.609-6.608L7.971,250.895z"/>
	</g>
</g>
<g id="ink-tape-left">
	<circle fill="#E5E5D8" cx="61.279" cy="178.412" r="34.602"/>
	<g>
		<path fill="#ADD4A4" d="M61.279,151.378c-13.21,0-24.202,9.479-26.56,22.004l-5.076,1v7.03l4.898,1
			c1.933,13.033,13.166,23.033,26.737,23.033c14.931,0,27.035-12.103,27.035-27.033S76.209,151.378,61.279,151.378z"/>
		<circle fill="#97B790" cx="61.277" cy="178.412" r="7.031"/>
	</g>
</g>
<g id="ink-tape-right">
	<circle fill="#E5E5D8" cx="227.559" cy="178.412" r="34.602"/>
	<g>
		<path fill="#ADD4A4" d="M227.869,151.378c-13.209,0-24.2,9.479-26.56,22.004l-5.075,1v7.03l4.897,1
			c1.935,13.033,13.166,23.033,26.736,23.033c14.932,0,27.034-12.103,27.034-27.033
			C254.906,163.481,242.803,151.378,227.869,151.378z"/>
		<circle fill="#97B790" cx="227.557" cy="178.412" r="7.031"/>
	</g>
</g>
<circle id="key_1" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="45.591" cy="272.039" r="9.17"/>
<circle id="key_2" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="71.023" cy="272.039" r="9.17"/>
<circle id="key_3" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="96.455" cy="272.039" r="9.17"/>
<circle id="key_4" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="121.887" cy="272.039" r="9.17"/>
<circle id="key_5" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="146.854" cy="272.039" r="9.17"/>
<circle id="key_6" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="171.762" cy="272.039" r="9.17"/>
<circle id="key_7" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="197.193" cy="272.039" r="9.17"/>
<circle id="key_8" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="222.627" cy="272.039" r="9.17"/>
<circle id="key_9" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="248.059" cy="272.039" r="9.168"/>
<circle id="key_10" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="58.278" cy="294.06" r="9.169"/>
<circle id="key_11" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="83.709" cy="294.06" r="9.169"/>
<circle id="key_12" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="109.142" cy="294.06" r="9.169"/>
<circle id="key_13" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="134.167" cy="294.06" r="9.169"/>
<circle id="key_14" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="159.6" cy="294.06" r="9.169"/>
<circle id="key_15" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="184.449" cy="294.06" r="9.169"/>
<circle id="key_16" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="209.883" cy="294.06" r="9.169"/>
<circle id="key_17" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="235.314" cy="294.06" r="9.169"/>
<circle id="key_18" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="70.965" cy="316.082" r="9.169"/>
<circle id="key_19" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="96.398" cy="316.082" r="9.169"/>
<circle id="key_20" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="121.421" cy="316.082" r="9.169"/>
<circle id="key_21" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="146.854" cy="316.082" r="9.169"/>
<circle id="key_22" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="172.287" cy="316.082" r="9.169"/>
<circle id="key_23" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="197.136" cy="316.082" r="9.169"/>
<circle id="key_24" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="222.57" cy="316.082" r="9.169"/>
<circle id="key_25" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="83.709" cy="338.102" r="9.17"/>
<circle id="key_26" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="108.676" cy="338.103" r="9.17"/>
<circle id="key_27" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="134.108" cy="338.103" r="9.17"/>
<circle id="key_28" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="159.541" cy="338.103" r="9.17"/>
<circle id="key_29" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="184.974" cy="338.103" r="9.17"/>
<circle id="key_30" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" cx="209.883" cy="338.102" r="9.17"/>
<path id="key_0" fill="#F2F0D7" stroke="#92928D" stroke-miterlimit="10" d="M219.052,368.128c0,1.655-1.343,3-3.001,3H77.541
	c-1.657,0-3-1.345-3-3v-9.438c0-1.658,1.343-3.001,3-3.001h138.51c1.658,0,3.001,1.343,3.001,3.001V368.128L219.052,368.128z"/>
</svg>

`;

      }
    }
 
