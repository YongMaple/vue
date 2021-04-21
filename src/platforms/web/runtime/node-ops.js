/* @flow */

import { namespaceMap } from 'web/util/index'
// 创建元素
export function createElement (tagName: string, vnode: VNode): Element {
  const elm = document.createElement(tagName)
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple')
  }
  return elm
}
// 命名空间
export function createElementNS (namespace: string, tagName: string): Element {
  return document.createElementNS(namespaceMap[namespace], tagName)
}
// 文本节点
export function createTextNode (text: string): Text {
  return document.createTextNode(text)
}
// 注释
export function createComment (text: string): Comment {
  return document.createComment(text)
}
// 插入
export function insertBefore (parentNode: Node, newNode: Node, referenceNode: Node) {
  parentNode.insertBefore(newNode, referenceNode)
}
// 删除
export function removeChild (node: Node, child: Node) {
  node.removeChild(child)
}
// 追加
export function appendChild (node: Node, child: Node) {
  node.appendChild(child)
}
// 父元素
export function parentNode (node: Node): ?Node {
  return node.parentNode
}
// 相邻
export function nextSibling (node: Node): ?Node {
  return node.nextSibling
}
// 标签名
export function tagName (node: Element): string {
  return node.tagName
}
// 设置文本
export function setTextContent (node: Node, text: string) {
  node.textContent = text
}
// 样式
export function setStyleScope (node: Element, scopeId: string) {
  node.setAttribute(scopeId, '')
}
