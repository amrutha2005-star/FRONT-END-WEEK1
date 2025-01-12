// Select all tabs and content sections
const tabs = document.querySelectorAll('.tab');
const contentSections = document.querySelectorAll('.tab-content');

// Add click event listeners to each tab
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove the 'active' class from all tabs and content
        tabs.forEach(t => t.classList.remove('active'));
        contentSections.forEach(content => content.classList.remove('active'));

        // Add the 'active' class to the clicked tab and corresponding content
        tab.classList.add('active');
        const tabId = tab.id;
        document.getElementById('content' + tabId.charAt(tabId.length - 1)).classList.add('active');
    });
});
