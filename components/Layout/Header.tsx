import styles from './Header.module.scss'
import Link from 'next/link'

const Header = () => {
return (<>
<div className={styles.headerContainer}>
    <div className={styles.headerText}>
        <Link href='/'className={styles.headerLink}>
            Madeline Tennier
        </Link>
    </div>
    <div className={styles.subHeaderText}>
        <span className={styles.subHeaderItem}>
            <a target='_blank' href='//www.github.com/mtennier' rel='noreferrer' className={styles.subHeaderLink}>
            github
            </a>
        </span>
        <span className={styles.subHeaderItem}>
            <Link href='/contact-me' className={styles.subHeaderLink}>
            contact
            </Link>
        </span>
        <span className={styles.subHeaderItem}>
            <a href={'/resume/resume.pdf'} download='madeline_tennier_resume' className={styles.subHeaderLink}>
            resume
            </a>
        </span>
        <span className={styles.subHeaderItem}>
            personal work
        </span>
    </div>
</div>
</>)
}

export default Header;