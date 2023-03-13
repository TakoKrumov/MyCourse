window.addEventListener('load', function () {
    let hitCount = 0;
    let mouseX;
    let mouseY;
    let hammer = document.getElementById('hammer');
    let randomMole = null;
    let hit = false;
    (function startInfiniteRounds() {
        setTimeout(showRandomMole, getRandomInterval());

        function showRandomMole() {
            hit = false;
            let moleCollection = document.getElementsByClassName('mole');
    
            let randomMoleIdex = Math.floor(Math.random() * moleCollection.length);
    
            randomMole = moleCollection[randomMoleIdex];
    
            
            animateMoleMovement();
    
            setTimeout(showRandomMole, getRandomInterval());
    
    
        }
    })();

    /**
     * track mouse position
       move hammer
       add event listeners
     */
    (function initializeGame() {
        document.addEventListener('mousemove', function (e) {
            mouseX = e.x;
            mouseY = e.y;
        });
    
        document.addEventListener('click', wackHammer);
    
        requestAnimationFrame(moveHammer);
    })();

    /**
     * 
     * @returns ms in the range MIN_TIMEOUT to MAX_TIMEOUT
     */
    function getRandomInterval() {
        return (Math.random() * (MAX_TIMEOUT - MIN_TIMEOUT)) + MIN_TIMEOUT;
    }

    function animateMoleMovement() {

        let frameCount = Math.ceil((MOLE_SHOW_TIME / 1000) * 60); 
        let start = 250;
        let end = 0;
        let step = (start-end)/frameCount;
        let current = start;
        let animationId;
        let direction = 'up';
        animationId = requestAnimationFrame(moveMole);
        
        function moveMole(){

            if(hit) {
                cancelAnimationFrame(animationId);
                setTimeout(()=> {
                    randomMole.style.top = `${start}px`;
                    randomMole = null;
                },MOLE_FREEZE_TIME)
                return;
            }

            if(direction === 'up') {
                current-=step;
            } else {
                current+=step;
            }

            if(current <= end) {
                direction = 'down';
            }

            if(current > start) {
                cancelAnimationFrame(animationId);
                return;
            }

            
            randomMole.style.top = `${current}px`;
            animationId = requestAnimationFrame(moveMole);
        }
    }

    function moveHammer() {
        hammer.style.top = `${mouseY}px`;
        hammer.style.left = `${mouseX}px`;
        requestAnimationFrame(moveHammer);
    }

    function checkForHit() {

        if (!randomMole) {
            return false;
        }

        let hammerCoords = hammer.getBoundingClientRect();
        let moleCoords = randomMole.getBoundingClientRect();

        return !(moleCoords.right < hammerCoords.left ||
            moleCoords.left > hammerCoords.right ||
            moleCoords.bottom < hammerCoords.top ||
            moleCoords.top > hammerCoords.bottom)
    }

    function wackHammer() {
        hammer.style.animation = `wackHammer ${HAMMER_WACK_TIME}ms 2 alternate`;

        if (!hit && checkForHit()) {
            hit = true;
            hitCount++;
            document.getElementById('score').innerText = hitCount;
        }


        setTimeout(() => {
            hammer.style.animation = '';
        }, HAMMER_WACK_TIME*2);
    }    

});


