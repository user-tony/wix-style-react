import PropTypes from 'prop-types';
import React from 'react';
import ChevronRight from 'wix-ui-icons-common/ChevronRight';
import More from 'wix-ui-icons-common/More';
import PopoverMenu from '../PopoverMenu';
import Button from '../Button';
import IconButton from '../IconButton';
import Tooltip from '../Tooltip';
import { dataHooks } from './constants';
import HoverSlot from './HoverSlot';
import { classes } from './TableActionCell.st.css';
import { TooltipCommonProps } from '../common/PropTypes/TooltipCommon';

/* eslint-disable react/prop-types */
function renderPrimaryAction({ text, skin, onClick, disabled }) {
  return (
    <Button
      disabled={disabled}
      skin={skin}
      onClick={event => {
        onClick();

        // Making sure we don't also trigger onRowClick
        event.stopPropagation();
      }}
    >
      {text}
    </Button>
  );
}
/* eslint-enable react/prop-types */

function renderVisibleActions(actions) {
  return actions.map(
    (
      {
        text,
        icon,
        onClick,
        dataHook,
        disabled,
        disabledDescription,
        tooltipProps,
      },
      index,
    ) => (
      <Tooltip
        key={index}
        dataHook={dataHook || dataHooks.tableActionCellVisibleActionTooltip}
        disabled={disabled && disabledDescription === ''}
        content={
          disabled && Boolean(disabledDescription) ? disabledDescription : text
        }
        {...tooltipProps}
      >
        <IconButton
          skin="inverted"
          disabled={disabled}
          onClick={event => {
            onClick();
            event.stopPropagation();
          }}
        >
          {icon}
        </IconButton>
      </Tooltip>
    ),
  );
}

function renderHiddenActions(actions, popoverMenuProps) {
  return (
    <PopoverMenu
      dataHook={dataHooks.tableActionCellPopoverMenu}
      appendTo="parent"
      placement="top"
      textSize="small"
      triggerElement={
        <IconButton skin="inverted" dataHook={dataHooks.triggerElement}>
          <More />
        </IconButton>
      }
      {...popoverMenuProps}
    >
      {actions.map(
        ({ text, icon, onClick, disabled, dataHook, divider }, index) =>
          !divider ? (
            <PopoverMenu.MenuItem
              key={index}
              dataHook={dataHook || dataHooks.tableActionCellPopoverMenuItem}
              prefixIcon={icon}
              onClick={() => onClick()}
              text={text}
              disabled={disabled}
            />
          ) : (
            <PopoverMenu.Divider />
          ),
      )}
    </PopoverMenu>
  );
}

function renderPlaceholder() {
  return (
    <IconButton skin="inverted">
      <ChevronRight />
    </IconButton>
  );
}

const TableActionCell = props => {
  const {
    dataHook,
    primaryAction,
    secondaryActions,
    numOfVisibleSecondaryActions,
    alwaysShowSecondaryActions,
    popoverMenuProps,
  } = props;

  const visibleActions = secondaryActions.slice(
    0,
    numOfVisibleSecondaryActions,
  );
  const hiddenActions = secondaryActions.slice(numOfVisibleSecondaryActions);

  return (
    <span data-hook={dataHook} className={classes.root}>
      {primaryAction && (
        <HoverSlot
          display="onHover"
          data-hook={dataHooks.tableActionCellPrimaryAction}
        >
          {renderPrimaryAction(primaryAction)}
        </HoverSlot>
      )}

      {visibleActions.length > 0 && (
        <HoverSlot
          display={alwaysShowSecondaryActions ? 'always' : 'onHover'}
          data-hook={dataHooks.tableActionCellVisibleActions}
        >
          {renderVisibleActions(visibleActions)}
        </HoverSlot>
      )}

      {hiddenActions.length > 0 && (
        <div onClick={e => e.stopPropagation()} className={classes.popoverMenu}>
          <HoverSlot display="always">
            {renderHiddenActions(hiddenActions, popoverMenuProps)}
          </HoverSlot>
        </div>
      )}

      {primaryAction &&
        (!secondaryActions.length ||
          secondaryActions.length === numOfVisibleSecondaryActions) && (
          <HoverSlot
            display="notOnHover"
            className={classes.placeholderIcon}
            data-hook={dataHooks.tableActionCellPlaceholder}
          >
            {renderPlaceholder()}
          </HoverSlot>
        )}
    </span>
  );
};

TableActionCell.displayName = 'TableActionCell';

TableActionCell.propTypes = {
  dataHook: PropTypes.string,

  /**
   * An object containing the primary action properties: `text` is the action
   * text , `theme` is the button theme (can be `whiteblue` or `fullblue`),
   * `onClick` is the callback function for the action, whose signature is
   * `onClick(rowData, rowNum)`.
   * `disabled` is an optional prop for the primary action to be disabled
   */
  primaryAction: PropTypes.shape({
    text: PropTypes.string.isRequired,
    skin: PropTypes.oneOf(['standard', 'inverted']),
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  }),

  /**
   * An array containing the secondary actions: `text` is the action text
   * (will be shown in the tooltip), `icon` is the icon component for the
   * action, `onClick` is the callback function for the action, whose
   * signature is `onClick(rowData, rowNum)`.
   * `disabled` is an optional prop for the secondary action to be disabled
   * `dataHook` is an optional prop for accessing the action in tests
   * 'disabledDescription' is an optional prop that indicates what string to display in tooltip when action is visible and disabled (if none is provided, the text prop is used. if empty string is provided, no tooltip will be displayed)
   * 'tooltipProps' is an optional prop for controlling the tooltip shown when the action is visible
   * 'divider' is an optional prop to display a divider between the action items
   */
  secondaryActions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      onClick: PropTypes.func.isRequired,
      disabled: PropTypes.bool,
      dataHook: PropTypes.string,
      disabledDescription: PropTypes.string,
      tooltipProps: PropTypes.shape(TooltipCommonProps),
      divider: PropTypes.bool,
    }),
  ),

  /** The number of secondary actions to show outside the PopoverMenu */
  numOfVisibleSecondaryActions: PropTypes.number,

  /** Whether to show the secondary action also when not hovering the row */
  alwaysShowSecondaryActions: PropTypes.bool,

  /** Props being passed to the secondary actions' <PopoverMenu/> */
  popoverMenuProps: PropTypes.shape(PopoverMenu.propTypes),
};

TableActionCell.defaultProps = {
  primaryAction: null,
  secondaryActions: [],
  numOfVisibleSecondaryActions: 0,
  alwaysShowSecondaryActions: false,
};

export default TableActionCell;
