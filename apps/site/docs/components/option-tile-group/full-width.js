import { useState } from 'react';
import { OptionTileGroup } from "@rhino-ui/components/src/components/option-tile-group/option-tile-group";

export default function FullWidth() {
    const [valueHorizontal, setValueHorizontal] = useState([]);
      const [valueVertical, setValueVertical] = useState([]);
      const optionsVertical = [
        {
          id: 'chocolate_fullwidth_vertical',
          value: 'chocolate',
          label: 'Chocolate',
        },
        {
          id: 'strawberry_fullwidth_vertical',
          value: 'strawberry',
          label: 'Strawberry',
        },
        {
          id: 'vanilla_fullwidth_vertical',
          value: 'vanilla',
          label: 'Vanilla',
        },
      ];
      const optionsHorizontal = [
        {
          id: 'chocolate_fullwidth_horizontal',
          value: 'chocolate',
          label: 'Chocolate',
        },
        {
          id: 'strawberry_fullwidth_horizontal',
          value: 'strawberry',
          label: 'Strawberry',
        },
        {
          id: 'vanilla_fullwidth_horizontal',
          value: 'vanilla',
          label: 'Vanilla',
        },
      ];
      return (
        <>
          <p className="m-bottom-md font-size-lg font-weight-bold">Vertical</p>
          <OptionTileGroup
            name="fullWidthVertical"
            value={valueVertical}
            onChange={event => setValueVertical(event.target.value)}
            options={optionsVertical}
            direction="column"
            isFullWidth={false}
          />
          <p className="m-v-md font-size-lg font-weight-bold">Horizontal</p>
          <OptionTileGroup
            name="fullWidthHorizontal"
            value={valueHorizontal}
            onChange={event => setValueHorizontal(event.target.value)}
            options={optionsHorizontal}
            direction="row"
            isFullWidth={false}
          />
        </>
      );
}