import { Box } from "@rhino-ui/components/src/components/box/box";
import { Button } from "@rhino-ui/components/src/components/button/button";
import { Card } from "@rhino-ui/components/src/components/card/card";

export default function ProfileCardExample() {
    return (
        <Card>
            <Card.Header title="Profile Card Example">
                <Box as="p" color="grey" fontSize="sm">
                    Personal and Contact Details
                </Box>
            </Card.Header>
            <Box overflow="hidden" height="130px">
                <img src="https://images.unsplash.com/photo-1555412654-72a95a495858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" />
            </Box>
            <Card.Section title="profile">
                <Box direction="row" gap="lg">
                    <Box flex="auto" gap="lg">
                        <Box gap="2xs">
                            <Box fontSize="sm" color="grey">
                                Full Name
                            </Box>
                            <Box>Jessica Ramirez</Box>
                        </Box>
                        <Box gap="2xs">
                            <Box fontSize="sm" color="grey">
                                Email
                            </Box>
                            <Box>jw1416@rhinolabs.agency</Box>
                        </Box>
                        <Box gap="2xs">
                            <Box fontSize="sm" color="grey">
                                Phone
                            </Box>
                            <Box>(123) 555-5555</Box>
                        </Box>
                    </Box>
                    <Box flex="auto" gap="lg">
                        <Box gap="2xs">
                            <Box fontSize="sm" color="grey">
                                Preferred Language
                            </Box>
                            <Box>English</Box>
                        </Box>
                        <Box gap="2xs">
                            <Box fontSize="sm" color="grey">
                                Country
                            </Box>
                            <Box>United States</Box>
                        </Box>
                    </Box>
                </Box>
            </Card.Section>
            <Card.Section title="site location">
                <Box gap="2xs">
                    <Box>12345 Jones Rd</Box>
                    <Box>Seattle, WA 98123</Box>
                </Box>
            </Card.Section>
            <Card.Footer>
                <Box
                    display="flex"
                    direction="row"
                    justify="between"
                    overflow="hidden"
                    gap="md"
                >
                    <Box direction="row" gap="sm">
                        <Button size="sm" variant="light">
                            Edit
                        </Button>
                        <Button size="sm" variant="light">
                            Remove
                        </Button>
                    </Box>
                    <Button variant="danger" isOutlined size="sm">
                        Delete
                    </Button>
                </Box>
            </Card.Footer>
        </Card>
    )
}