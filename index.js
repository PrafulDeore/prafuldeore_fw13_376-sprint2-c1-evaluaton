var cart=[];
    
var container=document.getElementById("container")
var url="https://www.themealdb.com/api/json/v1/1/random.php"
var allMenu=[];
async function getMenu(){
    try{
        for(var i=0;i<6;i++){
        let res=await fetch(url);
    let data =await res.json();
    allMenu.push(data)
    appendMenu(data.meals[0])
    console.log("data:",data.meals[0])
        }
    }

    
    catch(err){
        console.log("Error came from try catch methode:",err)
    }
   
 }
function appendMenu(arr){
    
    let div=document.createElement("div");
    let innerdiv=document.createElement("div");
    innerdiv.setAttribute("id","innerdiv")
    let img=document.createElement("img");
    img.src=arr.strMealThumb
    img.setAttribute("id","img1");
    
    var prize=document.createElement("h1");
    prize.innerText=`₹ ${Math.floor(Math.random()*500)+100}`;

    
    // cart--------------------------------------------->
    var cart=document.createElement("button");
    cart.innerText="Add to cart";
    cart.setAttribute("id","cart");
    // cart.addEventListener("click",addTocart);
    cart.addEventListener("click",function(){
        addcart(arr.strMealThumb,arr.prize)
    })
    
   

    // appneding all-------------------------------------------->
    innerdiv.append(img,prize,cart)
    div.append(innerdiv)
   container.appendChild(innerdiv)
   
 }
   let labeltotal= document.getElementById("label");
   let cart_store_data=JSON.parse(localStorage.getItem("cartdata")) ||[];

   function addcart(p,n,r){
       let cartdetail={
           pic:p,
           name:n,
           pri:r
       }
       cart_store_data.push(cartdetail);

       localStorage.setItem("cartdata",JSON.stringify(cart_store_data))
       labeltotal.innerHTML = (cart_store_data.length)
   }

