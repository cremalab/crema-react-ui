"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var native_1 = require("styled-components/native");
var theme = {
    buttonRadius: 50,
    buttonPaddingVertical: 8,
    buttonPaddingHorizontal: 20,
    fontSize: 16,
};
var buttonStyles = function (env) { return "\n  background-color: #00c;\n  padding: " + (env == 'web'
    ? theme.buttonPaddingVertical + 'px ' + theme.buttonPaddingHorizontal + 'px'
    : theme.buttonPaddingVertical + ' ' + theme.buttonPaddingHorizontal) + ";\n  border-radius: " + (env == 'web' ? theme.buttonRadius + 'px' : theme.buttonRadius) + ";\n  border: 0;\n  margin: 0;\n  &:hover {\n    background-color: red;\n  }\n"; };
var textStyles = function (env) { return "\n  color: white;\n  text-align: center;\n  font-size: " + (env == 'web' ? theme.fontSize + 'px' : theme.fontSize) + ";\n"; };
var buttonWeb = (_a = ["\n  ", "\n"], _a.raw = ["\n  ", "\n"], styled_components_1.default.button(_a, buttonStyles('web')));
var textWeb = (_b = ["\n  ", "\n"], _b.raw = ["\n  ", "\n"], styled_components_1.default.div(_b, textStyles('web')));
var buttonNative = (_c = ["\n  ", "\n"], _c.raw = ["\n  ", "\n"], native_1.default.TouchableHighlight(_c, buttonStyles('native')));
var textNative = (_d = ["\n  ", "\n"], _d.raw = ["\n  ", "\n"], native_1.default.Text(_d, textStyles('native')));
var buttonBase = function (_a) {
    var Button = _a.Button, Text = _a.Text;
    return function (props) { return (react_1.default.createElement(Button, __assign({}, props),
        react_1.default.createElement(Text, null, props.children))); };
};
var ButtonWeb = buttonBase({
    Button: buttonWeb,
    Text: textWeb
});
exports.ButtonWeb = ButtonWeb;
var ButtonNative = buttonBase({
    Button: buttonNative,
    Text: textNative
});
exports.ButtonNative = ButtonNative;
var _a, _b, _c, _d;
//# sourceMappingURL=Button.js.map