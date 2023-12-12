document.querySelector('#formulario').addEventListener('submit', (e) => {
    
    e.preventDefault()

    console.log('Nome: ' + nome.value);
    console.log('Endereco: ' + endereco.value);
    console.log('Cidade: ' + e.target.cidade.value);
    console.log('Estado: ' + e.target.estado.value);

    const cargoPretendido = document.querySelectorAll('input[name="cargoPretendido"]:checked')
    console.log(cargoPretendido)

    const areasInteresse = document.querySelectorAll('input[name="areaInteresse"]:checked')
    console.log(areasInteresse)

    if (areasInteresse.length === 0) {
        event.preventDefault()

        alert('Preencher área de interesse')
    }

    console.log('Mini-currículo: ' + e.target.miniCurriculo.value);

})