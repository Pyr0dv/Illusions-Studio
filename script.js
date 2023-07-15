var pass = prompt("Password:")
console.log(pass)
var body = document.querySelector('.body')
var appPass = "080511"
body.style.display = 'none';

if(pass !== appPass){
    body.style.display = 'none';
}else{
    body.style.display = 'block';
}
