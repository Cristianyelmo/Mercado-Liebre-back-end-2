const formEdit = document.getElementById("form-edit")



formEdit.addEventListener("submit",function(event){
event.preventDefault();

Swal.fire({
    title: 'Estas seguro que queres editar?',
 
    showCancelButton: true,
    confirmButtonText: 'Editar',
   
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Producto Editado con exito!', '', 'success',2000);
      formEdit.submit()
    } 
  })











})