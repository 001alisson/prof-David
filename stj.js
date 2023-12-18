function slide1(){
    const animar = document.querySelector(".trabalhos");
    animar.style.animation = "";
    setTimeout(() => animar.style.animation = "ani 1.5s",1);
    const b = document.getElementById("b1");
    b.style.backgroundColor = "white";
    const b2 = document.getElementById("b2");
    b2.style.backgroundColor = "rgb(107, 107, 107)";
    const b3 = document.getElementById("b3");
    b3.style.backgroundColor = "rgb(107, 107, 107)";
    const b4 = document.getElementById("b4");
    b4.style.backgroundColor = "rgb(107, 107, 107)";
    
    document.getElementById("bg").src="PDF - AULA A1C10 - LIGAÇÃO IÔNICA.pdf";
    document.getElementById("tit").innerHTML = "LIGAÇÃO IÔNICA";

}
function slide2(){    
    const animar = document.querySelector(".trabalhos");
    animar.style.animation = "";
    setTimeout(() => animar.style.animation = "ani 1s",1);
    const b = document.getElementById("b1");
    b.style.backgroundColor = "rgb(107, 107, 107)";
    const b2 = document.getElementById("b2");
    b2.style.backgroundColor = "white";
    const b3 = document.getElementById("b3");
    b3.style.backgroundColor = "rgb(107, 107, 107)";
    const b4 = document.getElementById("b4");
    b4.style.backgroundColor = "rgb(107, 107, 107)";

    document.getElementById("bg").src="PDF - AULA A2C10 - COMPOSTOS INORGÂNICOS E ÁCIDOS DE ARRHENIUS.pdf";
    document.getElementById("tit").innerHTML = " ÁCIDOS ";
}
function slide3(){
    const animar = document.querySelector(".trabalhos");
    animar.style.animation = "";
    setTimeout(() => animar.style.animation = "ani 1s",1);
    const b = document.getElementById("b1");
    b.style.backgroundColor = "rgb(107, 107, 107)";
    const b2 = document.getElementById("b2");
    b2.style.backgroundColor = "rgb(107,107,107)";
    const b3 = document.getElementById("b3");
    b3.style.backgroundColor = "white";
    const b4 = document.getElementById("b4");
    b4.style.backgroundColor = "rgb(107, 107, 107)";
    
    document.getElementById("bg").src="PDF - AULA A3C10 - BASES DE ARRHENIUS.pdf";
    document.getElementById("tit").innerHTML = " BASES DE ARRHENIUS";
}
function slide4(){
    const animar = document.querySelector(".trabalhos");
    animar.style.animation = "";
    setTimeout(() => animar.style.animation = "ani 1s",1);
    const b = document.getElementById("b1");
    b.style.backgroundColor = "rgb(107, 107, 107)";
    const b2 = document.getElementById("b2");
    b2.style.backgroundColor = "rgb(107,107,107)";
    const b3 = document.getElementById("b3");
    b3.style.backgroundColor = "rgb(107, 107, 107)";
    const b4 = document.getElementById("b4");
    b4.style.backgroundColor = "white";

    document.getElementById("bg").src="PDF - AULA A5C10 - ÓXIDOS.pdf";
    document.getElementById("tit").innerHTML = " ÓXIDOS";
}

function animar(){
    const ani = document.querySelector(".capa");
    ani.style.animation = "";
    setTimeout(() => ani.style.animation = "ani 2s", 1);
}
function animar2(){
    const ani = document.querySelector(".curriculo");
    ani.style.animation = "";
    setTimeout(() => ani.style.animation = "ani 2s", 1);
}
function animar3(){
    const ani = document.querySelector(".trabalhos");
    ani.style.animation = "";
    setTimeout(() => ani.style.animation = "ani 2s", 1);
}