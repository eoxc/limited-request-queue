"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _parseDomain2 = _interopRequireDefault(require("parse-domain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Produce a normalized URL.
 * @param {URL} url
 * @param {object} options
 * @param {object} [optionOverrides]
 * @returns {string}
 */
var _default = function _default(_ref, options, optionOverrides) {
  var _optionOverrides$igno, _optionOverrides$igno2, _optionOverrides$igno3;

  var hostname = _ref.hostname,
      port = _ref.port,
      protocol = _ref.protocol;
  var ignorePorts = (_optionOverrides$igno = optionOverrides === null || optionOverrides === void 0 ? void 0 : optionOverrides.ignorePorts) !== null && _optionOverrides$igno !== void 0 ? _optionOverrides$igno : options.ignorePorts;
  var ignoreProtocols = (_optionOverrides$igno2 = optionOverrides === null || optionOverrides === void 0 ? void 0 : optionOverrides.ignoreProtocols) !== null && _optionOverrides$igno2 !== void 0 ? _optionOverrides$igno2 : options.ignoreProtocols;
  var ignoreSubdomains = (_optionOverrides$igno3 = optionOverrides === null || optionOverrides === void 0 ? void 0 : optionOverrides.ignoreSubdomains) !== null && _optionOverrides$igno3 !== void 0 ? _optionOverrides$igno3 : options.ignoreSubdomains;
  var key = "";

  if (!ignoreProtocols) {
    key += "".concat(protocol, "//");
  }

  if (!ignoreSubdomains) {
    key += hostname;
  } else {
    var _parseDomain;

    // Returns `null` if unknown top-level domain or running in a browser
    var _ref2 = (_parseDomain = (0, _parseDomain2["default"])(hostname)) !== null && _parseDomain !== void 0 ? _parseDomain : {},
        domain = _ref2.domain,
        tld = _ref2.tld;

    if (domain === undefined && tld === undefined) {
      key += hostname;
    } else {
      key += "".concat(domain, ".").concat(tld);
    }
  }

  if (!ignorePorts && port !== "") {
    key += ":".concat(port);
  }

  return key;
};

exports["default"] = _default;
//# sourceMappingURL=normalizeURL.js.map