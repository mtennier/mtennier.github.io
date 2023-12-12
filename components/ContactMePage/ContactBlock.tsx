import styles from './ContactBlock.module.scss'
import {Divider} from 'antd'
const ContactBlock = () => {
    return (
        <div className = {styles.contactContainer}>
            <div className={styles.contactBlock}>
                
                <h1 className={styles.headerText}>
                    Contact Me
                </h1>
                <div className={styles.divider}>
                    <Divider type='vertical' style={{height:500}}/>
                </div>
                <div className={styles.contactTextBlock}>
                    <div className={styles.contactText}>
                    <p>
                        thank you for wanting to get in contact with me!
                    </p>
                    <br />
                    <p>
                        my linkedin can be found <a target='_blank' href='//www.linkedin.com/in/madeline-tennier-067392233' rel='noreferrer'>here.</a>
                    </p>
                    <br />
                    <p>
                        you can also contact me directly at madeline.tennier@gmail.com.
                    </p>
                    <br />
                    </div>
                </div>
            </div>
        </div>

    )


}

export default ContactBlock