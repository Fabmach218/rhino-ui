import { Box } from "@rhino-ui/components/src/components/box/box";
import { Button } from "@rhino-ui/components/src/components/button/button";

export default function Outlined() {
    return (
        <Box alignItems="center" gap="sm" direction="row">
            <Button variant="primary" isOutlined>
                Primary
            </Button>
            <Button variant="success" isOutlined>
                Success
            </Button>
            <Button variant="danger" isOutlined>
                Danger
            </Button>
            <Button variant="light" isOutlined>
                Light
            </Button>
            <Button variant="dark" isOutlined>
                Dark
            </Button>
            <Box background="grey-500" padding="2xs">
                <Button variant="white" isOutlined>
                    White
                </Button>
            </Box>
        </Box>
    )
}