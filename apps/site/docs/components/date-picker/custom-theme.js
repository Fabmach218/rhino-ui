import { useState } from 'react';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { DatePicker } from '@rhino-ui/components/src/components/date-picker/date-picker';

export default function CustomTheme() {
    const [selectedDate, setSelectedDate] = useState(new Date(2019, 11, 3));
      const [startDate, setStartDate] = useState(new Date(2019, 11, 3));
      const [endDate, setEndDate] = useState(new Date(2019, 11, 28));
      const setDate = ([startDate, endDate]) => {
        setStartDate(startDate);
        setEndDate(endDate);
      };
      const [minMaxStartDate, setMinMaxStartDate] = useState(new Date(2019, 11, 18));
      const min = new Date(2019, 11, 18);
      min.setDate(min.getDate() - 5);
      const max = new Date(2019, 11, 18);
      max.setDate(max.getDate() + 5);
      return (
        <Box gap="md">
          <div
            style={{
              '--color-brand-primary-50': '#CFC5E9',
              '--color-brand-primary-400': '#785CC0',
              '--color-brand-primary-500': '#603FB5',
              '--color-brand-primary-600': '#5839AE',
            }}
          >
            <Box margin="md 0" fontWeight="bold">Here we've overwritten base token values so that the DatePicker inherits new values.</Box>
            <DatePicker onChange={setSelectedDate} selected={selectedDate} />
          </div>
          <div
            style={{
              '--date-picker-font-color': 'var(--color-brand-white-500)',
              '--date-picker-background-color': 'var(--color-brand-grey-800)',
              '--date-picker-border-radius': 'var(--size-border-radius-lg)',
              '--date-picker-item-background-color-selected': '#603FB5',
              '--date-picker-item-background-color-selected-hover': '#4E31A5',
              '--date-picker-item-background-color-hover': '#785CC0',
              '--date-picker-navigation-icon-color': 'var(--color-brand-white-500)',
              '--date-picker-navigation-icon-color-hover': 'var(--color-brand-grey-300)',
              '--date-picker-item-border-radius': '0',
              '--date-picker-item-background-color-in-range': '#785CC0',
              '--date-picker-item-font-color-disabled': 'var(--color-brand-grey-500)',
            }}
          >
            <Box margin="md 0" fontWeight="bold">Here we've overwritten ONLY the values for the DatePicker component</Box>
            <Box direction="row" gap="md" wrap>
              <DatePicker onChange={setSelectedDate} selected={selectedDate} />
              <DatePicker
                onChange={setDate}
                selected={startDate}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                monthsShown={2}
              />
              <DatePicker selected={minMaxStartDate} onChange={setMinMaxStartDate} minDate={min} maxDate={max} />
            </Box>
          </div>
        </Box>
      );
}