var Currentimage;
let Getnew = ()=>{
    fetch("https://api.catboys.com/img",{    
     method:"GET"
    })
    .then((res)=>res.json())                            
    .then((data)=>{
        let Display = document.querySelector(".image")   
        Display.setAttribute("src",data.url)
        Currentimage= data.url;
    }
     
    )
    .catch((error)=>{console.log(error)})               
    
}
let liked =()=>{

    let menu=document.querySelector(".dropdown-menu");
    var imglink = document.createElement("div");
    imglink.innerHTML=Currentimage;
    menu.append(imglink);
}