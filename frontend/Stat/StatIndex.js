
fetch("http://localhost:3000/api/v1/stats", {
    headers: {
        "Content-Type": "application/json"
    }
}).then(result => {
    return result.json();
}).then(json => {
    json.data.stats.forEach(stat => {
        let newStat = `<li>${stat.country} ${stat.number}</li>`;
        document.querySelector("#display").insertAdjacentHTML("afterbegin", newStat);
    });

}).catch(err => {
    console.log(err);
})

let appendStat = (json) => {
    let stat = `<li>${json.data.stat.country} ${json.data.stat.number}</li>`;
    document.querySelector("#display").insertAdjacentHTML("afterbegin", stat);
}

