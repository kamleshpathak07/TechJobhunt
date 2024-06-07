document.addEventListener("DOMContentLoaded", function () {
    var categoryDOM = document.querySelectorAll('.catagory-list-data');
    categoryDOM.forEach(catagory => function () {
        catagory.style.display = 'none';
    });
});
function showCategory(categoryName) {
    const categories = document.querySelectorAll('.catagory-list-data');
    categories.forEach(category => {
        category.classList.remove('active');
    });
    document.querySelector('.' + categoryName).classList.add('active');
}