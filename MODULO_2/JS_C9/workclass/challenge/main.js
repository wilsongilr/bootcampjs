
const see = document.getElementById("see");
const more = document.getElementById("more");

function seemore() 
{
    if(more.innerHTML == "ver más")
    {
        see.className = "?";
        more.innerHTML = "ver menos";
    } else {
        see.className = "hidden";
        more.innerHTML = "ver más";
    }
}