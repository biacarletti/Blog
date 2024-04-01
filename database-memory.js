import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #posts = new Map()

    list(search) {

        return Array.from( this.#posts.entries()).map((postArray) => {
            const id = postArray[0]
            const data = postArray[1]

            return {
                id,
                ...data,
            }
        })
        .filter(post => {
            if(search){
                return post.title.includes(search)
            }
            return true
        })
    }

    create(post) {

        const postId = randomUUID()
        const mimeType = post.attachment_uri.split('.').at(-1)

        post.type =
            (['mp4', 'mkv', 'avi'].includes(mimeType)) ? 'video/' + mimeType
                : (['jpeg', 'jpg', 'png'].includes(mimeType)) ? 'image/' + mimeType
                    : 'none'

        this.#posts.set(postId, post)
    }

    update(id, post) {
        this.#posts.set(id, post)
    }

    delete(id) {
        this.#posts.delete(id)
    }
}