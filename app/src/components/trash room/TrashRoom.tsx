import { Button, Card, CardContent, IconButton } from "@mui/material";
import WritingContainer from "./components/WritingContainer";
import { useState } from "react";
import { Delete } from "@mui/icons-material";
import Draggable from "react-draggable";

function TrashRoom(): JSX.Element {
    const [showThoughtContainer, setShowThoughtContainer] = useState<boolean>(false);
    const [thoughts, setThoughts] = useState<string[]>([]);
    const thoughtCards: Array<JSX.Element> = thoughts.map((thought) => {
        return (
            <Draggable>
                <Card>
                    <CardContent>
                        { thought }
                        <IconButton color="error" onClick={() => deleteThought(thought)}>
                            <Delete />
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
    }

    return (
        <>
            { thoughtCards }
            { (thoughts.length > 0 && !showThoughtContainer) ? <Button sx={{ margin: 2 }} onClick={deleteAllThoughts} color="error">Delete all thoughts</Button> : <></> }
            <Button sx={{ margin: 2 }} variant="contained" onClick={showField}>Write a new thought</Button>
            { showThoughtContainer ? <WritingContainer closeWritingContainer={closeWritingContainer} processNewThought={processNewThought} /> : <></> }
        </>
    );
}

export default TrashRoom;