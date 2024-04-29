const text = document.getElementById("text-input")
const button = document.getElementById("check-btn")
const result = document.getElementById("result")

console.log



const palidrome = (item)=>{
    const regex= /\s|,|\.|_|-|\/|\\|\(|\)/g
    const trimmedItem = item.replace(regex,"").toLowerCase()
    const reverse = item.toLowerCase().replace(regex,"").split("").reverse().join("")
    if(trimmedItem==reverse){
        result.innerText=`${item}  is a palindrome`
    }else{
        result.innerText=`${item} is not a palindrome`
    }

}


button.onclick= function(){
    const innerText=text.value
    if(!innerText){
        window.alert("Please input a value")
    }else{
    palidrome(innerText)
    }

}