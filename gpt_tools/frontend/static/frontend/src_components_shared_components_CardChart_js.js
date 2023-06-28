/*! For license information please see src_components_shared_components_CardChart_js.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([["src_components_shared_components_CardChart_js"],{"./src/components/shared/components/CardChart.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/ResponsiveContainer.js");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/AreaChart.js");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/XAxis.js");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/YAxis.js");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/Area.js");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Tooltip.js");\n/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Menu/Menu.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");\n/* harmony import */ var _mui_styles_withStyles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/styles/withStyles */ "./node_modules/@mui/styles/withStyles/withStyles.js");\n/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/MoreVert */ "./node_modules/@mui/icons-material/MoreVert.js");\n\n\n\n\n\n\n\nconst styles = theme => ({\n  cardContentInner: {\n    marginTop: theme.spacing(-4)\n  }\n});\nfunction labelFormatter(label) {\n  return (0,date_fns_format__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(label * 1000), "MMMM d, p yyyy");\n}\nfunction calculateMin(data, yKey, factor) {\n  let max = Number.POSITIVE_INFINITY;\n  data.forEach(element => {\n    if (max > element[yKey]) {\n      max = element[yKey];\n    }\n  });\n  return Math.round(max - max * factor);\n}\nconst itemHeight = 216;\nconst options = ["1 Week", "1 Month", "6 Months"];\nfunction CardChart(props) {\n  const {\n    color,\n    data,\n    title,\n    classes,\n    theme,\n    height\n  } = props;\n  const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("1 Month");\n  const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {\n    setAnchorEl(event.currentTarget);\n  }, [setAnchorEl]);\n  const formatter = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(value => {\n    return [value, title];\n  }, [title]);\n  const getSubtitle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {\n    switch (selectedOption) {\n      case "1 Week":\n        return "Last week";\n      case "1 Month":\n        return "Last month";\n      case "6 Months":\n        return "Last 6 months";\n      default:\n        throw new Error("No branch selected in switch-statement");\n    }\n  }, [selectedOption]);\n  const processData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {\n    let seconds;\n    switch (selectedOption) {\n      case "1 Week":\n        seconds = 60 * 60 * 24 * 7;\n        break;\n      case "1 Month":\n        seconds = 60 * 60 * 24 * 31;\n        break;\n      case "6 Months":\n        seconds = 60 * 60 * 24 * 31 * 6;\n        break;\n      default:\n        throw new Error("No branch selected in switch-statement");\n    }\n    const minSeconds = new Date() / 1000 - seconds;\n    const arr = [];\n    for (let i = 0; i < data.length; i += 1) {\n      if (minSeconds < data[i].timestamp) {\n        arr.unshift(data[i]);\n      }\n    }\n    return arr;\n  }, [data, selectedOption]);\n  const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {\n    setAnchorEl(null);\n  }, [setAnchorEl]);\n  const selectOption = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(selectedOption => {\n    setSelectedOption(selectedOption);\n    handleClose();\n  }, [setSelectedOption, handleClose]);\n  const isOpen = Boolean(anchorEl);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    pt: 2,\n    px: 2,\n    pb: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    display: "flex",\n    justifyContent: "space-between"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    variant: "subtitle1"\n  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    variant: "body2",\n    color: "textSecondary"\n  }, getSubtitle())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {\n    "aria-label": "More",\n    "aria-owns": isOpen ? "long-menu" : undefined,\n    "aria-haspopup": "true",\n    onClick: handleClick,\n    size: "large"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    id: "long-menu",\n    anchorEl: anchorEl,\n    open: isOpen,\n    onClose: handleClose,\n    PaperProps: {\n      style: {\n        maxHeight: itemHeight,\n        width: 200\n      }\n    },\n    disableScrollLock: true\n  }, options.map(option => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {\n    key: option,\n    selected: option === selectedOption,\n    onClick: () => {\n      selectOption(option);\n    },\n    name: option\n  }, option)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    className: classes.cardContentInner,\n    height: height\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(recharts__WEBPACK_IMPORTED_MODULE_10__.ResponsiveContainer, {\n    width: "100%",\n    height: "100%"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(recharts__WEBPACK_IMPORTED_MODULE_11__.AreaChart, {\n    data: processData(),\n    type: "number"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(recharts__WEBPACK_IMPORTED_MODULE_12__.XAxis, {\n    dataKey: "timestamp",\n    type: "number",\n    domain: ["dataMin", "dataMax"],\n    hide: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(recharts__WEBPACK_IMPORTED_MODULE_13__.YAxis, {\n    domain: [calculateMin(data, "value", 0.05), "dataMax"],\n    hide: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(recharts__WEBPACK_IMPORTED_MODULE_14__.Area, {\n    type: "monotone",\n    dataKey: "value",\n    stroke: color,\n    fill: color\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(recharts__WEBPACK_IMPORTED_MODULE_15__.Tooltip, {\n    labelFormatter: labelFormatter,\n    formatter: formatter,\n    cursor: false,\n    contentStyle: {\n      border: "none",\n      padding: theme.spacing(1),\n      borderRadius: theme.shape.borderRadius,\n      boxShadow: theme.shadows[1]\n    },\n    labelStyle: theme.typography.body1,\n    itemStyle: {\n      fontSize: theme.typography.body1.fontSize,\n      letterSpacing: theme.typography.body1.letterSpacing,\n      fontFamily: theme.typography.body1.fontFamily,\n      lineHeight: theme.typography.body1.lineHeight,\n      fontWeight: theme.typography.body1.fontWeight\n    }\n  }))))));\n}\nCardChart.propTypes = {\n  color: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string).isRequired,\n  data: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().array).isRequired,\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string).isRequired,\n  classes: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().object).isRequired,\n  theme: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().object).isRequired,\n  height: (prop_types__WEBPACK_IMPORTED_MODULE_16___default().string).isRequired\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_styles_withStyles__WEBPACK_IMPORTED_MODULE_17__["default"])(styles, {\n  withTheme: true\n})(CardChart));\n\n//# sourceURL=webpack://frontend/./src/components/shared/components/CardChart.js?')}}]);