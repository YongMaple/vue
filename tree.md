.
├── BACKERS.md
├── LICENSE
├── README.md
├── benchmarks
│   ├── big-table
│   │   ├── demo.css
│   │   ├── index.html
│   │   └── style.css
│   ├── dbmon
│   │   ├── ENV.js
│   │   ├── app.js
│   │   ├── index.html
│   │   └── lib
│   │       ├── memory-stats.js
│   │       ├── monitor.js
│   │       └── styles.css
│   ├── reorder-list
│   │   └── index.html
│   ├── ssr
│   │   ├── README.md
│   │   ├── common.js
│   │   ├── renderToStream.js
│   │   └── renderToString.js
│   ├── svg
│   │   └── index.html
│   └── uptime
│       └── index.html
├── dist
│   ├── README.md
│   ├── vue.common.dev.js
│   ├── vue.common.js
│   ├── vue.common.prod.js
│   ├── vue.esm.browser.js
│   ├── vue.esm.browser.min.js
│   ├── vue.esm.js
│   ├── vue.js
│   ├── vue.min.js
│   ├── vue.runtime.common.dev.js
│   ├── vue.runtime.common.js
│   ├── vue.runtime.common.prod.js
│   ├── vue.runtime.esm.js
│   ├── vue.runtime.js
│   └── vue.runtime.min.js
├── examples
│   ├── commits
│   │   ├── app.js
│   │   ├── index.html
│   │   └── mock.js
│   ├── elastic-header
│   │   ├── index.html
│   │   └── style.css
│   ├── firebase
│   │   ├── app.js
│   │   ├── index.html
│   │   └── style.css
│   ├── grid
│   │   ├── grid.js
│   │   ├── index.html
│   │   └── style.css
│   ├── markdown
│   │   ├── index.html
│   │   └── style.css
│   ├── modal
│   │   ├── index.html
│   │   └── style.css
│   ├── move-animations
│   │   └── index.html
│   ├── select2
│   │   └── index.html
│   ├── svg
│   │   ├── index.html
│   │   ├── style.css
│   │   └── svg.js
│   ├── todomvc
│   │   ├── app.js
│   │   ├── index.html
│   │   └── readme.md
│   └── tree
│       ├── index.html
│       └── tree.js
├── flow
│   ├── compiler.js
│   ├── component.js
│   ├── global-api.js
│   ├── modules.js
│   ├── options.js
│   ├── ssr.js
│   ├── vnode.js
│   └── weex.js
├── package.json
├── packages
│   ├── vue-server-renderer
│   │   ├── README.md
│   │   ├── basic.js
│   │   ├── build.dev.js
│   │   ├── build.prod.js
│   │   ├── client-plugin.d.ts
│   │   ├── client-plugin.js
│   │   ├── index.js
│   │   ├── package.json
│   │   ├── server-plugin.d.ts
│   │   ├── server-plugin.js
│   │   └── types
│   │       ├── index.d.ts
│   │       ├── plugin.d.ts
│   │       └── tsconfig.json
│   ├── vue-template-compiler
│   │   ├── README.md
│   │   ├── browser.js
│   │   ├── build.js
│   │   ├── index.js
│   │   ├── package.json
│   │   └── types
│   │       ├── index.d.ts
│   │       ├── test.ts
│   │       └── tsconfig.json
│   ├── weex-template-compiler
│   │   ├── README.md
│   │   ├── build.js
│   │   ├── index.js
│   │   └── package.json
│   └── weex-vue-framework
│       ├── README.md
│       ├── factory.js
│       ├── index.js
│       └── package.json
├── scripts
│   ├── alias.js
│   ├── build.js
│   ├── config.js
│   ├── feature-flags.js
│   ├── gen-release-note.js
│   ├── get-weex-version.js
│   ├── git-hooks
│   │   ├── commit-msg
│   │   └── pre-commit
│   ├── release-weex.sh
│   ├── release.sh
│   └── verify-commit-msg.js
├── src
│   ├── compiler
│   │   ├── codeframe.js
│   │   ├── codegen
│   │   │   ├── events.js
│   │   │   └── index.js
│   │   ├── create-compiler.js
│   │   ├── directives
│   │   │   ├── bind.js
│   │   │   ├── index.js
│   │   │   ├── model.js
│   │   │   └── on.js
│   │   ├── error-detector.js
│   │   ├── helpers.js
│   │   ├── index.js
│   │   ├── optimizer.js
│   │   ├── parser
│   │   │   ├── entity-decoder.js
│   │   │   ├── filter-parser.js
│   │   │   ├── html-parser.js
│   │   │   ├── index.js
│   │   │   └── text-parser.js
│   │   └── to-function.js
│   ├── core
│   │   ├── components
│   │   │   ├── index.js
│   │   │   └── keep-alive.js
│   │   ├── config.js
│   │   ├── global-api
│   │   │   ├── assets.js
│   │   │   ├── extend.js
│   │   │   ├── index.js
│   │   │   ├── mixin.js
│   │   │   └── use.js
│   │   ├── index.js
│   │   ├── instance
│   │   │   ├── events.js
│   │   │   ├── index.js
│   │   │   ├── init.js
│   │   │   ├── inject.js
│   │   │   ├── lifecycle.js
│   │   │   ├── proxy.js
│   │   │   ├── render-helpers
│   │   │   │   ├── bind-dynamic-keys.js
│   │   │   │   ├── bind-object-listeners.js
│   │   │   │   ├── bind-object-props.js
│   │   │   │   ├── check-keycodes.js
│   │   │   │   ├── index.js
│   │   │   │   ├── render-list.js
│   │   │   │   ├── render-slot.js
│   │   │   │   ├── render-static.js
│   │   │   │   ├── resolve-filter.js
│   │   │   │   ├── resolve-scoped-slots.js
│   │   │   │   └── resolve-slots.js
│   │   │   ├── render.js
│   │   │   └── state.js
│   │   ├── observer
│   │   │   ├── array.js
│   │   │   ├── dep.js
│   │   │   ├── index.js
│   │   │   ├── scheduler.js
│   │   │   ├── traverse.js
│   │   │   └── watcher.js
│   │   ├── util
│   │   │   ├── debug.js
│   │   │   ├── env.js
│   │   │   ├── error.js
│   │   │   ├── index.js
│   │   │   ├── lang.js
│   │   │   ├── next-tick.js
│   │   │   ├── options.js
│   │   │   ├── perf.js
│   │   │   └── props.js
│   │   └── vdom
│   │       ├── create-component.js
│   │       ├── create-element.js
│   │       ├── create-functional-component.js
│   │       ├── helpers
│   │       │   ├── extract-props.js
│   │       │   ├── get-first-component-child.js
│   │       │   ├── index.js
│   │       │   ├── is-async-placeholder.js
│   │       │   ├── merge-hook.js
│   │       │   ├── normalize-children.js
│   │       │   ├── normalize-scoped-slots.js
│   │       │   ├── resolve-async-component.js
│   │       │   └── update-listeners.js
│   │       ├── modules
│   │       │   ├── directives.js
│   │       │   ├── index.js
│   │       │   └── ref.js
│   │       ├── patch.js
│   │       └── vnode.js
│   ├── platforms
│   │   ├── web
│   │   │   ├── compiler
│   │   │   │   ├── directives
│   │   │   │   │   ├── html.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── model.js
│   │   │   │   │   └── text.js
│   │   │   │   ├── index.js
│   │   │   │   ├── modules
│   │   │   │   │   ├── class.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── model.js
│   │   │   │   │   └── style.js
│   │   │   │   ├── options.js
│   │   │   │   └── util.js
│   │   │   ├── entry-compiler.js
│   │   │   ├── entry-runtime-with-compiler.js
│   │   │   ├── entry-runtime.js
│   │   │   ├── entry-server-basic-renderer.js
│   │   │   ├── entry-server-renderer.js
│   │   │   ├── runtime
│   │   │   │   ├── class-util.js
│   │   │   │   ├── components
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── transition-group.js
│   │   │   │   │   └── transition.js
│   │   │   │   ├── directives
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── model.js
│   │   │   │   │   └── show.js
│   │   │   │   ├── index.js
│   │   │   │   ├── modules
│   │   │   │   │   ├── attrs.js
│   │   │   │   │   ├── class.js
│   │   │   │   │   ├── dom-props.js
│   │   │   │   │   ├── events.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── style.js
│   │   │   │   │   └── transition.js
│   │   │   │   ├── node-ops.js
│   │   │   │   ├── patch.js
│   │   │   │   └── transition-util.js
│   │   │   ├── server
│   │   │   │   ├── compiler.js
│   │   │   │   ├── directives
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── model.js
│   │   │   │   │   └── show.js
│   │   │   │   ├── modules
│   │   │   │   │   ├── attrs.js
│   │   │   │   │   ├── class.js
│   │   │   │   │   ├── dom-props.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.js
│   │   │   │   └── util.js
│   │   │   └── util
│   │   │       ├── attrs.js
│   │   │       ├── class.js
│   │   │       ├── compat.js
│   │   │       ├── element.js
│   │   │       ├── index.js
│   │   │       └── style.js
│   │   └── weex
│   │       ├── compiler
│   │       │   ├── directives
│   │       │   │   ├── index.js
│   │       │   │   └── model.js
│   │       │   ├── index.js
│   │       │   └── modules
│   │       │       ├── append.js
│   │       │       ├── class.js
│   │       │       ├── index.js
│   │       │       ├── props.js
│   │       │       ├── recycle-list
│   │       │       │   ├── component-root.js
│   │       │       │   ├── component.js
│   │       │       │   ├── index.js
│   │       │       │   ├── recycle-list.js
│   │       │       │   ├── text.js
│   │       │       │   ├── v-bind.js
│   │       │       │   ├── v-for.js
│   │       │       │   ├── v-if.js
│   │       │       │   ├── v-on.js
│   │       │       │   └── v-once.js
│   │       │       └── style.js
│   │       ├── entry-compiler.js
│   │       ├── entry-framework.js
│   │       ├── entry-runtime-factory.js
│   │       ├── runtime
│   │       │   ├── components
│   │       │   │   ├── index.js
│   │       │   │   ├── richtext.js
│   │       │   │   ├── transition-group.js
│   │       │   │   └── transition.js
│   │       │   ├── directives
│   │       │   │   └── index.js
│   │       │   ├── index.js
│   │       │   ├── modules
│   │       │   │   ├── attrs.js
│   │       │   │   ├── class.js
│   │       │   │   ├── events.js
│   │       │   │   ├── index.js
│   │       │   │   ├── style.js
│   │       │   │   └── transition.js
│   │       │   ├── node-ops.js
│   │       │   ├── patch.js
│   │       │   ├── recycle-list
│   │       │   │   ├── render-component-template.js
│   │       │   │   └── virtual-component.js
│   │       │   └── text-node.js
│   │       └── util
│   │           ├── element.js
│   │           ├── index.js
│   │           └── parser.js
│   ├── server
│   │   ├── bundle-renderer
│   │   │   ├── create-bundle-renderer.js
│   │   │   ├── create-bundle-runner.js
│   │   │   └── source-map-support.js
│   │   ├── create-basic-renderer.js
│   │   ├── create-renderer.js
│   │   ├── optimizing-compiler
│   │   │   ├── codegen.js
│   │   │   ├── index.js
│   │   │   ├── modules.js
│   │   │   ├── optimizer.js
│   │   │   └── runtime-helpers.js
│   │   ├── render-context.js
│   │   ├── render-stream.js
│   │   ├── render.js
│   │   ├── template-renderer
│   │   │   ├── create-async-file-mapper.js
│   │   │   ├── index.js
│   │   │   ├── parse-template.js
│   │   │   └── template-stream.js
│   │   ├── util.js
│   │   ├── webpack-plugin
│   │   │   ├── client.js
│   │   │   ├── server.js
│   │   │   └── util.js
│   │   └── write.js
│   ├── sfc
│   │   └── parser.js
│   └── shared
│       ├── constants.js
│       └── util.js
├── test
│   ├── e2e
│   │   ├── nightwatch.config.js
│   │   ├── runner.js
│   │   └── specs
│   │       ├── async-edge-cases.html
│   │       ├── async-edge-cases.js
│   │       ├── basic-ssr.html
│   │       ├── basic-ssr.js
│   │       ├── commits.js
│   │       ├── grid.js
│   │       ├── markdown.js
│   │       ├── modal.js
│   │       ├── select2.js
│   │       ├── svg.js
│   │       ├── todomvc.js
│   │       └── tree.js
│   ├── helpers
│   │   ├── classlist.js
│   │   ├── test-object-option.js
│   │   ├── to-equal.js
│   │   ├── to-have-been-warned.js
│   │   ├── trigger-event.js
│   │   ├── vdom.js
│   │   └── wait-for-update.js
│   ├── ssr
│   │   ├── async-loader.js
│   │   ├── compile-with-webpack.js
│   │   ├── fixtures
│   │   │   ├── app.js
│   │   │   ├── async-bar.js
│   │   │   ├── async-foo.js
│   │   │   ├── cache-opt-out.js
│   │   │   ├── cache.js
│   │   │   ├── error.js
│   │   │   ├── nested-cache.js
│   │   │   ├── promise-rejection.js
│   │   │   ├── split.js
│   │   │   ├── test.css
│   │   │   ├── test.png
│   │   │   └── test.woff2
│   │   ├── jasmine.js
│   │   ├── ssr-basic-renderer.spec.js
│   │   ├── ssr-bundle-render.spec.js
│   │   ├── ssr-stream.spec.js
│   │   ├── ssr-string.spec.js
│   │   └── ssr-template.spec.js
│   ├── unit
│   │   ├── features
│   │   │   ├── component
│   │   │   │   ├── component-async.spec.js
│   │   │   │   ├── component-keep-alive.spec.js
│   │   │   │   ├── component-scoped-slot.spec.js
│   │   │   │   ├── component-slot.spec.js
│   │   │   │   └── component.spec.js
│   │   │   ├── debug.spec.js
│   │   │   ├── directives
│   │   │   │   ├── bind.spec.js
│   │   │   │   ├── class.spec.js
│   │   │   │   ├── cloak.spec.js
│   │   │   │   ├── for.spec.js
│   │   │   │   ├── html.spec.js
│   │   │   │   ├── if.spec.js
│   │   │   │   ├── model-checkbox.spec.js
│   │   │   │   ├── model-component.spec.js
│   │   │   │   ├── model-dynamic.spec.js
│   │   │   │   ├── model-file.spec.js
│   │   │   │   ├── model-parse.spec.js
│   │   │   │   ├── model-radio.spec.js
│   │   │   │   ├── model-select.spec.js
│   │   │   │   ├── model-text.spec.js
│   │   │   │   ├── on.spec.js
│   │   │   │   ├── once.spec.js
│   │   │   │   ├── pre.spec.js
│   │   │   │   ├── show.spec.js
│   │   │   │   ├── static-style-parser.spec.js
│   │   │   │   ├── style.spec.js
│   │   │   │   └── text.spec.js
│   │   │   ├── error-handling.spec.js
│   │   │   ├── filter
│   │   │   │   └── filter.spec.js
│   │   │   ├── global-api
│   │   │   │   ├── assets.spec.js
│   │   │   │   ├── compile.spec.js
│   │   │   │   ├── config.spec.js
│   │   │   │   ├── extend.spec.js
│   │   │   │   ├── mixin.spec.js
│   │   │   │   ├── observable.spec.js
│   │   │   │   ├── set-delete.spec.js
│   │   │   │   └── use.spec.js
│   │   │   ├── instance
│   │   │   │   ├── init.spec.js
│   │   │   │   ├── methods-data.spec.js
│   │   │   │   ├── methods-events.spec.js
│   │   │   │   ├── methods-lifecycle.spec.js
│   │   │   │   ├── properties.spec.js
│   │   │   │   └── render-proxy.spec.js
│   │   │   ├── options
│   │   │   │   ├── _scopeId.spec.js
│   │   │   │   ├── comments.spec.js
│   │   │   │   ├── components.spec.js
│   │   │   │   ├── computed.spec.js
│   │   │   │   ├── data.spec.js
│   │   │   │   ├── delimiters.spec.js
│   │   │   │   ├── directives.spec.js
│   │   │   │   ├── el.spec.js
│   │   │   │   ├── errorCaptured.spec.js
│   │   │   │   ├── extends.spec.js
│   │   │   │   ├── functional.spec.js
│   │   │   │   ├── inheritAttrs.spec.js
│   │   │   │   ├── inject.spec.js
│   │   │   │   ├── lifecycle.spec.js
│   │   │   │   ├── methods.spec.js
│   │   │   │   ├── mixins.spec.js
│   │   │   │   ├── name.spec.js
│   │   │   │   ├── parent.spec.js
│   │   │   │   ├── props.spec.js
│   │   │   │   ├── propsData.spec.js
│   │   │   │   ├── render.spec.js
│   │   │   │   ├── renderError.spec.js
│   │   │   │   ├── template.spec.js
│   │   │   │   └── watch.spec.js
│   │   │   ├── ref.spec.js
│   │   │   └── transition
│   │   │       ├── inject-styles.js
│   │   │       ├── transition-group.spec.js
│   │   │       ├── transition-mode.spec.js
│   │   │       └── transition.spec.js
│   │   ├── index.js
│   │   ├── karma.base.config.js
│   │   ├── karma.cover.config.js
│   │   ├── karma.dev.config.js
│   │   ├── karma.sauce.config.js
│   │   ├── karma.unit.config.js
│   │   └── modules
│   │       ├── compiler
│   │       │   ├── codeframe.spec.js
│   │       │   ├── codegen.spec.js
│   │       │   ├── compiler-options.spec.js
│   │       │   ├── optimizer.spec.js
│   │       │   └── parser.spec.js
│   │       ├── observer
│   │       │   ├── dep.spec.js
│   │       │   ├── observer.spec.js
│   │       │   ├── scheduler.spec.js
│   │       │   └── watcher.spec.js
│   │       ├── server-compiler
│   │       │   ├── compiler-options.spec.js
│   │       │   └── optimizer.spec.js
│   │       ├── sfc
│   │       │   └── sfc-parser.spec.js
│   │       ├── util
│   │       │   ├── error.spec.js
│   │       │   └── next-tick.spec.js
│   │       └── vdom
│   │           ├── create-component.spec.js
│   │           ├── create-element.spec.js
│   │           ├── modules
│   │           │   ├── attrs.spec.js
│   │           │   ├── class.spec.js
│   │           │   ├── directive.spec.js
│   │           │   ├── dom-props.spec.js
│   │           │   ├── events.spec.js
│   │           │   └── style.spec.js
│   │           └── patch
│   │               ├── children.spec.js
│   │               ├── edge-cases.spec.js
│   │               ├── element.spec.js
│   │               ├── hooks.spec.js
│   │               └── hydration.spec.js
│   └── weex
│       ├── cases
│       │   ├── cases.spec.js
│       │   ├── event
│       │   │   ├── click.after.vdom.js
│       │   │   ├── click.before.vdom.js
│       │   │   └── click.vue
│       │   ├── recycle-list
│       │   │   ├── attrs.vdom.js
│       │   │   ├── attrs.vue
│       │   │   ├── classname.vdom.js
│       │   │   ├── classname.vue
│       │   │   ├── components
│       │   │   │   ├── banner.vue
│       │   │   │   ├── counter.vue
│       │   │   │   ├── editor.vue
│       │   │   │   ├── footer.vue
│       │   │   │   ├── lifecycle.vue
│       │   │   │   ├── poster.vue
│       │   │   │   ├── stateful-lifecycle.vdom.js
│       │   │   │   ├── stateful-lifecycle.vue
│       │   │   │   ├── stateful-v-model.vdom.js
│       │   │   │   ├── stateful-v-model.vue
│       │   │   │   ├── stateful.vdom.js
│       │   │   │   ├── stateful.vue
│       │   │   │   ├── stateless-multi-components.vdom.js
│       │   │   │   ├── stateless-multi-components.vue
│       │   │   │   ├── stateless-with-props.vdom.js
│       │   │   │   ├── stateless-with-props.vue
│       │   │   │   ├── stateless.vdom.js
│       │   │   │   └── stateless.vue
│       │   │   ├── inline-style.vdom.js
│       │   │   ├── inline-style.vue
│       │   │   ├── text-node.vdom.js
│       │   │   ├── text-node.vue
│       │   │   ├── v-else-if.vdom.js
│       │   │   ├── v-else-if.vue
│       │   │   ├── v-else.vdom.js
│       │   │   ├── v-else.vue
│       │   │   ├── v-for-iterator.vdom.js
│       │   │   ├── v-for-iterator.vue
│       │   │   ├── v-for.vdom.js
│       │   │   ├── v-for.vue
│       │   │   ├── v-if.vdom.js
│       │   │   ├── v-if.vue
│       │   │   ├── v-on-inline.vdom.js
│       │   │   ├── v-on-inline.vue
│       │   │   ├── v-on.vdom.js
│       │   │   ├── v-on.vue
│       │   │   ├── v-once.vdom.js
│       │   │   └── v-once.vue
│       │   └── render
│       │       ├── class.vdom.js
│       │       ├── class.vue
│       │       ├── sample.vdom.js
│       │       └── sample.vue
│       ├── compiler
│       │   ├── append.spec.js
│       │   ├── class.spec.js
│       │   ├── compile.spec.js
│       │   ├── parser.spec.js
│       │   ├── props.spec.js
│       │   ├── style.spec.js
│       │   └── v-model.spec.js
│       ├── helpers
│       │   └── index.js
│       ├── jasmine.js
│       └── runtime
│           ├── attrs.spec.js
│           ├── class.spec.js
│           ├── components
│           │   └── richtext.spec.js
│           ├── events.spec.js
│           ├── framework.spec.js
│           ├── node.spec.js
│           └── style.spec.js
├── tree.md
├── types
│   ├── index.d.ts
│   ├── options.d.ts
│   ├── plugin.d.ts
│   ├── test
│   │   ├── augmentation-test.ts
│   │   ├── es-module.ts
│   │   ├── options-test.ts
│   │   ├── plugin-test.ts
│   │   ├── ssr-test.ts
│   │   ├── tsconfig.json
│   │   ├── umd-test.ts
│   │   └── vue-test.ts
│   ├── tsconfig.json
│   ├── typings.json
│   ├── umd.d.ts
│   ├── vnode.d.ts
│   └── vue.d.ts
└── yarn.lock

113 directories, 532 files
