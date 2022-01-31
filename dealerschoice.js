const express = require('express')
const info = require('./info')
const morgan = require('morgan')
const server = express()
const path = require("path")

server.use(express.static(path.join(__dirname)))

server.use(morgan('dev'))

server.get('/', (req, res, next)=>{
    const badFoods = info.list()
    res.send(`
        <html>
            <head>
            <link rel="stylesheet" href="/style.css"/>
            </head>
            <body>
                <h1>The Worst Foods</h1>
                    ${
                        badFoods.map(item=>{
                            return `
                            <div><a href="/food/${item.name}">${item.name}</a></div>
                            `
                        }).join("")
                    }
            </body>
        </html>
    `)
})

server.get('/food/:name', (req, res)=>{
    const request = req.params.name;
    const foodName = info.find(request)

    if(!foodName.name){
        res.send(
            `I think you're lost.
            <html>
                <head>
                    <link rel="stylesheet" href="/style.css"/>
                </head>
                <body>
                <div><a href="/">Go Home</a></div>
                </body>
            </html>
            `
        )
    }

    res.send(
        `
            <html>
                <head>
                    <title>My No Good Foods</title>
                    <link rel="stylesheet" href="/style.css"/>
                </head>
                <body>
                    <h1>${foodName.name}</h1>
                    <p><div>Why I don't like it:</div>${foodName.description}</p>
                    <div>Rating: ${foodName.rating}/10</div>
                    <div><a href="/">Go back</a></div>
                </body>
            </hmtl>
        `
    )
})

const port = process.env.PORT || 3000

server.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})
