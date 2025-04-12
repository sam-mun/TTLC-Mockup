document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is running!");

    const sermons = document.querySelectorAll('.sermon');
    const searchInput = document.querySelector('#searchInput');
    const maxVisibleSermons = 6; // Set the cutoff point here

    // Initially hide sermons beyond the cutoff
    sermons.forEach((sermon, index) => {
        if (index >= maxVisibleSermons) {
            sermon.style.display = 'none';
        }
    });

    // Create "Show More" button
    if (sermons.length > maxVisibleSermons) {
        const showMoreButton = document.createElement('button');
        showMoreButton.textContent = 'Show More';
        showMoreButton.classList.add('btn', 'btn-dark', 'mt-3', 'mb-3');

        const sermonContent = document.querySelector('#sermonContent');
        sermonContent.appendChild(showMoreButton);

        showMoreButton.addEventListener('click', () => {
            sermons.forEach((sermon) => {
                sermon.style.display = 'block';
            });
            showMoreButton.style.display = 'none'; // Hide "Show More" button

            // Create "Show Less" button
            const showLessButton = document.createElement('button');
            showLessButton.textContent = 'Show Less';
            showLessButton.classList.add('btn', 'btn-light', 'mt-3', 'mb-3', 'm-auto');
            sermonContent.appendChild(showLessButton);

            showLessButton.addEventListener('click', () => {
                sermons.forEach((sermon, index) => {
                    if (index >= maxVisibleSermons) {
                        sermon.style.display = 'none';
                    }
                });
                showMoreButton.style.display = 'block'; // Show "Show More" button
                showLessButton.remove(); // Remove "Show Less" button
            });
        });
    }

    // Search functionality
    searchInput.addEventListener('input', function () {
        const searchValue = searchInput.value.toLowerCase();

        sermons.forEach(sermon => {
            const title = sermon.querySelector('h3').textContent.toLowerCase();
            const content = sermon.querySelector('p').textContent.toLowerCase();

            if (title.includes(searchValue) || content.includes(searchValue)) {
                sermon.style.display = 'block'; // Show the sermon if it matches
            } else {
                sermon.style.display = 'none'; // Hide if no match
            }
        });
    });
});