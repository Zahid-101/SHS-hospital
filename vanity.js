const openbtn = document.getElementById("openbtn")
const fullOrder = document.getElementById("FullOrder")

openbtn.addEventListener('click',Open)

function Open(){
    fullOrder.classList.toggle("showLarger")

}