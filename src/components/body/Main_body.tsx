"use client"
import styles from "./styles.module.css"
import JoinWaitingListInput from "@/components/waitingList/joinWaitingListInput";
import Image from "next/image";
import AnimateCircle from "@/components/animateCircle/animateCircle";
import CardSection from "@/components/card-section/card-section";


const MainBody = () => {
    return (
        <>
            <div>
                <h1 className=" mt-1 mb-2 text-4xl md:text-4xl font-sans font-semibold text-gray-900 leading-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                    Integrate AI Throughout Your Workflow
                </h1>
            </div>

            <div>
                <h1 className=" mt-1 mb-2 text-4xl md:text-4xl fontABeeZee font-semibold text-gray-900 leading-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                    Code Doctor
                </h1>
            </div>

            <div>
                <p className={`font-sans text-amber-100  ${styles.main_para}`}>Make processes where AI collaborates with
                    your team throughout the whole development process.</p>
            </div>

            <JoinWaitingListInput/>
            <Image src="/main_body_img.png" height={800} width={1400} alt="body_image"/>

            <div>
                <h1 className=" mt-1 mb-2 text-4xl md:text-4xl font-sans font-semibold text-gray-900 leading-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                    Integrate AI Throughout Your Workflow
                </h1>
            </div>

            <div>
                <p className={`font-sans text-amber-100  ${styles.main_para}`}>Make processes where AI collaborates with
                    your team throughout the whole development process.</p>
            </div>
            <AnimateCircle/>


            <CardSection />
            <h1 className=""></h1>

              <div>
                <h1 className="mt-1 mb-2 text-4xl md:text-4xl font-sans font-semibold text-gray-900 leading-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                   Automate all aspects of your delivery process with AI support.
                </h1>
            </div>

            <p>Get Early Access</p>
            <JoinWaitingListInput/>
        </>
    )
};

export default MainBody