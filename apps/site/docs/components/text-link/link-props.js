import { TextLink } from "@rhino-ui/components/src/components/text-link/text-link";
import { BrowserRouter, Link } from "react-router-dom";

export default function LinkProps() {
    return (
        <BrowserRouter>
            <Link to="/" replace component={TextLink}>
              I will replace the current history entry
            </Link>
        </BrowserRouter>
      );
}