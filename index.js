window.addEventListener('load', function() {

    var entrada = document.querySelector('#character');
    var person = document.querySelector('#cameraPerson')
    var count = document.querySelector('#contador')
    var timeoutId;
    var countdownValue = 3;
    var intervalId;

    entrada.addEventListener('mouseenter', function() {
        
        countdownValue = 3;
        count.setAttribute('value', countdownValue)
        count.setAttribute('visible', true);
        entrada.setAttribute('color', 'red');
        
        intervalId = setInterval(function() {
            countdownValue--;
            count.setAttribute('value', countdownValue);
  
            // Si la cuenta regresiva llega a 0, detener el intervalo
            if (countdownValue <= 0) {
              clearInterval(intervalId);
            }
          }, 1000);

        timeoutId = setTimeout(()=>{
            person.setAttribute('position', '25 1 5');
        }, 3000)
        
    });
  
    entrada.addEventListener('mouseleave', function() {
        entrada.setAttribute('color', '#777');
        clearTimeout(timeoutId)
        clearInterval(intervalId);
        count.setAttribute('visible', false);
    });
  });
  