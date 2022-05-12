import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Row} from './Layout';
import {Spacer} from './Spacer';
import {Dropdown} from './Dropdown';

type Props = {
  onYearChange?: (year: string) => void;
  onMonthChange?: (month: string) => void;
  onDayChange?: (day: string) => void;
};

type State = {
  year?: string;
  month?: string;
  day?: string;
};

const currentYear = new Date().getFullYear();

export class DatePicker extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      year: undefined,
      month: undefined,
      day: undefined,
    };
  }
  getDate = () => {
    const {day, month, year} = this.state;
    return {day, month, year};
  };

  onYearChange = (year: string) => {
    this.setState({year});
    this.props.onYearChange && this.props.onYearChange(year);
  };
  onMonthChange = (month: string) => {
    this.setState({month});
    this.props.onMonthChange && this.props.onMonthChange(month);
  };
  onDayChange = (day: string) => {
    this.setState({day});
    this.props.onDayChange && this.props.onDayChange(day);
  };
  render() {
    const {day, month, year} = this.state;
    return (
      <View>
        <Row>
          <Dropdown
            placeholder={year || 'Year'}
            data={new Array(100)
              .fill(0)
              .map((data, index) => `${currentYear - index}`)}
            onSelectItem={this.onYearChange}
          />
          <Spacer width={5} />
          <Dropdown
            placeholder={month || 'Month'}
            data={[
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ]}
            onSelectItem={this.onMonthChange}
          />
          <Spacer width={5} />
          <Dropdown
            placeholder={day || 'Day'}
            data={new Array(31).fill(0).map((data, index) => {
              return `${index + 1}`;
            })}
            onSelectItem={this.onDayChange}
          />
        </Row>
      </View>
    );
  }
}
