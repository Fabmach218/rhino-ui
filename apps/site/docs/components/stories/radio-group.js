import { Box } from '@rhino-ui/components/src/components/box/box';
import { RadioGroup } from '@rhino-ui/components/src/components/radio-group/radio-group';
import { useState } from 'react';

export function Default() {
    const [value, setValue] = useState('chocolate');
      const options = [
        {
          id: 'chocolate',
          value: 'chocolate',
          label: 'Chocolate',
        },
        {
          id: 'strawberry',
          value: 'strawberry',
          label: 'Strawberry',
        },
        {
          id: 'vanilla',
          value: 'vanilla',
          label: 'Vanilla',
        },
      ];
      return (
        <RadioGroup
          name="noTitleOrDescription"
          value={value}
          onChange={event => setValue(event.target.value)}
          options={options}
        />
      );
}

export function Title() {
    const [value, setValue] = useState('purple');
      const options = [
        {
          id: 'purple',
          value: 'purple',
          label: 'Purple',
        },
        {
          id: 'green',
          value: 'green',
          label: 'Green',
        },
        {
          id: 'blue',
          value: 'blue',
          label: 'Blue',
        },
      ];
      return (
        <RadioGroup
          title="Title"
          name="withTitle"
          onChange={event => setValue(event.target.value)}
          value={value}
          options={options}
        />
      );
}

export function TitleAndDescription() {
    const [value, setValue] = useState('light');
      const options = [
        {
          id: 'light',
          value: 'light',
          label: 'Light',
        },
        {
          id: 'dark',
          value: 'dark',
          label: 'Dark',
        },
      ];
      return (
        <RadioGroup
          title="Title"
          description="Description"
          name="withTitleAndDescription"
          onChange={event => setValue(event.target.value)}
          value={value}
          options={options}
        />
      );
}

export function Required() {
    const [value, setValue] = useState('cat');
      const options = [
        {
          id: 'cat',
          value: 'cat',
          label: 'Cat',
        },
        {
          id: 'dog',
          value: 'dog',
          label: 'Dog',
        },
      ];
      return (
        <RadioGroup
          title="Title"
          name="required"
          onChange={event => setValue(event.target.value)}
          value={value}
          isRequired
          options={options}
        />
      );
}

export function CustomRequiredIndicator() {
    const [value, setValue] = useState(false);
      const [value2, setValue2] = useState(false);
      const options = [
        {
          id: 'cat',
          value: 'cat',
          label: 'Cat',
        },
        {
          id: 'dog',
          value: 'dog',
          label: 'Dog',
        },
      ];
      return (
        <Box gap="md">
          <RadioGroup
            title="Required Without Indicator"
            name="withoutIndicator"
            onChange={event => setValue(event.target.value)}
            value={value}
            isRequired
            options={options}
            requiredIndicator={null}
          />
          <RadioGroup
            title="Required Custom Indicator"
            name="customIndicator"
            onChange={event => setValue2(event.target.value)}
            value={value2}
            isRequired
            options={options}
            requiredIndicator=" (required)"
          />
        </Box>
      );
}

export function PreSelectedOption() {
    const options = [
        {
          id: 'car',
          value: 'car',
          label: 'Car',
        },
        {
          id: 'truck',
          value: 'truck',
          label: 'Truck',
        },
        {
          id: 'motorcycle',
          value: 'motorcycle',
          label: 'Motorcycle',
        },
      ];
      const [value, setValue] = useState(options[1].value);
      return (
        <RadioGroup
          title="Title"
          name="prevalue"
          onChange={event => setValue(event.target.value)}
          value={value}
          options={options}
        />
      );
}

export function DisabledOption() {
    const [value, setValue] = useState('short');
      const options = [
        {
          id: 'short',
          value: 'short',
          label: 'Short',
        },
        {
          id: 'tall',
          value: 'tall',
          label: 'Tall',
        },
        {
          id: 'gigantic',
          value: 'gigantic',
          label: 'Gigantic',
          disabled: true,
        },
      ];
      return (
        <RadioGroup
          title="Title"
          name="disabledOption"
          onChange={event => setValue(event.target.value)}
          value={value}
          options={options}
        />
      );
}

export function DisabledGroup() {
    const [value, setValue] = useState('react');
      const options = [
        {
          id: 'react',
          value: 'react',
          label: 'React',
        },
        {
          id: 'angular',
          value: 'angular',
          label: 'Angular',
        },
        {
          id: 'vue',
          value: 'vue',
          label: 'Vue',
          disabled: true,
        },
      ];
      return (
        <RadioGroup
          title="Title"
          name="disabledGroup"
          onChange={event => setValue(event.target.value)}
          value={value}
          isDisabled
          options={options}
        />
      );
}

export function Error() {
    const [value, setValue] = useState('apple');
      const options = [
        {
          id: 'apple',
          value: 'apple',
          label: 'Apple',
        },
        {
          id: 'orange',
          value: 'orange',
          label: 'Orange',
        },
        {
          id: 'banana',
          value: 'banana',
          label: 'Banana',
          disabled: true,
        },
      ];
      return (
        <RadioGroup
          title="Title"
          name="error"
          onChange={event => setValue(event.target.value)}
          value={value}
          options={options}
          isRequired
          error="Helpful validation message"
        />
      );
}

export function Sizes() {
    const [state, setState] = useState({
        sm: null,
        md: null,
        lg: null,
        responsive: null,
      });
      const options = id => [
        { id: `purple__${id}`, value: 'purple', label: 'Purple' },
        { id: `green__${id}`, value: 'green', label: 'Green' },
      ];
      const handleChange = (event, key) => {
        const value = event.target.value;
        setState(prevState => ({ ...prevState, [key]: value }));
      };
      return (
        <Box gap="lg">
          <RadioGroup
            title="Small"
            name="smallRadio"
            onChange={event => handleChange(event, 'sm')}
            value={state.sm}
            options={options('sm')}
            size="sm"
          />
          <RadioGroup
            title="Medium"
            name="mediumRadio"
            onChange={event => handleChange(event, 'md')}
            value={state.md}
            options={options('md')}
            size="md"
          />
          <RadioGroup
            title="Large"
            name="largeRadio"
            onChange={event => handleChange(event, 'lg')}
            value={state.lg}
            options={options('lg')}
            size="lg"
          />
          <RadioGroup
            title="Responsive"
            name="responsiveRadio"
            onChange={event => handleChange(event, 'responsive')}
            value={state.responsive}
            options={options('responsive')}
            size={{ base: 'sm', tablet: 'md', desktop: 'lg', hd: 'sm' }}
          />
        </Box>
      );
}

export function Row() {
    const [value, setValue] = useState('one');
      const options = [
        {
          id: 'one',
          value: 'one',
          label: 'One',
        },
        {
          id: 'two',
          value: 'two',
          label: 'Two',
        },
        {
          id: 'three',
          value: 'three',
          label: 'Three',
        },
      ];
      return (
        <RadioGroup
          title="Horizontal"
          direction="row"
          name="horizontal"
          onChange={event => setValue(event.target.value)}
          value={value}
          options={options}
          isRequired
        />
      );
}