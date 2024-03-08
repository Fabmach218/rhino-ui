import { Box } from "@rhino-ui/components/src/components/box/box";

export default function FocusStates() {
    return (
        <Box gap="md">
            <Box
                as="input"
                type="text"
                padding="md"
                background="white"
                color="dark"
                shadow="xs"
                borderWidth="xs"
                borderColor="grey-lighter"
                radius="md"
                style={{ outline: 'none' }}
                focus={{
                    borderColor: 'grey',
                }}
                placeholder="useful for form inputs..."
            />
            <Box
                radius="md"
                shadow="xs"
                padding="md"
                focus={{
                    shadow: 'lg',
                }}
                tabIndex="0"
                style={{ outline: 'none' }}
            >
                Card focus effect
            </Box>
        </Box>
    )
}