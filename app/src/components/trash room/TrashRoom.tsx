import { Button, Card, CardContent, IconButton } from "@mui/material";
import WritingContainer from "./components/WritingContainer";
import { useState } from "react";
import { Delete } from "@mui/icons-material";

function TrashRoom(): JSX.Element {
    const [showThoughtContainer, setShowThoughtContainer] = useState<boolean>(false);
    const [thoughts, setThoughts] = useState<string[]>([]);
    const thoughtCards: Array<JSX.Element> = thoughts.map((thought) => {
        return (
            <Card>
                <CardContent>
                    { thought }
                    <IconButton color="error" onClick={() => deleteThought(thought)}>
                        <Delete />
                    </IconButton>
                </CardContent>
            </Card>
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

    return (
        <>
            { thoughtCards }
            <Button onClick={showField}>Write a new thought</Button>
            { showThoughtContainer ? <WritingContainer closeWritingContainer={closeWritingContainer} processNewThought={processNewThought} /> : <></> }
        </>
    );
}

export default TrashRoom;