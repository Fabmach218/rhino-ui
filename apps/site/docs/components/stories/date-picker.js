import { useState } from 'react';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { DatePicker } from '@rhino-ui/components/src/components/date-picker/date-picker';
import { Heading } from '@rhino-ui/components/src/components/heading/heading';

export function BasicExample() {
    const [selectedDate, setSelectedDate] = useState(new Date(2019, 11, 3));
      return (
        <Box gap="md">
          <DatePicker onChange={setSelectedDate} selected={selectedDate} />
          <p>Selected Date: {selectedDate.toISOString()}</p>
        </Box>
      );
}

export function DateRange() {
    const [startDate, setStartDate] = useState(new Date(2019, 11, 3));
      const [endDate, setEndDate] = useState(new Date(2019, 11, 28));
      const setDate = ([startDate, endDate]) => {
        setStartDate(startDate);
        setEndDate(endDate);
      };
      return (
        <Box gap="md">
          <DatePicker
            onChange={setDate}
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            selectsRange
          />
          <p>
            {`Selected Date Range: ${startDate && startDate.toISOString()} - ${
              endDate && endDate.toISOString()
            }`}
          </p>
        </Box>
      );
}

export function MinMaxDates() {
    const [startDate, setStartDate] = useState(new Date(2019, 11, 18));
      const min = new Date(2019, 11, 18);
      min.setDate(min.getDate() - 5);
      const max = new Date(2019, 11, 18);
      max.setDate(max.getDate() + 5);
      return (
        <Box gap="md">
          <DatePicker selected={startDate} onChange={setStartDate} minDate={min} maxDate={max} />
          <p>Selected Date: {startDate.toISOString()}</p>
        </Box>
      );
}

export function MonthPicker() {
    const [startDateOne, setStartDateOne] = useState(new Date(2019, 10));
      const [startDateTwo, setStartDateTwo] = useState(new Date(2019, 10));
      const [startDateThree, setStartDateThree] = useState(new Date(2019, 10));
      return (
        <Box display="flex" direction="row" gap="md">
          <Box gap="md" display="flex" direction="column" alignItems="center" width="33">
            <Heading size="md">Default</Heading>
            <DatePicker selected={startDateOne} onChange={setStartDateOne} showMonthYearPicker />
            <p>{startDateOne.toISOString()}</p>
          </Box>
          <Box gap="md" display="flex" direction="column" alignItems="center" width="33">
            <Heading size="md">With full month name</Heading>
            <DatePicker
              selected={startDateTwo}
              onChange={setStartDateTwo}
              showMonthYearPicker
              showFullMonthYearPicker
            />
            <p>{startDateTwo.toISOString()}</p>
          </Box>
          <Box gap="md" display="flex" direction="column" alignItems="center" width="33">
            <Heading size="md">With Two-column layout</Heading>
            <DatePicker
              selected={startDateThree}
              onChange={setStartDateThree}
              showMonthYearPicker
              showFullMonthYearPicker
              showTwoColumnMonthYearPicker
            />
            <p>{startDateThree.toISOString()}</p>
          </Box>
        </Box>
      );
}

export function MultipleMonths() {
    const [startDate, setStartDate] = useState(new Date(2019, 11, 3));
      const [endDate, setEndDate] = useState(new Date(2019, 12, 20));
      const setDate = ([startDate, endDate]) => {
        console.log(startDate, endDate);
        setStartDate(startDate);
        setEndDate(endDate);
      };
      return (
        <Box gap="md">
          <DatePicker
            onChange={setDate}
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            monthsShown={2}
          />
          <p>Start Date: {startDate && startDate.toISOString()}</p>
          <p>End Date: {endDate && endDate.toISOString()}</p>
        </Box>
      );
}

export function WithTimePicker() {
    const [startDate, setStartDate] = useState(new Date('1993/09/28'));
      return (
        <Box gap="md">
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            showTimeSelect
            timeIntervals={15}
            timeCaption="Time"
          />
          <p>Selected Date: {startDate && startDate.toISOString()}</p>
        </Box>
      );
}

export function OpenOnDate() {
    const [startDate, setStartDate] = useState(new Date('1993/09/28'));
      return (
        <Box gap="md">
          <DatePicker
            onChange={setStartDate}
            selected={startDate}
            openToDate={new Date('1993/09/28')}
          />
          <p>Selected Date: {startDate && startDate.toISOString()}</p>
        </Box>
      );
}

export function WithChildren() {
    const [selectedDate, setSelectedDate] = useState(new Date(2019, 11, 3));
      return (
        <Box gap="md">
          <DatePicker onChange={setSelectedDate} selected={selectedDate}>
            <Box display="block" style={{ textAlign: 'center' }} color="primary">
              It will be sunny out today!
            </Box>
          </DatePicker>
          <p>Selected Date: {selectedDate.toISOString()}</p>
        </Box>
      );
}

export function CustomDayClassName() {
    const [selectedDate, setSelectedDate] = useState(new Date(2019, 11, 3));
      return (
        <Box gap="md">
          <DatePicker
            onChange={setSelectedDate}
            selected={selectedDate}
            dayClassName={date => (date.getDay() < 3 ? 'font-color-danger' : undefined)}
          />
          <p>Selected Date: {selectedDate.toISOString()}</p>
        </Box>
      );
}

export function CustomTheme() {
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

export function DesignTokens() {
    const tokens = {
        '--date-picker-font-color': '--color-brand-dark-500',
        '--date-picker-font-size': '--size-font-sm',
        '--date-picker-background-color': '--color-brand-white-500',
        '--date-picker-border-radius': '--size-border-radius-sm',
        '--date-picker-item-background-color-selected': '--color-brand-primary-500',
        '--date-picker-item-background-color-selected-hover': '--color-brand-primary-600',
        '--date-picker-item-background-color-hover': '--color-brand-primary-50',
        '--date-picker-navigation-icon-color': '--color-brand-grey-300',
        '--date-picker-navigation-icon-color-hover': '--color-brand-grey-500',
        '--date-picker-navigation-icon-color-disabled-hover': '--color-brand-grey-50',
        '--date-picker-item-border-radius': '--size-border-radius-lg',
        '--date-picker-item-background-color-in-range': '--color-brand-primary-500',
        '--date-picker-item-font-color-disabled': '--color-brand-grey-100',
      };
      return Object.entries(tokens).map(([name, entry], i) => (
        <tr key={i}>
          <td>
            <code>{name}</code>
          </td>
          <td>
            <code>{entry}</code>
          </td>
        </tr>
      ));
}