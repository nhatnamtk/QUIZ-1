var questions = [
    ["Question : Which eye-piece is used in the telescope of a spectrometer?", "Gauss Eye piece","Ramdsens Eye pice", "Newton Eye pice", "Colored Eye piece", "B"],

["Question : Which gas is used to produce initial discharge in mercury lamp?", "Krypton", "Neon","Argon", "Helium", "C"],

["Question : What is dispersive power?", "d&#952/d&#955", "d&#955/d&#952", "d&#952 <sup>2</sup>/d&#955","d&#955 <sup>2</sup>/&#952", "A"],

["Question :What is resolving power of a grating?", "d&#955/&#955", "&#955/d&#955", "&#955 <sup>2</sup>/d&#955", "&#955<sup>3</sup>/d&#955", "B"],

["Question : What is grating constant? (a=width of transpaerncy, b=opacity)", "a+b", "a-b", "a/b", "b/a","A"],

["Question : What is the formula of dispersive power?", "w/(e+d)cos&#952","w/(1/e+d)cos&#952","w/(1/d+e)cos&#952","w/(e+d)sin&#952","A"],

["Question :Why we read both the verniers during the exoeriment? ", "To take full readding", "To add both lengths", "To increase the length", "To eliminate any error?", "D"],

["Question : Which of the following is not a part of spectrometer?", "Collimator", "Reflector", "Prismtable","Telescope", "B"],

["Question : What is resolving power of a grating?", "Ability to show two nearby lines", "Ability to reflect","Ability to reflect two nearby lines", "Ability to diffract two nearby lines", "A"],

["Question :What is the formula of least count? ", "Value of one main scale division/Total number ofvernier division", "Total number of vernier division/Value of one main scale division", "Total main scale reading/Total main scale reading", "Total main scale reading/Total main scale reading", "A"],
];
var f=0,a,b,c,d,question,l;

var x;
var att=0,p=0,s=0;
getquestion();
		function getquestion(){
			x=Math.round(Math.random()*10);
			if(s==1)
			{	s=0;
				getquestion();
			}
			else if(p==x){
				s=1;
				getquestion();

			}
			if(att>=7){
				alert('You Got '+f+' Marks');
				att=0;
				f=0;
				getquestion();

			}

			     question=questions[x][0];
			     a = questions[x][1];
			     b = questions[x][2];
			     c = questions[x][3];
			     d = questions[x][4];
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
				
				p=x;
				
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
	var ans=questions[x][5];
    
        if(l==ans)
        {
        	f++;
        }

    alert("You Attempted "+l);
    att++;
    getquestion();
    
}