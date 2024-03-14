import BrowserOnly from '@docusaurus/BrowserOnly';
import { useState } from 'react';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { DateInput } from '@rhino-ui/components/src/components/date-input/date-input';

export function Example() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <BrowserOnly>
    {() =>
      <DateInput
        datePickerProps={{
          selected: selectedDate,
          onChange: setSelectedDate,
        }}
        textInputProps={{
            id: 'exampleDateInput',
            name: 'selectDate',
            label: 'Select a Date',
            placeholder: 'e.g. 11/02/2020',
        }}
      />
    }
    </BrowserOnly>
  )
}

export function Default() {
    const [selectedDate, setSelectedDate] = useState(null);
      const handleClear = () => {
        setSelectedDate(null);
      };
      return (
        <BrowserOnly>
          {() =>
            <DateInput
              datePickerProps={{
                selected: selectedDate,
                onChange: setSelectedDate,
              }}
              textInputProps={{
                placeholder: 'e.g. 11/02/2020',
                onClear: handleClear,
                id: 'defaultDatePicker',
                name: 'selectDate',
                label: 'Select Date',
              }}
            />
          }
        </BrowserOnly>
      );
}

export function DateRange() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const setDate = ([startDate, endDate]) => {
        setStartDate(startDate);
        setEndDate(endDate);
    };
    const handleClear = () => {
        setStartDate(null);
        setEndDate(null);
    };
    return (
      <BrowserOnly>
      {() =>
        <DateInput
          datePickerProps={{
            onChange: setDate,
            selected: startDate,
            selectsRange: true,
            startDate,
            endDate,
          }}
          textInputProps={{
            onClear: handleClear,
            id: 'myDateRangePicker',
            name: 'myDateRangePicker',
            label: 'Select Date Range',
          }}
        />
      }
      </BrowserOnly>
    );
}

export function MinMaxDates() {
    const [selectedDate, setSelectedDate] = useState(null);
      const handleClear = () => {
        setSelectedDate(null);
      };
      const min = new Date(2022, 6, 18);
      min.setDate(min.getDate() - 10);
      const max = new Date(2022, 6, 18);
      max.setDate(max.getDate() + 100);
      return (
        <BrowserOnly>
          {() =>
            <DateInput
              datePickerProps={{
                selected: selectedDate,
                maxDate: max,
                minDate: min,
                onChange: setSelectedDate,
              }}
              textInputProps={{
                placeholder: 'e.g. 11/02/2020',
                onClear: handleClear,
                id: 'defaultDatePicker',
                name: 'selectDate',
                label: 'Select Date',
              }}
            />
          }
        </BrowserOnly>
      );
}

export function CustomDateFormat() {
    const [selectedDate, setSelectedDate] = useState(new Date('2020, 11, 3'));
      const [inputValue, setInputValue] = useState('');
      const handleClear = () => {
        setSelectedDate(null);
      };
      return (
        <BrowserOnly>
        {() => 
          <Box gap="md">
            <DateInput
              dateFormat={'MMMM dd, yyyy'}
              datePickerProps={{
                selected: selectedDate,
                onChange: setSelectedDate,
              }}
              textInputProps={{
                onClear: handleClear,
                id: 'withCustomDateFormat',
                name: 'selectDate',
                label: 'Select Date',
              }}
            />
            <Box>
              <p>Selected Date (as ISO String): {selectedDate ? selectedDate.toISOString() : null}</p>
            </Box>
          </Box>
        }
        </BrowserOnly>
      );
}

export function InputBlurEvent() {
    const [selectedDate, setSelectedDate] = useState(new Date('2020, 11, 3'));
      const [inputValue, setInputValue] = useState('');
      const handleTextInputBlur = () => {
        alert('TextInput Blur Event');
      };
      return (
        <BrowserOnly>
        {() =>
          <Box gap="md">
            <DateInput
              dateFormat={'MMMM dd, yyyy'}
              datePickerProps={{
                selected: selectedDate,
                onChange: setSelectedDate,
              }}
              textInputProps={{
                id: 'withCustomDateFormat',
                name: 'selectDate',
                label: 'Select Date',
                onBlur: handleTextInputBlur,
              }}
            />
          </Box>
        }
        </BrowserOnly>
      );
}