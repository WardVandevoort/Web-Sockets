const base_url = "https://websockets-ward.herokuapp.com"

primus = Primus.connect(base_url, {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
});

let btn = document.querySelector("#submit").addEventListener("click", function(){
    let number = document.querySelector("#number").value;
    let country = document.querySelector("#country").value;

    primus.write({
        "action": "addStat",
        "data": {
            "number": number,
            "country": country
        }
    })

    fetch(base_url + "/api/v1/stats/updatestats", {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
                "number": number,
                "country": country
        })
    })
});