import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabaseSync('dbNotas');

export function CriarMyNotas() {
    db.execSync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS myNotas (id INTEGER PRIMARY KEY NOT NULL, codigo INTEGER, nome TEXT NOT NULL, nota INTEGER);
    `)
}

export function Inserir(codigo, nome, nota) {
    db.execSync(`
        INSERT INTO myNotas (codigo, nome, nota) VALUES (${codigo}, '${nome}', ${nota});
    `)
    console.log(`Foram inseridos ao db myNotas o nome ${nome}, de código ${codigo}, com a nota ${nota}`)
}

export function GetList() {
    const lista = []
    const allRows = db.getAllSync('SELECT * FROM myNotas');
    for (const row of allRows) {
        lista.push({id: row.id, codigo: row.codigo, nome: row.nome, nota: row.nota})
    }
    return lista
}

export function ApagarLista() {
    db.execSync(`
        DROP TABLE IF EXISTS myNotas;
    `)
    return console.log('A lista foi apagada.')
}
