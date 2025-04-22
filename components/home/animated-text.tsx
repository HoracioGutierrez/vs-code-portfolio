"use client";
import React, { useEffect, useRef, useState } from "react";
import { Easing, motion } from "framer-motion";

interface TextWriterProps {
    text: string;
    delay?: number;
    className?: string;
    cursorColor?: string;
    cursorWidth?: string;
    cursorStyle?: string;
    eraseOnComplete?: boolean;
    eraseDelay?: number;
    loop?: boolean;
    onComplete?: () => void;
}

const TextWriter: React.FC<TextWriterProps> = ({
    text,
    delay = 0.05,
    className = "",
    cursorColor = "#000",
    cursorWidth = "2px",
    cursorStyle = "solid",
    eraseOnComplete = false,
    eraseDelay = 2000,
    loop = false,
    onComplete,
}) => {
    const [displayText, setDisplayText] = useState("");
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        let currentIndex = 0;
        let animationCompleted = false;

        const writeText = () => {
            if (currentIndex <= text.length) {
                setDisplayText(text.slice(0, currentIndex));
                currentIndex++;
                timeoutId = setTimeout(writeText, delay * 1000);
            } else {

                if (!eraseOnComplete && !loop && onComplete && !animationCompleted) {
                    animationCompleted = true;
                    onComplete();
                }

                if (eraseOnComplete || loop) {
                    timeoutId = setTimeout(eraseText, eraseDelay);
                }
            }
        };

        const eraseText = () => {
            if (currentIndex > 0) {
                currentIndex--;
                setDisplayText(text.slice(0, currentIndex));
                timeoutId = setTimeout(eraseText, delay * 1000);
            } else {
                if (loop) {
                    if (onComplete && !animationCompleted) {
                        animationCompleted = true;
                        onComplete();
                    }
                    animationCompleted = false;
                    timeoutId = setTimeout(writeText, delay * 1000);
                } else {
                    if (onComplete && !animationCompleted) {
                        animationCompleted = true;
                        onComplete();
                    }
                }
            }
        };

        writeText();

        return () => clearTimeout(timeoutId);
    }, [text, delay, eraseOnComplete, eraseDelay, loop, onComplete]);

    return (
        <span className={`inline-flex items-center ${className} text-xl lg:text-3xl text-accent-1 font-bold`}>
            <span ref={textRef}>{displayText}</span>
            <motion.span
                style={{
                    width: cursorWidth,
                    height: "1em",
                    backgroundColor: cursorColor,
                    display: "inline-block",
                    borderStyle: cursorStyle,
                    marginLeft: "1px",
                }}
                animate={{ opacity: [1, 0] }}
                transition={{
                    repeat: Infinity,
                }}
            />
        </span>
    );
};

export default TextWriter;