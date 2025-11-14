document.addEventListener('DOMContentLoaded', function () {
    // Example of handling a click event
    const webtoonItems = document.querySelectorAll('.webtoon-item');
    webtoonItems.forEach(item => {
        item.addEventListener('click', () => {
            alert('You clicked on a webtoon!');
        });
    });
});
