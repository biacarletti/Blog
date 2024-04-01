import { sql } from "./db.js";


sql `
CREATE TABLE posts (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    textbox TEXT NOT NULL,
    attachment_uri VARCHAR(255),
    type VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`.then(() => {
    console.log('tabela criada')
})