var search = document.getElementById("search") // get pani vachikitom

var productcontainer = document.getElementById("products") //get pani vai

 var productlist = productcontainer.querySelectorAll("div")


 search.addEventListener("keyup",function(e){


           var enteredvalue = e.target.value.toUpperCase()
            
             
            for( var i=0;i<productlist.length;i++){



           var productname   =    productlist[i].querySelector("p").textContent.toUpperCase();

              if(productname.indexOf(enteredvalue)>-1){
                 

                    productlist[i].style.display = "block"


              }

               else{

                         
                     productlist[i].style.display = "none"



               }


            }


 })