import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllForHome } from '../service/services.js';

const eachGame = (e) => html`
<div class="game">
    <div class="image-wrap">
        <img src="${e.imageUrl}">
    </div>
    <h3>${e.title}</h3>
    <div class="rating">
        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
    </div>
    <div class="data-buttons">
        <a href="/details/${e._id}" class="btn details-btn">Details</a>
    </div>
</div>
`

const homeTemplate = (data) => html`
<section id="welcome-world">

    <div class="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
    </div>
    <img src="./images/four_slider_img01.png" alt="hero">

    <div id="home-page">
        <h1>Latest Games</h1>
        ${data.length > 0 ? data.map((e) => eachGame(e)) 
            : html`<p class="no-articles">No games yet</p>`}
    </div>
</section>
`

export async function homeView(ctx) {
    const data = await getAllForHome();
    ctx.render(homeTemplate(data))
}