
(function(){
const quotes=[
    {
        quote:
        "Life is a to short and sweet to be spant by cribbing and conplaining about things. Here are some random quotes about the most wonderfull gift that we have got",
        author:"Ram"
    },
    {
        quote:
        "God save me from my friends. i can protect myself from my enemies",
        author: "jone"
    },
    {
        quote:
        "The price of anything is the amount of life you change for it",
        author:"david throw"
    }
]

const btn=document.getElementById('generate-btn');

btn.addEventListener('click',()=>{

    let random=Math.floor(Math.random()*quotes.length);

    console.log(random);

    let quote = document.getElementById('quote');

    quote.textContent = quotes[random].quote;

    document.getElementById('auth').textContent=quotes[random].author;
})



})();