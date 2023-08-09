document.querySelector(".btn").addEventListener("click",function(){

  document.querySelector(".emoji").innerHTML="😂";
fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
.then((response)=>{
 return response.json();
})
.then((data)=>{
  document.querySelector(".joke>p").textContent=data.joke;
})

})

