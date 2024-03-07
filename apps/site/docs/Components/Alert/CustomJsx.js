import { Alert } from "@rhino-ui/components/src/components/alert/alert";
import { Button } from "@rhino-ui/components/src/components/button/button";
import { Heading } from "@rhino-ui/components/src/components/heading/heading";

export default function CustomJsx() {
    const myMessage = (
        <>
          <Heading as="h3" size="xl">
            Oops!
          </Heading>
          <p>Looks like something went wrong.</p>
          <Button size="sm" className="m-top-sm">
            Click this button to fix it!
          </Button>
        </>
      );
      return <Alert message={myMessage} variant="danger" />;
}