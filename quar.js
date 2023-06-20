let sec = 0
let min = 0
let interval 
function start(){
   let interval =  setInterval(watch,10)
}

function pause(){
    clearInterval(interval)
}

function stop(){
    
}
function relogio(){
    sec++
    if(sec==6){
        mim++
        mile++
        sec=0
    }
    document.getElementById('watch').innerHTML=min +':'+sec
}

