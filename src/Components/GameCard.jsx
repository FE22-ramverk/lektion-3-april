import styles from './GameCard.module.css';

function GameCard({game}) {
    const {title, url} = game;
    return ( 
        <article className={styles.container+' '+styles.article}>
            <figure style={{backgroundImage: `url(${url})`}}></figure>
            <section>
                <h3 id={styles.title}>{title}</h3>
            </section>
        </article>
     );
}

export default GameCard;