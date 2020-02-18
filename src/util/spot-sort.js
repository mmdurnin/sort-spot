
async function sortSpots(data) {
    const checked = [];
    const unchecked = [];

    for (let i = 0; i < data.length; i++) {
        let temp = {}
        let currentSpot = data[i];
        let id = currentSpot["pk"]
        let enforcementDetails = await fetch(`https://airgara.ge/api/enforcements/?spot=${id}`)
        const json = await enforcementDetails.json();
        temp["name"] = data[i]["name"]
        if (json[0] === undefined) {
            unchecked.push(temp)
        } else {
            temp["mostRecent"] = json[0]["created_at"]
            temp["enforcementOfficer"] = json[0]["enforcer_username"]
            checked.push(temp)
        }
    }
    return [checked.sort(minuteCompare), unchecked]
}

function minuteCompare(time1, time2) {
    let comparison = 0;
    time1 = time1["mostRecent"];
    time2 = time2["mostRecent"];

    if (time1 < time2) {
        comparison = -1;
    } else if (time1 > time2) {
        comparison = 1;
    }
    return comparison;
}



export default sortSpots;