var questions = [
    ["Question : Which semiconductor material was used in the four probe's method to determine the energy band gap ?","Germanium","silicon","serellium","tin","A"],
["Question : Which of the following band gaps can be considered to be that of semiconductors ?","0-1ev","1-4ev","4-6ev",">6ev","B"],

["Question : Which among the following is not a subunit of four probes method ?","Oven controller","Multirange digital voltmeter","constant current generator","Digital ammmeter","D"],

["Question : What is the order of thickness of depletion layer ?","10<sup>-4</sup>","10<sup>-5</sup>","10<sup>-6</sup>","10<sup>-8</sup>","C"],

["Question : Which factor among the following doenot control the resistivity of a semicondutor ?","Temperature","Band gap","crystalline orientation","Shape of conductor","D"],

["Question : The temperature coefficient of resistance of a semiconductor is :","Positive","Negative","Zero","none of these","B"],

["Question : What is the full form of RTD sensors used in oven for variation of temperature of crystal ?","Resistance temperature detectors","real time detectors","Resistivity and temperature detectors","Resistance time detectors","A"],

["Question : Spacing between the probes used in the experiment is :","0.1cm","0.2cm","0.3cm","0.4cm","B"],

["Question : The four probes used for resistivity measurement contact surface at points lie on :","circle","line","ellipse","parabola","B"],

["Question : The resistivity of pure germanium under standard conditions is about :","6*10<sup>4</sup> ohm-cm","60 ohm-cm","3*10<sup>6</sup> ohm-cm","6*10<sup>-4</sup> cm"],

["Question : The oven temperature used in the four probes method varies from room temperature to about :","200 degrees","350 degrees","375 degrees","425 degrees","A"],

["Question : The RTD elemet can''t be made of the following material :","Platinum","Nickel","Copper","Cobalt","D"],

["Question : The graph between log of resistivity and reciprocal of temperature gives :","Straight line","Parabolic path","Circle","zig zag curve","A"],

["Question : Value of boltzmann's constant is :","8.6*10<sup>-5</sup>","4.2*10,<sup>-5</sup>","8.6*10<sup>-3</sup>","8.6*10<sup>-7</sup>","A"],

["Question : The energy gap is much more in silicon than in germanium because :","It has less number of electrons","It has high atomic mass number","Its crystal has much stronger bonds called ionic bonds","Its valence electrons are more tightly bond to parent nuclei","D"]
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