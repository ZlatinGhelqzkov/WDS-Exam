function setPaddingTop() {
    var deviceWidth = window.innerWidth;
    var tailorMadeElement = document.querySelector('.tailor-made');
    var paddingTopValue = deviceWidth * 0.75; // 5% of the device width, you can adjust this as per your needs
    tailorMadeElement.style.paddingTop = paddingTopValue + 'px';

    if(window.innerWidth >= 768){
        tailorMadeElement.style.paddingTop = deviceWidth * 0.85 + 'px';
    }

    if(window.innerWidth >= 1024){
        tailorMadeElement.style.paddingTop = 25.2 + 'rem';
    }
}

// Call the function initially
setPaddingTop();

// Call the function whenever the window is resized
window.addEventListener('resize', setPaddingTop);