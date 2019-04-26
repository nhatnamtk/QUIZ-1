var questions = [
    ["Question : On what factors numerical aperture depends?", " Wavelength of light", "Dimensions of core and cladding", "Refractive index of core and cladding", " Length of  core and cladding","C"],

["Question : What is working principle of optical fibre?", "Total Internal Refelction", "Refraction", "Difrraction", "Reflection","A"],


["Question :  Which optical fibre is suited for short distance?", "Single mode fibre", "Multi mode fibre", "Step Index Single Mode", "Grated index Single mode","B"],
["Question  :What is the condition required for total internal reflection? ", "the angle of incidence is greater than the critical angle", "the angle of incidence is equal to critical angle", "the angle of incidence is less than critical angle", "the angle of incidence is greater than 90","A"],

["Question : What are the main components of optical fibre?", "Reflector and Core", "Glass slab and Reflector", "Core and cladding", "Cladding and Reflector","C"]
,["Question : Why optical fibres are considered over metallic wires?", "Less fragilty than copper wire", "Less costly", "Easy to intsall", "Less signal strength loss","D"]
,


["Question :What is  formula for critical angle ? ", "sin &#952 = <span>&#956;</span>  <sub>1</sub> / &#956 <sub>2</sub>  ", " sin  &#952 =  &#956  <sub>2</sub> / &#956 <sub>1</sub>  ", " tan &#952 =  &#956  <sub>1</sub> / &#956 <sub>2</sub>  ", "tan &#952 =  &#956  <sub>2</sub> / &#956 <sub>1</sub> ","B"],
["Question : Which optical fibre is used for longer distances?", "Mutli mode fibre", "Single mode fibre", "Grated multi mode fibre", "Steep index multi mode fibre","B"],

["Question : What is the relationship between the refractive index of core(n1) and cladding(n2)?", "n2>n1", "n1>n2", "n1=n2", "n1>>n2","A"],

["Question : Which of the following loss does not occur in optical fibre?", "Bending loss", "Attenuation loss", "Heating loss", "Absorption loss","C"]
];

var f=0,a,b,c,d,question,l;
var x;
var att=0,p=0,s=0;


	var i,x,w,k=0,t,n=0;
	var ar=[];
	function array(){
		for(i=0;i<7;)
			{	
				k=0;
				x=Math.round(Math.random()*questions.length);
				ar[i]=x;
				
				for(w=0;w<i;w++)
				{	
					 if(ar[i]!=ar[w])
					{
						k++;
					}
				}
				if(k==i)
				{
					i++;
				}

			}

	}
	array();


getquestion();
		function getquestion(){
			t=ar[n];
			if(att>=7)
			{
				alert('You Got '+f+' Marks');
				att=0;
				f=0;
				n=0;
				array();
				getquestion();

			}

			     question=questions[t][0];
			     a = questions[t][1];
			     b = questions[t][2];
			     c = questions[t][3];
			     d = questions[t][4];
			document.getElementById("para1").innerHTML="Question "+(att+1)+" of 7";
			document.getElementById("ques").innerHTML= question;

			document.querySelector('#b1').innerHTML=a;
			document.querySelector('#b2').innerHTML=b;
			document.querySelector('#b3').innerHTML=c;
			document.querySelector('#b4').innerHTML=d;


document.querySelector('#b1').addEventListener('click',checka);
document.querySelector('#b2').addEventListener('click',checkb);
document.querySelector('#b3').addEventListener('click',checkc);
document.querySelector('#b4').addEventListener('click',checkd);
				
				
				
			  //if(x!=0) document.querySelector(".container").innerHTML= " <button class='button' onclick ='prev()'> prev </button>";
		

	}
function checka()
{
     l=document.querySelector('#b1').value;
    run();
}
function checkb()
{
     l=document.querySelector('#b2').value;
    run();
}
function checkc()
{
     l=document.querySelector('#b3').value;
    run();
}
function checkd()
{
     l=document.querySelector('#b4').value;
    run();
}
function run(){
	var ans=questions[t][5];
    
        if(l==ans)
        {
        	f++;
        }

    alert("You Attempted "+l);
    att++;
    n++;
    getquestion();
    
}
/*
function prev()
{
    x--;
    getquestion();
}

document.querySelector('#para').textContent=ques;
document.querySelector('#para1').textContent="Question "+(x+1)+ " Out of "+questions.length;

document.querySelector('#b1').textContent=a;
document.querySelector('#b2').textContent=b;
document.querySelector('#b3').textContent=c;
document.querySelector('#b4').textContent=d;

var ans=document.querySelector('#b4').value;


document.querySelector('#b4').addEventListener('click',check);
document.querySelector('#b3').addEventListener('click',check);
document.querySelector('#b2').addEventListener('click',check);
document.querySelector('#b1').addEventListener('click',check);

function check(){
	if(ans==questions[x][5])
	{
		x++;
	}
	else
	{
		alert.textContent="Incorrect";
	}
}

alert("Hello");*/