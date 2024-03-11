function isScrolledIntoView(elem) {
    const rect = elem.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
}

function countUp(counter) {
    if (counter.getAttribute('ended') === 'true' || counter.isCountingStarted) return;

    const countTo = parseFloat(counter.getAttribute('data-target'));
    const speed = parseInt(counter.getAttribute('data-speed'), 10);
    const delayMS = parseInt(counter.getAttribute('data-delayMS'), 10);
    const symbol = counter.getAttribute('data-symbol');
    const increment = countTo / speed;
    const hasDecimal = countTo % 1 !== 0;
    const decimalPlaces = hasDecimal ? 1 : 0;

    const updateCount = () => {
        const count = parseFloat(counter.innerText);
        if (count < countTo) {
            let nextCount = count + increment;
            counter.innerText = hasDecimal ? nextCount.toFixed(decimalPlaces) + symbol : Math.ceil(nextCount) + symbol;
            setTimeout(updateCount, delayMS);
        } else {
            counter.innerText = hasDecimal ? countTo.toFixed(decimalPlaces) + symbol : countTo + symbol;
            counter.setAttribute('ended', 'true');
        }
    };

    counter.isCountingStarted = true; // Set the flag when counting starts
    updateCount();
}

// Counter
document.addEventListener('DOMContentLoaded', () => {

    // Initialize counter text to 0 or decimal starting point
    document.querySelectorAll('.counter').forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        counter.innerText = target % 1 === 0 ? '0' : '0.0';
    });
   


    // Trigger count up when in view
    function checkAndStartCountUp() {
        document.querySelectorAll('.counter[ended="false"]').forEach(counter => {
            if (isScrolledIntoView(counter)) {
                countUp(counter);
            }
        });
    }

    // Initial check and scroll event listener
    checkAndStartCountUp();
    document.addEventListener('scroll', checkAndStartCountUp);
});


