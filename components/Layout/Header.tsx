import styles from './Header.module.scss'

const Header = () => {
return (<>
<div className={styles.headerContainer}>
    <div className={styles.headerText}>
        Madeline Tennier
    </div>
    <div className={styles.subHeaderText}>
        <span className={styles.subHeaderItem}>
            github
        </span>
        <span className={styles.subHeaderItem}>
            contact
        </span>
        <span className={styles.subHeaderItem}>
            personal
        </span>
    </div>
</div>
</>)
}

export default Header;