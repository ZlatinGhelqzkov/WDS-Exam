function generateDivsFromJSON(templates) {
  var parentElement = document.querySelector('.templates__inner');

  templates.forEach(function(item, index) {

            var div = document.createElement('div');
            div.classList.add("template-wrapper");
      
            var imgWrapper = document.createElement('div');
            imgWrapper.classList.add("template-img-wrapper");
            imgWrapper.dataset.themeColor = item.themeColor;
      
            var img = document.createElement('img');
            img.src = item.image;
            img.alt = `Layout ${index}`;
      
            var p = document.createElement('p');
            p.textContent = item.title;
      
            imgWrapper.appendChild(img);
            div.appendChild(imgWrapper);
            div.appendChild(p);
            parentElement.appendChild(div);
      
            div.addEventListener('mouseenter', function() {
                var themeColor = imgWrapper.dataset.themeColor;
                var templates = document.querySelector('.templates');
                templates.style.backgroundColor = themeColor;
            });
      
            div.addEventListener('mouseleave', function() {
                var templates = document.querySelector('.templates');
                templates.style.backgroundColor = "transparent";
            });
      
  });
}

generateDivsFromJSON(templates);
