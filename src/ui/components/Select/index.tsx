import * as React from 'react';
import Select from 'react-select';


interface Options {
  value: string;
  label: string;
}

interface SelectProps {
  classNamePrefix: string;
  value: Options;
  options: Options[];
  onChange: any;
  customStyle: any;
  isSearchable: boolean;
}



export default class SelectComponent extends React.Component<SelectProps, any> {
  constructor(props: SelectProps) {
    super(props);
  }

  render() {
    const {
        classNamePrefix,
        customStyle,
        isSearchable,
        onChange,
        options,
        value } = this.props;

    return (
      <Select
        className="df-select-container"
        classNamePrefix={classNamePrefix}
        styles={customStyle}
        onChange={onChange}
        value={value}
        options={options}
        isSearchable={isSearchable}
      />
    );
  }
}
