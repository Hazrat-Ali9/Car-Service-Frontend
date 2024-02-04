export var areViewsEqual = function areViewsEqual(views, expectedViews) {
  if (views.length !== expectedViews.length) {
    return false;
  }
  return expectedViews.every(function (expectedView) {
    return views.includes(expectedView);
  });
};
export var applyDefaultViewProps = function applyDefaultViewProps(_ref) {
  var openTo = _ref.openTo,
    defaultOpenTo = _ref.defaultOpenTo,
    views = _ref.views,
    defaultViews = _ref.defaultViews;
  var viewsWithDefault = views != null ? views : defaultViews;
  var openToWithDefault;
  if (openTo != null) {
    openToWithDefault = openTo;
  } else if (viewsWithDefault.includes(defaultOpenTo)) {
    openToWithDefault = defaultOpenTo;
  } else if (viewsWithDefault.length > 0) {
    openToWithDefault = viewsWithDefault[0];
  } else {
    throw new Error('MUI: The `views` prop must contain at least one view');
  }
  return {
    views: viewsWithDefault,
    openTo: openToWithDefault
  };
};