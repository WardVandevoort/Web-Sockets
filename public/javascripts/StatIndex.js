const base_url = "https://websockets-ward.herokuapp.com"

fetch(base_url + "/api/v1/stats", {
    headers: {
        "Content-Type": "application/json"
    }
}).then(result => {
    return result.json();
}).then(json => {
    json.data.stats.forEach(stat => {
        let newStat = `${stat.country} ${stat.number}`;
        document.querySelector("#display").insertAdjacentHTML("afterbegin", newStat);
    });

}).catch(err => {
    console.log(err);
})

let appendStat = (json) => {
    let stat = `${json.data.stat.country} ${json.data.stat.number}`;
    document.querySelector("#display").insertAdjacentHTML("afterbegin", stat);
}


