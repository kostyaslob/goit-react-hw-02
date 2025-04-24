import css from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css.container}>
            <div className={css.description}>
                <img className={css.avatar}
                    src={image}
                    alt={name}
                    width="200"
                />
                <p className={css.name}>{name}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.statsList}>
                <li className={css.statsItems}>
                    <span className={css.statsInfo}>Followers</span>
                    <span className={css.statsNumber}>{stats.followers}</span>
                </li>
                <li className={css.statsItems}>
                    <span className={css.statsInfo}>Views</span>
                    <span className={css.statsNumber}>{stats.views}</span>
                </li>
                <li className={css.statsItems}>
                    <span className={css.statsInfo}>Likes</span>
                    <span className={css.statsNumber}>{stats.likes}</span>
                </li>
            </ul>
        </div> 
    );
};