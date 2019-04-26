var questions = [
    ["Question . The focal length of lens is","half of radius of curvature","twice of radius of curvature",
"thrice of radius of curvature","none of these","A"],

["Question . Which of the following is said to be cardinal point?","focal points","principal points",
"nodal points","all of these","D"],

["Question . The lateral magnification is equal to negative ratio of","image distance to object distance",
"object distance to image distance","focal length to image distance","none of these","A"],

["Question . The power of convex lens is","positive","negative","can't say","none of these","A"],

["Question . How many cardinal points there in optical systems?","5","6","4","2","B"],

["Question . Name the points which give unit angular magnification.","nodal points","principal points","focal points",
"none of these","A"],

["Question . Name the points which give unit linear magnification.","nodal points","principal points","focal points",
"none of these","B"],

["Question .Which type of mirror is used in nodal slide experiment?","convex mirror","concave mirror","plane mirror",
"none of these","C"],

["Question . which appratus is used in nodal slide experiment?","transformer","Concave lens","optical bench","none of these","C"],

["Question . the distance between principal point and nodal point is","focal length","radius of curvature","thrice of focal lenth",
"none of these","A"],

["Question . A coaxial system of lens have","same optical axis","same focal point","same focal lenth","none of these","A"],

["Question . On what factors focal length of thin lens depends?","refractive index of material","radii of curvature","both","none of these","C"],

["Question . How many lens are used in nodal slide experiment?","1","2","3","4","B"],

["Question . What is the purpose of nodal slide experiment?","to determine the focal lenth of combination of lens",
"to determine the focal length of single lens","both","none of these","A"],

["Question . Focal length of combination of lens is depend on the","focal length of both lens","distance between two lens",
"both of them","none of these","C"]
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