import { db } from './index'

export function CriarListaSE() {
    db.execSync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS myListaSE (id INTEGER PRIMARY KEY NOT NULL, centro TEXT NOT NULL, ano INTEGER, codigo INTEGER, nome TEXT NOT NULL, nota TEXT NOT NULL);
    `)
}

export function InserirSE(centro, ano, codigo, nome, nota) {
    db.execSync(`
        INSERT INTO myListaSE (centro, ano, codigo, nome, nota) VALUES ("${centro}", ${ano}, ${codigo}, "${nome}", "${nota}");
    `)
}

export function GetListSE() {
    const lista = []
    const allRows = db.getAllSync('SELECT * FROM myListaSE');
    for (const row of allRows) {
        lista.push({ id: row.id, centro: row.centro, ano: row.ano, codigo: row.codigo, nome: row.nome, nota: row.nota })
    }
    return lista
}

export function ApagarListaSE() {
    db.execSync(`
        DROP TABLE IF EXISTS myListaSE;
    `)
    return console.log('A lista foi apagada.')
}

export function EditarNomeSE(nome, id) {
    return db.runSync('UPDATE myListaSE SET nome = ? WHERE id = ?', nome, id)
}

export function EditarNotaSE(nota, id) {
    return [
        db.runSync('UPDATE myListaSE SET nota = ? WHERE id = ?', nota, id),
    ]
}