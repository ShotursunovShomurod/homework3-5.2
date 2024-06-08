let count = document.querySelector(".count")
let offiset = 0
function inc(){
offiset++
count.innerHTML = offiset
}
function reset(){
    offiset = 0
    count.innerHTML = offiset
}
function dec(){
    offiset--
    count.innerHTML = offiset
}