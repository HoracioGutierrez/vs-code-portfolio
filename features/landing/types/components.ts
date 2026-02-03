export interface TextWriterProps {
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