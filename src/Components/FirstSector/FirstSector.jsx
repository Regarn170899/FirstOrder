import React from 'react';
import styles from './FirstSector.module.css';
import item1 from "../../assets/img/item1.svg";
import item2 from "../../assets/img/item2.svg";
import item3 from "../../assets/img/item3.svg";
import item4 from "../../assets/img/item4.svg";
import item5 from "../../assets/img/item5.svg";
import item6 from "../../assets/img/item6.svg";
import item7 from "../../assets/img/item7.svg";
import item8 from "../../assets/img/item8.svg";
import "../../App.css"
import AnimationLine from "../AnimationLine/AnimationLine";
const FirstSector = () => {
    return (
        < >
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Кабинет дошкольного
                    развития</h1>
            </div>
            <AnimationLine/>
        </>
    );
};

export default FirstSector;