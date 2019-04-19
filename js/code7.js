var questions = [
    ["Question . What is the purpose of polarimeter experiment?","to determine the specific rotation of compound","to determine whether compound is optically active or not"
,"both","none of these","C"],

["Question . Which appratus is not used in polarimeter experiment?","Polarimeter","Sodium Vapour Lamp","Cane Sugar",
"galvanometer","D"],

["Question . Specific rotation of compound is independent of","temperatue","concentration","both"," none of these","B"]

["Question . What is the necessary condition for compound to be optically active?","dissmetry in molecule","assymetry in molecule",
"both","none of these","A"],

["Question . Which of the following is optically active?","glucose","hexane","benzene","methane","A"],

["Question . The angle rotated by an optically active compound is directly proportional to","concentration","temperature",
"pressure","volume","A"],

["Question . Can we find unknown concentrations of sugar solution using polarimeter?","yes","no","can't say","impossible","A"],

["Question . Cane sugar is","dextrorotatory","laevorotatory","can't say","both","A"],

["Question . Which of the phenomenon can be used to get polarized light?","reflection","refraction","double refraction",
"all of these","D"],

["Question . Which of the following is unit of specific rotation?","degree","degree/decimeter/gm/cc","degree/cm/gm/cc",
"degree/cc","B"],

["Question . Which devices are used in polarimeter?","Half Shade","bi-quartz device","both","none of these","C"],

["Question . What is the resultant rotation of racemic mixture?","positive","negative","zero","none of these","C"],

["Question . Which kind of light is used in half shade polarimeter?","sodium light","white light","any monochromating light", "all of these","A"],

["Question . Which device is used in case of white light?","biquartz","half shade","both","none of these","A"],

["Question . In which device optically active compound is stored","analyser","polarimeter tube","polariser","none of these","B"]

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