import { CheckboxInput } from "@rhino-ui/components/src/components/checkbox-input/checkbox-input";
import { Box } from "@rhino-ui/components/src/components/box/box";

export default function States() {
    return (
        <Box gap="md">
          <CheckboxInput
            id="statesUnchecked"
            label="Unchecked"
            onChange={() => {}}
            isChecked={false}
          />
          <CheckboxInput
            id="statesCHecked"
            label="Checked"
            onChange={() => {}}
            isChecked={true}
          />
          <CheckboxInput
            id="statesUnchecked"
            label="Indeterminate"
            onChange={() => {}}
            isChecked={true}
            isIndeterminate={true}
          />
        </Box>
      );
}