import { Button, Card, CardContent } from "@mui/material";
import WritingContainer from "./components/WritingContainer";
import { useState } from "react";

function TrashRoom(): JSX.Element {
    const [showThoughtContainer, setShowThoughtContainer] = useState<boolean>(false);
    const [thoughts, setThoughts] = useState<string[]>([]);
    const thoughtCards: Array<JSX.Element> = thoughts.map((thought) => {
        return (
            <Card>
                <CardContent>{ thought }</CardContent>
            </Card>
        );
    });

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