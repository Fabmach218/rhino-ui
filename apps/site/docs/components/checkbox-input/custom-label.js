import { useState } from 'react';
import { CheckboxInput } from "@rhino-ui/components/src/components/checkbox-input/checkbox-input";
import { Box } from "@rhino-ui/components/src/components/box/box";
import { FormLabel } from "@rhino-ui/components/src/components/form-label/form-label";

export default function CustomLabel() {
    const [value, setValue] = useState(null);
      return (
        <Box direction="row" alignItems="center">
          <CheckboxInput
            id="customLabel"
            label="This label is custom"
            hideLabel
            onChange={value => setValue(event.target.checked)}
            isChecked={value}
          />
          <FormLabel inputId="customLabel">
            <Box display="block" fontSize="xl" color="secondary-500">
              This is custom, look at this{' '}
              <a
                href="https://rhinolabs.agency"
                onClick={() => alert('hey you clicked me!')}
                target="_blank"
              >
                Link
              </a>
            </Box>
          </FormLabel>
        </Box>
      );
}