/* eslint-disable prettier/prettier */
import { ConnectionOptions } from "typeorm"

const config: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    synchronize: false,
}

export = config