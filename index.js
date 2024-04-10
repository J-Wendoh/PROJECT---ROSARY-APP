const sbtn=document.getElementById("sunday")
const mbtn=document.getElementById("monday")
const tbtn=document.getElementById("tuesday")
const wbtn=document.getElementById("wednesday")
const thbtn=document.getElementById("thursday")
const fbtn=document.getElementById("friday")
const satbtn=document.getElementById("saturday")



addEventListener("DOMContentLoaded", (event) => {


function getsundata(){
   fetch(`https://the-rosary-api.vercel.app/v1/sunday`)
            .then( function (response) {
                return response.json();
            })
            .then(function (data){
              console.log(data)
                let par=document.createElement("p")
                document.querySelector("#location").prepend(par)
                par.textContent=`${object}`
                const object=function objectthrough(){
                  for(key of data){return key.data}
            }
          }
            )}
sbtn.addEventListener("click",getsundata)


            
          })




















