import { useState } from 'react';
import { Alert } from "@rhino-ui/components/src/components/alert/alert";
import { Button } from "@rhino-ui/components/src/components/button/button";

export default function Closable() {
    const [isAlertTwoShowing, setAlertTwoShowing] = useState(true);
      const [isAlertThreeShowing, setAlertThreeShowing] = useState(true);
      return (
        <>
          <Alert
            title="Won't Close"
            message="Closable, but with no onClose callback so nothing happens when clicked."
            variant="warning"
            isClosable
            className="m-bottom-md"
          />
          {isAlertTwoShowing ? (
            <Alert
              title="Closable"
              message="This one works!"
              variant="info"
              isClosable
              onClose={() => setAlertTwoShowing(false)}
              className="m-bottom-md"
            />
          ) : (
            <div className="m-bottom-md">
              <Button onClick={() => setAlertTwoShowing(true)} size="sm">
                Give me the second alert back!
              </Button>
            </div>
          )}
          {isAlertThreeShowing ? (
            <Alert
              message="With custom close text!"
              variant="info"
              isClosable
              onClose={() => setAlertThreeShowing(false)}
              closeText="Close me!"
            />
          ) : (
            <div className="m-bottom-md">
              <Button onClick={() => setAlertThreeShowing(true)} size="sm">
                Give me the third alert back!
              </Button>
            </div>
          )}
        </>
      );
}