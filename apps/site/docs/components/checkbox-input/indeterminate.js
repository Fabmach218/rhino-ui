import { useState } from 'react';
import { CheckboxInput } from "@rhino-ui/components/src/components/checkbox-input/checkbox-input";
import { Box } from "@rhino-ui/components/src/components/box/box";

export default function Indeterminate() {
    const [exampleOneChildOne, setExampleOneChildOne] = useState(false);
      const [exampleOneChildTwo, setExampleOneChildTwo] = useState(true);
      const handleParentChange = event => {
        setExampleOneChildOne(event.target.checked);
        setExampleOneChildTwo(event.target.checked);
      };
      return (
        <Box gap="md">
          <Box display="block" fontWeight="bold">
            Nested Checkboxes (select all)
          </Box>
          <Box gap="sm">
            <CheckboxInput
              id="statesUnchecked"
              label="Parent"
              onChange={handleParentChange}
              isChecked={exampleOneChildOne || exampleOneChildTwo}
              isIndeterminate={exampleOneChildOne !== exampleOneChildTwo}
            />
            <Box padding="0 0 0 sm" gap="sm">
              <CheckboxInput
                id="statesUnchecked"
                label="Child One"
                onChange={event => setExampleOneChildOne(event.target.checked)}
                isChecked={exampleOneChildOne}
              />
              <CheckboxInput
                id="statesUnchecked"
                label="Child Two"
                onChange={event => setExampleOneChildTwo(event.target.checked)}
                isChecked={exampleOneChildTwo}
              />
            </Box>
          </Box>
        </Box>
      );
}