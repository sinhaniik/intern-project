import { motion } from "framer-motion";

const AnimateCircle = () => {
    return (
        <svg width="350" height="350">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(160, 86, 247, 1)"/>
                    <stop offset="100%" stopColor="rgba(32, 193, 228, 1)"/>
                </linearGradient>
            </defs>
            <motion.ellipse
                initial={{scale: 0}}
                animate={{scale: 1, rotateZ: 180}}
                transition={{duration: 7, repeat: 2}}
                rx="130"
                ry="100"
                cx="150"
                cy="150"
                stroke="url(#gradient)"
                strokeWidth="6"
                fill="transparent"
            />

            <motion.text
                initial={{scale: 0, opacity: 1}}
                animate={{scale: 1, opacity: 0}}
                transition={{delay: 1, duration: 3}}
                x="100"
                y="160"
                fill="#fff"
                style={{fontSize: "24px"}}
            >
                Code Doctor
            </motion.text>

            <motion.text
                initial={{scale: 0, opacity: 1}}
                animate={{scale: 1, opacity: 0}}
                transition={{delay: 4, duration: 3}}
                x="50"
                y="160"
                fill="#fff"
                style={{fontSize: "20px"}}
            >
                What can i help you with??
            </motion.text>

            <motion.text
                initial={{scale: 0, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{delay: 7, duration: 3}}
                x="50"
                y="160"
                fill="#fff"
                style={{fontSize: "17px"}}
            >
                How can i help
                you with
            </motion.text>
        </svg>
    );
};

export default AnimateCircle;