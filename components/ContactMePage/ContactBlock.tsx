import styles from './ContactBlock.module.scss'
import {Divider} from 'antd'
const ContactBlock = () => {
    return (
        <div className = {styles.contactContainer}>
            <div className={styles.contactHeaderBlock}>
                <div className= {styles.contactHeaderText}>
                    <h1>
                        Contact Me
                    </h1>
                </div>
            </div>
            <div className={styles.contactInfoBlock}>
                <div className = {styles.contactInfoText}>
                     <p>
                        Thank you for wanting to get in contact with me!
                     </p>
                     <br />
                     <p>
                        My LinkedIn can be found <a target='_blank' href='//www.linkedin.com/in/madeline-tennier-067392233' rel='noreferrer'>here</a>.
                     </p>
                     <br />
                     <p>
                        You can also contact me directly at madeline.tennier@gmail.com.
                     </p>
                     <br />
                     <p>
                        If youre looking for my resume, you can find it in the header above - 
                        my github is also there!
                     </p>
                     <br />
                     <p>
                        
                     </p>
                </div>
            </div>
        </div>

    )


}

export default ContactBlock