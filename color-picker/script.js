const Arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
const n = 6;
let x = 2;
let last = [];
let lastValue =""

function cl(){
    const shuffleArr = Arr.sort(() => 0.5 - Math.random());
    const res = shuffleArr.slice(0, n)
    var text="#"
    res.forEach(element => {
        text+=element
    });
    if(x <= 1 ){
        document.getElementById("canvas").style.backgroundColor = lastValue
    }
    // alert(res)
    const c = document.getElementById("button").style.backgroundColor = text
   const b =  document.body.style.backgroundColor = text
    document.getElementById("text1").innerHTML = "Current Color is: " + text 
    x -= 1
    last += text +" "
    if(last.length = 16){

            lastValue = text
        }
    }
    
    
