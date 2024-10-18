// Search Function
const searchInput = document.getElementById('searchInput');
const newsList = document.getElementById('newsList');
const newsItems = document.querySelectorAll('.news-item');

searchInput.addEventListener('input', function() {
    const searchText = searchInput.value.toLowerCase();
    newsItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchText)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});