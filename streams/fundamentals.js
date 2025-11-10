//  Netflix & Spotify

// Importação de clientes via CSV (Excel)
// 1gb - 1.000.000
// POST /upload import.scv

// internet de 10mb/s - demoraria cerca de 100s para ler o arquivo.

// 100s => Inserções no banco de dados.

//10mb/s => 10.000 registros por segundo que podem ser
//           lidos pelo Banco de dados.

// Readable Streams => LENDO O ARQUIVO POR INTEIRO PRIMEIRO.
// Writable Streams => ENVIANDO INFORMAÇÕES AOS POUCOS(NETFLIX, SPOTIFY).


// Streams => posso ler e enviar os dados aos poucos.

// process.stdin
//    .pipe(process.stdout)

import { Readable, Writable , Transform } from 'node:stream'

class OneToHundredStream extends Readable {
    index = 1

    _read() {
        const i = this.index++
        setTimeout(() => {
        if (i > 100) {
            this.push(null)

        } else {
            const buf = Buffer.from(String(i) + '\n')

            this.push(buf)
        }
        },1000)
    }
}

class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = (chunk.toString()) * -1

        callback(null, Buffer.from(String(transformed)))

    }
}

class MultiplyByTenStream extends Writable {
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}

new OneToHundredStream()
    .pipe(new InverseNumberStream())
    .pipe(new MultiplyByTenStream())


//Duplex = junção da Readable e Writable, porém n é muito utilizada.