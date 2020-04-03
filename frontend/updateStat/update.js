let btn = document.querySelector("#submit").addEventListener("click", function(){
    let number = document.querySelector("#number").value;
    let country = document.querySelector("#country").value;

    fetch("http://localhost:3000/api/v1/stats/updatestats", {
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