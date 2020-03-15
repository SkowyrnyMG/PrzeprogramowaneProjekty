// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/verifyForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ifRODOBoolean = exports.verifyConfirm = exports.verifyInPasswordSigns = exports.ifPasswordHasNumber = exports.ifPasswordUpperCase = exports.checkPasswordLength = exports.emailHasDomain = exports.ifEmail = exports.verifyInNameSigns = exports.verifyNameLength = void 0;
var MIN_NAME_LENGTH = 2;
var MIN_PASSWORD_LENGTH = 8;

var verifyNameLength = function verifyNameLength(name) {
  return name.length >= MIN_NAME_LENGTH;
};

exports.verifyNameLength = verifyNameLength;

var verifyInNameSigns = function verifyInNameSigns(name) {
  return !name.match(/\W+/);
};

exports.verifyInNameSigns = verifyInNameSigns;

var ifEmail = function ifEmail(email) {
  return email.includes('@');
};

exports.ifEmail = ifEmail;

var emailHasDomain = function emailHasDomain(email) {
  return !!email.match(/@\w+[.]\w+/);
};

exports.emailHasDomain = emailHasDomain;

var checkPasswordLength = function checkPasswordLength(password) {
  return password.length >= MIN_PASSWORD_LENGTH;
};

exports.checkPasswordLength = checkPasswordLength;

var ifPasswordUpperCase = function ifPasswordUpperCase(password) {
  return password != password.toLowerCase();
};

exports.ifPasswordUpperCase = ifPasswordUpperCase;

var ifPasswordHasNumber = function ifPasswordHasNumber(password) {
  return !!password.match(/\d+/);
};

exports.ifPasswordHasNumber = ifPasswordHasNumber;

var verifyInPasswordSigns = function verifyInPasswordSigns(password) {
  return !!password.match(/\W+/);
};

exports.verifyInPasswordSigns = verifyInPasswordSigns;

var verifyConfirm = function verifyConfirm(confirm, password) {
  return password === confirm && password !== undefined && password !== '';
};

exports.verifyConfirm = verifyConfirm;

var ifRODOBoolean = function ifRODOBoolean(rodoBtn) {
  return typeof rodoBtn === 'boolean';
};

exports.ifRODOBoolean = ifRODOBoolean;
},{}],"src/index.js":[function(require,module,exports) {
"use strict";

var inputRules = _interopRequireWildcard(require("./verifyForm"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var rodoAgreement = document.getElementById('rodo-agreement');
var rodoCheck = document.querySelectorAll('.line');
var allInputs = document.querySelectorAll('form input:not([type="checkbox"])');
var submit = document.querySelector('.submit');
var popup = document.querySelector('.popup');
var nameInput = document.getElementById('name-input');
var nameInputInfo = document.querySelector('.name .info');
var emailInput = document.getElementById('email-input');
var emailInputInfo = document.querySelector('.email .info');
var passwordInput = document.getElementById('password-input');
var passwordInputInfo = document.querySelector('.password .info');
var confirmInput = document.getElementById('password-input-confirm');
var confirmInputInfo = document.querySelector('.password-confirm .info'); // Be careful if you would like to add more verification rules you have to keep the same order in failMsg and rules!

var formActionsDatabase = {
  name: {
    failMsg: ['Name should be at least 2 signs long!', 'You cannot use special signs in Name!'],
    rules: [inputRules.verifyNameLength, inputRules.verifyInNameSigns]
  },
  email: {
    failMsg: ['Your emain does not have domain!', 'Email should include @ sign!'],
    rules: [inputRules.emailHasDomain, inputRules.ifEmail]
  },
  password: {
    failMsg: ['Password should include at least one number!', 'Password should include at least one special sign!', 'Password should include at least one uppercase letter!', 'Password should be at least 8 signs long!'],
    rules: [inputRules.ifPasswordHasNumber, inputRules.verifyInPasswordSigns, inputRules.ifPasswordUpperCase, inputRules.checkPasswordLength]
  },
  confirm: {
    failMsg: ['Given passwords do not match!'],
    rules: [inputRules.verifyConfirm]
  }
};

var listenersManager = function listenersManager() {
  rodoAgreement.addEventListener('change', function () {
    rodoCheck.forEach(function (part) {
      part.classList.toggle('active-opacity');
    });
  });
  submit.addEventListener('click', preventEmpty);
};

var preventEmpty = function preventEmpty(e) {
  var ifEmpty = _toConsumableArray(allInputs).map(function (input) {
    if (input.value === '') {
      return false;
    } else {
      return true;
    }
  });

  if (nameStatus === false || emailStatus === false || passwordStatus === false || confirmStatus === false || ifEmpty.includes(false)) {
    e.preventDefault();
    popupDisplay();
    return;
  }
};

var popupDisplay = function popupDisplay() {
  popup.classList.add('popup-active');
  setTimeout(function () {
    popup.classList.remove('popup-active');
  }, 2000);
};

var changeInputColors = function changeInputColors(input, info, color) {
  input.style.borderColor = color;
  info.style.color = color;
};

var nameController = function nameController(dataBase, infoBox, inputValue, secondInputValue) {
  var defaultInfo = inputValue.placeholder;
  var rules = dataBase.rules;
  var failMsg = dataBase.failMsg;
  var rulesStatus = [];
  var inputStatus = false;
  var FAIL_COLOR = '#F93822';
  var SUCCES_COLOR = '#03AC13';
  rules.forEach(function (rule, index) {
    rulesStatus.push(secondInputValue ? rule(inputValue.value, secondInputValue.value) : rule(inputValue.value));

    if ((secondInputValue ? rule(inputValue.value, secondInputValue.value) : rule(inputValue.value)) === false) {
      infoBox.innerHTML = failMsg[index];
      changeInputColors(inputValue, infoBox, FAIL_COLOR);
    } else {}

    if (!rulesStatus.includes(false)) {
      infoBox.innerHTML = defaultInfo;
      changeInputColors(inputValue, infoBox, SUCCES_COLOR);
      inputStatus = true;
    } else {
      inputStatus = false;
    }
  });
  console.log(inputStatus);
  return inputStatus;
};

var nameStatus = false;
nameInput.addEventListener('keyup', function () {
  nameStatus = nameController(formActionsDatabase.name, nameInputInfo, nameInput);
});
var emailStatus = false;
emailInput.addEventListener('keyup', function () {
  emailStatus = nameController(formActionsDatabase.email, emailInputInfo, emailInput);
});
var passwordStatus = false;
passwordInput.addEventListener('keyup', function () {
  passwordStatus = nameController(formActionsDatabase.password, passwordInputInfo, passwordInput);
});
var confirmStatus = false;
confirmInput.addEventListener('keyup', function () {
  confirmStatus = nameController(formActionsDatabase.confirm, confirmInputInfo, confirmInput, passwordInput);
});
listenersManager();
},{"./verifyForm":"src/verifyForm.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51360" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map