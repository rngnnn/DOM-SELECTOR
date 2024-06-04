//? METHOD-1 (SADECE JAVASCRİPT TE YAZILAN YOL) 1.yol
//?---------------------------------------------------------------


//*example1 onmouseover, onmouseout

const js= document.querySelector("#js")
const badi= document.querySelector("#badi")

js.onmouseover=()=>{

badi.style.background="pink"
js.style.color="red"



}
js.onmouseout=()=>{

    badi.style.background="orange"

}

//*exapmle2 onclick ondoubleclick

const bir =document.querySelector(".bir")
const iki=document.querySelector(".iki")

bir.onclick=()=>{

    bir.src="./img/logo2.png"
iki.src="./img/js_logo.png"
}


iki.onclick=()=>{

    bir.src="./img/js_logo.png"
iki.src="/img/logo2.png"
}


iki.ondblclick=()=>{
iki.src="./img/iki.webp"


}

// aynı etikete hem click hem dblclick verirsek istenmeyen sonuçlar olabilir