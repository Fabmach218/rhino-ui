import { useState } from 'react';
import { Box } from "@rhino-ui/components/src/components/box/box";
import { OptionTile } from "@rhino-ui/components/src/components/option-tile/option-tile";

export function Default() {
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

export function InputTypes() {
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

export function Hover() {
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

export function Grid() {
    const [selectedOption, setSelectedOption] = useState(null);
      const options = [
        {
          id: 'vanilla',
          label: 'vanilla',
          name: 'vanilla',
          value: 'vanilla',
          img: 'https://www.thespruceeats.com/thmb/u8dsSvqz5Mkt0FyP7ETzwljamSQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/no-cook-vanilla-ice-cream-recipe-1945802-hero-01-cbd4c64c079b4caebe3f3e9add94ff9a.jpg',
        },
        {
          id: 'chocolate',
          label: 'chocolate',
          name: 'chocolate',
          value: 'chocolate',
          img: 'https://www.thespruceeats.com/thmb/KyWpKNdzCXtBXiA96QlJaAU05c0=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/easy-chocolate-ice-cream-recipe-1945798-hero-01-45d9f26a0aaf4c1dba38d7e0a2ab51e2.jpg',
        },
        {
          id: 'strawberry',
          label: 'strawberry',
          name: 'strawberry',
          value: 'strawberry',
          img: 'https://www.seriouseats.com/thmb/SYI6WMkX-fhBQFGT20B3LimaJlQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__07__20150706-strawberry-ice-cream-vicky-wasik-4-f3453966ec94404aaf44da724aef978b.jpg',
        },
        {
          id: 'mint',
          label: 'mint',
          name: 'mint',
          value: 'mint',
          img: 'https://www.thespruceeats.com/thmb/qQb20E3wIirOZ8ilVfz-ImStswA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/MintIceCreamHERO-color-corrected-df1d9b72aaeb41d38502f435fe99f65d.jpg',
        },
      ];
      return (
        <Box direction={{ base: 'column', tablet: 'row' }} gap="md">
          {options.map((option, index) => (
            <OptionTile
              key={option.id}
              hideInput
              padding="0"
              gap="0"
              direction="column"
              isSelected={option.value === selectedOption}
              onChange={event => setSelectedOption(event.target.value)}
              id={option.id}
              name={option.name}
              value={option.value}
              background={
                option.value === selectedOption
                  ? 'secondary-lightest'
                  : undefined
              }
              borderColor={
                option.value === selectedOption ? 'secondary' : undefined
              }
              hover={{ shadow: 'lg' }}
            >
              <img
                src={option.img}
                style={{ objectFit: 'cover', width: '100%', height: '100px' }}
              />
              <p className="p-md font-family-brand">{option.label}</p>
            </OptionTile>
          ))}
        </Box>
      );
}

export function DesignTokens() {
    const tokens = {
        '--option-tile-background-color': {
          global: '--form-control-background-color',
          default: '--color-brand-white-base',
        },
        '--option-tile-border-color': {
          global: '--form-control-border-color',
          default: '--color-brand-grey-100',
        },
        '--option-tile-border-radius': {
          global: '--form-control-size-md-border-radius',
          default: '--size-border-radius-md',
        },
        '--option-tile-font-family': {
          global: '--form-control-font-family',
          default: '--asset-fonts-body',
        },
        '--option-tile-line-height': {
          global: '--form-control-line-height',
          default: '--size-line-height-input',
        },
        '--option-tile-border-color-hover': {
          global: '--form-control-border-color-hover',
          default: '--color-brand-grey-300',
        },
        '--option-tile-background-color-disabled': {
          global: '--form-control-background-color-disabled',
          default: '--color-brand-grey-50',
        },
        '--option-tile-font-color-disabled': {
          global: '--form-control-font-color-disabled',
          default: '--color-brand-grey-300',
        },
        '--option-tile-border-color-disabled': {
          global: '--form-control-border-color',
          default: '--color-brand-grey-100',
        },
        '--option-tile-font-color-error': {
          global: '--form-control-font-color-error',
          default: '--color-brand-danger-500',
        },
        '--option-tile-border-color-error-hover': {
          global: '--form-control-border-color-hover',
          default: '--color-brand-grey-300',
        },
        '--option-tile-font-color-error-disabled': {
          global: '--form-control-font-color-error-disabled',
          default: '--color-brand-danger-200',
        },
        '--option-tile-border-color-error-disabled-hover': {
          global: '--form-control-border-color',
          default: '--color-brand-grey-100',
        },
        '--option-tile-background-color-selected': {
          global: '--form-control-background-color-selected',
          default: '--color-brand-primary-50',
        },
        '--option-tile-border-color-selected': {
          global: '--form-control-border-color-selected',
          default: '--color-brand-primary-500',
        },
        '--option-tile-background-color-disabled-selected': {
          global: '--form-control-background-color-disabled',
          default: '--color-brand-grey-50',
        },
        '--option-tile-border-color-disabled-selected': {
          global: '--form-control-border-color',
          default: '--color-brand-grey-100',
        },
        '--option-tile-border-color-disabled-selected-hover': {
          global: '--form-control-border-color',
          default: '--color-brand-grey-100',
        },
        '--option-tile-background-color-selected-error': {
          global: '--form-control-background-color-error',
          default: '--color-brand-danger-50',
        },
        '--option-tile-border-color-selected-error': {
          global: '--form-control-border-color-selected-error',
          default: '--color-brand-danger-500',
        },
        '--option-tile-font-color-selected-error': {
          global: 'form-control-font-color-error',
          default: '--color-brand-danger-500',
        },
        '--option-tile-font-color-disabled-selected-error': {
          global: '--form-control-font-color-error-disabled',
          default: 'color-brand-danger-200',
        },
        '--option-tile-border-color-selected-error-hover': {
          global: '--form-control-border-color-selected-error',
          default: 'color-brand-danger-500',
        },
        '--option-tile-border-color-selected-hover': {
          global: '--form-control-border-color-selected-hover',
          default: '--color-brand-primary-500',
        },
      };
      return Object.entries(tokens).map(([name, entry], i) => (
        <tr key={i}>
          <td>
            <code>{name}</code>
          </td>
          <td>
            <code>{entry.global}</code>
          </td>
          <td>
            <code>{entry.default}</code>
          </td>
        </tr>
      ));
}