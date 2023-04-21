const button1= document.getElementById('1');
const button2= document.getElementById('2');
const button3= document.getElementById('3');
const button4= document.getElementById('4');
const button5= document.getElementById('5');
const button6= document.getElementById('6');
const button7= document.getElementById('7');
const button8= document.getElementById('8');
const button9= document.getElementById('9');
const button0= document.getElementById('0');

const buttonplus= document.getElementById('plus');
const buttonminus= document.getElementById('minus');
const buttonequal= document.getElementById('equal');
const buttonmultiple= document.getElementById('multiple');
const buttondivision= document.getElementById('division');
const wynik= document.getElementById('wynik');
const next= document.getElementById('next');
const first= document.getElementById('first');
const operation= document.getElementById('operation');




var a=true; // wpisywanie liczby do tabeli
let n=0;// przesuwanie wartości z pierwszej zmiennej do drugiej/ pierwsza zmienna
let m= new Array;// druga zmienna
let b=m[1]; // nie wiem do czego raczej do usunięcia ale sprawdze
var d=true;// wyswietlanie diva z działaniami
let action=0;// działania matematyczne 
let action2=true// działania po wcisnięciu equal, zabopiega powtarzaniu się działań

wynik.innerHTML=0;
first.innerHTML=0;






let fun=function()
{
    let tout = setInterval( function()
    {
            
            if(firstn.length>0)
            {
                n=firstn.join('');
                n=parseFloat(n);
            }
            if(m[0]==undefined)
            {
                wynik.innerHTML=0;
                first.innerHTML=' ';
            }
            if(m[0]!=undefined)
            {
                wynik.innerHTML=m[0];
                first.innerHTML=m[0];    
            }


                
            if (d==true)
            {
            next.innerHTML=n;
            }
            if(d==false)
            {
            next.innerHTML='';
            }
        
        },10
        )
}


//działania


let firstn= new Array;

button1.addEventListener('click',function()
{
    if (a==true)   
    {
        fun()
        a=false;
    }
    if(action2==true)
    {
    console.log('1');
    firstn.push(button1.value);
    }
});
button2.addEventListener('click',function()
{
    if (a==true)
    {
        fun()
        a=false;
    }
    if(action2==true)
    {
    console.log('2');
    firstn.push(button2.value);
    }
});
button3.addEventListener('click',function()
{
    if (a==true)
    {
        fun()
        a=false;
    }
    if(action2==true)
    {
    console.log('3');
    firstn.push(button3.value);
    }
});
button4.addEventListener('click',function()
{
    if (a==true)
    {
        fun()
        a=false;
    }
    if(action2==true)
    {
    console.log('4');
    firstn.push(button4.value);
    }
});
button5.addEventListener('click',function()
{
    if (a==true)
    {
        fun()
        a=false;
    }
    if(action2==true)
    {
    console.log('5');
    firstn.push(button5.value);
    }
});
button6.addEventListener('click',function()
{
    if (a==true)
    {
        fun()
        a=false;
    }
    if(action2==true)
    {
    console.log('6');
    firstn.push(button6.value);
    }
});
button7.addEventListener('click',function()
{
    if (a==true)
    {
        fun()
        a=false;
    }
    if(action2==true)
    {
    console.log('7');
    firstn.push(button7.value);
    }
});
button8.addEventListener('click',function()
{
    if (a==true)
    {
        fun()
        a=false;
    }
    if(action2==true)
    {
    console.log('8');
    firstn.push(button8.value);
    }
});
button9.addEventListener('click',function()
{
    if (a==true)
    {
        fun()
        a=false;
    }
    if(action2==true)
    {
    console.log('9');
    firstn.push(button9.value);
    }
});
button0.addEventListener('click',function()
{
    if (a==true)
    {
        fun()
        a=false;
    }
    if(action2==true)
    {
    console.log('0');
    firstn.push(button0.value);
    }
});




let plus= function()
{
    action2=true;
    m.push(n);
    firstn=new Array;
    if(m.length>1)
    {
        m[0]=m[0]+m[1];
        console.log(m[0]);
        m.splice(1.1);
        
    }
    n=0;
};
let minus= function()
{
    m.push(n);
    firstn=new Array;
    if(m.length>1)
    {
        m[0]=m[0]-m[1];
        console.log(m[0]);
        m.splice(1.1);
    }
    n=0;
};
let multiple=function()
{   

    if(n!==0)
    m.push(n);
    firstn=new Array;
    if(m.length>1)
    {
        m[0]=m[0]*m[1];
        console.log(m[0]);
        m.splice(1.1);
    }
    n=0;
}
let division=function()
{   
    if(n!==0)
    m.push(n);
    firstn=new Array;
    if(m.length>1)
    {
        m[0]=(m[0]/m[1]);
        console.log(m[0]);
        m.splice(1.1);
    }
    n=0;
    
}

buttonplus.addEventListener('click',function()
{
    operation.innerHTML='+'
    d=true;
    if((action==1)||(action==0))
    {
    plus();
    }
    if(action==2)
    {
    minus();
    }
    if(action==3)
    {
    multiple();
    }
    if(action==4)
    {
    division();
    }
    action=1;
    action2=true;
});

buttonminus.addEventListener('click',function()
{
    operation.innerHTML='-'
    d=true;
    if((action==2)||(action==0))
    {
    minus();
    }
    if(action==1)
    {
    plus();
    }
    if(action==3)
    {
    multiple();
    }
    if(action==4)
    {
    division();
    }
    action=2;
    action2=true;

});

buttonmultiple.addEventListener('click',function()
{
    operation.innerHTML='*'
    d=true;
    if((action==3)||(action==0))
    {
    multiple();
    }
    if(action==1)
    {
    plus();
    }
    if(action==2)
    {
    minus();
    }
    if(action==4)
    {
    division();
    }
    action=3;
    action2=true;

});

buttondivision.addEventListener('click',function()
{
    operation.innerHTML='/'
    d=true;
    if((action==4)||(action==0))
    {
    division();
    
    }
    if(action==1)
    {
    plus();
    }
    if(action==2)
    {
    minus();
    }
    if(action==3)
    {
    multiple();
    }
    action=4;
    action2=true;
});

buttonequal.addEventListener('click',function()
{
    operation.innerHTML='';
    d=false;
    if(action==1)
    {
    plus();
    }
    
    if(action==2)
    {
    minus();
    }
    if(action==3)
    {
    multiple();
    }
    if(action==4)
    {
    division();
    }
    action=5;
    action2=false;
    
});
