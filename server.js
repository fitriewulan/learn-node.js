const path = require('path')
const express = require('express')
const data = require('./data/data.json')

const app = express()

//setup view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

//set assets css js image di folder public
app.use(express.static('public'))

//route index
app.get('/', (req, res)=>{
	res.render('index', {
		items : data
	})
})

app.get('/:slug', (req, res) =>{
	const item = data.find(d => {
		return d.slug === req.params.slug
	})
	console.log(item)
	res.render('detail', {
		items : item
	})
})

app.listen(8000, () => {
	console.log('succes! http://localhost:8000')
})