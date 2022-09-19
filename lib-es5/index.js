"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ITEM_EVENT = exports.END_EVENT = exports.DEFAULT_OPTIONS = void 0;

var _events = require("events");

var _isurl = _interopRequireDefault(require("isurl"));

var _normalizeURL = _interopRequireDefault(require("./normalizeURL"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var DEFAULT_OPTIONS = Object.freeze({
  maxSockets: Infinity,
  maxSocketsPerHost: 2,
  rateLimit: 0
});
exports.DEFAULT_OPTIONS = DEFAULT_OPTIONS;
var END_EVENT = "end";
exports.END_EVENT = END_EVENT;
var ITEM_EVENT = "item";
exports.ITEM_EVENT = ITEM_EVENT;

var _activeHosts = /*#__PURE__*/new WeakMap();

var _items = /*#__PURE__*/new WeakMap();

var _priorityQueue = /*#__PURE__*/new WeakMap();

var _activeSockets = /*#__PURE__*/new WeakMap();

var _idCounter = /*#__PURE__*/new WeakMap();

var _isPaused = /*#__PURE__*/new WeakMap();

var _options = /*#__PURE__*/new WeakMap();

var _dequeueItem = /*#__PURE__*/new WeakSet();

var _emit = /*#__PURE__*/new WeakSet();

var _getDoneCallback = /*#__PURE__*/new WeakSet();

var _maybeStartNext = /*#__PURE__*/new WeakSet();

var _removeItem = /*#__PURE__*/new WeakSet();

var RequestQueue = /*#__PURE__*/function (_EventEmitter) {
  _inherits(RequestQueue, _EventEmitter);

  var _super = _createSuper(RequestQueue);

  // Socket counts stored by host
  // Items stored by ID
  // List of IDs
  // it'd take centuries to exceed MAX_SAFE_INTEGER
  function RequestQueue(options) {
    var _this;

    _classCallCheck(this, RequestQueue);

    _this = _super.call(this);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _removeItem);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _maybeStartNext);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _getDoneCallback);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _emit);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _dequeueItem);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _activeHosts, {
      writable: true,
      value: {}
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _items, {
      writable: true,
      value: {}
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _priorityQueue, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _activeSockets, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _idCounter, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _isPaused, {
      writable: true,
      value: false
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _options, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(_assertThisInitialized(_this), _options, _objectSpread(_objectSpread({}, DEFAULT_OPTIONS), options));

    return _this;
  }

  _createClass(RequestQueue, [{
    key: "dequeue",
    value: function dequeue(id) {
      var item = _classPrivateFieldGet(this, _items)[id];

      if (item === undefined || item.active) {
        return false;
      } else {
        _classPrivateMethodGet(this, _dequeueItem, _dequeueItem2).call(this, item);

        _classPrivateMethodGet(this, _removeItem, _removeItem2).call(this, item);

        return true;
      }
    }
    /**
     * Remove item (id) from queue, but nowhere else.
     * @param {object} item
     */

  }, {
    key: "enqueue",
    value: function enqueue(url, data, options) {
      if (!_isurl["default"].lenient(url)) {
        throw new TypeError("Invalid URL");
      } else {
        var _this$idCounter, _this$idCounter2, _options$itemID;

        var hostKey = (0, _normalizeURL["default"])(url, _classPrivateFieldGet(this, _options), options);
        var id = (_options$itemID = options === null || options === void 0 ? void 0 : options.itemID) !== null && _options$itemID !== void 0 ? _options$itemID : (_classPrivateFieldSet(this, _idCounter, (_this$idCounter = _classPrivateFieldGet(this, _idCounter), _this$idCounter2 = _this$idCounter++, _this$idCounter)), _this$idCounter2);
        _classPrivateFieldGet(this, _items)[id] = {
          active: false,
          data: data,
          hostKey: hostKey,
          id: id,
          options: options,
          url: url
        };

        if (options.lifo) {
          _classPrivateFieldGet(this, _priorityQueue).unshift(id);
        } else {
          _classPrivateFieldGet(this, _priorityQueue).push(id);
        }

        _classPrivateMethodGet(this, _maybeStartNext, _maybeStartNext2).call(this);

        return id;
      }
    }
    /**
     * Generate a `done()` function for use in resuming the queue when an item's
     * process has been completed.
     * @param {object} item
     * @returns {Function}
     */

  }, {
    key: "has",
    value: function has(id) {
      return id in _classPrivateFieldGet(this, _items);
    }
  }, {
    key: "isPaused",
    get: function get() {
      return _classPrivateFieldGet(this, _isPaused);
    }
  }, {
    key: "length",
    get: function get() {
      return _classPrivateFieldGet(this, _priorityQueue).length + _classPrivateFieldGet(this, _activeSockets);
    }
    /**
     * Start the next queue item, if it exists and if it passes any limiting.
     */

  }, {
    key: "numActive",
    get: function get() {
      return _classPrivateFieldGet(this, _activeSockets);
    }
  }, {
    key: "numQueued",
    get: function get() {
      return _classPrivateFieldGet(this, _priorityQueue).length;
    }
  }, {
    key: "pause",
    value: function pause() {
      _classPrivateFieldSet(this, _isPaused, true);

      return this;
    }
    /**
     * Remove item from item list and activeHosts.
     * @param {object} item
     */

  }, {
    key: "resume",
    value: function resume() {
      _classPrivateFieldSet(this, _isPaused, false);

      _classPrivateMethodGet(this, _maybeStartNext, _maybeStartNext2).call(this);

      return this;
    }
  }]);

  return RequestQueue;
}(_events.EventEmitter);

exports["default"] = RequestQueue;

function _dequeueItem2(_ref) {
  var id = _ref.id;

  var itemIndex = _classPrivateFieldGet(this, _priorityQueue).indexOf(id);

  _classPrivateFieldGet(this, _priorityQueue).splice(itemIndex, 1);
}

function _emit2(event, args, timeout) {
  var _this2 = this;

  if (timeout > 0) {
    setTimeout(function () {
      var _get2;

      return (_get2 = _get(_getPrototypeOf(RequestQueue.prototype), "emit", _this2)).call.apply(_get2, [_this2, event].concat(_toConsumableArray(args)));
    }, timeout);
  } else {
    var _get3;

    (_get3 = _get(_getPrototypeOf(RequestQueue.prototype), "emit", this)).call.apply(_get3, [this, event].concat(_toConsumableArray(args)));
  }
}

function _getDoneCallback2(item) {
  var _this3 = this;

  return function () {
    var _this$activeSockets, _this$activeSockets2;

    _classPrivateFieldSet(_this3, _activeSockets, (_this$activeSockets = _classPrivateFieldGet(_this3, _activeSockets), _this$activeSockets2 = _this$activeSockets--, _this$activeSockets)), _this$activeSockets2;

    _classPrivateMethodGet(_this3, _removeItem, _removeItem2).call(_this3, item);

    _classPrivateMethodGet(_this3, _maybeStartNext, _maybeStartNext2).call(_this3);
  };
}

function _maybeStartNext2() {
  var availableSockets = _classPrivateFieldGet(this, _options).maxSockets - _classPrivateFieldGet(this, _activeSockets);

  if (!_classPrivateFieldGet(this, _isPaused) && availableSockets > 0) {
    var i = 0;

    while (i < _classPrivateFieldGet(this, _priorityQueue).length) {
      var _item$options$maxSock, _item$options;

      var canStart = false;

      var item = _classPrivateFieldGet(this, _items)[_classPrivateFieldGet(this, _priorityQueue)[i]];

      var maxSocketsPerHost = (_item$options$maxSock = (_item$options = item.options) === null || _item$options === void 0 ? void 0 : _item$options.maxSocketsPerHost) !== null && _item$options$maxSock !== void 0 ? _item$options$maxSock : _classPrivateFieldGet(this, _options).maxSocketsPerHost; // Not important, but feature complete

      if (maxSocketsPerHost > 0) {
        if (_classPrivateFieldGet(this, _activeHosts)[item.hostKey] === undefined) {
          // Create key with first count
          _classPrivateFieldGet(this, _activeHosts)[item.hostKey] = 1;
          canStart = true;
        } else if (_classPrivateFieldGet(this, _activeHosts)[item.hostKey] < maxSocketsPerHost) {
          _classPrivateFieldGet(this, _activeHosts)[item.hostKey]++;
          canStart = true;
        }
      }

      if (canStart) {
        var _this$activeSockets3, _this$activeSockets4, _item$options$rateLim, _item$options2;

        _classPrivateFieldSet(this, _activeSockets, (_this$activeSockets3 = _classPrivateFieldGet(this, _activeSockets), _this$activeSockets4 = _this$activeSockets3++, _this$activeSockets3)), _this$activeSockets4;
        availableSockets--;
        item.active = true;

        _classPrivateMethodGet(this, _dequeueItem, _dequeueItem2).call(this, item);

        var rateLimit = (_item$options$rateLim = (_item$options2 = item.options) === null || _item$options2 === void 0 ? void 0 : _item$options2.rateLimit) !== null && _item$options$rateLim !== void 0 ? _item$options$rateLim : _classPrivateFieldGet(this, _options).rateLimit;

        _classPrivateMethodGet(this, _emit, _emit2).call(this, ITEM_EVENT, [item.url, item.data, _classPrivateMethodGet(this, _getDoneCallback, _getDoneCallback2).call(this, item), item.id], rateLimit);

        if (availableSockets <= 0) {
          break;
        }
      } else {
        // Move onto next
        i++;
      }
    }
  }
}

function _removeItem2(_ref2) {
  var hostKey = _ref2.hostKey,
      id = _ref2.id;

  if (typeof _classPrivateFieldGet(this, _activeHosts)[hostKey] !== 'undefined') {
    if (--_classPrivateFieldGet(this, _activeHosts)[hostKey] <= 0) {
      delete _classPrivateFieldGet(this, _activeHosts)[hostKey];
    }
  }

  delete _classPrivateFieldGet(this, _items)[id];

  if (_classPrivateFieldGet(this, _priorityQueue).length <= 0 && _classPrivateFieldGet(this, _activeSockets) <= 0) {
    _classPrivateFieldSet(this, _idCounter, 0); // reset


    _get(_getPrototypeOf(RequestQueue.prototype), "emit", this).call(this, END_EVENT);
  }
}
//# sourceMappingURL=index.js.map