document.addEventListener("DOMContentLoaded", function() {
    const btnEnviar = document.getElementById('btnSubmit');
const Nombre = document.getElementById('Nombre');
const Apellido = document.getElementById('Apellido');
const FechaDeNacimiento = document.getElementById('FechaDeNacimiento');



enviarData = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
          Nombre : Nombre.value,
          Apellido : Apellido.value,
          FechaDeNacimiento : FechaDeNacimiento.value
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
btnEnviar.addEventListener('click', enviarData)
});
