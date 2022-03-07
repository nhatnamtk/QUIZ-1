var questions = [
    ["Câu hỏi : Tác giả của bài Phong cách Hồ Chí Minh là ai?","Lê Anh Trà","Phạm Văn Đồng","Lê Duẩn","Đặng Thai Mai","A"],
["Câu hỏi : Phong cách của Hồ Chí Minh là sự kết hợp giữa ?","Vĩ đại và bình dị","Truyền thống và hiện đại","Dân tộc và nhân loại","Cả ba đáp án trên","D"],

["Câu hỏi : Vì sao Hồ Chủ tịch lại có vốn văn hóa sâu rộng?","Oven controller","Multirange digital voltmeter","constant current generator","Digital ammmeter","D"],

["Câu hỏi : What is the order of thickness of depletion layer ?","10<sup>-4</sup>","10<sup>-5</sup>","10<sup>-6</sup>","10<sup>-8</sup>","C"],

["Câu hỏi : Which factor among the following does not control the resistivity of a semicondutor ?","Temperature","Band gap","crystalline orientation","Shape of conductor","D"],

["Câu hỏi : The temperature coefficient of resistance of a semiconductor is :","Positive","Negative","Zero","none of these","B"],

["Câu hỏi : What is the full form of RTD sensors used in oven for variation of temperature of crystal ?","Resistance temperature detectors","real time detectors","Resistivity and temperature detectors","Resistance time detectors","A"],

["Câu hỏi : Spacing between the probes used in the experiment is :","0.1cm","0.2cm","0.3cm","0.4cm","B"],

["Câu hỏi : The four probes used for resistivity measurement contact surface at points lie on :","circle","line","ellipse","parabola","B"],

["Câu hỏi : The resistivity of pure germanium under standard conditions is about :","6*10<sup>4</sup> ohm-cm","60 ohm-cm","3*10<sup>6</sup> ohm-cm","6*10<sup>-4</sup> cm"],

["Câu hỏi : The oven temperature used in the four probes method varies from room temperature to about :","200 degrees","350 degrees","375 degrees","425 degrees","A"],

["Câu hỏi : The RTD elemet can''t be made of the following material :","Platinum","Nickel","Copper","Cobalt","D"],

["Câu hỏi : The graph between log of resistivity and reciprocal of temperature gives :","Straight line","Parabolic path","Circle","zig zag curve","A"],

["Câu hỏi : Value of boltzmann's constant is :","8.6*10<sup>-5</sup>","4.2*10,<sup>-5</sup>","8.6*10<sup>-3</sup>","8.6*10<sup>-7</sup>","A"],

["Câu hỏi : The energy gap is much more in silicon than in germanium because :","It has less number of electrons","It has high atomic mass number","Its crystal has much stronger bonds called ionic bonds","Its valence electrons are more tightly bond to parent nuclei","D"]
];
var f=0,a,b,c,d,question,l;

var x;
var att=0;
	
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
				
		function getquestion()
		{

					
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
