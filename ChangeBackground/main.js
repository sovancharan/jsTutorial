const colors = [
    'yellow',
    'green',
    'blue',
    'red',
    'orange',
    'violate',
    'purple',
];

let btn = document.getElementById('btn');
// Add event listener
btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * colors.length);

    const body = document.body;

    body.style.background = colors[random];

    console.log(random);
});

// console.log(random);
