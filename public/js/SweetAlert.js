const formDelete = document.getElementById("form-delete")



formDelete.addEventListener("submit",function(event){
event.preventDefault();

Swal.fire({
    title: 'Estas seguro de eliminar?',
 
    showCancelButton: true,
    confirmButtonText: 'Eliminar',
   
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Producto eliminado con exito!', '', 'success',2000);
      formDelete.submit()
    } 
  })











})