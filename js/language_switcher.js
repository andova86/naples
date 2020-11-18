/*
const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .contenido-select');
const hiddenInput = document.querySelector('#inputSelect');

document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		contenidoSelect.innerHTML = e.currentTarget.innerHTML;
		select.classList.toggle('active');
		opciones.classList.toggle('active');
		hiddenInput.value = e.currentTarget.querySelector('.title').innerText;
	});
});

select.addEventListener('click', () => {
	select.classList.toggle('active');
	opciones.classList.toggle('active');
});
*/
function swapper() {
alert("dfdfdf")
}

const select = document.querySelector('.seleccionado');
const hiddenInput = document.querySelector('#language');


document.querySelectorAll('.dropdown-menu > .dropdown-item > .lang').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		select.innerHTML = e.currentTarget.innerHTML;

		hiddenInput.value = e.currentTarget.querySelector('.vlang').innerText;
	});
});
