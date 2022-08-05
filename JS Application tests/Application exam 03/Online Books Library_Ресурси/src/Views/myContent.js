// import { html } from "../../node_modules/lit-html/lit-html.js";
// import { getPersonalPosts } from "../services/services.js";

// const eachTemplate = (e) => html`
// <li class="otherBooks">
//     <h3>${e.title}</h3>
//     <p>Type: ${e.type}</p>
//     <p class="img"><img src="${e.imageUrl}"></p>
//     <a class="button" href="/details/${e._id}">Details</a>
// </li>
// `

// const myContentTemplate = (data) => html`
// <section id="my-books-page" class="my-books">
//     <h1>My Books</h1>
//     ${data ? html`<ul class="my-books-list">
//         ${data.map((e) => eachTemplate(e))}
//     </ul>` 
//     : html`<p class="no-books">No books in database!</p>`}
// </section>

// `

// export function myContent(ctx) {
//     const data = getPersonalPosts(ctx.params.id)
//     ctx.render(myContentTemplate(data))
// }