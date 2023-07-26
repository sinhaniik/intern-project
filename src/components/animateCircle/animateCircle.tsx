import {motion, } from "framer-motion";

type animateProps = {
    h1 : string
}

const AnimateCircle = () => {
    return (
        <svg width="400" height="400">
            <circle
                r="190"
                cx="200"
                cy="200"
                stroke="green"
                strokeWidth="6"
                fill="transparent"
                transform="rotate(-90 200 200)"
            />
        </svg>
    );
};
export default AnimateCircle;
