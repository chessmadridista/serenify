import { Check, Close } from "@mui/icons-material";
import { Card, CardContent, IconButton, Input, InputLabel } from "@mui/material";

interface WritingContainerProps{
    closeWritingContainer: () => void;
    processNewThought: () => void;
}

function WritingContainer({ closeWritingContainer, processNewThought }: WritingContainerProps): JSX.Element {
    return (
        <Card>
            <CardContent>
                <InputLabel htmlFor="new-thought">Your thought</InputLabel>
                <Input id="new-thought" />
                <IconButton onClick={closeWritingContainer}>
                    <Close />
                </IconButton>
                <IconButton onClick={processNewThought}>
                    <Check />
                </IconButton>
            </CardContent>
        </Card>
    );
}

export default WritingContainer;