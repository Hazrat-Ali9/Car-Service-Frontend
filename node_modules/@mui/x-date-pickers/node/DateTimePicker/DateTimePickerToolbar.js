"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTimePickerToolbar = DateTimePickerToolbar;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = require("@mui/material/styles");
var _utils = require("@mui/utils");
var _PickersToolbarText = require("../internals/components/PickersToolbarText");
var _PickersToolbar = require("../internals/components/PickersToolbar");
var _PickersToolbarButton = require("../internals/components/PickersToolbarButton");
var _useUtils = require("../internals/hooks/useUtils");
var _dateTimePickerToolbarClasses = require("./dateTimePickerToolbarClasses");
var _dateHelpersHooks = require("../internals/hooks/date-helpers-hooks");
var _dimensions = require("../internals/constants/dimensions");
var _dateUtils = require("../internals/utils/date-utils");
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["ampm", "ampmInClock", "value", "onChange", "view", "isLandscape", "onViewChange", "toolbarFormat", "toolbarPlaceholder", "views", "disabled", "readOnly", "toolbarVariant"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const useUtilityClasses = ownerState => {
  const {
    classes,
    theme,
    isLandscape
  } = ownerState;
  const slots = {
    root: ['root'],
    dateContainer: ['dateContainer'],
    timeContainer: ['timeContainer', theme.direction === 'rtl' && 'timeLabelReverse'],
    timeDigitsContainer: ['timeDigitsContainer', theme.direction === 'rtl' && 'timeLabelReverse'],
    separator: ['separator'],
    ampmSelection: ['ampmSelection', isLandscape && 'ampmLandscape'],
    ampmLabel: ['ampmLabel']
  };
  return (0, _utils.unstable_composeClasses)(slots, _dateTimePickerToolbarClasses.getDateTimePickerToolbarUtilityClass, classes);
};
const DateTimePickerToolbarRoot = (0, _styles.styled)(_PickersToolbar.PickersToolbar, {
  name: 'MuiDateTimePickerToolbar',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => ({
  paddingLeft: ownerState.toolbarVariant === 'desktop' && !ownerState.isLandscape ? 24 : 16,
  paddingRight: ownerState.toolbarVariant === 'desktop' && !ownerState.isLandscape ? 0 : 16,
  borderBottom: ownerState.toolbarVariant === 'desktop' ? `1px solid ${(theme.vars || theme).palette.divider}` : undefined,
  borderRight: ownerState.toolbarVariant === 'desktop' && ownerState.isLandscape ? `1px solid ${(theme.vars || theme).palette.divider}` : undefined,
  justifyContent: 'space-around',
  position: 'relative'
}));
DateTimePickerToolbarRoot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: _propTypes.default.elementType,
  classes: _propTypes.default.object,
  className: _propTypes.default.string,
  isLandscape: _propTypes.default.bool.isRequired,
  isMobileKeyboardViewOpen: _propTypes.default.bool,
  landscapeDirection: _propTypes.default.oneOf(['column', 'row']),
  ownerState: _propTypes.default.object.isRequired,
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),
  toggleMobileKeyboardView: _propTypes.default.func,
  toolbarTitle: _propTypes.default.node,
  viewType: _propTypes.default.oneOf(['date', 'time'])
};
const DateTimePickerToolbarDateContainer = (0, _styles.styled)('div', {
  name: 'MuiDateTimePickerToolbar',
  slot: 'DateContainer',
  overridesResolver: (props, styles) => styles.dateContainer
})({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
});
const DateTimePickerToolbarTimeContainer = (0, _styles.styled)('div', {
  name: 'MuiDateTimePickerToolbar',
  slot: 'TimeContainer',
  overridesResolver: (props, styles) => styles.timeContainer
})(({
  theme,
  ownerState
}) => {
  const direction = ownerState.isLandscape && ownerState.toolbarVariant !== 'desktop' ? 'column' : 'row';
  return (0, _extends2.default)({
    display: 'flex',
    flexDirection: direction
  }, ownerState.toolbarVariant === 'desktop' && (0, _extends2.default)({}, !ownerState.isLandscape && {
    gap: 9,
    marginRight: 4,
    alignSelf: 'flex-end'
  }), theme.direction === 'rtl' && {
    flexDirection: `${direction}-reverse`
  });
});
const DateTimePickerToolbarTimeDigitsContainer = (0, _styles.styled)('div', {
  name: 'MuiDateTimePickerToolbar',
  slot: 'TimeDigitsContainer',
  overridesResolver: (props, styles) => styles.timeDigitsContainer
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  display: 'flex'
}, ownerState.toolbarVariant === 'desktop' && {
  gap: 1.5
}, theme.direction === 'rtl' && {
  flexDirection: 'row-reverse'
}));
DateTimePickerToolbarTimeContainer.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: _propTypes.default.elementType,
  ownerState: _propTypes.default.object.isRequired,
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object])
};
const DateTimePickerToolbarSeparator = (0, _styles.styled)(_PickersToolbarText.PickersToolbarText, {
  name: 'MuiDateTimePickerToolbar',
  slot: 'Separator',
  overridesResolver: (props, styles) => styles.separator
})(({
  ownerState
}) => ({
  margin: ownerState.toolbarVariant === 'desktop' ? 0 : '0 4px 0 2px',
  cursor: 'default'
}));

// Taken from TimePickerToolbar
const DateTimePickerToolbarAmPmSelection = (0, _styles.styled)('div', {
  name: 'MuiDateTimePickerToolbar',
  slot: 'AmPmSelection',
  overridesResolver: (props, styles) => [{
    [`.${_dateTimePickerToolbarClasses.dateTimePickerToolbarClasses.ampmLabel}`]: styles.ampmLabel
  }, {
    [`&.${_dateTimePickerToolbarClasses.dateTimePickerToolbarClasses.ampmLandscape}`]: styles.ampmLandscape
  }, styles.ampmSelection]
})(({
  ownerState
}) => (0, _extends2.default)({
  display: 'flex',
  flexDirection: 'column',
  marginRight: 'auto',
  marginLeft: 12
}, ownerState.isLandscape && {
  margin: '4px 0 auto',
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: '100%'
}, {
  [`& .${_dateTimePickerToolbarClasses.dateTimePickerToolbarClasses.ampmLabel}`]: {
    fontSize: 17
  }
}));

/**
 * Demos:
 *
 * - [DateTimePicker](https://mui.com/x/react-date-pickers/date-time-picker/)
 * - [Custom components](https://mui.com/x/react-date-pickers/custom-components/)
 *
 * API:
 *
 * - [DateTimePickerToolbar API](https://mui.com/x/api/date-pickers/date-time-picker-toolbar/)
 */
function DateTimePickerToolbar(inProps) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiDateTimePickerToolbar'
  });
  const {
      ampm,
      ampmInClock,
      value,
      onChange,
      view,
      isLandscape,
      onViewChange,
      toolbarFormat,
      toolbarPlaceholder = '––',
      views,
      disabled,
      readOnly,
      toolbarVariant = 'mobile'
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = props;
  const utils = (0, _useUtils.useUtils)();
  const {
    meridiemMode,
    handleMeridiemChange
  } = (0, _dateHelpersHooks.useMeridiemMode)(value, ampm, onChange);
  const showAmPmControl = Boolean(ampm && !ampmInClock);
  const isDesktop = toolbarVariant === 'desktop';
  const localeText = (0, _useUtils.useLocaleText)();
  const theme = (0, _styles.useTheme)();
  const classes = useUtilityClasses((0, _extends2.default)({}, ownerState, {
    theme
  }));
  const formatHours = time => ampm ? utils.format(time, 'hours12h') : utils.format(time, 'hours24h');
  const dateText = React.useMemo(() => {
    if (!value) {
      return toolbarPlaceholder;
    }
    if (toolbarFormat) {
      return utils.formatByString(value, toolbarFormat);
    }
    return utils.format(value, 'shortDate');
  }, [value, toolbarFormat, toolbarPlaceholder, utils]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(DateTimePickerToolbarRoot, (0, _extends2.default)({
    toolbarTitle: localeText.dateTimePickerToolbarTitle,
    isLandscape: isLandscape,
    className: classes.root
  }, other, {
    ownerState: ownerState,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(DateTimePickerToolbarDateContainer, {
      className: classes.dateContainer,
      ownerState: ownerState,
      children: [views.includes('year') && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.PickersToolbarButton, {
        tabIndex: -1,
        variant: "subtitle1",
        onClick: () => onViewChange('year'),
        selected: view === 'year',
        value: value ? utils.format(value, 'year') : '–'
      }), views.includes('day') && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.PickersToolbarButton, {
        tabIndex: -1,
        variant: isDesktop ? 'h5' : 'h4',
        onClick: () => onViewChange('day'),
        selected: view === 'day',
        value: dateText
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(DateTimePickerToolbarTimeContainer, {
      className: classes.timeContainer,
      ownerState: ownerState,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(DateTimePickerToolbarTimeDigitsContainer, {
        className: classes.timeDigitsContainer,
        ownerState: ownerState,
        children: [views.includes('hours') && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.PickersToolbarButton, {
          variant: isDesktop ? 'h5' : 'h3',
          width: isDesktop && !isLandscape ? _dimensions.MULTI_SECTION_CLOCK_SECTION_WIDTH : undefined,
          onClick: () => onViewChange('hours'),
          selected: view === 'hours',
          value: value ? formatHours(value) : '--'
        }), views.includes('minutes') && /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(DateTimePickerToolbarSeparator, {
            variant: isDesktop ? 'h5' : 'h3',
            value: ":",
            className: classes.separator,
            ownerState: ownerState
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.PickersToolbarButton, {
            variant: isDesktop ? 'h5' : 'h3',
            width: isDesktop && !isLandscape ? _dimensions.MULTI_SECTION_CLOCK_SECTION_WIDTH : undefined,
            onClick: () => onViewChange('minutes'),
            selected: view === 'minutes',
            value: value ? utils.format(value, 'minutes') : '--'
          })]
        }), views.includes('seconds') && /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(DateTimePickerToolbarSeparator, {
            variant: isDesktop ? 'h5' : 'h3',
            value: ":",
            className: classes.separator,
            ownerState: ownerState
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.PickersToolbarButton, {
            variant: isDesktop ? 'h5' : 'h3',
            width: isDesktop && !isLandscape ? _dimensions.MULTI_SECTION_CLOCK_SECTION_WIDTH : undefined,
            onClick: () => onViewChange('seconds'),
            selected: view === 'seconds',
            value: value ? utils.format(value, 'seconds') : '--'
          })]
        })]
      }), showAmPmControl && !isDesktop && /*#__PURE__*/(0, _jsxRuntime.jsxs)(DateTimePickerToolbarAmPmSelection, {
        className: classes.ampmSelection,
        ownerState: ownerState,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.PickersToolbarButton, {
          variant: "subtitle2",
          selected: meridiemMode === 'am',
          typographyClassName: classes.ampmLabel,
          value: (0, _dateUtils.formatMeridiem)(utils, 'am'),
          onClick: readOnly ? undefined : () => handleMeridiemChange('am'),
          disabled: disabled
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.PickersToolbarButton, {
          variant: "subtitle2",
          selected: meridiemMode === 'pm',
          typographyClassName: classes.ampmLabel,
          value: (0, _dateUtils.formatMeridiem)(utils, 'pm'),
          onClick: readOnly ? undefined : () => handleMeridiemChange('pm'),
          disabled: disabled
        })]
      }), ampm && isDesktop && /*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersToolbarButton.PickersToolbarButton, {
        variant: "h5",
        onClick: () => onViewChange('meridiem'),
        selected: view === 'meridiem',
        value: value && meridiemMode ? (0, _dateUtils.formatMeridiem)(utils, meridiemMode) : '--',
        width: _dimensions.MULTI_SECTION_CLOCK_SECTION_WIDTH
      })]
    })]
  }));
}
process.env.NODE_ENV !== "production" ? DateTimePickerToolbar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  ampm: _propTypes.default.bool,
  ampmInClock: _propTypes.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: _propTypes.default.object,
  /**
   * className applied to the root component.
   */
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden: _propTypes.default.bool,
  isLandscape: _propTypes.default.bool.isRequired,
  onChange: _propTypes.default.func.isRequired,
  /**
   * Callback called when a toolbar is clicked
   * @template TView
   * @param {TView} view The view to open
   */
  onViewChange: _propTypes.default.func.isRequired,
  readOnly: _propTypes.default.bool,
  sx: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object, _propTypes.default.bool])), _propTypes.default.func, _propTypes.default.object]),
  titleId: _propTypes.default.string,
  /**
   * Toolbar date format.
   */
  toolbarFormat: _propTypes.default.string,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: _propTypes.default.node,
  toolbarVariant: _propTypes.default.oneOf(['desktop', 'mobile']),
  value: _propTypes.default.any,
  /**
   * Currently visible picker view.
   */
  view: _propTypes.default.oneOf(['day', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'year']).isRequired,
  views: _propTypes.default.arrayOf(_propTypes.default.oneOf(['day', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'year']).isRequired).isRequired
} : void 0;