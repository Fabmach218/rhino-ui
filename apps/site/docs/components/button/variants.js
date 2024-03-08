import { Box } from "@rhino-ui/components/src/components/box/box";
import { Button } from "@rhino-ui/components/src/components/button/button";

export default function Variants() {
    return (
        <Box alignItems="center" gap="sm" direction="row">
            <Button variant="primary">Primary</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>
            <Box background="grey-500" padding="2xs">
                <Button variant="white">White</Button>
            </Box>
        </Box>
    )
}