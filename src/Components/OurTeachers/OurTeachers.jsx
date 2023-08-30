import React from 'react';
import style from './OurTeachers.module.css'
const OurTeachers = () => {
    return (
        <div className={style.OurTeachers}>
            <h2 className={style.nameSector}>Наши педагоги</h2>
            <div className={style.cardContainer}>

                <div className={style.cardContainerFirst}>
                    <div>
                        <div className={style.img}></div>
                        <p className={style.textFio}>Ф.И.О</p>
                        <p className={style.textDescription}>Текст текст текст текстТекст текст текст текстТекст текст текст текстт текст текст текстТкст текст текстТекст текст текст текстт текст текс</p>
                    </div>
                </div>
                <div className={style.cardContainerTwo}>
                    <div  className={style.card}>
                        <div className={style.img}></div>
                        <p className={style.textFio}>Ф.И.О</p>
                        <p className={style.textDescription}>Текст текст текст текстТекст текст текст текстТекст текст текст текстт текст текст текстТкст текст текстТекст текст текст текстт текст текс</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurTeachers;