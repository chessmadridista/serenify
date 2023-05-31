import { Check, Close } from "@mui/icons-material";
import { Card, CardContent, IconButton, Input, InputLabel } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

interface WritingContainerProps{
    closeWritingContainer: () => void;
    processNewThought: (thought: string) => void;
}

function WritingContainer({ closeWritingContainer, processNewThought }: WritingContainerProps): JSX.Element {
    const [newThought, setNewThought] = useState<string>("");
    const newThoughtRef = useRef<HTMLInputElement | null>(null);
    
    useEffect(() => {
        if (newThoughtRef.current) {
            newThoughtRef.current.focus();
        }
    }, []);

    function updateNewThought(event: React.ChangeEvent<HTMLInputElement>): void {
        setNewThought(event.target.value);   
    }

    function processPressedKey(event: React.KeyboardEvent<HTMLInputElement>): void {
        if (event.key === "Enter") {
            processNewThought(newThought);
        } else if (event.key === "Escape") {
            closeWritingContainer();
        }
    }

    return (
        <Card>
            <CardContent>
                <InputLabel htmlFor="new-thought">Your thought</InputLabel>
                <Input inputRef={newThoughtRef} id="new-thought" value={newThought} onChange={updateNewThought} onKeyDown={processPressedKey} />
                <IconButton onClick={closeWritingContainer}>
                    <Close />
                </IconButton>
                <IconButton onClick={() => processNewThought(newThought)}>
                    <Check />
                </IconButton>
            </CardContent>
        </Card>
    );
}

export default WritingContainer;