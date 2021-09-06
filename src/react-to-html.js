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
export default render
