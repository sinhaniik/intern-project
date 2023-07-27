"use client"
import styles from "./card.module.css"

const CardSection = () => {
    return (
        <div className="container text-xl">
           <h1 className="mt-1 mb-6 text-center text-4xl md:text-4xl font-sans font-semibold text-gray-900 leading-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                   Use AI to handle workflows in your chat platform
                </h1>
            <div className={`flex mb-4 `}>
                <div className={`flex-1 ${styles.bg} border-2 h-52 mr-4 rounded-3xl pl-4 pt-2 w-80`}>
                    <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">ask
                        questions</h1>
                    <p className="text-xs">To assist with managing the development, testing, and
                        deployment process, ask it questions or issue instructions.
                        With a single command, you may run a series of tests or install a
                        new version of a programme in a particular setting.</p>
                </div>
                <div className={`flex-1 ${styles.bg} border-2 h-52 rounded-3xl pl-4 pt-2`}>
                    <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">execute</h1>
                    <p className="text-xs">
                        with a single command , you may run a series of tests or install a new version of a programme in
                        a particular setting </p>
                </div>
            </div>

            <div className="flex mb-4">
                <div className={`flex-1 ${styles.bg} border-2 h-52 rounded-3xl pl-4 pt-2`}>
                    <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">fixed
                        security concerns more quickly using generated code recommendations</h1>
                    <p className="text-xs">
                        with the aid of AI, recognise any security risk and swiftly and effectively fix it.
                        granting developer the freedom they require to protect their work frequently and early
                    </p>
                </div>
            </div>
        </div>
    );
};
export default CardSection