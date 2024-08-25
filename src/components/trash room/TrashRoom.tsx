import { Button, Card, CardContent, IconButton, Snackbar, Alert } from "@mui/material";
import WritingContainer from "./components/WritingContainer";
import { useState } from "react";
import Draggable from "react-draggable";
import Confetti from 'react-confetti';

const encouragementMessages = [
    { id: 0, message: "Letting go of negativity brings a wave of calm to your mind. 🌊" },
    { id: 1, message: "Each thought released is a step closer to inner peace. 🕊️" },
    { id: 2, message: "Feel the serenity wash over you as you free your mind. 💧" },
    { id: 3, message: "Clearing your mind makes room for tranquility and joy. 🌟" },
    { id: 4, message: "With every negative thought erased, peace fills the space. ✨" },
    { id: 5, message: "Embrace the calm that comes after releasing your worries. 🌿" },
    { id: 6, message: "As your mind clears, serenity and clarity begin to bloom. 🌸" },
    { id: 7, message: "Releasing stress opens the door to a peaceful mind. 🚪" },
    { id: 8, message: "Let the weight lift off your shoulders, making way for calm. 🌈" },
    { id: 9, message: "Feel the lightness of your mind as serenity settles in. 🌞" },
    { id: 10, message: "A clear mind brings a gentle breeze of peace. 🍃" },
    { id: 11, message: "Freeing yourself from negativity opens up space for tranquility. 🧘‍♀️" },
    { id: 12, message: "Each release of tension brings you closer to inner calm. 🕊️" },
    { id: 13, message: "As negativity fades, serenity flows in effortlessly. 💫" },
    { id: 14, message: "Allow your thoughts to drift away, making room for peace. 🌌" },
    { id: 15, message: "With each negative thought you let go, your mind becomes clearer. 🌟" },
    { id: 16, message: "Embrace the quiet and calm that follows a mind set free. 🌙" },
    { id: 17, message: "Clearing away stress reveals a path to tranquility. 🌻" },
    { id: 18, message: "Feel the ease and serenity as you release what's weighing you down. 🌺" },
    { id: 19, message: "Letting go of worries brings a refreshing sense of calm. 🍃" },
    { id: 20, message: "Every negative thought released is a victory for your peace. 🏆" },
    { id: 21, message: "As your mind becomes clear, serenity fills every corner. 🕯️" },
    { id: 22, message: "Feel the tranquility that follows after releasing your fears. 🏖️" },
    { id: 23, message: "Each moment of release brings you closer to a serene state. 🌼" },
    { id: 24, message: "Let the calm envelop you as negativity fades away. 🌺" },
    { id: 25, message: "A serene mind blossoms when negativity is cleared. 🌹" },
    { id: 26, message: "Embrace the lightness and peace that comes from letting go. 🌟" },
    { id: 27, message: "Feel the serenity settle in as you let go of stress. 🍂" },
    { id: 28, message: "Each breath of calm air refreshes your mind. 🌬️" },
    { id: 29, message: "Releasing tension allows tranquility to flow naturally. 🌿" },
    { id: 30, message: "As you let go of the old, serenity fills the new space. 🌅" },
    { id: 31, message: "Experience the soothing calm as negative thoughts drift away. 💤" },
    { id: 32, message: "Allow peace to fill the void left by negativity. 🌌" },
    { id: 33, message: "Let your mind bask in the calm after releasing worries. 🌠" },
    { id: 34, message: "Each moment of release brings a wave of serenity. 🌊" },
    { id: 35, message: "Feel the calm embrace you as stress melts away. 🍃" },
    { id: 36, message: "A serene mind is a peaceful mind, free from negativity. 🌈" },
    { id: 37, message: "Every step toward releasing negativity brings more calm. 🕊️" },
    { id: 38, message: "Feel the tranquility take hold as you let go of stress. 🌙" },
    { id: 39, message: "Letting go of negativity invites a gentle peace into your mind. 🌸" }
];


function TrashRoom(): JSX.Element {
    const [showThoughtContainer, setShowThoughtContainer] = useState<boolean>(false);
    const [showConfetti, setShowConfetti] = useState<boolean>(false);
    const [thoughts, setThoughts] = useState<string[]>([]);
    const [showSnackbar, setShowSnackbar] = useState<boolean>(false);
    const [snackbarMessage, setSnackbarMessage] = useState<string>('');
    
    const thoughtCards: Array<JSX.Element> = thoughts.map((thought) => {
        return (
            <Draggable key={thought}>
                <Card sx={{ borderRadius: 3, boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)', position: 'relative', zIndex: 2, }}>
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

    function applySnackbarOperations() {
        const noOfMessages = encouragementMessages.length
        const messageId = Math.floor(Math.random() * noOfMessages);
        const messageContent = encouragementMessages[messageId].message;

        setShowSnackbar(true);
        setSnackbarMessage(messageContent);
    }

    function deleteThought(thoughtToBeDeleted: string): void {
        const updatedArray = thoughts.filter((thought) => {
            return thought !== thoughtToBeDeleted;
        });
        setThoughts(updatedArray);
        applySnackbarOperations()
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
        applySnackbarOperations()
        celebrateUsingConfetti();
    }

    function handleClose() {
        setShowSnackbar(false)
    }

    function celebrateUsingConfetti() {
        setShowConfetti(true);
        setTimeout(() => {
            setShowConfetti(false);
        }, 1500);
    }

    return (
        <>
            { showSnackbar ? 
                <Snackbar open={showSnackbar} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'right'}} >
                    <Alert
                        severity="success"
                        variant="filled"
                        icon={false}
                        sx={{ width: '100%', backgroundColor: '#3ebf2a' }}
                    >
                        {snackbarMessage}
                    </Alert>
                </Snackbar> 
            : <></>}
            { !showThoughtContainer ? thoughtCards : <></> }
            { (thoughts.length > 0 && !showThoughtContainer) ? <Button sx={{ margin: 2, textTransform: 'none', borderRadius: '10px', position: 'relative', zIndex: 2, }} onClick={deleteAllThoughts} color="success">Ease my mind 🌿</Button> : <></> }
            { !showThoughtContainer ? <Button sx={{ margin: 2, textTransform: 'none', borderRadius: '10px', position: 'relative', zIndex: 2, }} variant="contained" onClick={showField}>I want to share something ✍️</Button> : <></> }
            { showThoughtContainer ? <WritingContainer closeWritingContainer={closeWritingContainer} processNewThought={processNewThought} /> : <></> }
            { <Confetti recycle={showConfetti} /> }
        </>
    );
}

export default TrashRoom;