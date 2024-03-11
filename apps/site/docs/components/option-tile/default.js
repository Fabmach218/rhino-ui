import { useState } from 'react';
import { OptionTile } from "@rhino-ui/components/src/components/option-tile/option-tile";

export default function Default() {
    const [isSelected, setIsSelected] = useState(false);
      return (
        <OptionTile
          isSelected={isSelected}
          onChange={() => {
            let newVal = !isSelected;
            setIsSelected(newVal);
          }}
          id="defaultOptionTile"
          name="defaultOptionTile"
          value="defaultOptionTile"
        >
          Hello world!
        </OptionTile>
      );
}