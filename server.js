import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Array de posts estático (usado como exemplo, será substituído pela busca no banco de dados)
const posts = [
];

const app = express();
app.use(express.static("uploads"))
routes(app);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor escutando...");
});