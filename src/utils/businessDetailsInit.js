const request = require('request')

const businessDetailsInit = (address, callback) => {
    const yelp = require('yelp-fusion');
    const client = yelp.client('WfVlm6WDDhARuU4e8SRiLn4qzYb3VAgcuZVW2D6N1m6T2Q8oUqLFcrnzAhFyEhT06ef6WFupwttpjnoqxob6R2wEOixbp9sg2QRl0o1iLcsv7wDgzcMlUdVH2p3XXnYx');
    
    client.business(address).then(response => {
    console.log(response.jsonBody)
    callback(undefined,{

        bName: response.jsonBody.name,
        url: response.jsonBody.image_url
    })
    }).catch(e => {
    console.log(e);
    });

}

module.exports = businessDetailsInit