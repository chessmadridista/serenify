import { Button, Card, CardContent, Input } from "@mui/material";
import WritingContainer from "./components/WritingContainer";
import { useState } from "react";

function TrashRoom(): JSX.Element {
    const [showThoughtContainer, setShowThoughtContainer] = useState(false);
    const thoughts: Array<string> = [];
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

    function processNewThought(): void {
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