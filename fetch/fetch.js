const url = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => 
   response.json()
  )
  .then((jsondata) => {
    print(jsondata)
    
  });
  
const print=(a)=>{
  let adiv = document.querySelector("#dive");
  console.log(a);
    for(var i=0;i<10;i++){
       adiv.innerHTML+=`
       
       <p>${a[i].title}</p>
       <p>${a[i].body}</p>
       `
    }

  }