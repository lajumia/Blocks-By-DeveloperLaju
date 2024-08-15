/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/heading/components/btn-alignment.js":
/*!*************************************************!*\
  !*** ./src/heading/components/btn-alignment.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// CustomButton.js

const AlignButton = ({
  isPrimary,
  onClick,
  children
}) => {
  const buttonStyle = {
    padding: "2px 10px",
    margin: "1px 1px",
    backgroundColor: isPrimary ? "#fe0000" : "#f0f0f0",
    color: isPrimary ? "#fff" : "#000",
    border: isPrimary ? "#fe0000" : "#f0f0f0",
    cursor: "pointer",
    borderRadius: "2px"
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    style: buttonStyle,
    className: "align-btn",
    onClick: onClick
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlignButton);

/***/ }),

/***/ "./src/heading/components/btn-tag.js":
/*!*******************************************!*\
  !*** ./src/heading/components/btn-tag.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// CustomButton.js

const TagButton = ({
  isPrimary,
  onClick,
  children
}) => {
  const buttonStyle = {
    padding: "2px 10px",
    margin: "1px 1px",
    backgroundColor: isPrimary ? "#fe0000" : "#f0f0f0",
    color: isPrimary ? "#fff" : "#000",
    border: isPrimary ? "#fe0000" : "#f0f0f0",
    cursor: "pointer",
    borderRadius: "2px"
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    style: buttonStyle,
    className: "single-btn",
    onClick: onClick
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagButton);

/***/ }),

/***/ "./src/heading/components/number-input.js":
/*!************************************************!*\
  !*** ./src/heading/components/number-input.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const NumnerInput = ({
  value,
  onChange
}) => {
  const buttonStyle = {
    width: "90px"
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    style: buttonStyle,
    type: "number",
    value: value,
    onChange: onChange
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumnerInput);

/***/ }),

/***/ "./src/heading/components/spacing-control.js":
/*!***************************************************!*\
  !*** ./src/heading/components/spacing-control.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);




const SpacingControl = ({
  attributes,
  setAttributes
}) => {
  const {
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight
  } = attributes;
  const onChangeMarginTop = newMarginTop => {
    setAttributes({
      marginTop: newMarginTop
    });
  };
  const onChangeMarginRight = newMarginRight => {
    setAttributes({
      marginRight: newMarginRight
    });
  };
  const onChangeMarginBottom = newMarginBottom => {
    setAttributes({
      marginBottom: newMarginBottom
    });
  };
  const onChangeMarginLeft = newMarginLeft => {
    setAttributes({
      marginLeft: newMarginLeft
    });
  };
  const onChangePaddingTop = newPaddingTop => {
    setAttributes({
      paddingTop: newPaddingTop
    });
  };
  const onChangePaddingRight = newPaddingRight => {
    setAttributes({
      paddingRight: newPaddingRight
    });
  };
  const onChangePaddingBottom = newPaddingBottom => {
    setAttributes({
      paddingBottom: newPaddingBottom
    });
  };
  const onChangePaddingLeft = newPaddingLeft => {
    setAttributes({
      paddingLeft: newPaddingLeft
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spacing-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Spacing", "bbdl")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "margin-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "margin-control__title"
  }, "Margin"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "margin-control__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mc-child margin-control__content__top"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    value: marginTop,
    onChange: onChangeMarginTop,
    type: "number"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Top")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mc-child margin-control__content__right"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    value: marginRight,
    onChange: onChangeMarginRight,
    type: "number"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Right")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mc-child margin-control__content__bottom"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    value: marginBottom,
    onChange: onChangeMarginBottom,
    type: "number"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Bottom")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mc-child margin-control__content__left"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    value: marginLeft,
    onChange: onChangeMarginLeft,
    type: "number"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Left")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "padding-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginTop: "20px"
    },
    className: "padding-control__title"
  }, "Padding"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "padding-control__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pc-child padding-control__content__top"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    value: paddingTop,
    onChange: onChangePaddingTop,
    type: "number"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Top")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pc-child padding-control__content__right"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    value: paddingRight,
    onChange: onChangePaddingRight,
    type: "number"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Right")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pc-child padding-control__content__bottom"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    value: paddingBottom,
    onChange: onChangePaddingBottom,
    type: "number"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Bottom")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pc-child padding-control__content__left"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    value: paddingLeft,
    onChange: onChangePaddingLeft,
    type: "number"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Left"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpacingControl);

/***/ }),

/***/ "./src/heading/edit.js":
/*!*****************************!*\
  !*** ./src/heading/edit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_btn_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/btn-tag */ "./src/heading/components/btn-tag.js");
/* harmony import */ var _components_btn_alignment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/btn-alignment */ "./src/heading/components/btn-alignment.js");
/* harmony import */ var _components_number_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/number-input */ "./src/heading/components/number-input.js");
/* harmony import */ var _components_spacing_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/spacing-control */ "./src/heading/components/spacing-control.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */








/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit({
  attributes,
  setAttributes
}) {
  const {
    content,
    selectedTag,
    selectedAlign,
    textColor,
    backgroundColor,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    fontStyle,
    textTransform,
    textDecoration,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight
  } = attributes;
  const [isPopoverVisible, setIsPopoverVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [isBgPopoverVisible, setIsBgPopoverVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const buttonType = ["H1", "H2", "H3", "H4", "H5", "H6", "p", "span", "div"];
  const buttonAlign = ["Left", "Center", "Right"];
  const onChangeContent = newContent => {
    setAttributes({
      content: newContent
    });
  };
  const onClickButton = index => {
    setAttributes({
      selectedTag: index
    });
  };
  const onClickAlignChange = index => {
    setAttributes({
      selectedAlign: index
    });
  };
  const onChangeColor = newColor => {
    setAttributes({
      textColor: newColor
    });
  };
  const onChangeBgColor = newColor => {
    setAttributes({
      backgroundColor: newColor
    });
  };
  const onChangeTextFontFamily = newFontFamily => {
    setAttributes({
      fontFamily: newFontFamily
    });
  };
  const onChangeFontSize = event => {
    const newSize = event.target.value;
    setAttributes({
      fontSize: parseInt(newSize)
    });
  };
  const onChangeFontWeight = newWeight => {
    setAttributes({
      fontWeight: newWeight
    });
  };
  const onChangeLineHeight = event => {
    const newHeight = event.target.value;
    setAttributes({
      lineHeight: parseInt(newHeight)
    });
  };
  const onChangeLetterSpacing = event => {
    const newSpacing = event.target.value;
    setAttributes({
      letterSpacing: parseInt(newSpacing)
    });
  };
  const onChangeFontStyle = newStyle => {
    setAttributes({
      fontStyle: newStyle
    });
  };
  const onChangeTextTransform = newTransform => {
    setAttributes({
      textTransform: newTransform
    });
  };
  const onChangeTextDecoration = newDecoration => {
    setAttributes({
      textDecoration: newDecoration
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.TabPanel, {
    className: "heading-tab-panel",
    activeClass: "h-active-tab",
    tabs: [{
      name: "layout",
      title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Dashicon, {
        icon: "layout"
      }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Layout", "tabbed-inspector-block")),
      className: "layout-tab tab-item"
    }, {
      name: "style",
      title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Dashicon, {
        icon: "color-picker"
      }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Style", "tabbed-inspector-block")),
      className: "style-tab tab-item"
    }, {
      name: "advanced",
      title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Dashicon, {
        icon: "admin-generic"
      }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Advanced", "tabbed-inspector-block")),
      className: "advanced-tab tab-item"
    }]
  }, tab => {
    switch (tab.name) {
      case "layout":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Content", "bbdl")
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.TextareaControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title", "developerlaju"),
          value: content,
          onChange: onChangeContent
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          style: {
            margin: "4px 0px"
          }
        }, "Titla Tag"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.ButtonGroup, {
          className: "bbdl_btn_group"
        }, buttonType.map((type, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_btn_tag__WEBPACK_IMPORTED_MODULE_4__["default"], {
          isPrimary: selectedTag === index,
          onClick: () => onClickButton(index)
        }, type))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          style: {
            margin: "20px 0px 5px 0px"
          }
        }, "Alignment"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.ButtonGroup, {
          className: "bbdl-btn-align"
        }, buttonAlign.map((align, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_btn_alignment__WEBPACK_IMPORTED_MODULE_5__["default"], {
          isPrimary: selectedAlign === index,
          onClick: () => onClickAlignChange(index)
        }, align))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          style: {
            margin: "20px 0px 5px 0px"
          }
        }));
      case "style":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title", "bbdl")
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "text-color-picker"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "tc-label"
        }, "Text Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "tc-content"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Button, {
          style: {
            backgroundColor: textColor,
            width: "25px",
            height: "25px",
            borderRadius: "10%"
          },
          className: "text-color-btn",
          onClick: () => setIsPopoverVisible(true)
        })), isPopoverVisible && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Popover, {
          position: "top left",
          onClose: () => setIsPopoverVisible(false)
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.ColorPicker, {
          color: textColor,
          onChange: onChangeColor,
          enableAlpha: true
        }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "bg-color-picker"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "bg-label"
        }, "Background Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "bg-content"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Button, {
          style: {
            backgroundColor: backgroundColor,
            width: "25px",
            height: "25px",
            borderRadius: "10%"
          },
          className: "bg-color-btn",
          onClick: () => setIsBgPopoverVisible(true)
        })), isBgPopoverVisible && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Popover, {
          position: "top right",
          onClose: () => setIsBgPopoverVisible(false)
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.ColorPicker, {
          color: backgroundColor,
          onChange: onChangeBgColor,
          enableAlpha: true
        }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "font-family"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Font Family"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "font-family-picker"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.SelectControl, {
          value: fontFamily,
          style: {
            width: "90px"
          },
          options: [{
            label: "Arial",
            value: "Arial, sans-serif"
          }, {
            label: "Georgia",
            value: "Georgia, serif"
          }, {
            label: "Times New Roman",
            value: '"Times New Roman", Times, serif'
          }, {
            label: "Courier New",
            value: '"Courier New", Courier, monospace'
          }, {
            label: "Verdana",
            value: "Verdana, sans-serif"
          }, {
            label: "Tahoma",
            value: "Tahoma, sans-serif"
          }, {
            label: "Trebuchet MS",
            value: '"Trebuchet MS", sans-serif'
          }, {
            label: "Lucida Sans",
            value: '"Lucida Sans", sans-serif'
          }],
          onChange: onChangeTextFontFamily
        }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "font-size"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Font Size"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "f-size-picker"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_number_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: fontSize,
          onChange: onChangeFontSize
        }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "font-weight"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Font weight"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "f-weight-picker"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.SelectControl, {
          value: fontWeight,
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("100", "font-weight-control"),
            value: "100"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("200", "font-weight-control"),
            value: "200"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("300", "font-weight-control"),
            value: "300"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("400", "font-weight-control"),
            value: "400"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("500", "font-weight-control"),
            value: "500"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("600", "font-weight-control"),
            value: "600"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bold", "font-weight-control"),
            value: "700"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Extra Bold", "font-weight-control"),
            value: "800"
          }],
          onChange: onChangeFontWeight
        }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "line-height"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Line Heignt"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "line-height-picker"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_number_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: lineHeight,
          onChange: onChangeLineHeight
        }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "latter-spacing"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Latter Spacing"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "latter-spacing-picker"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_number_input__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: letterSpacing,
          onChange: onChangeLetterSpacing
        }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "font-style"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Font Style"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "f-style-picker"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.SelectControl, {
          value: fontStyle,
          style: {
            width: "90px"
          },
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Normal", "font-weight-control"),
            value: "normal"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Italic", "font-weight-control"),
            value: "italic"
          }],
          onChange: onChangeFontStyle
        }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "text-transform"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Text Transform"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "text-transform-picker"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.SelectControl, {
          value: textTransform,
          style: {
            width: "90px"
          },
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("None", "font-weight-control"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Capitalize", "font-weight-control"),
            value: "capitalize"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Uppercase", "font-weight-control"),
            value: "uppercase"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Lowercase", "font-weight-control"),
            value: "lowercase"
          }],
          onChange: onChangeTextTransform
        }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "text-decoration"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Text Decoration"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "text-decoration-picker"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.SelectControl, {
          value: textDecoration,
          style: {
            width: "90px"
          },
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("None", "font-weight-control"),
            value: "none"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Underline", "font-weight-control"),
            value: "underline"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Line Through", "font-weight-control"),
            value: "line-through"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Overline", "font-weight-control"),
            value: "overline"
          }],
          onChange: onChangeTextDecoration
        }))));
      case "advanced":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "advanceTab"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_spacing_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
          attributes: attributes,
          setAttributes: setAttributes
        }));
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: buttonType[selectedTag],
    style: {
      textAlign: buttonAlign[selectedAlign],
      color: textColor,
      backgroundColor: backgroundColor,
      fontFamily: fontFamily,
      fontSize: `${fontSize}px`,
      fontWeight: fontWeight,
      lineHeight: lineHeight,
      letterSpacing: `${letterSpacing}px`,
      fontStyle: fontStyle,
      textTransform: textTransform,
      textDecoration: textDecoration,
      margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
      padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`
    },
    className: "wp-block-headingg",
    value: content,
    onChange: onChangeContent
  })));
}

/***/ }),

/***/ "./src/heading/save.js":
/*!*****************************!*\
  !*** ./src/heading/save.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
function save({
  attributes
}) {
  const {
    content,
    selectedButton,
    selectedAlign,
    Link,
    textColor,
    backgroundColor,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    fontStyle,
    textTransform,
    textDecoration,
    // margin
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    // padding
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight
  } = attributes;
  const buttonType = ["H1", "H2", "H3", "H4", "H5", "H6", "p", "span", "div"];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
    tagName: buttonType[selectedButton],
    value: content,
    style: {
      fontSize: `${fontSize}px`,
      fontWeight: fontWeight,
      color: textColor,
      backgroundColor: backgroundColor,
      fontFamily: fontFamily,
      lineHeight: lineHeight,
      letterSpacing: `${letterSpacing}px`,
      fontStyle: fontStyle,
      textTransform: textTransform,
      textDecoration: textDecoration,
      margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`,
      padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`
    }
  }));
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/heading/block.json":
/*!********************************!*\
  !*** ./src/heading/block.json ***!
  \********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/heading","version":"0.1.0","title":"Heading","category":"bbdl-category","icon":"editor-textcolor","description":"Add titles and headings with style.","example":{},"attributes":{"content":{"type":"string","default":"Add Heading Text..."},"selectedTag":{"type":"number","default":0},"selectedAlign":{"type":"number","default":0},"textColor":{"type":"string","default":"#000"},"backgroundColor":{"type":"string","default":""},"fontFamily":{"type":"string","default":"Arial"},"fontSize":{"type":"number","default":20},"fontWeight":{"type":"string","default":"400"},"lineHeight":{"type":"number","default":1},"letterSpacing":{"type":"number","default":0},"fontStyle":{"type":"string","default":"normal"},"textTransform":{"type":"string","default":"none"},"textDecoration":{"type":"string","default":"none"},"marginTop":{"type":"number","default":0},"marginBottom":{"type":"number","default":0},"marginLeft":{"type":"number","default":0},"marginRight":{"type":"number","default":0},"paddingTop":{"type":"number","default":0},"paddingBottom":{"type":"number","default":0},"paddingLeft":{"type":"number","default":0},"paddingRight":{"type":"number","default":0}},"textdomain":"bbdl","editorScript":"file:./index.js","editorStyle":"file:./editor.css","render":"file:./render.php"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/heading/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/heading/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/heading/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/heading/block.json");

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
const heading = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 64C0 46.3 14.3 32 32 32H80h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H112V208H336V96H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h48 48c17.7 0 32 14.3 32 32s-14.3 32-32 32H400V240 416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H368 320c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V272H112V416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V240 96H32C14.3 96 0 81.7 0 64z"
}));
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  icon: {
    foreground: "#fe0000",
    src: heading
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  Save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map