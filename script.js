const buttons=document.getElementsByClassName('button');
const numberInput=document.getElementById('number-input');
const infoParagraph=document.getElementById('info');


for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',(event)=>{
    let inputText='';
    switch(event.target.innerHTML){
        case 'C':
            break;
        case '=':
            try {
                inputText= eval(numberInput.value);
            } catch (e) {
                inputText='';
                infoParagraph.style.display= 'block';
                infoParagraph.innerHTML='Invalid Operation';
            }
            
            break;    
        case '←':
            inputText=numberInput.value.slice(0,numberInput.value.length-1);
            break;
        default:
            inputText=`${numberInput.value}${event.target.innerHTML}`;
    }

    
        numberInput.value=inputText;
    });
}