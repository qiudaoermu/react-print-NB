(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["react"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("react"));
	else
		root["lib"] = factory(root["react"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__297__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 629:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var print_1 = __webpack_require__(509);
var React = __webpack_require__(297);
var react_to_html_1 = __webpack_require__(508);
var ReactToPrint = /** @class */ (function (_super) {
    __extends(ReactToPrint, _super);
    function ReactToPrint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReactToPrint.prototype.onPrint = function () {
        (0, print_1.default)((0, react_to_html_1.default)(this.props.children));
    };
    ReactToPrint.prototype.render = function () {
        return React.createElement("div", null, this.props.children);
    };
    return ReactToPrint;
}(React.Component));
exports["default"] = ReactToPrint;


/***/ }),

/***/ 509:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ print; }
});

;// CONCATENATED MODULE: ./src/printArea.js

const isIE = () => {
  if (!!window.ActiveXobject || "ActiveXObject" in window) {
    return true;
  } else {
    return false;
  }
}
/**
 * 判断是否是IE11
 * @returns boolean
 */
const isIE11 = () => {
  if ((/Trident\/7\./).test(navigator.userAgent)) {
    return true;
  } else {
    return false;
  }
}
const isRemove = (dom) => {
  if (isIE() || isIE11()) {
    dom.removeNode(true)
  } else {
    dom.remove()
  }
  return dom
}
/* harmony default export */ var printArea = (class {
  constructor(option) {

    this.standards = {
      strict: 'strict',
      loose: 'loose',
      html5: 'html5'
    };
    this.previewBody = null;
    this.close = null;
    this.previewBodyUtilPrintBtn = null;
    this.selectArray = []; // 存储select的
    this.counter = 0;
    this.settings = {
      standard: this.standards.html5,
    };
    Object.assign(this.settings, option);
    this.init();
  }
  init() {
    this.counter++;
    this.settings.id = `printArea_${this.counter}`;
    let url = ''
    if (this.settings.url && !this.settings.asyncUrl) {
      url = this.settings.url
    }
    // let _this = this
    // 如果是异步的
    // if (this.settings.asyncUrl) {
    //   console.log(_this.settings.vue, " _this.settings.vu")

    //   _this.settings.asyncUrl(function (url) {
    //     let PrintAreaWindow = _this.getPrintWindow(url); // 创建iframe
    //     if (_this.settings.preview) {
    //       // 打开预览弹窗
    //       _this.previewIfrmaeLoad()
    //     } else {
    //       // 直接打印
    //       _this.print(PrintAreaWindow);
    //     }
    //   }, _this.settings.vue)
    //   return
    // }
    let PrintAreaWindow = this.getPrintWindow(url); // 创建iframe

    if (!this.settings.url) {
      this.write(PrintAreaWindow.doc); // 写入内容
    }

    if (this.settings.preview) {
      // 打开预览弹窗
      this.previewIfrmaeLoad()
    } else {
      // 直接打印
      this.print(PrintAreaWindow);
    }
  }
  addEvent(element, type, callback) {
    if (element.addEventListener) {
      element.addEventListener(type, callback, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, callback);
    } else {
      element['on' + type] = callback;
    }
  }
  previewIfrmaeLoad() {
    let box = document.getElementById('vue-pirnt-nb-previewBox')

    if (box) {
      let _this = this
      let iframe = box.querySelector('iframe')
      this.settings.previewBeforeOpenCallback()
      this.addEvent(iframe, 'load', function () {
        _this.previewBoxShow()
        _this.removeCanvasImg()
        _this.settings.previewOpenCallback()
      })

      this.addEvent(box.querySelector('.previewBodyUtilPrintBtn'), 'click', function () {
        _this.settings.beforeOpenCallback()
        _this.settings.openCallback();
        iframe.contentWindow.print();
        _this.settings.closeCallback()
      })
    }
  }
  // 删除所有canva转换的图片
  removeCanvasImg() {
    let _this = this
    try {
      if (_this.elsdom) {
        // 删除canva转变图片的dom节点
        let canvasList = _this.elsdom.querySelectorAll('.canvasImg')
        for (let i = 0; i < canvasList.length; i++) {
          isRemove(canvasList[i])
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
  print(ifrmae) {
    var _this = this;
    let iframe = document.getElementById(this.settings.id) || ifrmae.f;
    let iframeWin = document.getElementById(this.settings.id).contentWindow || ifrmae.f.contentWindow;
    var _loaded = function () {

      iframeWin.focus();
      _this.settings.openCallback();
      iframeWin.print();
      isRemove(iframe)
      _this.settings.closeCallback()
      _this.removeCanvasImg()
    }
    _this.settings.beforeOpenCallback()
    _this.addEvent(iframe, 'load', function () {
      _loaded()
    })

  }
  write(PADocument) {
    PADocument.open();
    PADocument.write(`${this.docType()}<html>${this.getHead()}${this.getBody()}</html>`);
    PADocument.close();

  }
  docType() {
    if (this.settings.standard === this.standards.html5) {
      return '<!DOCTYPE html>';
    }
    var transitional = this.settings.standard === this.standards.loose ? ' Transitional' : '';
    var dtd = this.settings.standard === this.standards.loose ? 'loose' : 'strict';

    return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01${transitional}//EN" "http://www.w3.org/TR/html4/${dtd}.dtd">`;
  }
  getHead() {
    let extraHead = '';
    let links = '';
    let style = '';
    if (this.settings.extraHead) {
      this.settings.extraHead.replace(/([^,]+)/g, (m) => {
        extraHead += m;
      });
    }
    // 复制所有link标签
    [].forEach.call(document.querySelectorAll('link'), function (item) {
      if (item.href.indexOf('.css') >= 0) {
        links += `<link type="text/css" rel="stylesheet" href="${item.href}" >`;
      }
    });
    // 循环获取style标签的样式
    let domStyle = document.styleSheets;
    if (domStyle && domStyle.length > 0) {
      for (let i = 0; i < domStyle.length; i++) {
        try {
          if (domStyle[i].cssRules || domStyle[i].rules) {
            let rules = domStyle[i].cssRules || domStyle[i].rules;
            for (let b = 0; b < rules.length; b++) {
              style += rules[b].cssText;
            }
          }
        } catch (e) {
          console.log(domStyle[i].href + e);
        }
      }
    }

    if (this.settings.extraCss) {
      this.settings.extraCss.replace(/([^,\s]+)/g, (m) => {
        links += `<link type="text/css" rel="stylesheet" href="${m}">`;
      });

    }

    return `<head><title>${this.settings.popTitle}</title>${extraHead}${links}<style type="text/css">${style}</style></head>`;
  }

  getBody() {
    let htmlNode = this.settings.node;
    // ids = ids.replace(new RegExp("#", "g"), '');
    htmlNode.style.display = "block";
    this.elsdom = this.beforeHanler(htmlNode);
    let ele = this.getFormData(this.elsdom);
    let htm = ele.outerHTML;
    return '<body>' + htm + '</body>';
  }
  // 处理canva转成图片
  beforeHanler(elsdom) {
    console.log(elsdom, "elsdom")
    let canvasList = elsdom.querySelectorAll('canvas');
    // canvas转换png图片
    for (let i = 0; i < canvasList.length; i++) {
      if (!canvasList[i].style.display) {
        let _parent = canvasList[i].parentNode
        let _canvasUrl = canvasList[i].toDataURL('image/png')
        let _img = new Image()
        _img.className = 'canvasImg'
        _img.style.display = 'none'
        _img.src = _canvasUrl
        _parent.appendChild(_img)
      }
    }
    return elsdom
  }
  // 根据type去处理form表单
  getFormData(ele) {
    let copy = ele.cloneNode(true);
    let copiedInputs = copy.querySelectorAll('input,select,textarea');
    let canvasImgList = copy.querySelectorAll('.canvasImg,canvas');
    let selectCount = -1;
    // 处理所有canvas
    for (let i = 0; i < canvasImgList.length; i++) {
      let _parent = canvasImgList[i].parentNode
      let item = canvasImgList[i]
      // 删除克隆后的canvas节点
      if (item.tagName.toLowerCase() === 'canvas') {
        _parent.removeChild(item)
      } else {
        item.style.display = 'block'
      }
    }
    // 处理所有输入框
    for (let i = 0; i < copiedInputs.length; i++) {
      let item = copiedInputs[i];
      let typeInput = item.getAttribute('type');
      let copiedInput = copiedInputs[i];
      // 获取select标签
      if (!typeInput) {
        typeInput = item.tagName === 'SELECT' ? 'select' : item.tagName === 'TEXTAREA' ? 'textarea' : '';
      }
      // 处理input框
      if (item.tagName === 'INPUT') {
        // 除了单选框 多选框比较特别
        if (typeInput === 'radio' || typeInput === 'checkbox') {
          if (item.checked) {
            copiedInput.setAttribute('checked', item.checked);
          }

        } else {
          copiedInput.value = item.value;
          copiedInput.setAttribute('value', item.value);
        }
        // 处理select
      } else if (typeInput === 'select') {

        selectCount++;
        for (let b = 0; b < ele.querySelectorAll('select').length; b++) {
          let select = ele.querySelectorAll('select')[b]; // 获取原始层每一个select
          !select.getAttribute('newbs') && select.setAttribute('newbs', b) // 添加标识
          if (select.getAttribute('newbs') == selectCount) {
            let opSelectedIndex = ele.querySelectorAll('select')[selectCount].selectedIndex;
            item.options[opSelectedIndex].setAttribute('selected', true);

          }
        }
        // 处理textarea
      } else {
        copiedInput.innerHTML = item.value;
        copiedInput.setAttribute('html', item.value);
      }
    }

    return copy;
  }
  getPrintWindow(url) {
    var f = this.Iframe(url);
    return {
      f: f,
      win: f.contentWindow || f,
      doc: f.doc
    };
  }
  previewBoxShow() {
    let box = document.getElementById('vue-pirnt-nb-previewBox')
    if (box) {
      document.querySelector('html').setAttribute('style', 'overflow: hidden')
      box.style.display = 'block'
    }
  }

  previewBoxHide() {
    let box = document.getElementById('vue-pirnt-nb-previewBox')
    if (box) {
      document.querySelector('html').setAttribute('style', 'overflow: visible;')

      box.querySelector('iframe') && isRemove(box.querySelector('iframe'))
      box.style.display = 'none'
    }
  }
  previewBox() {

    let box = document.getElementById('vue-pirnt-nb-previewBox')
    let previewBodyClass = 'previewBody'
    if (box) {
      box.querySelector('iframe') && isRemove(box.querySelector('iframe'))
      return {
        close: box.querySelector('.previewClose'),
        previewBody: box.querySelector(`.${previewBodyClass}`)
      }
    }
    let previewContent = document.createElement('div');
    previewContent.setAttribute('id', "vue-pirnt-nb-previewBox")
    previewContent.setAttribute('style', 'position: fixed;top: 0px;left: 0px;width: 100%;height: 100%;background: white;display:none')
    previewContent.style.zIndex = this.settings.zIndex
    // 打印预览弹窗的header
    let previewHeader = document.createElement('div');
    previewHeader.setAttribute('class', "previewHeader")
    previewHeader.setAttribute('style', "padding: 5px 20px;")
    previewHeader.innerHTML = this.settings.previewTitle
    previewContent.appendChild(previewHeader)
    // close关闭按钮
    this.close = document.createElement('div');
    let close = this.close
    close.setAttribute('class', "previewClose")
    close.setAttribute('style', "position: absolute;top: 5px;right: 20px;width: 25px;height: 20px;cursor: pointer;")
    let closeBefore = document.createElement('div');
    let closeAfter = document.createElement('div');
    closeBefore.setAttribute('class', "closeBefore")
    closeBefore.setAttribute('style', "position: absolute;width: 3px;height: 100%;background: #040404;transform: rotate(45deg); top: 0px;left: 50%;")
    closeAfter.setAttribute('class', "closeAfter")
    closeAfter.setAttribute('style', "position: absolute;width: 3px;height: 100%;background: #040404;transform: rotate(-45deg); top: 0px;left: 50%;")
    close.appendChild(closeBefore)
    close.appendChild(closeAfter)
    previewHeader.appendChild(close)

    // 打印预览弹窗的body
    this.previewBody = document.createElement('div');
    let previewBody = this.previewBody
    previewBody.setAttribute('class', previewBodyClass)
    previewBody.setAttribute('style', "display: flex;flex-direction: column; height: 100%;")
    previewContent.appendChild(previewBody)
    // 打印预览弹窗的body的工具栏
    let previewBodyUtil = document.createElement('div');
    previewBodyUtil.setAttribute('class', "previewBodyUtil")
    previewBodyUtil.setAttribute('style', "height: 32px;background: #474747;position: relative;")
    previewBody.appendChild(previewBodyUtil)
    // 打印的按钮
    this.previewBodyUtilPrintBtn = document.createElement('div');
    let previewBodyUtilPrintBtn = this.previewBodyUtilPrintBtn
    previewBodyUtilPrintBtn.setAttribute('class', 'previewBodyUtilPrintBtn')
    previewBodyUtilPrintBtn.innerHTML = this.settings.previewPrintBtnLabel
    previewBodyUtilPrintBtn.setAttribute('style', 'position: absolute;padding: 2px 10px;margin-top: 3px;left: 24px;font-size: 14px;color: white;cursor: pointer;background-color: rgba(0,0,0,.12);background-image: linear-gradient(hsla(0,0%,100%,.05),hsla(0,0%,100%,0));background-clip: padding-box;border: 1px solid rgba(0,0,0,.35);border-color: rgba(0,0,0,.32) rgba(0,0,0,.38) rgba(0,0,0,.42);box-shadow: inset 0 1px 0 hsla(0,0%,100%,.05), inset 0 0 1px hsla(0,0%,100%,.15), 0 1px 0 hsla(0,0%,100%,.05);')
    previewBodyUtil.appendChild(previewBodyUtilPrintBtn)

    // 添加整个预览到body
    document.body.appendChild(previewContent);

    return {
      close: this.close,
      previewBody: this.previewBody
    }
  }
  iframeBox(frameId, url) {
    let iframe = document.createElement('iframe');
    iframe.style.border = '0px';
    iframe.style.position = 'absolute';
    iframe.style.width = '0px';
    iframe.style.height = '0px';
    iframe.style.right = '0px';
    iframe.style.top = '0px';
    iframe.setAttribute('id', frameId);
    iframe.setAttribute('src', url);

    return iframe
  }
  Iframe(url) {
    let frameId = this.settings.id;
    // 局部打印 用当前的时间做ifrmae的url
    url = !url ? new Date().getTime() : url
    let _this = this

    let iframe = this.iframeBox(frameId, url)

    // let that = this
    try {
      // 直接打印 不预览
      if (!this.settings.preview) {
        document.body.appendChild(iframe);

      } else {
        iframe.setAttribute('style', 'border: 0px;flex: 1;')
        // 预览打印
        let previewBox = this.previewBox()
        let previewBody = previewBox.previewBody
        let close = previewBox.close
        // 添加ifrmae到预览弹窗
        previewBody.appendChild(iframe);
        this.addEvent(close, 'click', function () {
          _this.previewBoxHide()
        })
      }

      iframe.doc = null;
      iframe.doc = iframe.contentDocument ? iframe.contentDocument : (iframe.contentWindow ? iframe.contentWindow.document : iframe.document);
    } catch (e) {
      throw new Error(e + '. iframes may not be supported in this browser.');
    }
    if (iframe.doc == null) {
      throw new Error('Cannot find document.');
    }

    return iframe;
  }
});
;// CONCATENATED MODULE: ./src/print.js

const localPrint = (node) => {
  let binding = {
    value: {}
  }
  new printArea({
    node: node, // * 局部打印必传入id
    url: binding.value.url, // 打印指定的网址，这里不能跟id共存 如果共存id的优先级会比较高
    standard: '', // 文档类型，默认是html5，可选 html5，loose，strict
    extraHead: binding.value.extraHead, // 附加在head标签上的额外标签,使用逗号分隔
    extraCss: binding.value.extraCss, // 额外的css连接，多个逗号分开
    previewTitle: binding.value.previewTitle || '打印预览', // 打印预览的标题
    zIndex: binding.value.zIndex || 20002, // 预览窗口的z-index
    previewPrintBtnLabel: binding.value.previewPrintBtnLabel || '打印', // 打印预览的标题
    popTitle: binding.value.popTitle, // title的标题
    preview: binding.value.preview || false, // 是否启动预览模式
    asyncUrl: binding.value.asyncUrl,
    previewBeforeOpenCallback() { // 预览窗口打开之前的callback
      binding.value.previewBeforeOpenCallback && binding.value.previewBeforeOpenCallback()
    },
    previewOpenCallback() { // 预览窗口打开之后的callback
      binding.value.previewOpenCallback && binding.value.previewOpenCallback()
    },
    openCallback() { // 调用打印之后的回调事件
      binding.value.openCallback && binding.value.openCallback()
    },
    closeCallback() {
      binding.value.closeCallback && binding.value.closeCallback()
    },
    beforeOpenCallback() {
      binding.value.beforeOpenCallback && binding.value.beforeOpenCallback()
    }
  });

};
/* harmony default export */ var print = (localPrint);

/***/ }),

/***/ 508:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
class Element {
  constructor(reactNode) {
    this.type = reactNode.type;
    const { children, ...params } = reactNode.props;
    this.attr = params;
    this.children = reactNode.props.children;
  }
  render() {
    // 这个方法将虚拟的DOM转成真实的DOM；
    let ele = document.createElement(this.type);
    // 2. 设置行间属性
    for (let key in this.attr) {

      let _key = key;
      if (key === "className") {
        _key = "class"
      }
      if (key === "htmlFor") {
        _key = "for"
      }
      ele.setAttribute(_key, this.attr[key]);
    }
    // 
    if (typeof (this.children) === "string") {
      let curEle = document.createTextNode(this.children);
      ele.appendChild(curEle);
    }


    this.children instanceof Array && this.children.forEach(item => {
      // 如果数组中的成员是Element的实例,需要继续调用render方法；将虚拟的DOM转成真实的DOM；
      // 循环子节点，都放入ele中；
      let curEle = item.props ? new Element(item).render() : document.createTextNode(item);
      ele.appendChild(curEle);
    });
    return ele;// 将创建的元素转成DOM返回；
  }
}

const render = (reactDom) => {
  // container : 容器，根元素；
  // element: 虚拟的DOM对象；当render执行时，让这个虚拟的DOM转成真实的DOM；
  return new Element(reactDom).render()
}
// let y = obj.createElement("div", { a: 1, className: 12 }, "中国北京")
// render(y)
/* harmony default export */ __webpack_exports__["default"] = (render);


/***/ }),

/***/ 297:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__297__;

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(629);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});