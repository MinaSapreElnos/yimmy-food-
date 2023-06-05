let apiDataList=[]
let obj

//events//
$('.layer-loading').fadeOut(3000)

    $('.Categories').click(function(){
        $('.sideBar-links li').removeClass('active')
        $(this).addClass('active')
        getCategory()
    })

    $('.Area').click(function(){
        $('.sideBar-links li').removeClass('active')
        $(this).addClass('active')
        getArea()
    })

    $('.Ingredients').click(function(){
        $('.sideBar-links li').removeClass('active')
        $(this).addClass('active')
        getIngredients()
    })

    $('.Search').click(function(){
        $('.row').html(`   <div class="col-lg-6">
        <input
          type="search"
          class="form-control"
          placeholder="Search By Name ..."
          id="searchName"
        />
      </div>

      <div class="col-lg-6">
        <input
          type="search"
          class="form-control"
          placeholder="Search By One Letter ..."
          id="searchTitle"
        />
      </div>`)
      $('.sideBar-links li').removeClass('active')
      $(this).addClass('active')

      $("#searchName").on("input", function () {
        // console.log($(this).val());
        searshByName($(this).val())
     });

     $("#searchTitle").on("input", function () {
        console.log($(this).val());
        searshByFristLetter($(this).val())
     });

    })
 
    $('.Contact-Us').click(function(){
        $('.sideBar-links li').removeClass('active')
        $(this).addClass('active')
       
        $(".row").html(`
        <h1 class="text-center py-5 text-white">Contact us</h1>
     
        <form autocomplete="off">
        
     <div class="row  gy-3 ">
     
     <div class="col-lg-6 position-relative">
     <input
     type="text"
     class="form-control text-center is-invalid"
     placeholder="Enter Your Name ..."/>
     
     <p class="alert alert-danger  position-absolute top-100 start-50 translate-middle-x w-75  z-top invalid-feedback">
     Special Characters and Numbers not allowed
     </p>
     </div>
     
     <div class="col-lg-6 position-relative">
     <input
     type="email"
     class="form-control text-center Email"
     placeholder="Enter your E-mail..."/>
     
     <p class="alert alert-danger   position-absolute top-100 start-50 translate-middle-x w-75  z-top invalid-feedback">
     Enter valid email. *Ex: xxx@yyy.zzz
     
     </p>
     
     </div>
     
     
     <div class="col-lg-6 position-relative">
       <input 
       type="tel"
       class="form-control text-center phone "
       placeholder="Enter Phone..."/>
     
       <p class="alert alert-danger   position-absolute top-100 start-50 translate-middle-x w-75  z-top invalid-feedback">
       Enter valid Phone Number
     </p>
       </div>
     
     
     
       <div class="col-lg-6 position-relative">
         <input 
         type="number"
         class="form-control text-center age"
         placeholder="Enter Age ..."/>
     
         <p class="alert alert-danger   position-absolute top-100 start-50 translate-middle-x w-75  z-top invalid-feedback">
         Enter valid Age
     
       </p>
     
         </div>
     
     
     
         <div class="col-lg-6 position-relative">
           <input
           type="password"
           class="form-control text-center password"
           placeholder="Enter Passward..."/>
     
           <p class="alert alert-danger   position-absolute top-100 start-50 translate-middle-x w-75  z-top invalid-feedback ">
           Enter valid password *Minimum eight characters, at least one letter and one number:*
     
       
         </p>
           </div>
     
     
     
           <div class="col-lg-6 position-relative">
             <input
             type="password"
             class="form-control text-center Repassward"
             placeholder="Enter Repassward ..."/>
     
             <p class="alert alert-danger   position-absolute top-100 start-50 translate-middle-x w-75  z-top invalid-feedback">
             Enter valid Repassword
       
         
           </p>
             </div>
     
     
     <div class="d-flex justify-content-center ">
     <button type="submit" class=" btn btn-outline-danger mx-auto my-4 disabled ">submit</button>
     </div>
     </div>
        </form>
        `)
        let inPuts=document.querySelectorAll('input');
        let button =document.querySelector('button')
        $('form').keyup(function(){
          if(validationName()&&validationEmail()&&validationPhone()&&validationEge()&&validationPassword()&&validationRepassword()){
              console.log('done')
              button.removeAttribute('disabled')
          }else{
            console.log('not done')
            button.setAttribute('disabled',t)
          }
        })

        function validationName(){
         const regex=/^[a-zA-Z ]+$/
          if(regex.test(inPuts[0].value)){
            console.log('true')
            inPuts[0].classList.add('is-valid')
            inPuts[0].classList.remove('is-invalid')
                return true
          }
          else{
            console.log('false')
              inPuts[0].classList.add('is-invalid')
              inPuts[0].classList.remove('is-valid')
              return false
          }
        }
        
        function validationEmail(){
          const regex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
           if(regex.test(inPuts[1].value)){
             console.log('true')
             inPuts[1].classList.add('is-valid')
             inPuts[1].classList.remove('is-invalid')
                 return true
           }
           else{
             console.log('false')
               inPuts[1].classList.add('is-invalid')
               inPuts[1].classList.remove('is-valid')
               return false
           }
         }

         function validationPhone(){
          const regex=/^01[0125][0-9]{8}$/
           if(regex.test(inPuts[2].value)){
             console.log('true')
             inPuts[2].classList.add('is-valid')
             inPuts[2].classList.remove('is-invalid')
                 return true
           }
           else{
             console.log('false')
               inPuts[2].classList.add('is-invalid')
               inPuts[2].classList.remove('is-valid')
               return false
           }
         }

         function validationEge(){
          const regex=/^([1-9]|[1-9][0-9]|100)$/
           if(regex.test(inPuts[3].value)){
             console.log('true')
             inPuts[3].classList.add('is-valid')
             inPuts[3].classList.remove('is-invalid')
                 return true
           }
           else{
             console.log('false')
               inPuts[3].classList.add('is-invalid')
               inPuts[3].classList.remove('is-valid')
               return false
           }
         }

         function validationPassword(){
          const regex=/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/
           if(regex.test(inPuts[4].value)){
             console.log('true')
             inPuts[4].classList.add('is-valid')
             inPuts[4].classList.remove('is-invalid')
                 return true
           }
           else{
             console.log('false')
               inPuts[4].classList.add('is-invalid')
               inPuts[4].classList.remove('is-valid')
               return false
           }
         }
        
         function validationRepassword(){
          const regex=/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/
           if(regex.test(inPuts[5].value)){
             console.log('true')
             inPuts[5].classList.add('is-valid')
             inPuts[5].classList.remove('is-invalid')
                 return true
           }
           else{
             console.log('false')
               inPuts[5].classList.add('is-invalid')
               inPuts[5].classList.remove('is-valid')
               return false
           }
         }
        
 
    })


    $(' #icon-Bars').click(function(){
        $('.moveSideBar').animate({width:'250px'},1000,function(){
            $(".close-ic").removeClass('d-none')
            $('#icon-Bars').addClass('d-none')
        $('.sideBar-links li').animate({paddingTop:'20px'},1000)
           
        })
    })


    $(".close-ic").click(function(){
        $('.moveSideBar').animate({width:'0px'},1000,function(){
          $('#icon-Bars').removeClass('d-none')
          $(".close-ic").addClass('d-none')
            $('.sideBar-links li').animate({paddingTop:'500px'},1000)        
        })
    })

    // end events//


// api category //
 async function getCategory(){
    $(".layer-loading").removeClass("d-none");
    req=await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    apiDataList= (await req.json()).categories
    setTimeout(() => {
        $(".layer-loading").addClass("d-none");
     }, 500);
    // console.log(apiDataList)
   let cartona=''
    for(let i=0;i<apiDataList.length;i++){
       cartona+=`
       <div class="col-md-3">
       <div class="card position-relative bg-dark" onclick="filteration('${apiDataList[i].strCategory}','c')">
        <div class="imge-card ">
            <img src="${apiDataList[i].strCategoryThumb}" class="w-100">
        </div>
        <div class="layer">
            <h6 class='text-center'>${apiDataList[i].strCategory}</h6>
            <p class='text-center'>${apiDataList[i].strCategoryDescription.split(" ", 15).join(" ")}</p>
        </div>
       </div>
    </div>` 
    }
    document.querySelector('.row').innerHTML=cartona;
}


// api area //
async function getArea(){
    $(".layer-loading").removeClass("d-none");
    let req=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    apiDataList=(await req.json()).meals
    setTimeout(() => {
        $(".layer-loading").addClass("d-none");
     }, 500);
    console.log(apiDataList)
     let cartona=''
    for(let i=0; i<apiDataList.length;i++){
        cartona+=`    <div class="col-md-3">
        <div class="card position-relative text-center bg-dark " onclick="filteration('${apiDataList[i].strArea}','a') ">
             <div class="imge-card p-4">
             <i class="fa-solid fa-city fa-3x text-danger"></i>
             </div>
             <div >
                <p class='text-white fs-4'>${apiDataList[i].strArea}</p>
             </div>
        </div>
     </div>`
    }

    document.querySelector('.row').innerHTML=cartona;
}



// api Ingredients
async function getIngredients(){
    $(".layer-loading").removeClass("d-none");
    let req=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    apiDataList=(await req.json()).meals.slice(0, 20)
    setTimeout(() => {
        $(".layer-loading").addClass("d-none");
     }, 500);
    // console.log(apiDataList)
    let cartona=''
    for(let i=0;i<apiDataList.length;i++){
        cartona+=`<div class="col-md-3">
        <div class="card position-relative bg-dark p-3" onclick="filteration('${apiDataList[i].strIngredient}','i')">
             <div class="imge-card p-4 text-center ">
             <i class="fa-solid fa-bowl-food fa-3x text-success bg-opacity-10"></i>
                 <h6 class="text-white">${apiDataList[i].strIngredient}</h6>
                 <p class='text-white'>${apiDataList[i].strDescription.split(" ", 10).join(" ")}</p>
             </div>

        </div>
     </div> `
    }

    document.querySelector('.row').innerHTML=cartona;
}






// filteration By category & area & ingredients

async function filteration(type,searshLetter){
  $(".layer-loading").removeClass("d-none");
    let req= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${searshLetter}=${type}`)
    apiDataList=await req.json()
    setTimeout(() => {
      $(".layer-loading").addClass("d-none");
   }, 500);
    console.log(apiDataList.meals)
    DisplayAllMeals(apiDataList.meals)

}

   
searshByName('m')

//searsh by meal name//
async function searshByName(mealName){
  $(".layer-loading").removeClass("d-none");
    let req=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    apiDataList =(await req.json()).meals
    setTimeout(() => {
      $(".layer-loading").addClass("d-none");
   },1000);
    console.log(apiDataList)         
    DisplayAllMeals(apiDataList)
}

//searsh By Frist leter//
async function searshByFristLetter(fristLetter){
  $(".layer-loading").removeClass("d-none");
    let req=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${fristLetter}`)
    apiDataList =(await req.json()).meals
    setTimeout(() => {
      $(".layer-loading").addClass("d-none");
   }, 500);
    console.log(apiDataList)
    DisplayAllMeals(apiDataList)
}



//Display meals from searsh 
function DisplayAllMeals(ArrayOfmeals){
  let cartona=''
  for(let i=0 ;i<ArrayOfmeals.length;i++){
  
      cartona+=`<div class="col-md-3">
      <div class="card position-relative ">
           <div class="imge-card ">
               <img src="${ArrayOfmeals[i].strMealThumb}" class="w-100">
           </div>
           <div class="layer" onclick="getDetails(${ArrayOfmeals[i].idMeal})">
               <h6></h6>
               <p>${ArrayOfmeals[i].strMeal}</p>
           </div>
      </div>
   </div>`
  }

  document.querySelector('.row').innerHTML=cartona;
}





//get Details of meals from id //
async function getDetails(id){
  $(".layer-loading").removeClass("d-none");
    let req =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    apiDataList=await req.json()
    obj=apiDataList.meals[0]
    console.log(obj)
    setTimeout(() => {
      $(".layer-loading").addClass("d-none");
   }, 500);
    $('.row').html(`    <div class="row g-4 text-white">
    <div class="col-md-4">
      <div class="image ratio ratio-4x3">
        <img loading="lazy"
          class="w-100"
          src="${obj.strMealThumb}"
          alt=""
        />
        <h3 class="h5 text-center mt-3 lead">
          ${obj.strMeal}
        </h3>
      </div>
    </div>
    <div class="col-md-8">
      <h3 class="lh">Instructions</h3>
      <p class="pt-3">
       ${obj.strInstructions}
      </p>
      <h4>Area : <span class="fw-light">${obj.strArea}</span></h4>
      <h4>Category : <span class="fw-light">${obj.strCategory}</span></h4>
      <h4 class="recipes-title">Recipes :</h4>
 
      <ul class="d-flex flex-wrap mt-4 gap-3" id="recipes">
       <li>${ obj.strIngredient1}</li>
       <li>${ obj.strIngredient2}</li>
       <li>${ obj.strIngredient3}</li>
       <li>${ obj.strIngredient4}</li>
       <li>${ obj.strIngredient5}</li>
       <li>${ obj.strIngredient6}</li>
       <li>${ obj.strIngredient7}</li>
       <li>${ obj.strIngredient8}</li>
       <li>${ obj.strIngredient9}</li>
       <li>${ obj.strIngredient10}</li>
       <li>${ obj.strIngredient11}</li>
      </ul>
      
 
    <div class="hstack mt-4 gap-2">
      <a href="${obj.strSource}" target="_blank" class="btn btn-success">Source</a>
      <a href="${obj.strYoutube}" target="_blank" class="btn btn-danger">Youtube</a>
      
    </div>
 
    </div>
  </div>`)

}



