import {CSSProperties} from 'react';
import {DatePicker} from './datePicker/DatePicker';
import {utils} from './utils';

export const {getFormatedDate, getToday} = new utils({isGregorian: true});
export default DatePicker;

export interface ModernDatepickerProps {
  onSelectedChange?: (dateString: string) => void;
  onMonthYearChange?: (dateString: string) => void;
  onTimeChange?: (dateString: string) => void;
  onDateChange?: (dateString: string) => void;
  minimumDate?: string;
  maximumDate?: string;
  selectorStartingYear?: number;
  selectorEndingYear?: number;
  disableDateChange?: boolean;
  isGregorian?: boolean;
  mode?: 'datepicker' | 'calendar' | 'monthYear' | 'time';
  minuteInterval?: 1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30 | 60;
  style?: CSSProperties;
  current?: string;
  selected?: string;
  locale?: string;
  options?: {
    backgroundColor?: string;
    textHeaderColor?: string;
    textDefaultColor?: string;
    selectedTextColor?: string;
    mainColor?: string;
    textSecondaryColor?: string;
    borderColor?: string;
    defaultFont?: string;
    headerFont?: string;
    textFontSize?: number;
    textHeaderFontSize?: number;
    headerAnimationDistance?: number;
    daysAnimationDistance?: number;
  };
}
