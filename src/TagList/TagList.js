import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './TagList.st.css';
import Tag from '../Tag';
import classNames from 'classnames';

const tagToActionButtonSize = {
  small: 'tiny',
  medium: 'small',
  large: 'medium',
};

/** TagList */
const TagList = ({ dataHook, tags, actionButton, size = 'small' }) => {
  const actionButtonSize = tagToActionButtonSize[size];

  return (
    <div className={styles.root} data-hook={dataHook}>
      {tags.map(({ className, ...tagProps }) => (
        <Tag
          {...tagProps}
          className={classNames(styles.item, className)}
          size={size}
          key={tagProps.id}
        />
      ))}
      {actionButton && (
        <TagListAction
          {...actionButton}
          dataHook="tag-list-action"
          size={actionButtonSize}
        />
      )}
    </div>
  );
};

const TagListAction = ({
  skin = 'inverted',
  size = 'tiny',
  className,
  label,
  ...rest
}) => (
  <Button
    skin={skin}
    size={size}
    className={classNames(styles.item, className)}
    {...rest}
  >
    {label}
  </Button>
);

TagListAction.propTypes = {
  dataHook: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['tiny', 'small', 'medium']),
};

TagList.displayName = 'TagList';

TagList.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** List of tags props to be rendered */
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,

  /** The size of each individual `<Tag />` */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /** Action button label and onClick handler */
  actionButton: PropTypes.shape({
    onClick: PropTypes.func,
    label: PropTypes.string,
  }),
};

export default TagList;
