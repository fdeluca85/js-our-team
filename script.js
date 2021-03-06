// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
// Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo tutte le card del nostro team.
// BONUS: Utilizziamo poi gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team.

// alert("ciao");


// array dei membri del team
const team = [
    {
        'name': 'Wayne Barnett', 
        'role': 'Founder & CEO',
        'image': 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        'name': 'Angela Caroll',
        'role': 'Chief Editor',
        'image': 'img/angela-caroll-chief-editor.jpg'
    },
    {
        'name': 'Walter Gordon',
        'role': 'Office Manager',
        'image': 'img/walter-gordon-office-manager.jpg'
    },
    {
        'name': 'Angela Lopez',
        'role': 'Social Media Manager',
        'image': 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        'name': 'Scott Estrada',
        'role': 'Developer',
        'image': 'img/scott-estrada-developer.jpg'
    },
    {
        'name': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'image': 'img/barbara-ramos-graphic-designer.jpg'
    },
];
console.log(team);


// selezione team-container
let teamCard = document.querySelector(".team-container");

//ciclo for infoteam
let teamInfo = "";

for (let i = 0; i < team.length; i++) {
    // console.log(team[i].image);
    teamInfo += `    
          <div class="team-card">
            <div class="card-image">
              <img
                src="${team[i].image}"
                alt="${team[i].name}"
              />
            </div>
            <div class="card-text">
              <h3>${team[i].name}</h3>
              <p>${team[i].role}</p>
            </div>
          </div>        
    `
    console.log(teamInfo);
}

//output html
teamCard.innerHTML = teamInfo;