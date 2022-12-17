const express = require("express")
const path = require("path")
const port = 3333

let initialPath = path.join(__dirname, "public") //Pega a pasta atual e junta com a pasta public

let app = express() //Cria uma aplicação express
app.use(express.static(initialPath)) //Servidor estático

app.get("/", (req, res)=>{ //Quando o servidor for chamado e não houver nada após a /, ele manda uma resposta enviando o arquivo abaixo
    res.sendFile(path.join(initialPath, "index.html"))
})

app.listen(port, ()=>{ //Startando o servidor
    console.log(`Server start up on port ${port}!`)
})