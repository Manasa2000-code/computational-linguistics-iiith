var english=[["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
        ["some students like to study in the night","at night some students like to study"],
        ["John and Mary went to church","Mary and John went to church"],
        ["John went to church after eating","after eating John went to church","John after eating went to church"],
        ["did he go to market","he did go to market"],
        ["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
        ["John goes to the library and studies","John studies and goes to the library"],
        ["John ate an apple so did she","she ate an apple so did John"],
        ["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
        ["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"]];
var righte=["John ate an apple before afternoon","some students like to study in the night","Mary and John went to church","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","John goes to the library and studies","John ate an apple so did she","the teacher returned the book after she noticed the error","I told her that I bought a book yesterday"]


var hindi=[["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
        ["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
        ["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
        ["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
        ["बिल्लियों को मारकर कुत्ता सो गया"	,"मारकर बिल्लियों को कुत्ता सो गया"	 ,"बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता"	,"कुत्ता सो गया बिल्लियों को मारकर"	,"कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
        ["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
        ["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब"," है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];
var righth=["राम और श्याम गयें बाजार","श्याम सोया और राम भी","मैंने उसे बताया कि राम सो रहा है","राम सोया खाकर","बिल्लियों को मारकर कुत्ता सो गया","एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है"]

function choose()
{  
   
    document.getElementById("demo3").innerHTML=""
    document.getElementById("demo4").innerHTML=""
    document.getElementById("demo5").innerHTML=""
    document.getElementById("reset").style.visibility="hidden";
    document.getElementById("correctness").style.visibility="hidden";
    document.getElementById("err").innerHTML=""
    document.getElementById("sentence").style.visibility="hidden";
    document.getElementById("sentence").innerHTML="Get Correct Sentence";
    document.getElementById("get").innerHTML=""
    arre = righte[Math.floor(Math.random() * righte.length)];
    e = arre.split(" ");
    arrh = righth[Math.floor(Math.random() * righth.length)];
    h = arrh.split(" ");
    count = 0;
    if(document.getElementById("eng").selected )
    {
        document.getElementById("demo1").innerHTML="<b>Form a sentence (Declarative or Interrogative or any other type) from the given words</b>"
        document.getElementById("demo2").innerHTML="<i>(select the buttons in proper order)</i>"
        let body = document.getElementsByTagName("P")[2];
      
        for (i=0;i < e.length;i++)
        {
            j = Math.floor(Math.random() * e.length)
            e1=e[i];
            e[i]=e[j];
            e[j]=e1;
        }
        for (i=0;i<e.length;i++)
        {
            let button =document.createElement("button");
            button.id='button'+i;
            button.innerHTML=e[i]
            body.appendChild(button);

        button.addEventListener ("click",function()
        {
            document.getElementById("demo4").innerHTML="<b>Formed Sentence</b><i> (after selecting words):</i>"
            document.getElementById("demo5").innerHTML+=this.innerHTML+" ";
            this.style.display="none";      
            count+=1;
            if(count > 0 )
            {
                document.getElementById("reset").style.visibility="visible"; 
            }
            var n=String(document.getElementById("demo5").innerHTML).replace(/\s+$/,"");
            n1=n.split(" ");
            if(e.length == n1.length)
            {
                document.getElementById("correctness").style.visibility="visible";
            }
        });
    }    
    }      
    else if( document.getElementById("hin").selected)
    {
        document.getElementById("demo1").innerHTML="<b>Form a sentence (Declarative or Interrogative or any other type) from the given words</b>"
        document.getElementById("demo2").innerHTML="<i>(select the buttons in proper order)</i>"
        let body = document.getElementsByTagName("P")[2];
      
        for (i=0;i<h.length;i++)
        {
            j = Math.floor(Math.random()*h.length)
            e1=h[i];
            h[i]=h[j];
            h[j]=e1;
        }
        for (i=0;i<h.length;i++)
        {   
            let button =document.createElement("button");
            button.id='button'+i;
            button.innerHTML=h[i]
            body.appendChild(button)
            
            button.addEventListener ("click",function()
            {
                document.getElementById("demo4").innerHTML="<b>Formed Sentence</b><i> (after selecting words)</i>"
               
                document.getElementById("demo5").innerHTML+=this.innerHTML+" ";
                this.style.display="none";      
                count+=1;
                if(count > 0 )
                {
                    document.getElementById("reset").style.visibility="visible";
                }
            var m=String(document.getElementById("demo5").innerHTML).replace(/\s+$/,"");
            m1=m.split(" ");
            if(h.length == m1.length)
            {
                document.getElementById("correctness").style.visibility="visible";              
            }    
        });
    }
    }
    else
    {
        document.getElementById("demo1").innerHTML=""
        document.getElementById("demo2").innerHTML=""
        document.getElementById("demo3").innerHTML=""
    }
}

function reset()
{   
    if(document.getElementById("eng").selected )
    {
        var i = 0;
    while(i < e.length )
    {    
        if(document.getElementById('button'+i).style.display=="none")
        {   
            document.getElementById('button'+ i).style.display="inline";
	        document.getElementById('demo4').innerHTML=""
	        document.getElementById('demo5').innerHTML=""
            document.getElementById('reset').style.visibility="hidden";
            document.getElementById('correctness').style.visibility="hidden";
            document.getElementById('sentence').style.visibility="hidden";
            document.getElementById('err').innerHTML="";
            document.getElementById('get').innerHTML="";
        }
        i++; 
    }
    }
    else if(document.getElementById("hin").selected )
    {
        var i=0;
    while(i < h.length )
    {    
        if(document.getElementById('button'+i).style.display=="none")
        {
            document.getElementById('button'+ i).style.display="inline";
	        document.getElementById('demo4').innerHTML=""
	        document.getElementById('demo5').innerHTML=""
            document.getElementById('reset').style.visibility="hidden";
            document.getElementById('correctness').style.visibility="hidden";
            document.getElementById('sentence').style.visibility="hidden";
            document.getElementById('err').innerHTML="";
            document.getElementById('get').innerHTML="";
        }
        i++;  
    }
    }
}

function correctness()
{
document.getElementById("sentence").innerHTML="Get Correct Sentence";
document.getElementById("get").innerHTML=""   
var z=String(document.getElementById("demo5").innerHTML).replace(/\s+$/, "");
array1=0;
array2=0;
if(document.getElementById("eng").selected)
{
    for(i=0;i<10;i++)
    {
        for(j=0;j<english[i].length;j++)
        {
            if(z == english[i][j])
            {
                array1++;
            }
        }
    }
    if(array1 == 1)
    {
        document.getElementById("err").innerHTML="Right answer!!!"
        document.getElementById("err").style.color="green"
    }
    else
    {
        document.getElementById("err").innerHTML="Wrong answer!!!"
        document.getElementById("err").style.color='red'
        document.getElementById("sentence").style.visibility="visible";
    }
}
else if(document.getElementById("hin").selected)
{
    for(i=0;i<7;i++)
    {
        for(j=0;j<hindi[i].length;j++)
        {
            if(z == hindi[i][j])
            {
                array2++;
            }
        }
    }
    if(array2 == 1)
    {
        document.getElementById("err").innerHTML="Right answer!!!"
        document.getElementById("err").style.color='green'
    }
    else
    {
        document.getElementById("err").innerHTML="Wrong answer!!!"
        document.getElementById('err').stylr.color='red'
        document.getElementById("sentence").style.visibility="visible";
    }
}
}

function toggle()
{
    m=righte.indexOf(arre)
    array1 = english[m];
    n=righth.indexOf(arrh)
    array2 = hindi[n];
  var getcrcts="Get Correct Sentence"
  var hidcrcts="Hide Correct Sentence"
  var getans="Get Answers"
    if(document.getElementById("eng").selected)
    {
        if(document.getElementById("sentence").innerHTML == getcrcts)
        { let i=0;
            for(;i<array1.length;i++)
            {
                document.getElementById("get").innerHTML+=array1[i]+"<br>";
                document.getElementById("sentence").innerHTML= hidcrcts;         
            }
        }
        else if(document.getElementById("sentence").innerHTML == hidcrcts)
        {
            document.getElementById("get").innerHTML=""
            document.getElementById("sentence").innerHTML= getans;
        }
        else if(document.getElementById("sentence").innerHTML == getans)
        { let i=0;
            for(;i<array1.length;i++)
            {
                document.getElementById("get").innerHTML+=array1[i]+"<br>";
                document.getElementById("sentence").innerHTML = hidcrcts;  
            }
        }
    }
    else if(document.getElementById("hin").selected)
    {
        if(document.getElementById("sentence").innerHTML == getcrcts)
        { let i=0;
            for(;i<array2.length;i++)
            {
                document.getElementById("get").innerHTML+=array2[i]+("<br>");
                document.getElementById("sentence").innerHTML= hidcrcts;
                  
            }
        }
    else if(document.getElementById("sentence").innerHTML == hidcrcts)
    {
        document.getElementById("get").innerHTML=""
        document.getElementById("sentence").innerHTML= getans;
    }
    else if(document.getElementById("sentence").innerHTML == getans)
    {  let i=0;
        for(;i<array2.length;i++)
        {
            document.getElementById("get").innerHTML+=array2[i]+("<br>");
            document.getElementById("sentence").innerHTML= hidcrcts;
        }
    }
    }
}

