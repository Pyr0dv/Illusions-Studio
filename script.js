var body = document.querySelector('.body')
body.style.display = 'none';
var pass = prompt("Password:")
console.log(pass)

var appPass = "080511"

if(pass !== appPass){
    body.style.display = 'none';
}else{
    body.style.display = 'block';
    //window.location.href="index.html"
}
