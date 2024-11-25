async function cargarAgentes() {
    try {
        const response = await fetch('https://valorant-api.com/v1/agents');
        const data = await response.json();
        const agentes = data.data;
        console.log('Datos completos de la API:', agentes);

        const agentesFiltrados = agentes.filter(agente => agente.uuid !== 'ded3520f-4264-bfed-162d-b080e2abccf9');

        const listaAgentes = document.querySelector('ul');

        agentesFiltrados.forEach(agente => {
            const li = document.createElement('li');
            li.className = 'agentes col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-center';
            
            // Al hacer clic en el agente, guardar el uuid en el localStorage y redirigir
            li.addEventListener('click', () => {
                localStorage.setItem('selectedAgentUuid', agente.uuid);
                window.location.href = 'descripcion.html';  // Redirigir a la página de descripción
            });

            li.innerHTML = `
                <a href="descripcion.html">
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
