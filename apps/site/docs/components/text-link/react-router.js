import { TextLink } from "@rhino-ui/components/src/components/text-link/text-link";
import { BrowserRouter, Link } from "react-router-dom";

export default function ReactRouter() {
    return (
        <BrowserRouter>
            <Link to="/" component={TextLink}>
              Click me!
            </Link>
        </BrowserRouter>
      );
}