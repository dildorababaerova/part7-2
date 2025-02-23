const express = require('express')
const app = express()


let notes= [
      {
        id: "1",
        content: "Learn React"
      },
      {
        id: "2",
        content: "Master Hooks"
      },
      {
        id: "c7cd",
        content: "Master React"
      }
    ]

    let persons = [
      {
        id: "1",
        name: "Alice",
        number: "123-456"
      },
      {
        id: "2",
        name: "Bob",
        number: "987-654"
      },
      {
        id: "da57",
        name: "Masju",
        number: "7777-7777"
      }
    ]
  
    app.get('/', (request, response) => {
      response.send('<h1>Hello World!</h1>')
    })
    
    app.get('/api/notes', (request, response) => {
      response.json({notes, persons})
    })
    app.get('/api/notes/:id', (request, response) => {
      const id = request.params.id
      const note = notes.find(note => note.id === id)
      if (note) {   
         response.json(note)  
        } else {    
        response.status(404).end()
        }
    })
    
    const PORT = 3000
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })