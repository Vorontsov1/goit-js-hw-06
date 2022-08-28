const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories:`, categoriesEl.length);

categoriesEl.forEach(element => {
    const titleEl = element.querySelector('h2');
    const itemEl = element.querySelectorAll('li');
console.log('Category:', titleEl.textContent, 'Element:', itemEl.length);
});
