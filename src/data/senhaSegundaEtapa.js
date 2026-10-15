import password from '../../password'
import { db } from './index'

export function SenhaSE() {
    db.execSync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS senhaSE (id INTEGER PRIMARY KEY NOT NULL, senha TEXT NOT NULL);
    `)
}

export function InserirSenhaSE(senha) {
    if (senha == password){
        db.execSync(`
            INSERT INTO senhaSE (senha) VALUES ("${senha}");
        `)
    }
}

export function GetSenhaSE() {
    const lista = []
    const allRows = db.getAllSync('SELECT * FROM senhaSE');
    for (const row of allRows) {
        lista.push({ id: row.id, senha: row.senha })
    }
    return lista
}