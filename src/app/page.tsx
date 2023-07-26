"use client"
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import MainBody from "@/components/body/Main_body";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Navbar />
            <MainBody/>
            <Footer/>
        </main>
    )
};

