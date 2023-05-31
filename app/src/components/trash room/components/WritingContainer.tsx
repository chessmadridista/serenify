import { Check, Close } from "@mui/icons-material";
import { Card, CardContent, IconButton, Input, InputLabel } from "@mui/material";

function WritingContainer(): JSX.Element {
    return (
        <Card>
            <CardContent>
                <InputLabel htmlFor="new-thought">Your thought</InputLabel>
                <Input id="new-thought" />
                <IconButton>
                    <Close />
                </IconButton>
                <IconButton>
                    <Check />
                </IconButton>
            </CardContent>
        </Card>
    );
}

export default WritingContainer;