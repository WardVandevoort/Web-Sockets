const base_url = "https://websockets-ward.herokuapp.com"

primus = Primus.connect(base_url, {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
});

let appendStat = (json)  => {
    json.data.stats.forEach(stat => {
        let newStat = `<li>${stat.country} ${stat.number}</li>`;
        document.querySelector("#display").insertAdjacentHTML("afterbegin", newStat);
    });
}

fetch(base_url + "/api/v1/stats", {
    headers: {
        "Content-Type": "application/json"
    }
}).then(result => {
    return result.json();
}).then(json => {
    /*json.data.stats.forEach(stat => {
        let newStat = `<li>${stat.country} ${stat.number}</li>`;
        document.querySelector("#display").insertAdjacentHTML("afterbegin", newStat);
    });*/

    primus.write({
        "action": "addStat",
        "data": json
    })

    appendStat(json);

}).catch(err => {
    console.log(err);
})

/*let appendStat = (json) => {
    let stat = `<li>${json.data.stat.country} ${json.data.stat.number}</li>`;
    document.querySelector("#display").insertAdjacentHTML("afterbegin", stat);
}*/


