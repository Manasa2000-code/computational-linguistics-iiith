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
var righte=["John ate an apple before afternoon","some students like to study in the night","Mary and John went to church","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","John goes to the library and studies","the teacher returned the book after she noticed the error","I told her that I bought a book yesterday","John ate an apple so did she"]


var hindi=[["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
        ["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
        ["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
        ["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
        ["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
        ["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
        ["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब"," है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];
var righth=["राम और श्याम गयें बाजार","श्याम सोया और राम भी","मैंने उसे बताया कि राम सो रहा है","राम सोया खाकर","बिल्लियों को मारकर कुत्ता सो गया","एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है"]

function choose()
  {  
      var x = document.getElementById("myselect").value;
      document.getElementById("demo3").innerHTML=""
      document.getElementById("demo4").innerHTML=""
      document.getElementById("demo").innerHTML=""
      document.getElementById("reset").style.visibility="hidden";
      document.getElementById('correctness').style.visibility="hidden";
      document.getElementById('err').innerHTML="";
      document.getElementById("sentence").innerHTML="Get Correct Sentence";
      document.getElementById("get").innerHTML=""
      count = 1;
      if(document.getElementById("eng").selected )
      {
      document.getElementById("demo1").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words"
      document.getElementById("demo2").innerHTML="(select the buttons in proper order)"
      document.getElementById("err").innerHTML=""
      document.getElementById("get").innerHTML=""
      var arre = righte[Math.floor(Math.random() * righte.length)]
      let be = document.getElementsByTagName("P")[2];
      E = arre.split(" ");
      
    for (i=0;i < E.length;i++)
      {
        m = Math.floor(Math.random() * E.length)
         arre=E[i];
         E[i]=E[m];
         E[m]=arre;
      }
         for (i=0;i<E.length;i++)
       {
         let button =document.createElement("button");
         button.id='button'+i;
         button.innerHTML=E[i]
         be.appendChild(button)
         button.addEventListener ("click",function()
         {
             document.getElementById("demo4").innerHTML="Formed Sentences (after selecting words):"
             document.getElementById("demo").innerHTML+=this.innerHTML +" ";
             this.style.display="none";
            
             count=count+1;
             if(count >= 1 )
             {
                 document.getElementById("reset").style.visibility="visible";
                
                 
             }
             var n=String(document.getElementById("demo").innerHTML).replace(/\s+$/,"");
             n1=n.split(" ");
             if(E.length === n1.length)
             {
                 document.getElementById("correctness").style.visibility="visible";
                
             }
          
         });

       }
       
     }
      
      else if( document.getElementById("hin").selected)
      {
      document.getElementById("demo1").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words"
      document.getElementById("demo2").innerHTML="(select the buttons in proper order)"
      document.getElementById("get").innerHTML=""
      var arrh = righth[Math.floor(Math.random() * righth.length)]
      let bh = document.getElementsByTagName("P")[2];
       H = arrh.split(" ");
      for (i=0;i<H.length;i++)
      {
        n = Math.floor(Math.random() * H.length)
         arrh=H[i];
         H[i]=H[n];
         H[n]=arrh;
      }
       for (i=0;i<H.length;i++)
       {
         let button =document.createElement("button");
         button.id='button'+i;
         button.innerHTML=H[i]
         bh.appendChild(button)
         button.addEventListener ("click",function()
        {
            document.getElementById("demo4").innerHTML="Formed Sentences (after selecting words)"
            document.getElementById("demo").innerHTML+=this.innerHTML+" ";
            this.style.display="none";
            
            count+=1;
            if(count >= 1 )
            {
                document.getElementById("reset").style.visibility="visible";
               
            }
            
            var n=String(document.getElementById("demo").innerHTML).replace(/\s+$/,"");
            n1=n.split(" ");
            if(H.length === n1.length)
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
        alert ("select a language")
      }
}

function reset()
{   
  if(document.getElementById("eng").selected )
  {
    var i = 0;
  while(i < E.length )
  {    
        if(document.getElementById('button'+i).style.display=="none")
        {
         
    	document.getElementById('button'+ i).style.display="inline";
	    document.getElementById('demo4').innerHTML=""
	    document.getElementById('demo').innerHTML=""
      document.getElementById('reset').style.visibility="hidden";
      document.getElementById('correctness').style.visibility="hidden";
      document.getElementById('err').innerHTML="";
      document.getElementById('get').style.visibility="hidden";
    }
    i++; 
  }
  }
 else if(document.getElementById("hin").selected )
  {
    var i=0;
  while(i < H.length )
  {    
        if(document.getElementById('button'+i).style.display=="none")
        {
         
    	document.getElementById('button'+ i).style.display="inline";
	    document.getElementById('demo4').innerHTML=""
	    document.getElementById('demo').innerHTML=""
      document.getElementById('reset').style.visibility="hidden";
      document.getElementById('correctness').style.visibility="hidden";
      document.getElementById('err').innerHTML="";
      document.getElementById('get').style.visibility="hidden";
       }
       i++;  
  }
  }
}
function correctness()
{
var a=document.getElementById("demo").innerHTML

/*if((a ==="Mary and John went to church ")||(a==="John goes to the library and studies ")

||(a=="some students like to study in the night ")||(a=="John ate an apple before afternoon ")
||(a=="John went to church after eating ")||(a=="did he go to market ")||(a=="the woman who called my sister sells cosmetics ")
  ||(a=="the teacher returned the book after she noticed the error ")||
  (a=="I told her that I bought a book yesterday ")||
  (a=="John ate an apple so did she ")||(a=="राम और श्याम गयें बाजार ")||(a=="श्याम सोया और राम भी ")
  ||(a=="मैंने उसे बताया कि राम सो रहा है ")||(a=="राम सोया खाकर ")
  ||(a=="बिल्लियों को मारकर कुत्ता सो गया ")||(a=="एक लाल किताब वहाँ है ")
  ||(a=="एक बड़ी सी किताब वहाँ है "))*/
  if(a.value=="english"||a.value=="hindi")

{
document.getElementById('err').innerHTML= "<span style = 'color:green'>Right answer!!!</span>"
}                                 

else
{
document.getElementById('err').innerHTML= "<span style='color:red;'>Wrong answer!!!</span>"
var x = document.getElementById("sentence").style.visibility="visible"
document.getElementById("sentence").addEventListener("click",toggle);
}
}


  function toggle()
  {
      m=righte.indexOf(righte[Math.floor(Math.random() * righte.length)])
      array1 = english[m];
      g=righth.indexOf(righth[Math.floor(Math.random() * righth.length)])
      array2 = hindi[g];
  
      if(document.getElementById("eng").selected)
      {
          if(document.getElementById("sentence").innerHTML == "Get Correct Sentence")
          { let i=0;
              for(;i<array1.length;i++)
              {
                  document.getElementById("get").innerHTML+=array1[i]+"<br>";
                  document.getElementById("sentence").innerHTML="Hide Correct Sentence"
              }
          }
          else if(document.getElementById("sentence").innerHTML == "Hide Correct Sentence")
          {
              document.getElementById("get").innerHTML=""
              document.getElementById("sentence").innerHTML="Get Answers"
          }
          else if(document.getElementById("sentence").innerHTML == "Get Answers")
          { let i=0;
              for(;i<array1.length;i++)
              {
                  document.getElementById("get").innerHTML+=array1[i]+"<br>";
                  document.getElementById("sentence").innerHTML = "Hide Correct Sentence"
              }
          }
      }
      else if(document.getElementById("hin").selected)
      {
          if(document.getElementById("sentence").innerHTML == "Get Correct Sentence")
          { let i=0;
              for(;i<array2.length;i++)
              {
                  document.getElementById("get").innerHTML+=array2[i]+"<br>";
                  document.getElementById("sentence").innerHTML="Hide Correct Sentence"
              }
          }
      else if(document.getElementById("sentence").innerHTML == "Hide Correct Sentence")
          {
              document.getElementById("get").innerHTML=""
              document.getElementById("sentence").innerHTML="Get Answers"
          }
      else if(document.getElementById("sentence").innerHTML == "Get Answers")
          { let i=0;
            for(;i<array2.length;i++)
              {
                  document.getElementById("get").innerHTML+=array2[i]+"<br>";
                  document.getElementById("sentence").innerHTML="Hide Correct Sentence"
              }
          }
      }
    }