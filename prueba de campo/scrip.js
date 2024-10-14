const apiUrlAgents = 'https://valorant-api.com/v1/agents';
async function getAgents() {
  try {
    const response = await fetch(apiUrlAgents);
    const data = await response.json();
    console.log('Agentes:', data.data);
    return data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
}
async function displayAgents() {
const data = await getAgents();

let listaAgentes = document.querySelector("ul");

data.data.forEach(agent => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h3>${agent.displayName}</h3>
      <img src=${agent.displayIcon} height="200px"> </img>
      
    `;
    listaAgentes.appendChild(li);
  });
}
displayAgents();

const apiUrlSkins = 'https://valorant-api.com/v1/bundles';

async function getSkin() {
  try {
    const response = await fetch(apiUrlSkins);
    const data = await response.json();
    console.log('Skins:', data.data);
    return data.data; // Retorna solo los datos
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
}

async function displayBundlel() {
  const data = await getSkin();

  let listaSkins = document.querySelector("ul");

  // Limitar a las primeras 10 skins
  const firstTenSkins = data.slice(0, 10); 

  firstTenSkins.forEach(skin => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h3>${skin.displayName}</h3>
      <img src="${skin.displayIcon}" height="200px" alt="${skin.displayName}"> <!-- Agregado alt -->
    `;
    listaSkins.appendChild(li);
  });
}

displayBundlel();


const apiUrlICONS = 'https://valorant-api.com/v1/playercards';

async function getICON() {
  try {
    const response = await fetch(apiUrlICONS);
    const data = await response.json();
    console.log('Cartas de jugador:', data.data);
    return data.data; 
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
}

async function displayICON() {
  const data = await getICON();

  let listaAgentes = document.querySelector("ul");


  const firstEightIcons = data.slice(0, 8); 

  firstEightIcons.forEach(icon => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h3>${icon.displayName}</h3>
      <img src="${icon.displayIcon}" height="200px" alt="${icon.displayName}"> <!-- Agregado alt -->
    `;
    listaAgentes.appendChild(li);
  });
}

displayICON();




const apiUrlmap = 'https://valorant-api.com/v1/maps';

async function getmap() {
  try {
    const response = await fetch(apiUrlmap);
    const data = await response.json();
    console.log('Mapas:', data.data);
    return data.data; 
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
}

async function displaymap() {
  const data = await getmap();

  let listaAgentes = document.querySelector("ul");


  const firstEightIcons = data.slice(0, 8); 

  firstEightIcons.forEach(icon => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h3>${icon.displayName}</h3>
      <img src="${icon.displayIcon}" height="200px" alt="${icon.displayName}"> 
    `;
    listaAgentes.appendChild(li);
  });
}

displaymap();


const apiUrlSprays = 'https://valorant-api.com/v1/sprays';

async function getSprays() {
            try {
                const response = await fetch(apiUrlSprays);
                const data = await response.json();
                console.log('Sprays:', data.data);
                return data.data; // Retorna solo los sprays
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        }

        async function displaySprays() {
            const data = await getSprays();

            let listaSprays = document.querySelector("ul");

            const firstTenSprays = data.slice(0, 100);

            firstTenSprays.forEach(spray => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <h3>${spray.displayName}</h3>
                    <img src="${spray.fullIcon}" height="300px" alt="${spray.displayName}"> <!-- Agregado alt -->
                `;
                listaSprays.appendChild(li);
            });
        }

        displaySprays();