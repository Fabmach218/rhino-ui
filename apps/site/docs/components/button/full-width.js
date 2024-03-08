import { Box } from "@rhino-ui/components/src/components/box/box";
import { Button } from "@rhino-ui/components/src/components/button/button";

export default function FullWidth() {
    return (
        <Box gap="md">
            <Button fullWidth>Full Width</Button>
            <Button fullWidth isOutlined>
                Full Width
            </Button>
        </Box>
    )
}