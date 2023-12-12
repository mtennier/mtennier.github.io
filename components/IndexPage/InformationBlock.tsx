import styles from './InformationBlock.module.scss'
import {Divider} from 'antd'

const InformationBlock = () => {

    return (
        <div className={styles.informationContainer}>
            <div className={styles.informationText}>
                <h1 className = {styles.headerText}>
                    About Me
                </h1>
                <Divider style={{paddingBottom:-1, paddingTop:-1}}/>
            <p>
                hi :)
            </p>
            <br />
            <p>
                my name is maddie and i am a software engineer.
            </p>
            <p>
            i'm a dual citizen: i was born in the united states to canadian parents.
            </p>
            <br />
            <p>
                i went to high school in upstate new york. i first learnt to code when i was 15 - i learnt
                basic coding concepts in C++ and also doing a bit of basic web development. i found 
                i loved to code and decided to pursue it as a career!
            </p>
            <br />
            <p>
            after graduating high school, i went to the west coast of Canada to get my computer
            science degree at the University of Victoria.
            </p>
            <br />
            <p>
                during my time there, i worked multiple coops - one working with arduinos, and
                the other doing full-stack web development - front end, back end, and databases.
            </p>
            <br />
            <p>
            while taking classes, i worked as a teaching assistant for the introductory coding class,
            teaching students how to use python. i also served as an executive member for 
            a club for women in STEM - my responsibilites were to host weekly meetings, 
            and i also lead review sessions in C, java, and python.
            </p>
            <br />
            <p>
                in my free time, i love to knit! i've knit scarves, sweaters, and beanies, and i love
                to do cables! i also love to lift weights - i've been doing it for about 2 years now, 
                and i love the way it makes me feel!
            </p>
            </div>
        </div>
    )
}

export default InformationBlock