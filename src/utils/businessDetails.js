const request = require('request')

const businessDetails = (address, callback) => {
    const yelp = require('yelp-fusion');
    const client = yelp.client('WfVlm6WDDhARuU4e8SRiLn4qzYb3VAgcuZVW2D6N1m6T2Q8oUqLFcrnzAhFyEhT06ef6WFupwttpjnoqxob6R2wEOixbp9sg2QRl0o1iLcsv7wDgzcMlUdVH2p3XXnYx');
    
    client.business(address).then(response => {

      //  console.log(response.jsonBody);
      //  console.log(response.jsonBody.hours[0].open);
        callback(undefined,{
        id : response.jsonBody.id,
        bName: response.jsonBody.name,
        title1 : response.jsonBody.categories[0].title,

        url1: response.jsonBody.image_url,        
        url2: response.jsonBody.photos[1],
        url3: response.jsonBody.photos[2],
        long_1 : response.jsonBody.coordinates.longitude,
        lat_1 : response.jsonBody.coordinates.latitude,
        displayAddress : response.jsonBody.location.display_address,
        rating : response.jsonBody.rating,
        displayPhone : response.jsonBody.display_phone,
        isClosed : response.jsonBody.is_closed,
        open : response.jsonBody.hours[0].open,
        reviewCount : response.jsonBody.review_count
        
        
    })
    }).catch(e => {
    console.log(e);
    });

}

module.exports = businessDetails