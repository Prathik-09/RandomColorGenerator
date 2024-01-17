function getcolor(){
    const randomnumber=Math.floor(Math.random()*16777215);//16777215 for converting into the hex code.
    const randomcode="#"+randomnumber.toString(16);//we addedd # and number converted to hexadecimal number.
    document.body.style.backgroundColor=randomcode;
    document.getElementById("colorcode").innerText=randomcode;
    navigator.clipboard.writeText(randomcode);//here it directly copies the hexcode.
}
document.getElementById("btn").addEventListener("click",getcolor);

getcolor();