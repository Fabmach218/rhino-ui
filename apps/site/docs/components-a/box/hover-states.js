import { Box } from '@rhino-ui/components/src/components/box/box';

export default function HoverStates() {
    return (
        <Box gap="md">
            <Box
                padding="md"
                background="primary"
                color="white"
                shadow="xs"
                hover={{
                    background: 'primary-dark',
                }}
                cursor="pointer"
            >
                simple background color effect
            </Box>
            <Box
                padding="md"
                background="white"
                color="primary"
                radius="md"
                borderWidth="xs"
                borderColor="primary"
                fontWeight="bold"
                direction="row"
                justifyContent="center"
                hover={{
                    background: 'primary',
                    color: 'white',
                }}
                cursor="pointer"
            >
                an outlined button
            </Box>
            <Box
                padding="md"
                radius="md"
                background="white"
                shadow="sm"
                borderWidth="xs"
                borderColor="grey-lightest"
                hover={{
                    shadow: 'lg',
                }}
                cursor="grab"
            >
                Card shadow effect
            </Box>
            <Box
                padding="md"
                background="white"
                hover={{
                    fontSize: 'xl',
                }}
            >
                growing text
            </Box>
            <Box
                padding="md"
                background="white"
                borderWidth="xs"
                borderColor="transparent"
                hover={{
                    borderWidth: 'xs',
                    borderColor: 'primary-500',
                }}
            >
                adding a border
            </Box>
            <Box
                padding="md"
                background="white"
                borderColor="grey-light"
                borderWidth="xs"
                hover={{
                    borderWidth: 'md',
                }}
            >
                changing a border width
            </Box>
        </Box>
    )
}