const url = "https://www.carboninterface.com/api/v1/estimates";

const options = {
    headers: {
        Authorization: "Bearer pZadn1qVONwoAfHFMLO4Q",
        "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
        type: "vehicle",
        distance_unit: "mi",
        distance_value: 100,
        vehicle_model_id: "7268a9b7-17e8-4c8d-acca-57059252afe9"
    })
};

fetch(url, options)
    .then(response => {
        response.json()
            .then(data => console.log(data))
    })
    .catch(e => console.log('ERRO!'))
