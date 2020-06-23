const request = require('request')

const reviews = (address, callback) => {
    const yelp = require('yelp-fusion');
    const client = yelp.client('WfVlm6WDDhARuU4e8SRiLn4qzYb3VAgcuZVW2D6N1m6T2Q8oUqLFcrnzAhFyEhT06ef6WFupwttpjnoqxob6R2wEOixbp9sg2QRl0o1iLcsv7wDgzcMlUdVH2p3XXnYx');
    
    client.reviews(address).then(response => {
    //console.log(response.jsonBody.reviews[0].text);
    callback(undefined,{
        reviewJson:response.jsonBody
    })
    }).catch(e => {
    console.log(e);
    });
}

module.exports = reviews