console.group('about');
    console.log('nick: artuma');
    console.log('city: Ufa');

    console.group('items');
        console.log('python');
        console.log('javascript');
        console.log('sql');
    console.groupEnd();
console.groupEnd();

const arr = ['Научились ли вы радоваться препятствиям?', 'Мягкое побеждает твёрдое','Худший из наших недостатков - это наш интерес к недостаткам других людей.','Подумайте о себе, прежде чем вас привлекут к ответственности. Взвесьте свои поступки, прежде чем их взвесят.']


const button = document.querySelector("#randText");
button.addEventListener("click", function() {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let i = getRandomInt(0, arr.length - 1)
    button.textContent = arr[i] 
});