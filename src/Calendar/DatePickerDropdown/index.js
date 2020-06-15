import React from 'react';
import PropTypes from 'prop-types';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';
import styles from './styles.scss';
import DropdownBase from '../../DropdownBase';
import TextButton from '../../TextButton';

export default class DropdownPicker extends React.Component {
  static propTypes = {
    dataHook: PropTypes.string,
    caption: PropTypes.node,
    options: PropTypes.array,
    onChange: PropTypes.func,
    selectedId: PropTypes.number,
  };

  onSelect = data => {
    const { onChange } = this.props;

    if (typeof onChange === 'function') onChange(data);
  };

  render() {
    const { caption, options, dataHook, selectedId } = this.props;

    return (
      <DropdownBase
        data-hook={dataHook}
        className={styles.root}
        options={options}
        dynamicWidth
        minWidth={120}
        selectedId={selectedId}
        onSelect={this.onSelect}
        focusOnSelectedOption
      >
        {({ toggle }) => {
          return (
            <TextButton
              skin="dark"
              suffixIcon={<ChevronDown />}
              onClick={toggle}
              dataHook={`${dataHook}-button`}
            >
              {caption}
            </TextButton>
          );
        }}
      </DropdownBase>
    );
  }
}
