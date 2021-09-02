import Print from './printArea.js';
const localPrint = (id) => {
  let binding = {
    value: {}
  }
  new Print({
    ids: id, // * 局部打印必传入id
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
export default localPrint