const formcreate = document.getElementById("form-create")



formcreate.addEventListener("submit",function(event){
event.preventDefault();

Swal.fire({
    position: 'middle',
    icon: 'success',
    title: 'Tu producto fue creado',
    showConfirmButton: false,
    timer: 1500
  })


  formcreate.submit()










})