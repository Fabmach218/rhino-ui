import { Box } from "@rhino-ui/components/src/components/box/box";
import { Icon } from "@rhino-ui/components/src/components/icon/icon";

export default function Size() {
    return (
        <>
            <Box direction="row" gap="sm" margin="0 0 md 0" fontSize="xs">
               <Icon name="remove" color="danger-500" />
               <Box>Size is set by the Icon's parent</Box>
            </Box>
            <Box direction="row" fontSize="xl" gap="sm">
                <Icon name="star" color="warning-400" />
                <Box>Size is set by the Icon's parent</Box>
            </Box>
        </>
    )
}