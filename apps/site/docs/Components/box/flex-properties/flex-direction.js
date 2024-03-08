import { Box } from "@rhino-ui/components/src/components/box/box";

export default function FlexDirection() {
    return (
        <>
            <Box margin="0 0 md 0" fontWeight="bold">
                Row
            </Box>
            <Box gap="md" padding="sm" direction="row">
                <Box flex="auto" background="primary-light" padding="sm">
                    1
                </Box>
                <Box flex="auto" background="primary-light" padding="sm">
                    2
                </Box>
                <Box flex="auto" background="primary-light" padding="sm">
                    3
                </Box>
                <Box flex="auto" background="primary-light" padding="sm">
                    4
                </Box>
                <Box flex="auto" background="primary-light" padding="sm">
                    5
                </Box>
            </Box>
            <Box margin="lg 0 md 0" fontWeight="bold">
                Column
            </Box>
            <Box gap="md" padding="sm" direction="column">
                <Box width="20%" background="primary-light" padding="sm">
                    1
                </Box>
                <Box width="20%" background="primary-light" padding="sm">
                    2
                </Box>
                <Box width="20%" background="primary-light" padding="sm">
                    3
                </Box>
                <Box width="20%" background="primary-light" padding="sm">
                    4
                </Box>
                <Box width="20%" background="primary-light" padding="sm">
                    5
                </Box>
            </Box>
            <Box margin="lg 0 md 0" fontWeight="bold">
                Row Reverse
            </Box>
            <Box gap="md" padding="sm" direction="row-reverse">
                <Box width="20%" background="danger-light" padding="sm">
                    1
                </Box>
                <Box width="20%" background="danger-light" padding="sm">
                    2
                </Box>
                <Box width="20%" background="danger-light" padding="sm">
                    3
                </Box>
                <Box width="20%" background="danger-light" padding="sm">
                    4
                </Box>
                <Box width="20%" background="danger-light" padding="sm">
                    5
                </Box>
            </Box>
            <Box margin="lg 0 md 0" fontWeight="bold">
                Column Reverse
            </Box>
            <Box gap="md" padding="sm" direction="column-reverse">
                <Box width="20%" background="danger-light" padding="sm">
                    1
                </Box>
                <Box width="20%" background="danger-light" padding="sm">
                    2
                </Box>
                <Box width="20%" background="danger-light" padding="sm">
                    3
                </Box>
                <Box width="20%" background="danger-light" padding="sm">
                    4
                </Box>
                <Box width="20%" background="danger-light" padding="sm">
                    5
                </Box>
            </Box>
            <Box margin="lg 0 md 0" fontWeight="bold">
                Row Reverse
            </Box>
            <Box padding="sm" direction="row-reverse">
                <Box width="20%" background="primary-light" padding="sm">
                    1
                </Box>
                <Box
                    width="20%"
                    background="primary-light"
                    padding="sm"
                    margin="0 md 0 0"
                >
                    2
                </Box>
                <Box
                    width="20%"
                    background="primary-light"
                    padding="sm"
                    margin="0 md 0 0"
                >
                    3
                </Box>
                <Box
                    width="20%"
                    background="primary-light"
                    padding="sm"
                    margin="0 md 0 0"
                >
                    4
                </Box>
                <Box
                    width="20%"
                    background="primary-light"
                    padding="sm"
                    margin="0 md 0 0"
                >
                    5
                </Box>
            </Box>
            <Box margin="lg 0 md 0" fontWeight="bold">
                Column Reverse
            </Box>
            <Box padding="sm" direction="column-reverse">
                <Box width="20%" background="primary-light" padding="sm">
                    1
                </Box>
                <Box
                    width="20%"
                    background="primary-light"
                    padding="sm"
                    margin="0 0 md 0"
                >
                    2
                </Box>
                <Box
                    width="20%"
                    background="primary-light"
                    padding="sm"
                    margin="0 0 md 0"
                >
                    3
                </Box>
                <Box
                    width="20%"
                    background="primary-light"
                    padding="sm"
                    margin="0 0 md 0"
                >
                    4
                </Box>
                <Box
                    width="20%"
                    background="primary-light"
                    padding="sm"
                    margin="0 0 md 0"
                >
                    5
                </Box>
            </Box>
            <Box margin="lg 0 md 0" fontWeight="bold">
                Flex Grow and Shrink
            </Box>
            <Box gap="md">
                <Box gap="md" direction="row">
                    <Box
                        style={{ flex: '3' }}
                        background="primary-light"
                        height="lg"
                        justifyContent="center"
                        alignItems="center"
                    >
                        3
                    </Box>
                    <Box
                        style={{ flex: '1' }}
                        background="primary-light"
                        height="lg"
                        justifyContent="center"
                        alignItems="center"
                    >
                        1
                    </Box>
                    <Box
                        style={{ flex: '1' }}
                        background="primary-light"
                        height="lg"
                        justifyContent="center"
                        alignItems="center"
                    >
                        1
                    </Box>
                    <Box
                        style={{ flex: '2' }}
                        background="primary-light"
                        height="lg"
                        justifyContent="center"
                        alignItems="center"
                    >
                        2
                    </Box>
                    <Box
                        style={{ flex: '1' }}
                        background="primary-light"
                        height="lg"
                        justifyContent="center"
                        alignItems="center"
                    >
                        1
                    </Box>
                </Box>
            </Box>
        </>
    )
}