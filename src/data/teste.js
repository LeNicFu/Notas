import { db } from './data'

// Função para verificar se uma tabela existe
const verificaTabela = (nomeTabela) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT name FROM sqlite_master WHERE type='table' AND name=?;`,
                [nomeTabela],
                (_, { rows }) => {
                    if (rows.length > 0) {
                        // A tabela existe
                        resolve(true);
                    } else {
                        // A tabela não existe
                        resolve(false);
                    }
                },
                (_, error) => {
                    // Ocorreu um erro ao executar a consulta SQL
                    reject(error);
                }
            );
        });
    });
};


export function Existe() {
    // Exemplo de uso
    verificaTabela('myIp').then((existe) => {
        if (existe) {
            console.log('A tabela existe.');
        } else {
            console.log('A tabela não existe.');
        }
    }).catch((error) => {
        console.error('Erro ao verificar a existência da tabela:', error);
    });

}
