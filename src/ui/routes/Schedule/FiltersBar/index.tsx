import * as React from 'react';

import Select from '@ui/components/Select';
import NavMonths from './nav-months';
import sleepingIcon from '@assets/images/sleeping-icon.svg';

import './styles.scss';

const value = {
  value: '2017',
  label: '2017',
};

const years = [
  { value: '2015', label: '2015' },
  { value: '2016', label: '2016' },
  { value: '2017', label: '2017' },
  { value: '2018', label: '2018' },
  { value: '2019', label: '2019' },
];

interface FiltersProps {
}

interface SelectValue {
    value: string;
    label: string;
}

interface FiltersState {
  selectValue: SelectValue;
}

const selectStyles = {
  control: () => ({
    width: '65px',
    height: '25px',
    opacity: 0.5,
    borderRadius: '8px',
    border: 'solid 0.5px',
    cursor: 'pointer',
  }),
  singleValue: (base, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return { ...base, opacity, transition };
  },
};

export default class FiltersComponent extends React.Component<FiltersProps, FiltersState> {
  constructor(props: FiltersProps) {
    super(props);
    this.state = {
      selectValue: value
    };
  }

  onChange = (selectValue: SelectValue) => {
    this.setState({selectValue});
  }

  public render() {
    return (
      <div className="df-container">
        <div className="df-actions">
          <a href="#" className="df-btn">
            Today
          </a>
          <Select
            classNamePrefix="df-select"
            value={value}
            options={years}
            onChange={this.onChange}
            customStyle={selectStyles}
            isSearchable={false}
          />
        </div>
        <NavMonths />
        <div className="df-filters">
          <a href="#" className="tooltips">
            <img src={sleepingIcon} />
            <span>Show availability</span>
          </a>
            <span>Filters</span>
          <a href="#" className="df-filters__button">
            <img src={sleepingIcon} />
          </a>
        </div>
      </div>
    );
  }
}
