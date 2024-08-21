import { Button, Card, CardContent, IconButton } from "@mui/material";
import WritingContainer from "./components/WritingContainer";
import { useState } from "react";
import Draggable from "react-draggable";
import Confetti from 'react-confetti';

function TrashRoom(): JSX.Element {
    const [showThoughtContainer, setShowThoughtContainer] = useState<boolean>(false);
    const [showConfetti, setShowConfetti] = useState<boolean>(false);
    const [thoughts, setThoughts] = useState<string[]>([]);
    const thoughtCards: Array<JSX.Element> = thoughts.map((thought) => {
        return (
            <Draggable key={thought}>
                <Card sx={{ borderRadius: 3, boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)' }}>
                    <CardContent>
                        { thought }
                        <IconButton color="error" onClick={() => {
                                deleteThought(thought);
                            }}
                            onTouchEnd={() => {
                                deleteThought(thought);
                            }}
                            >
                            🌿
                        </IconButton>
                    </CardContent>
                </Card>
            </Draggable>
        );
    });

    function deleteThought(thoughtToBeDeleted: string): void {
        const updatedArray = thoughts.filter((thought) => {
            return thought !== thoughtToBeDeleted;
        });
        setThoughts(updatedArray);
        celebrateUsingConfetti();
    }

    function showField(): void {
        setShowThoughtContainer(true);
    }

    function closeWritingContainer(): void {
        setShowThoughtContainer(false);
    }

    function processNewThought(thought: string): void {
        const updatedThoughts = [...thoughts, thought];
        setThoughts(updatedThoughts);
        closeWritingContainer();
    }

    function deleteAllThoughts(): void {
        setThoughts([]);
        celebrateUsingConfetti();
    }

    function celebrateUsingConfetti() {
        setShowConfetti(true);
        setTimeout(() => {
            setShowConfetti(false);
        }, 1500);
    }

    return (
        <>
            { !showThoughtContainer ? thoughtCards : <></> }
            { (thoughts.length > 0 && !showThoughtContainer) ? <Button sx={{ margin: 2, textTransform: 'none', borderRadius: '10px' }} onClick={deleteAllThoughts} color="success">Ease my mind</Button> : <></> }
            { !showThoughtContainer ? <Button sx={{ margin: 2, textTransform: 'none', borderRadius: '10px' }} variant="contained" onClick={showField}>I want to share something</Button> : <></> }
            { showThoughtContainer ? <WritingContainer closeWritingContainer={closeWritingContainer} processNewThought={processNewThought} /> : <></> }
            { <Confetti recycle={showConfetti} /> }
        </>
    );
}

export default TrashRoom;