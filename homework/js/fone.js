console.log('This is the F1 js file')

// Grab the form

let form = document.getElementById("racerForm");
// console.log(form)

// Create function to handle Submit Events
async function handleSubmit(ev){
    ev.preventDefault();
    let season = ev.season.value 
    let seasonStand = ev.target[0].value 
    let roundStand = ev.target[1].value

    let standings = await getStandingInfo(seasonStand, roundStand);
    // let standings = await getStandingInfo(season);
    console.log(standings);

    await buildStandingCard(standings);
    // ev.target.season.value = ''
    ev.target[0].value = ''
    ev.target[1].value = ''



}

async function getStandingInfo(season){
    try{
        let res = await fetch(`http://ergast.com/api/f1/${seasonStand}/${roundStand}.json`)
        // let res = await fetch(`http://ergast.com/api/f1/${season}/2/.json`)
        let data = await res.json()
        return data
    
    } catch(ev){
        console.error(ev)
    }
}
async function buildStandingCard(season){
    const card = document.createElement('div');
    card.className = 'card';

    
// }
form.addEventListener('submit', handleSubmit);

