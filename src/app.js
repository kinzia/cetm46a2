const path = require('path')
const express = require('express')
const hbs = require('hbs')

const businessDetails = require('./utils/businessDetails')
const businessDetailsInit = require('./utils/businessDetailsInit')
const reviews = require('./utils/reviews')

const app = express()
const port = process.env.PORT || 8080

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Yelp Search',
        name: 'Chow Chi Kin'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Chow Chi Kin'
    })
})
app.get('/fDemo',(req,res)=>{
    res.render('fDemo')
})
app.get('/demo1',(req,res)=>{
    res.render('demo1')
})
app.get('/yelp', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an id!'
        })
    }
    
    businessDetails(req.query.address,(error,{id,bName,title1,url1,url2,url3,long_1,
        lat_1,displayAddress,rating,displayPhone,isClosed,open,reviewCount}={})=>{
        if(error){
            return res.send({error})
        }
        res.send({id,bName,title1,url1,url2,url3,long_1,lat_1,displayAddress,rating,displayPhone,isClosed,open,reviewCount})

    })


})
app.get('/yelpReviews', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an id!'
        })
    }
    
    reviews(req.query.address,(error,{reviewJson}={})=>{
        if(error){
            return res.send({error})
        }
        res.send({reviewJson})
    })

})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Help article not found.'
    })
})

app.get('/test/*', (req, res) => {
    res.render('test', {
        title: 'test',
        name: 'Anamdrew Mead',
        long: req.query.long,
        lat: req.query.lat
    })
})
app.get('/map/*', (req, res) => {
    res.render('map', {
        long: req.query.long,
        lat : req.query.lat
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    })
})



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
