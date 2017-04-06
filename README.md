# ci-components

> a vue2.0 ui library based on IDG


## language
- [Chinese](./README_zh.md)

## Install

```bash
$ npm install ci-components --save-dev
```


## upgrade
```bash
$ npm update ci-components --save-dev
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

example

```js
<template>
 <ci-topbar
  class="light-blue"
  :data="topbarData"
  :username="username"
  :titlename="appname" />
</template>

<script>
export default {

  data () {
    return {
      username: 'luliangxiao',
      titlename: 'dashboard',
      topbarData:  [
        {
          title: 'home',
          name: 'index' // use vue router name
        },
        {
          title: 'components',
          // icon: 'el-icon-message', // use icon class name
          items: [
            {
              title: 'example',
              hash: '/example' // use vue router path
            }
          ]
        },
        {
          title: 'noAccess',
          name: 'noAccess'
        },
        {
          title: '404',
          link: '/#/no.html' // use normal href
        }
      ]
    }
  }

}
</script>

```



  - class: `light-blue`   `dark-blue`  `light-dark`
  - titlename: String
  - username: String
  - icon: **must be a class name**
  - data:
  
	   - title: String
	   - name: **must be vue router name**
	    
	    ```
	    name: anotherName
	    www.domain.com/#/index => www.domain.com/#/anotherName
	    ```
	   - link: **must be fullpath link**  
	    
	    ```
	    link: www.baidu.com
	    www.domain.com/#/index => www.baidu.com
	    link: /link
	    www.domain.com/#/index => www.domain.com/link
	    ```
	   - hash: **must be hash** 
	    
	    ```
	    hash: hashName
	    www.domain.com/#/index => www.domain/#/hashName
	    ```
	  



- ci-topbar
  - class: as `ci-sidebar`
  - data: as `ci-sidebar`
  - titlename: as `ci-sidebar`

```html
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


