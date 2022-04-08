
console.log('This is the F1 js file')

// Grab the form

{
    let form = document.getElementById("racerForm");

    // Create function to handle Submit Events
    async function handleSubmit(e){
        e.preventDefault();
        let year = e.target.year.value 
        let season = e.target.season.value
        console.log(year, season)

        //request to get data
        let standing = await getStandingInfo(year, season)
        // let standing = getStandingInfo(year, season)
        console.log(standing);

        // Build element to display
        await buiildStandingTable(standing);
        // buiildStandingTable(standing);
        e.target.year.value = '';
        e.target.season.value = '';
    }
    //function that accepts year and season and returns a object
    async function getStandingInfo(year, season){
        try{
            let res = await fetch(`http://ergast.com/api/f1/${year}/${season}/driverStandings.json`)
            let data = await res.json()
            return data
        } catch(e){
            console.error(e)
        }
    }
    // function to build card for country
    async function buiildStandingTable(standing){
        // Grabbing what the imput is from the dic
        var inputList = (standing.MRData.StandingsTable.StandingsLists[0].DriverStandings);
        // console.log(inputList)
        const containData = document.getElementById('exTable')


        for (let i = 0; i< inputList.length; i++){
            a = inputList[i]

            containData.innerHTML += `<tr><td>${a.position}</td><td>${a.Driver.driverId}</td><td>${a.Constructors[0].constructorId}</td><td>${a.points}</td><td>${a.wins}</td></tr>`
            console.log(containData)
        }


    }
    
    form.addEventListener('submit', handleSubmit);
}

   
    
    



