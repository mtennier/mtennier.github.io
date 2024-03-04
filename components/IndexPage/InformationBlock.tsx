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
                Hi! :)
            </p>
            <br />
            <p>
                My name is Maddie and I'm a software engineer.
            </p>
            <p>
                I'm a dual citizen: I was born in the United States to Canadian parents.
            </p>
            <br />
            <p>
                I grew up in and went to high school in upstate New York. I first learnt to code there when I was 15 - 
                I learnt basic coding concepts in C++ and also doing a bit of basic web development. 
                I found I loved to code, had a bit of a knack for it, and decided to pursue it as a career!
            </p>
            <br />
            <p>
                After graduating high school, I went to the west coast of Canada to get my computer
                science degree at the University of Victoria. I did a lot of work in different areas:
                operating systems, databases, networking, and data structures. I worked in a lot of different
                languages too - Python, Java, and C mostly.
            </p>
            <br />
            <p>
                During my time in university, I worked multiple coops. One I worked with
                a proof of concept for a nature sanctuary. I wrote code on an ESP8266 
                to allow it to act as a trail counter, using the MAC addresses of cell
                phone ping requests to count how many people are in a given area.
                My other coop I did full stack web development. I mostly focused on the front end, updating
                our customer-facing website using Next.js, but I also did work on the back end using GO
                and database work too using SQL.
            </p>
            <br />
            <p>
                While taking classes, I worked as a teaching assistant for the introductory coding class
                at UVIC, CSC110. I taught students who had never coded before how to code, how basic
                coding concepts such as loops and conditionals worked, invigilated exams, 
                and also marked hundreds homeworks and exam submissions in 1-2 days to meet deadlines. 
                I also served as an executive member for a club for women in STEM - My responsibilites were 
                to host weekly meetings, and I also met with profs to create review session material, and
                also lead review sessions in C, Java, and Python.
            </p>
            <br />
            <p>
                In my free time, I love to knit! I've knit scarves, sweaters, and beanies, and I love
                to do cables! I also love to lift weights - I've been doing it for about 2 years now, 
                and I love the way it makes me feel!
            </p>
            </div>
        </div>
    )
}

export default InformationBlock