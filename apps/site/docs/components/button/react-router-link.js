import { BrowserRouter, Link } from 'react-router-dom';
import { Box } from "@rhino-ui/components/src/components/box/box";
import { Button } from "@rhino-ui/components/src/components/button/button";
import { Alert } from "@rhino-ui/components/src/components/alert/alert";

export default function ReactRouterLink() {
    return (
        <BrowserRouter>
            <Link to="/" as="a" component={Button}>
                React Router Link
            </Link>
            <Box margin="md 0 0 0">
                <Alert
                    hasIcon
                    message="NOTE: this link will not work in storybook but the code example is correct if used in a React application with react-router-dom."
                    variant="warning"
                />
            </Box>
        </BrowserRouter>
    )
}