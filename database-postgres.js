import { randomUUID } from "node:crypto"
import { sql } from "./db.js"

export class DatabasePostgres {
    async list(search) {
        let post

        if (search) {
            post = await sql`select * from posts where title ilike ${'%' + search + '%'}`
        } else {
            post = await sql`select * from posts`
        }
        return post
    }

    async create(post) {
        const postId = randomUUID()
        const { title, textBox, attachment_uri } = post
        const mimeType = post.attachment_uri.split('.').at(-1)
        const created_at = new Date()

        const type =
            (['mp4', 'mkv', 'avi'].includes(mimeType)) ? 'video/' + mimeType
                : (['jpeg', 'jpg', 'png'].includes(mimeType)) ? 'image/' + mimeType
                    : 'none';


        console.log(title, textBox, attachment_uri)
        await sql`insert into posts (id, title, textbox, attachment_uri, type, created_at) 
            VALUES (${postId}::uuid, ${title}, ${textBox}, ${attachment_uri}, ${type}, ${created_at})`
    }

    async update(id, post) {
        const { title, textBox, attachment_uri } = post

        await sql`update posts set title = ${title}, textBox =  ${textBox}, attachment_uri= ${attachment_uri} WHERE id = ${id}`
    }

    async delete(id) {
        await sql `delete from posts where id = ${id}`
    }
}