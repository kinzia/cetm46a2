const yelpForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
//const lat_1 = document.querySelector('#lat_1')
//const long_1 = document.querySelector('#long_1')


yelpForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const bid = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/yelp?address=' + bid).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
             } else {
                messageOne.textContent = data.bName
                messageTwo.textContent = data.url
                var lat_1 = data.lat_1
                var long_1 = data.long_1
                var blink = data.url
                var long_1_str = long_1.toString()
                var lat_1_str = lat_1.toString()
                document.getElementById('selectedRestaurantImg').innerHTML = '<img src="' + blink + '" width="100" height="100""/>';
             //   document.getElementById('long_1').innerHTML =data.long_1;
             //   document.getElementById('lat_1').innerHTML =data.lat_1;
             document.getElementById('longlat').innerHTML ='<iframe id ="longlat" sandbox="allow-popups allow-scripts allow-forms allow-same-origin" src="/map/?long='+long_1_str+'&lat='+lat_1_str+'" marginwidth="0" marginheight="0" style="height:500px; width:100%;" scrolling="no"></iframe>';
           //  document.getElementById('longlat').innerHTML ='<iframe id ="longlat" sandbox="allow-popups allow-scripts allow-forms allow-same-origin" src="/map/?long=0&lat=0" marginwidth="0" marginheight="0" style="height:500px; width:100%;" scrolling="no"></iframe>';

            }
        })
    })
})