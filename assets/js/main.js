// Intantiate DossierLibrary
const http = new DossierLibrary;

http.getData("Radioactive92177").then(data=>{
    console.log(data)
}).catch(error=>{
    console.log(error)
})