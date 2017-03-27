var elementUI = require('element-ui'),
    row = require('../components/row'),
    col = require('../components/col'),
    container = require('../components/container'),
    content = require('../components/content'),
    topbar = require('../components/topbar'),
    sidebar = require('../components/sidebar'),
    noAccess = require('../components/noAccess'),
    notFound = require('../components/notFound')

var components = [
  row,
  col,
  container,
  content,
  topbar,
  sidebar,
  noAccess,
  notFound
]

var install = function(Vue) {
  /* istanbul ignore if */
  if (install.installed) return
  Vue.use(elementUI)
  // about language
  components.map(function(component) {
    Vue.component('ci-' + component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = install
