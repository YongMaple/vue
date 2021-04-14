/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

import { def } from '../util/index'

const arrayProto = Array.prototype
// 复制一份，防止影响其他的数组
export const arrayMethods = Object.create(arrayProto)

const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  // 保存原始方法
  const original = arrayProto[method]
  // def内部就是Object.defineProperty，一个工具方法
  // 给数组原型的副本重新定义行为
  def(arrayMethods, method, function mutator (...args) {
    // 默认行为
    const result = original.apply(this, args)
    // 执行默认行为之外，做变更通知的操作
    // this是一个响应式对象，里面一定有__ob__属性，__ob__就是observer实例
    const ob = this.__ob__
    // 有三种情况可能有成员加入
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    // 对新的成员进行响应式处理
    if (inserted) ob.observeArray(inserted)
    // notify change
    // 通知变更(在defineReactive内depend建立的关系)
    ob.dep.notify()
    return result
  })
})
