import { dellById } from "../services/services.js";

export async function deleteItam(ctx) {
    const confirmed = confirm('Are you sure?');
    if (confirmed) {
        await dellById(ctx.params.id);
        ctx.page.redirect(`/dashboard`)
    }
}