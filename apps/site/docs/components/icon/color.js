import { Box } from "@rhino-ui/components/src/components/box/box";
import { Icon } from "@rhino-ui/components/src/components/icon/icon";

export default function Color() {
    return (
        <>
            <Box direction="row" gap="sm" margin="0 0 md 0">
                <Icon name="remove" color="danger-500" />
                <Box>Color is set at the Icon level</Box>
            </Box>
            <Box direction="row" gap="sm" color="secondary-400">
                <Icon name="book" />
                <Box>Color is set by the Icon's parent</Box>
            </Box>
        </>
    )
}