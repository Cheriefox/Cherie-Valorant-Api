const apiUrlAgents = 'https://valorant-api.com/v1/agents';

async function getAgents() {
    try {
        const response = await fetch(apiUrlAgents);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

async function displayAgent() {
    const agents = await getAgents();
    
    // Obtener el uuid del agente desde el localStorage
    const selectedAgentUuid = localStorage.getItem('selectedAgentUuid');
    
    // Buscar el agente correspondiente usando el uuid
    const agent = agents.find(a => a.uuid === selectedAgentUuid);

    if (agent) {
        // Actualizar el título
        const titleElement = document.querySelector('h1');
        titleElement.innerHTML = agent.displayName || 'Nombre no disponible';

        // Actualizar descripción
        const descripcion = document.querySelector('.desc');
        descripcion.innerHTML = `Descripción: ${agent.description || 'Descripción no disponible'}`;

        // Actualizar fecha de reclutamiento
        const fecha = document.querySelector('.fecha');
        fecha.innerHTML = agent.recruitmentData ? `Fecha: ${agent.recruitmentData.startDate}` : 'Fecha no disponible';

        // Actualizar rol
        const ROL = document.querySelector('.rol');
        ROL.innerHTML = agent.role ? `Rol: ${agent.role.displayName}` : 'Rol no disponible';

        const ROLtext = document.querySelector('.textrol');
        ROLtext.innerHTML = agent.role 
            ? `${agent.role.displayName} - ${agent.role.description}` 
            : 'Rol no disponible';

        const rolimagen = document.querySelector('.imgroles');
        rolimagen.src = agent.role.displayIcon || 'img/default-avatar.png'; // Imagen predeterminada si no está disponible

        // Cambiar fondo de la "overley"
        const overlay = document.querySelector('.overley');
        const agentBackground = agent.background || agent.fullPortrait || 'img/default-avatar.png'; 
        overlay.style.backgroundImage = `url(${agentBackground})`;
        overlay.style.backgroundRepeat = 'no-repeat';
        overlay.style.backgroundSize = 'size-50';
        overlay.style.backgroundPosition = 'left center';

        // Actualizar imagen del agente
        const agentImage = document.querySelector('.agentes');
        agentImage.src = agent.fullPortrait || 'img/default-avatar.png'; 

        // Actualizar habilidades
        const habilidades = document.querySelector('.habilidades');
        habilidades.innerHTML = ''; // Limpiar habilidades anteriores

        if (agent.abilities && agent.abilities.length > 0) {
            agent.abilities.forEach(ability => {
                const abilityElement = document.createElement('div');
                abilityElement.innerHTML = `
                    <h3>(${ability.slot}) ${ability.displayName || 'Habilidad no disponible'}</h3>
                    <p>${ability.description || 'Descripción no disponible'}</p>
                    <img src="${ability.displayIcon || 'img/default-ability.png'}" alt="${ability.displayName || 'Habilidad'}">
                `;
                habilidades.appendChild(abilityElement);
            });
        } else {
            habilidades.innerHTML = '<p>No hay habilidades disponibles para este agente.</p>';
        }
    } else {
        console.error('Agente no encontrado.');
    }
}

displayAgent();
