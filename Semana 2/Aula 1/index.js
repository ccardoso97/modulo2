import express from 'express' //Importando o módulo express

const app = express() //Instanciar o express (passar todo o conteúdo para a variável app)
app.set('view engine', 'ejs') //Informa para o express que o motor de visualização é o Ejs
app.get("/about", (req, res) =>{
    res.render('index.ejs')
})
const port = 3001 // Porta (indica qual porta o servidor vai rodar (usar entre 3000 e 4999))

app.listen(port, () => { 
    console.log(`Meu servidor está rodando na porta ${port}`)
})

