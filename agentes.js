async function cargarAgentes() {
    try {
        const response = await fetch('https://valorant-api.com/v1/agents');
        const data = await response.json();

        const agentes = data.data;
        console.log('Datos completos de la API:', agentes);  // Imprimimos todos los agentes para verificar la estructura

        // Filtramos el agente con el UUID específico
        const agentesFiltrados = agentes.filter(agente => agente.uuid !== 'ded3520f-4264-bfed-162d-b080e2abccf9'); // Excluimos el agente con ese UUID

        const listaAgentes = document.querySelector('ul');

        agentesFiltrados.forEach(agente => {
            const li = document.createElement('li');
            li.className = 'agentes col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-center';
            li.innerHTML = `
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <img src="${agente.displayIcon}" width="50%" alt="Ícono de ${agente.displayName}" class="img-fluid"></a>
                <p>${agente.displayName}</p>
            `;
            listaAgentes.appendChild(li);
        });
    } catch (error) {
        console.error('Error al cargar los agentes:', error);
    }
}

cargarAgentes();
