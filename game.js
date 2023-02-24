let names=[]
let addBtn=document.getElementById("addPlayer")
let input = document.getElementById("names")
let displayEl= document.getElementById("display")
let spinEl=document.getElementById("spin")
let dareEl = document.getElementById("dis")


addBtn.addEventListener("click", function(){
    
    names.push(input.value)
    input.value=""
   
     renderList()
    
})

function renderList(){
    let listNames = ""
    for (let i = 0; i < names.length; i++) {
        listNames += `
            
            <li class="font-bold text-transparent text-lg  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 border rounded text-center px-5 pl-0 mb-2 border-pink-500  ">
              ${names[i]}   
            </li>
        `
    }
    displayEl.innerHTML =`
    <div class="text-2xl flex flex-col justify-center items-center  mt-40">
    <h3>Current players :</h3>${listNames} 
    </div>
    ` 
    

}




 spinEl.addEventListener("click",function(){
let random1=Math.floor(Math.random()*names.length)
let random2= Math.floor(Math.random()*names.length)
let player1=names[random1]
let player2=names[random2]
    console.log(player1)
    console.log(player2)



    if(player1!=player2){
     dareEl.innerHTML = `${player1} dares ${player2}`
    }

    
   
    
})