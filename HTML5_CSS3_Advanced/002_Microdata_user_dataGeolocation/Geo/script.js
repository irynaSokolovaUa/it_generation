

var showMapBtn = document.getElementById('show-map-btn');
// var hideMapBtn = document.getElementById('hide-map-btn');



showMapBtn.addEventListener('click', function() {
   
        const mapFrame = document.createElement("div");
        mapFrame.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11316.621032389021!2d24.011129218659363!3d49.824745720142374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae7f6fc3fc115%3A0x37466c2a5fa66b86!2z0JfQsNC70ZbQt9C90LAg0LLQvtC00LA!5e0!3m2!1suk!2sua!4v1681905052206!5m2!1suk!2sua" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
        
        const mapDiv = document.querySelector(".map-view");
        mapDiv.appendChild(mapFrame)

       
});

// hideMapBtn.addEventListener('click', function() {
//     // Скрываем контейнер с картой
//     mapContainer.style.display = 'none';

//     // Скрываем кнопку "Скрыть карту" и показываем кнопку "Показать карту"
//     showMapBtn.style.display = 'inline-block';
//     hideMapBtn.style.display = 'none';
// });