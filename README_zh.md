# ci-components

> 基于vue2.0的中台UI库


## 语言
- [Enligsh](./README.md)

## 安装

```bash
$ npm install ci-components --save-dev
```

## 更新

```bash
$ npm update ci-components --save -dev
```

## 依赖库
- element-ui 1.2.5

## 使用

```js
// 导入库 
import CIComponents from 'ci-components'
// 导入css
import 'element-ui/lib/theme-default/index.css'
import 'ci-components/css/index.scss'
Vue.use(CIComponents)
```


## 组件

- ci-row (栅格系统, 基于[element ci-col](http://element.eleme.io/#/zh-CN/component/layout)封装 接口参数相同)
- ci-col 

**实例**

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

- ci-sidebar: 中台sidebar

**实例**

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
  - icon: **icon的类名**
  - data:
  
	   - title: String
	   - name: **必须为某个路由组件的名称**
	    
	    ```
	    name: anotherName
	    www.domain.com/#/index => www.domain.com/#/anotherName
	    ```
	   - link: **url路径**  
	    
	    ```
	    link: www.baidu.com
	    www.domain.com/#/index => www.baidu.com
	    link: /link
	    www.domain.com/#/index => www.domain.com/link
	    ```
	   - hash: **hash路径 不需要#** 
	    
	    ```
	    hash: hashName
	    www.domain.com/#/index => www.domain/#/hashName
	    ```
	  



- ci-topbar
  - class: 与`ci-sidebar`相同
  - data: 与`ci-sidebar`相同
  - titlename: 与`ci-sidebar`相同

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




