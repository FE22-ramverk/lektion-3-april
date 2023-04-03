function GameCard({game}) {
    const {title, url} = game;
    return ( 
        <article>
            <figure style={{backgroundImage: `url(${url})`}}></figure>
            <section>
                <h3>{title}</h3>
            </section>
        </article>
     );
}

export default GameCard;