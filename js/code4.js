var questions = [
    ["QUESTION :WHAT IS THE UNIT OF SPECIFIC RESISTANCE?","ohm-m","ohm-m<sup>-1</sup>","ohm-m<sup>2</sup>","ohm-m<sup>3</sup>","A"],

["QUESTION :THIS EXPERIMENT IS BASED ON WHICH PRINCIPLE?","WHEAT STONE BRIDGE","AMPERE CIRCUITAL LAW","MAXIMUM POWER TRANSFER THEOREM","NONE OF THE ABOVE","A"],

["QUESTION :WHAT IS THE SPECIMEN WIRE MADE UP OF?","MAGNIN","NICROME","COPPER","NONE OF THE ABOVE","B"],

["QUESTION :WHAT IS THE BRIDGE WIRE MADE UP OF?","NICROME","COPPER","MAGNIN","ALUMINIUM","C"],

["QUESTION :WHAT TYPE OF GALVANOMETER WE USED IN THIS EXPERIMENT?","WESTON TYPE GALVANOMETER","ASTATIC GALVANOMETER","STEWART AND GEE TYPE GALVANOMETER","BALLISTIC GALVANOMETER","A"],

["QUESTION :NAME THE ELECTROLYTE IN A LECLANCHE CELL?","NH4Cl","HCl","NaOH","KOH","A"],

["QUESTION :HOW MANY GAPS ARE PRESENT IN CAREY'S FOSTER AND METER BRIDGE RESPECTIVELY?","4 and 2","2 and 4","3 and 1","1 and 3","A"],

["QUESTION :IF TEMPRATURE INCREASES,THEN WHAT HAPPENS TO SPECIFIC RESISTANCE?","DECREASES","INCREASES","NO CHANGE","NONE OF THE ABOVE","B"],

["QUESTION :THE RESISTANCE OF A CONDUCTOR IS DIRECTLY AND INVERSELY PROPORTIONAL TO?","l and a","a and l","1/l and a","1/a and l","A"]];
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
			t=ar[n]
			if(att>=7){
				alert('You Got '+f+' Marks');
				att=0;
				f=0;
				n=0;
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