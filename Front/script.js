const resultsDiv = document.getElementById("results")


async function fetchEmployee(){
    resultsDiv.innerHTML = "<p>Carregando...</p>"

    try {
        const response = await fetch('../Dados/dados.json')
        const data = await response.json()
        console.log(data)

        if(data.error){
            resultsDiv.innerHTML = "<p>Erro ao buscar funcionarios!</p>"
            return
        }
        resultsDiv.innerHTML = ''

        data.forEach(item => {
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
                <img src="${item.imagem}" alt="${item.nome}"
                <h2>${item.nome}</h2>
                <h3>${item.descricao}</h3>
                <p>${item.categoria}</p>
                <p>${item.setor}</p>
            `
            resultsDiv.appendChild(card)
        });

    } catch (error) {
        resultsDiv.innerHTML = "<p>Erro ao buscar funcionarios!</p>"
    }

}

fetchEmployee()