import { sendDonate } from "../services/services.js";

export async function donate(ctx) {
    let postId = ctx.params.id
    let data = {
        postId
    }
    const res = await sendDonate(data)
    ctx.page.redirect(`/details/${ctx.params.id}`)
}