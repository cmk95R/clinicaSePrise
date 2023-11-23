const $ = (id) => document.getElementById(id);

const show = (info, error, element) => {
  $(info).hidden = false
  $(error).hidden = true
  element.borderColor = 'inherit'
}

const validateElement = (info, error, element) => {
  $(info).hidden = true
  if(!element.target.value.trim()){
      $(error).hidden = false
  }  
}

window.onload = function () {
  const main = document.querySelector("main");
  const respuesta = confirm("Deseas editar un producto?");
  const formEdit = document.querySelector(".editProduct__main__form");

  
  let elementsForm = formEdit.elements;

  
   //MUESTRA LO Q SE VA ESRIBIENDO EN LA CONSOLA 
  elementsForm[0].addEventListener("keydown", (e) => {
    console.log(e.key);
  });
 $("name").focus();
 

  $("name").addEventListener("focus", (e) => {
    show('msg-name', 'error-name', e)
  })

  $("name").addEventListener("blur", function (e) {
    validateElement('msg-name', 'error-name', e)
  })

  $("brandId").addEventListener("focus", (e) => {
    show('msg-brand')
  });
  $("brandId").addEventListener("blur", () => {
    $('msg-brand').hidden = true
  });

  $("price").addEventListener("focus", (e) => {
    show('msg-price', 'error-price', e)
  });

  $("price").addEventListener("blur", function (e) {
    validateElement('msg-price', 'error-price', e)
  });

  $("description").addEventListener("focus", (e) => {
    show('msg-description', 'error-description', e)
  });

  $("description").addEventListener("blur", function (e) {
    validateElement('msg-description', 'error-description', e)
  });
  $("categoryId").addEventListener("focus", (e) => {
    show('msg-category')
  });
  $("categoryId").addEventListener("blur", () => {
    $('msg-category').hidden = true
  });


  formEdit.addEventListener("submit", (event) => {
    event.preventDefault();

    const msgErrors = [];

    for (let i = 0; i < elementsForm.length -3; i++) {
      if (elementsForm[i].value.trim() === "") {
        msgErrors.push(`El campo ${elementsForm[i].name} no puede estar vacío`)
        elementsForm[i].classList.add('is-invalid')
        elementsForm[i].classList.remove('is-valid')
      }else{
        elementsForm[i].classList.remove('is-invalid')
        elementsForm[i].classList.add('is-valid')
      }
    }
    
    if (!msgErrors.length){
      formEdit.submit()
    }
  })
}


///otra forma----///
      /* $('name').addEventListener("blur", function (e) {
        switch (true) {
          case !this.value.trim();
            $('nombre del id de error').innerHTML = "El nombre es obligatorio";
            this.classList.add("is-invalid");
            break
          case this.value.length < 2 : 
            $('nombre del id de error').innerHTML = "Mínimo dos caracteres";
            this.classList.add("is-invalid");
            break
          default:
            $('nombre del id de error').innerHTML = "Null";
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
          break;

        }
      })
    }  

/////

*/