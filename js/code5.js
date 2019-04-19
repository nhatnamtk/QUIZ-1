var questions = [
    ["Question . what is the purpose of newton's ring experiment?","to determine the wavelength of light",
"to determine the speed of light","to determine the intensity of light","none of these","A"],

["Question . which appratus is not used in newton's ring experiment?","travelling microscope","convex lens",
"sodium vapour lamp","galvanometer","D"],

["Question . what is the shape of fringes obtained in newton's ring experiment.","circular","triangular","cylindrical",
"none of these","A"],

["Question . what is the name of phenomenon behind the formation of newton's ring ?","diffraction","interference",
"polarisation","none of these","B"],

["Question . At which angle glass plate is made to inclined so that rays will fall normally on plano conves lens?","45","30","60","90","A"],

["Question . what is the angle between rays and plano convex lens in newton's ring experiment?","45","30","60","90","D"],

["Question . Diameter of dark rings is proportional to","square of natural numbers","square root of natural numbers","cube of odd natural numbers","cube root of natutral numbers","B"],

["Question . Diameter of bright rings is proportinal to","square root of odd natural numbers","cube root of odd natural numbers",
"square of natural numbers","none of these","A"],

["Question . In Newton's ring experiment the center of the ring is","bright","bright and dark both","dark","none of these","C"],

["Question .  The central ring is dark because","light is reflected at dense medium","light is reflected at rarer medium",
"light is transmitting through rarer medium","light is transmitting through denser medium","A"],

["Question . Can we get rings in transmitted light.","yes","no","can't say","who cares","A"],

["Question . which of the following is nearby wavelength of sodium light.","5890 A","3000 A","7000 A","1000 A","A"],

["Question . wavelength of light is inversely proportional to","Diameter of rings","focal length of lens","both","none of these","B"],

["Question . what phase change occurs due to reflection at denser medium?","180","90","45","60","A"],

["Question . what will happpen if we use white light instead of sodium light?","rings will not obtained","no change","colored rings will obtained","can't say","C"]
];
var f=0,a,b,c,d,question,l;

var x;
var att=0,p=0,s=0;
getquestion();
		function getquestion(){
			x=Math.round(Math.random()*15);
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