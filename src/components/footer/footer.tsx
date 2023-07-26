"use client"
import styles from "./Footer.module.css"

const Footer  = () => {
    return(
        <>
            <p className ={`font-sans ${styles.heading_footer}`} >Copyright © 2023 <span className="font-bold">EXOCODE TECHNOLOGIES</span> | All rights reserved</p>
        </>
    )
}

export default Footer