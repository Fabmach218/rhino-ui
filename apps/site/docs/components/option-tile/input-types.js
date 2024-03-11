import { useState } from 'react';
import { Box } from "@rhino-ui/components/src/components/box/box";
import { OptionTile } from "@rhino-ui/components/src/components/option-tile/option-tile";

export default function InputTypes() {
    const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);
      const [isRadioSelected, setIsRadioSelected] = useState(false);
      return (
        <Box gap="md">
          <OptionTile
            isSelected={isRadioSelected}
            onChange={() => setIsRadioSelected(!isRadioSelected)}
            id="inputTypeRadioOptionTile"
            name="inputTypeRadioOptionTile"
            value="inputTypeRadioOptionTile"
            inputType="radio"
          >
            I'm a radio
          </OptionTile>
          <OptionTile
            isSelected={isCheckboxSelected}
            onChange={() => setIsCheckboxSelected(!isCheckboxSelected)}
            id="inputTypeCheckboxOptionTile"
            name="inputTypeCheckboxOptionTile"
            value="inputTypeCheckboxOptionTile"
            inputType="checkbox"
          >
            I'm a checkbox
          </OptionTile>
        </Box>
      );
}