const d = new Date();
let year = d.getFullYear();

var sz = ''
for (let i = year; i > 1900; i--) 
{
    sz += '<option value="' + i +'">'+ i + '</option>'
    
}
document.getElementById("lenyilo").innerHTML = sz;

function evkiiras()
{
    var kivalasztottev = document.getElementById("lenyilo").value
    console.log(kivalasztottev);
}






