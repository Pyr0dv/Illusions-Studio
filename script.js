var body = document.querySelector('.body')
body.style.display = 'none';
var pass = prompt("Password:")
console.log(pass)

var appPass = "110825"

if(pass !== appPass){
    body.style.display = 'none';
}else{
    body.style.display = 'block';
    //window.location.href="index.html"
}
