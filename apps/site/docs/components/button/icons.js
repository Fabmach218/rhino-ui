import { Box } from "@rhino-ui/components/src/components/box/box";
import { Button } from "@rhino-ui/components/src/components/button/button";

export default function Icons() {
    return (
        <>
            <Box display="flex" direction="row" gap="md">
                <Button variant="primary" iconPrefix="mail">
                    Email
                </Button>
                <Button variant="primary" isOutlined iconSuffix="chat">
                    Chat Now
                </Button>
            </Box>
            <Box display="flex" direction="row" gap="xs" margin="lg 0 0 0">
                <Button
                    onClick={() => alert('clicked')}
                    variant="light"
                    iconPrefix="caret-left"
                >
                    Prev
                </Button>
                <Button
                    onClick={() => alert('clicked')}
                    variant="light"
                    iconSuffix="caret-right"
                >
                    Next
                </Button>
            </Box>
        </>
    )
}