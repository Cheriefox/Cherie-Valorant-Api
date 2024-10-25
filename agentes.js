async function cargarAgentes() {
    try{
        const response = await fetch('https://valorant-api.com/v1/agents'); 
        const data = await response.json(); 

        const agentes = data.data;
        console.log('Agentes:', agentes);
        
    
        const listaAgentes = document.querySelector('ul');

        agentes.forEach(agente => {
        const li = document.createElement('li');
        li.className = 'agentes col-2 text-center'; 
        li.innerHTML = `
            <img src="${agente.displayIcon}" width="50%" alt="Ícono de ${agente.displayName}" class="img-fluid">
            <p>${agente.displayName}</p>
        `;
        listaAgentes.appendChild(li); 
    })
    } catch (error) {
        console.error('Error al cargar el agente:', error);
    }
    }  
cargarAgentes(); 