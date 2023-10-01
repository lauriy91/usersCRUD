/* eslint-disable prettier/prettier */
// import { ConnectionOptions } from "typeorm"

import { ConnectionOptions } from "typeorm"

/* eslint-disable prettier/prettier */
const config: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    // autoLoadEntities: true,
    synchronize: false,
    // retryDelay: 3000,
    // retryAttempts: 10,
}

export = config