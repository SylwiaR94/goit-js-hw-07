const listWithId = document.querySelector('#categories');
const menuItemsByTagName = listWithId.querySelectorAll('.item');
console.log("Number of categories: " + menuItemsByTagName.length);

menuItemsByTagName.forEach(item => {
    const itemTitle = item.querySelector("h2").textContent;
    const itemElements = item.querySelectorAll('li');

    console.log(`Category: ${itemTitle}, Elements: ${itemElements.length}`);
});