import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabaseSync('dbNotas');

export function CriarMyNotas() {
    db.execSync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS myNotas (id INTEGER PRIMARY KEY NOT NULL, codigo INTEGER, nome TEXT NOT NULL, nota INTEGER, classificado INTEGER);
    `)
}

///////////////////////////////////////////////////////////////////////////////////////
// export function CriarMySenha() {
//     db.execSync(`
//         PRAGMA journal_mode = WAL;
//         CREATE TABLE IF NOT EXISTS mySenha (id INTEGER PRIMARY KEY NOT NULL, senha TEXT NOT NULL);
//     `)
// }

// export function InserirSenha(senha) {
//     db.execSync(`
//         INSERT INTO mySenha (senha) VALUES ('${senha}');
//     `)
// }

// export function GetSenha() {
//     const lista = []
//     const allRows = db.getAllSync('SELECT * FROM mySenha');
//     for (const row of allRows) {
//         lista.push({ id: row.id, senha: row.senha })
//     }
//     return lista
// }
///////////////////////////////////////////////////////////////////////////////////////

export function Inserir(codigo, nome, nota) {
    const classificado = nota >= 8 ? 1 : 0
    db.execSync(`
        INSERT INTO myNotas (codigo, nome, nota, classificado) VALUES (${codigo}, "${nome}", ${nota}, ${classificado});
    `)
    console.log(`Foram inseridos ao db myNotas o nome ${nome}, de código ${codigo}, com a nota ${nota}.`)
}

export function GetList() {
    const lista = []
    const allRows = db.getAllSync('SELECT * FROM myNotas');
    for (const row of allRows) {
        lista.push({ id: row.id, codigo: row.codigo, nome: row.nome, nota: row.nota, classificado: row.classificado })
    }
    return lista
}

export function ApagarLista() {
    db.execSync(`
        DROP TABLE IF EXISTS myNotas;
    `)
    return console.log('A lista foi apagada.')
}


export function EditarNomeDb(nome, id) {
    return db.runSync('UPDATE myNotas SET nome = ? WHERE id = ?', nome, id)
}

export function EditarNotaDb(nota, id) {
    return db.runSync('UPDATE myNotas SET nota = ? WHERE id = ?', nota, id)
}

export function ExcluirNomeDb(id) {
    return db.runSync('DELETE FROM myNotas WHERE id = $id', { $id: id })
}