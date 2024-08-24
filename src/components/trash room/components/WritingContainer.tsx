import { Check, Close } from "@mui/icons-material";
import { Card, CardContent, IconButton, TextField } from "@mui/material";
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
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        if (event.key === "Enter" && !event.shiftKey && !isTouchDevice) {
            processNewThought(newThought);
        } else if (event.key === "Escape") {
            closeWritingContainer();
        }
    }

    return (
        <Card sx={{ borderRadius: 3, 
            minWidth: {
                xs: '80vw',
                sm: '70vw',
                md: '60vw',
                lg: '60vw',
                xl: '50vw',
            },
         }}>
            <CardContent>
                <TextField
                    inputRef={newThoughtRef}
                    id="new-thought"
                    label="Please share whatever is bothering you 😌"
                    multiline
                    rows={4}
                    value={newThought}
                    onChange={updateNewThought}
                    onKeyDown={processPressedKey}
                    variant="outlined"
                    fullWidth
                />
                <IconButton onClick={closeWritingContainer} color='error'>
                    <Close />
                </IconButton>
                <IconButton onClick={() => processNewThought(newThought)} color='success'>
                    <Check />
                </IconButton>
            </CardContent>
        </Card>
    );
}

export default WritingContainer;