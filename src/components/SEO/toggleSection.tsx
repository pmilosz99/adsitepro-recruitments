import { useState } from "react";

interface IToggleSection {
    title: string;
    text: string;
}

export function ToggleSection({ title, text }: IToggleSection) {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const toggle = () => setIsExpanded((prevValue) => !prevValue);
  
    const textStyle = !isExpanded ? 'line-clamp-2' : '';
    const buttonText = isExpanded ? 'Zwiń' : 'Rozwiń';
  
    return (
        <div>
            <h3 className="font-bold text-xl mb-2">{title}</h3>
            <p className={`text-sm my-4 ${textStyle}`}>{text}</p>
            <button className="underline underline-offset-8" onClick={toggle}>
                {buttonText} &darr;
            </button>
        </div>
    );
}