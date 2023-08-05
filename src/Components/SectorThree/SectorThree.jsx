import React, {useState} from 'react';
import styles from './SectorThree.module.css';
import InfoContainer from "../InfoContainer/InfoContainer";
import InfoContainerRevers from "../InfoContanerRevers/InfoContainerRevers";


const SectorThree = () => {
    const showContainers={
        item1:true,
        item2:true,
        item3:true,
        item4:true,
    }


    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)

    return (
        <div className={styles.sectorContainer}>
            <InfoContainer show={show1} setShow={setShow1}/>
            <InfoContainerRevers show={show2} setShow={setShow2}/>
            <InfoContainer show={show3} setShow={setShow3}/>
            <InfoContainerRevers show={show4} setShow={setShow4}/>

        </div>
    );
};

export default SectorThree;