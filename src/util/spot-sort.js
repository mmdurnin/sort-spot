
async function sortSpots(data) {
    for (let i = 0; i < data.length; i++) {
        let currentSpot = data[i];
        let id = currentSpot["pk"]
        let enforcementDetails = await fetch(`https://airgara.ge/api/enforcements/?spot=${id}`)
        const json = await enforcementDetails.json();
        data[i]["mostRecent"] = json[0]["created_at"]
        console.log(data[i])
    }
}



export default sortSpots;