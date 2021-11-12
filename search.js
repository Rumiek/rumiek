const search = (e)=>{

	let ev = e || window.event;
	let input = document.querySelector('#searchInput').value;

	switch (ev.type) {
		case "click":
			if (input == "") {

				alert('Ingrese el nombre de un artista');

			}else {

				document.form.action="result.html";
				document.form.submit();

			}
			break;

		case "keypress":
			if (ev.keyCode == 13) {
				if (input == "") {

						alert('Ingresa el nombre de un artista');

				}else{

					document.form.action="result.html";
					document.form.submit();

				}
			}
	}
};

window.onload = () => {
		document.onkeypress = search;
		document.querySelector('#searchSubmit').onclick = search;
};
