

var cat = document.getElementById("cat");

var area = document.getElementById("area");

var ingedients = document.getElementById("ingedients");

var contact =document.getElementById("contact");

var loading = document.querySelector(".loading");

var openClose = document.getElementById("open-close");

var sideNave = document.getElementById("side-nav")

function close(){
sideNave.classList.replace("start-0","close");
openClose.classList.replace("fa-xmark","fa-list")
}

function open(){
    sideNave.classList.replace("close","start-0");
openClose.classList.replace("fa-list","fa-xmark")
}



openClose.addEventListener("click",function(){
    
    if(sideNave.classList.contains("close")){
        open()
    }
    else{
        close()
        
    }

})


contact.addEventListener("click",function(){
    showContacts()
})

var nav = document.querySelector(".nav")

var all = [];

function closeNav(){

    nav.classList.add("d-none")
}



var search =document.getElementById("search");

search.addEventListener("click",function(){
    showSearchInputs();

})

/********* default start  *********/


async function getDefault()
{
    var cartona = ``;
    loading.classList.remove("d-none")

    for(var i =0 ; i<20 ;i++)
    {
    var respone = await fetch("https://themealdb.com/api/json/v1/1/random.php");

    var data = await respone.json();
    all=data.meals;

    cartona += `<div class="meal  p-3  col-sm-12 col-md-6 col-lg-3">
    <div class="inner rounded-2 position-relative" onclick="getAllRecipes(${all[0].idMeal})" >
        <img src="${all[0].strMealThumb}" class="rounded-2"  alt="">
        <div class="layer ">
            <h3>${all[0].strMeal}</h3>
        </div>
    </div>
    </div>
    `

    }

document.getElementById("randomMeals").innerHTML=cartona;
loading.classList.add("d-none")
}

getDefault()



/******* default end **********/



/*********  category start ************/




cat.addEventListener("click",function(){

    getCategory()
    searchInputs.innerHTML =""

    

    
})


async function getCategory(){
    loading.classList.remove("d-none")

    var respone = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    var data = await respone.json() ;
    all = data.categories ;

   displayCategory()

  // console.log(all);
  loading.classList.add("d-none")
    
}


function displayCategory(){

    var cartona = `` ;
    

    for(i=0 ; i<all.length ; i++)
    {
        cartona += `<div class="meal  col-sm-12 col-md-6 col-lg-3 p-3" onclick="getCategoryMeals('${all[i].strCategory}')">
        <div class="inner rounded-2 position-relative ">
            <img src="${all[i].strCategoryThumb}" class="rounded-2"  alt="">
            
             <div class="layer overflow-hidden">
             <h4>${all[i].strCategory}</h4>
             <p>${all[i].strCategoryDescription}</p>
        </div>
               
            
        </div>
        </div>
        `
    }

    
document.getElementById("randomMeals").innerHTML=cartona;

}


async function getCategoryMeals(arr){

    loading.classList.remove("d-none");
    var respone = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${arr}`);
    var data = await respone.json() ;
    all = data.meals ;

    displayCategoryMeals()

   //console.log(data);
   loading.classList.add("d-none")
}


function displayCategoryMeals(){

    var cartona = `` ;
    

    for(i=0 ; i<20 ; i++)
    {
        cartona += `<div class="meal  col-sm-12 col-md-6 col-lg-3 p-3" ">
        <div class="inner rounded-2 position-relative" onclick="getAllRecipes(${all[i].idMeal})">
            <img src="${all[i].strMealThumb}" class="rounded-2"  alt="">
            
             <div class="layer overflow-hidden">
             <h4>${all[i].strMeal}</h4>
            
        </div>
               
            
        </div>
        </div>
        `
    }

    
document.getElementById("randomMeals").innerHTML=cartona;

}





/************  category end ***************/



/*************  area start  ***************/



area.addEventListener("click",function(){

    getArea();
    searchInputs.innerHTML=""
})

async function getArea(){
    loading.classList.remove("d-none")
    var respone = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    var data = await respone.json() ;
    all = data.meals;


   // console.log(all);
   displayArea()
   loading.classList.add("d-none")
}

function displayArea(){

    var cartona = `` ;
    loading.classList.remove("d-none")
    for(i=0 ; i<all.length ; i++)
    {
        cartona+= `  <div class="area  col-sm-12 col-md-6 col-lg-3 p-3 text-center" onclick="getAreaMeal('${all[i].strArea}')">
            
            <i class="fa-solid fa-house-laptop"></i>
            <h2>${all[i].strArea}</h2>
        </div>`
    }

    
document.getElementById("randomMeals").innerHTML=cartona;
loading.classList.add("d-none")
}

async function getAreaMeal(arr){

    loading.classList.remove("d-none")

    var respone = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${arr}`);
    var data = await respone.json() ;
    all = data.meals;


  // console.log(all);
   displayAreaMeals()
   loading.classList.add("d-none")
    
}


function displayAreaMeals(){

    var cartona = `` ;
    
    for(i=0 ; i<20 ; i++)
    {
        cartona += `<div class="meal  col-sm-12 col-md-6 col-lg-3 p-3" ">
        <div class="inner rounded-2 position-relative" onclick="getAllRecipes(${all[i].idMeal})" >
            <img src="${all[i].strMealThumb}" class="rounded-2"  alt="">
            
             <div class="layer overflow-hidden">
             <h4>${all[i].strMeal}</h4>
            
        </div>
               
            
        </div>
        </div>
        `
    }

    
document.getElementById("randomMeals").innerHTML=cartona;

}

/************ area end *******************/








/***********  ingedients start *************************/


ingedients.addEventListener("click",function(){

    getIngedients();
    searchInputs.innerHTML=""
})


async function getIngedients(){
    loading.classList.remove("d-none")

    var respone = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    var data = await respone.json() ;
    all = data.meals;


   // console.log(all);
   displayIngedients();
   loading.classList.add("d-none")
    
}


function displayIngedients(){

    var cartona = `` ;

    for(i=0 ; i<20 ; i++)
    {
       cartona += ` <div class="ingedients  col-sm-12 col-md-6 col-lg-3 p-3 text-center"  onclick="getIngediantsMeal('${all[i].strIngredient}')">
            <i class="fa-solid fa-drumstick-bite"></i>
            <h4>${all[i].strIngredient}</h4>
            <p>${all[i].strDescription}</p>

        </div>`
    }

    
document.getElementById("randomMeals").innerHTML=cartona;
}



/*


/********************  ingediants end ********************/







async function getIngediantsMeal(arr){
    loading.classList.remove("d-none")

    var respone = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${arr}`);
    var data = await respone.json() ;
    all = data.meals;


   console.log(all);
   displayIngediantMeals()
   loading.classList.add("d-none")
    
}


function displayIngediantMeals(){

    var cartona = `` ;

    for(i=0 ; i< 10 ; i++)
    {
        cartona += `<div class="meal  col-sm-12 col-md-6 col-lg-3 p-3" onclick="getAllRecipes(${all[i].idMeal})">
        <div class="inner rounded-2 position-relative " >
            <img src="${all[i].strMealThumb}" class="rounded-2"  alt="">
            
             <div class="layer ">
             <h4>${all[i].strMeal}</h4>
            
        </div>
               
            
        </div>
        </div>
        `
    }

    
document.getElementById("randomMeals").innerHTML=cartona;
}



async function getAllRecipes(aa){
    loading.classList.remove("d-none")
    var respone = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${aa}`);
    var data = await respone.json() ;
    all = data.meals;

   displayAllRecoies();
   loading.classList.add("d-none")
  //console.log(all);
  
 
 console.log(all[0].strCategory);
}


function displayAllRecoies(){

    var cartona = ``;
    
   cartona = ` <div class="pic col-lg-4 col-sm-12 position-relative">
    <div class="inner rounded-2 position-relative " >
     <img src="${all[0].strMealThumb}" alt="" class="w-100 ">
     <h4>${all[0].strMeal}</h4>
 </div>
</div>
            <div class="cap col-lg-8 col-sm-12">
                <h4>Instructions</h4>
                <p>${all[0].strInstructions}</p>
                <h4>Area: <span>${all[0].strArea}</span></h4>
                <h4>Category: <span>${all[0].strCategory}</span></h4>
                <h4>Recipes: </h4>
                <span class="badge px-4 py-3 badre-1">${all[0].strIngredient1}</span>
                <span class="badge  px-4 py-3 badre-1">${all[0].strIngredient2}</span>
                <span class="badge px-4 py-3  badre-1">${all[0].strIngredient3}</span>
                <span class="badge px-4 py-3  badre-1">${all[0].strIngredient4}</span>
                <span class="badge px-4 py-3  badre-1">${all[0].strIngredient5}</span>
                <span class="badge px-4 py-3  badre-1">${all[0].strIngredient6}</span>
                <span class="badge px-4 py-3  badre-1">${all[0].strIngredient7}</span>
                <span class="badge px-4 py-3  badre-1">${all[0].strIngredient8}</span>
                <span class="badge px-4 py-3  badre-1">${all[0].strIngredient9}</span>
                
                <h4 class="my-3">Tags: </h4>
                <span class="badge px-4 py-3 badre-2">${all[0].strMeasure1}</span>
                <span class="badge px-4 py-3 badre-2">${all[0].strMeasure2}</span>
                
                <div class="btns my-3">
                    <a target="_blank" href="${all[0].strSource}" class="btn btn-success">Source</a>
                    <a target="_blank" href="${all[0].strYoutube}4" class="btn btn-danger">Youtube</a>
                
                </div>

            </div>`
    
    

        document.getElementById("randomMeals").innerHTML=cartona;
       
    
}

/************************************************************************************************************ */




/****************************************  contact us start********************************************* */































/******************************************** validation ********************************************* */





   /******************************************************************************************************************** */


   function showContacts() {

    randomMeals.innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input  id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input  id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
</div> `
    submitBtn = document.getElementById("submitBtn")


    document.getElementById("nameInput").addEventListener("focus", () => {
        nameInputTouched = true
    })

    document.getElementById("emailInput").addEventListener("focus", () => {
        emailInputTouched = true
    })

    document.getElementById("phoneInput").addEventListener("focus", () => {
        phoneInputTouched = true
    })

    document.getElementById("ageInput").addEventListener("focus", () => {
        ageInputTouched = true
    })

    document.getElementById("passwordInput").addEventListener("focus", () => {
        passwordInputTouched = true
    })

    document.getElementById("repasswordInput").addEventListener("focus", () => {
        repasswordInputTouched = true
    })
}

let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let repasswordInputTouched = false;




function inputsValidation() {
    if (nameInputTouched) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")

        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")

        }
    }
    if (emailInputTouched) {

        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
    }

    if (phoneInputTouched) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

        }
    }

    if (ageInputTouched) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")

        }
    }

    if (passwordInputTouched) {
        if (passwordValidation()) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

        }
    }
    if (repasswordInputTouched) {
        if (repasswordValidation()) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

        }
    }


    if (nameValidation() &&
        emailValidation() &&
        phoneValidation() &&
        ageValidation() &&
        passwordValidation() &&
        repasswordValidation()) {
        submitBtn.removeAttribute("disabled")
    } else {
        submitBtn.setAttribute("disabled", true)
    }
}

function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}

function repasswordValidation() {
    return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
}









/*************************************************************************************************************** */



function displayMeals(arr) {
    let cartoona = "";

    for (let i = 0; i < arr.length; i++) {
        cartoona += 
        `
   

       <div class="meal col-3 p-3" onclick="getAllRecipes(${arr[i].idMeal})">
        <div class="inner rounded-2 position-relative " >
            <img src="${arr[i].strMealThumb}" class="rounded-2"  alt="">
            
             <div class="layer overflow-hidden ">
             <h4>${arr[i].strMeal}</h4>
            
        </div>
               
            
        </div>
        </div>
        `
    }

    randomMeals.innerHTML = cartoona
}


function showSearchInputs() {
    searchInputs.innerHTML = `
    <div class="row py-4 ">
        <div class="col-md-6 ">
            <input onkeyup="searchByName(this.value)" class="form-control bg-transparent text-white" type="text" placeholder="Search By Name">
        </div>
        <div class="col-md-6">
            <input onkeyup="searchByFLetter(this.value)" maxlength="1" class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
        </div>
    </div>`

    //randomMeals.innerHTML = ""
    randomMeals.innerHTML =""
}

async function searchByName(term) {
   
   /* randomMeals.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)*/

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    response = await response.json()
  //  displayMeals(response.meals)
    response.meals ? displayMeals(response.meals) : displayMeals([])
   /* $(".inner-loading-screen").fadeOut(300)*/

}

async function searchByFLetter(term) {
    
   /* rowData.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)*/

    term == "" ? term = "a" : "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`)
    response = await response.json()
   // displayMeals(response.meals)
    response.meals ? displayMeals(response.meals) : displayMeals([])
   /* $(".inner-loading-screen").fadeOut(300)*/

}








/************************************************************************************************ */


