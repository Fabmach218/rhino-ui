import { useState } from 'react';
import { OptionTile } from "@rhino-ui/components/src/components/option-tile/option-tile";

export default function Hover() {
    const [isSelected, setIsSelected] = useState(false);
      return (
        <OptionTile
          isSelected={isSelected}
          onChange={() => {
            let newVal = !isSelected;
            setIsSelected(newVal);
          }}
          id="hoverOptionTile"
          name="hoverOptionTile"
          value="hoverOptionTile"
          hover={{
            borderColor: 'danger',
            shadow: 'lg',
            background: 'danger-lightest',
          }}
        >
          Hello world!
        </OptionTile>
      );
}