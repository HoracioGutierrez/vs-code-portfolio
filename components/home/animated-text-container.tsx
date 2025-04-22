"use client"
import { useEffect, useState } from "react"
import TextWriter from "./animated-text"

function AnimatedTextContainer() {

    const [text, setText] = useState("> Full-stack Developer")
    const [index, setIndex] = useState(0)

    const texts = [
        "> Full-stack Developer",
        "> Web Designer",
        "> Web Development Teacher",
        "> Sova Main"
    ]

    const handleComplete = () => {
        const newIndex = index + 1
        if (newIndex < texts.length) {
            setIndex(newIndex)
            setText(texts[newIndex])
        } else {
            setIndex(0)
            setText(texts[0])
        }
    }

    return (
        <TextWriter
            text={text}
            className="text-md md:text-lg mb-4"
            delay={0.1}
            loop={true}
            onComplete={handleComplete}
            cursorColor="#fff"
            cursorWidth="15px"
        />
    )
}
export default AnimatedTextContainer