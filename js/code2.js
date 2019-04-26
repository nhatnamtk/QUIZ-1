var questions = [
    ["Question : Magnetic field intensity at the center of arc is:", "F = (&#956<sub>o</sub>*I*l)/4&#982r<sup>2</sup>", "F = (&#956<sub>o</sub>*I*l)/4&#982r<sup>3</sup>", "F = (&#956<sub>o</sub>*I*l)/4&#982r", " F = (2&#956<sub>o</sub>*I*l)/4&#982r<sup>4</sup>","A"],

["Question : M.F intensity of circular coil carrying n turns is:", "F = (&#956<sub>o</sub>*I*n)/2r<sup>2</sup>", "F = (&#956<sub>o</sub>*I*n)/4r", "F = (2&#956<sub>o</sub>*I*n)/3r", "F = (&#956<sub>o</sub>*I*n)/2r","D"],


["Question :  The graph is between:", "Distance X and M.F", "M.F and tanθ", "Distance X and tanθ", "M.F and current","C"],
["Question  :Mirror is provided at the base of the box for: ", "Measuring correct deflection of the magnetic needle by removing parallax between pointer and needle", "Magnifying the deflection", "Clearly and precisely take the reading", "All of the above","D"],

["Question : Apparatus used to reverse the direction of the current in the circuit is:", "Plug key", "Commutator key", "Tangent galvanometer", "Battery","B"]
,["Question : Unit of Magnetic field intensity is:", "Tesla", "N-m", "Joule", "Henry","A"]
,


["Question :For a circular coil Magnetic force is directly proportional to: ", "n l r", "n l", "4πnI", "None Of these","B"],
["Question : According to tangent law F is directly proportional to:", "Tanθ", "H", "Sin2θ", "2nπI","A"],

["Question : M.F at th axis of the coil is given by:", "F=(2πnrI)/(10<sup>7</sup>(x<sup>2</sup> + r<sup>2</sup>)<sup>3</sup>)",
 "F=(2πnr<sup>2<sup>I)/(10<sup>7</sup>(x<sup>2</sup> + r<sup>2</sup>)<sup>3/2</sup>)",
  "F=(2πnr<sup>2<sup>I)/(10<sup>7</sup>(x<sup>2</sup> + r<sup>2</sup>)<sup>3</sup>)",
   "F=(2πnrI)/(10<sup>7</sup>(x<sup>2</sup> + r<sup>2</sup>)<sup>3</sup>)","B"],

["Question : value of current is adjusted such that the deflection in galvanometer lies between:", "60°-65°", "70°-75°", "80°-85°", "90°-95°","B"]
,

["Question :The type of galvanometer used is:", "Weston type galvanometer", "Astatic galvanometer", "Stewart and Gee type galvanometer", "Ballistic galvanometer","C"],
["Question : Maximum value of curve corresponds to which position of needle of the coil?", "Center", "Axis", "On The Cirsumference", "None of above","A"]
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
	var ans=choices[x];
    
        if(l==ans)
        {
        	f++;
        }

    alert("You Attempted "+l);
    att++;
    n++;
    getquestion();
    
}