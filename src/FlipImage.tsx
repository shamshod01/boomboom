// src/FlipImage.tsx
import React, { useState, useEffect } from 'react';
import './FlipImage.css';
interface FlipImageProps {
    frontImage: string;
    backImage: string;
}

const FlipImage: React.FC<FlipImageProps> = ({ frontImage, backImage }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [flipSound, setFlipSound] = useState<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Initialize the audio element once the component mounts
        const audio = new Audio('/sound.mp3');
        setFlipSound(audio);
    }, []);

    const handleFlip = () => {
        if (flipSound) {
            flipSound.play();
        }
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`flip-container ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="flipper">
                <img className="front" src={frontImage} alt="Front" />
                <img className="back" src={backImage} alt="Back" />
            </div>
        </div>
    );
};

export default FlipImage;
