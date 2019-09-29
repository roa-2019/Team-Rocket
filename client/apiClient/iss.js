import request from 'superagent'

const apiBaseUrl = 'https://api.wheretheiss.at/v1'

//https://api.wheretheiss.at/v1/satellites/25544
export function getSatellite(id) {
    return request.get(apiBaseUrl + '/satellites/' + id)
    .then(response => response.body)
}