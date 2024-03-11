const scrollers = document.querySelectorAll(".tailor-made-marquee-scroller");

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
};

//THIS IS FOR RENDERING!!!
//This adds the data-animated to True
function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector(".tailor-made-scroller__inner");
        //If Array.from is not used, then the DOM will create a loop because the children update when duped,
        //and that will make a refresh on the children which in turn will activate the loop again.
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {

            //clones the item
            const duplicatedItem = item.cloneNode(true);
            //removes the aria for screen readers to no read it twice
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
        })
    })
}

//THIS IS HOVER STATE

let tailorMadeLinks = document.querySelectorAll('.tailor-made-link');

// Function to apply opacity to all .tailor-made-link elements except the hovered one
function applyOpacityToOthers(hoveredElement) {
    tailorMadeLinks.forEach(link => {
        if (link !== hoveredElement) {
            link.style.opacity = '0.2';
        }
    });
}

// Function to reset opacity for all .tailor-made-link elements
function resetOpacityForAll() {
    tailorMadeLinks.forEach(link => {
        link.style.opacity = '';
    });
}

// Iterate over each .tailor-made-link element
tailorMadeLinks.forEach(function(tailorMadeLink) {
    // Add hover event listener
    tailorMadeLink.addEventListener('mouseover', function() {
        // Pause animation of the closest .tailor-made-scroller__inner
        this.closest('.tailor-made-scroller__inner').style.animationPlayState = 'paused';
        // Apply opacity to others
        applyOpacityToOthers(this);
    });

    // Add mouseout event listener
    tailorMadeLink.addEventListener('mouseout', function() {
        // Resume animation of the closest .tailor-made-scroller__inner
        this.closest('.tailor-made-scroller__inner').style.animationPlayState = 'running';
        // Reset opacity for all
        resetOpacityForAll();
    });
});




