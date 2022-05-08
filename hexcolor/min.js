( ()=>{

    const hexValue=document.getElementById('hex-value')
    const btn=document.getElementById('btn');
    btn.addEventListener('click',createHex)

    function createHex(){
        const hexValues=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexcolor='#'
        for(let i=0;i<6;i++){
            let random=Math.floor(Math.random()*hexValues.length);
            // console.log(random);
            hexcolor +=hexValues[random];  
        }

        // let body=document.getElementsByTagName('body')

       document.body.style.backgroundColor=hexcolor;
       hexValue.textContent=hexcolor;
    }

    // console.log('hi');
})();