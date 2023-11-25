usuarios = [
    { nome: "Ana Silva", email: "ana.silva@example.com", ativo: true },
    { nome: "Carlos Souza", email: "carlos.souza@example.com", ativo: false },
    { nome: "Marta Rocha", email: "marta.rocha@example.com", ativo: true },
    { nome: "Pedro Gomes", email: "pedro.gomes@example.com", ativo: false },
    { nome: "Juliana Moraes", email: "juliana.moraes@example.com", ativo: true }
]
ativos = ['']
usuariosFiltrados = usuarios.filter((num) => {
    if (num.ativo == true) {
        ativos += num.nome
    }
})
alert(ativos)