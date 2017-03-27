# ci-components

> a vue2.0 ui library based on IDG

	

## Install

```bash
$ npm install ci-components --save-dev
```

## What's Library Included 
- element-ui 1.2.5

## Usage

```js
// import 
import CIComponents from 'ci-components'
// css
import 'element-ui/lib/theme-default/index.css'
import 'ci-components/css/index.scss'
Vue.use(CIComponents)
```


## Components

- ci-row (same as [element ci-col](http://element.eleme.io/#/zh-CN/component/layout))
- ci-col 

```html
<ci-row>
  <ci-col :span="24">
    <ci-col :span="12">
      <!-- content -->
    </ci-col>
    <ci-col :span="12">
      <!-- content -->
    </ci-col>
  </ci-col>
</ci-row>
```

- ci-sidebar

```html
class:  light-blue || dark-blue || light-dark
    <ci-topbar
      class="light-blue"
      :data="navData"
      :username="username"
      :titlename="appname" />
```

- ci-topbar

```html
class:  light-blue || dark-blue || light-dark
      <ci-sidebar
      class="light-blue"
      :data="navData"
      :titlename="appname" />
```

- ci-noAccess

```html
<ci-noAccess />
```

- ci-notFound

```html
<ci-notFound />
```


