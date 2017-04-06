<template>
  <el-menu
    class="ci-sidebar"
    mode="vertical"
    v-bind="$props"
    @select="select"
    @open="open"
    @close="close">

    <div class="ci-sidebar__content">

      <!-- app start -->
      <el-menu-item class="ci-sidebar__title" v-if="titlename" index="1">{{ titlename }}</el-menu-item>
      <!-- app end -->

      <a @click="handleSidebar">
        <i class="ci-sidebar__affix" />
      </a>

      <template
        v-if="data"
        v-for="(item, index) of data">

        <!-- Traversal sub menu start -->
        <el-submenu
          v-if="item.items"
          :index="getIndex(index)">

          <template slot="title"><i :class="item.icon" />{{ item.title }}</template>
           <!-- Traversal second menu start -->
          <template
            v-for="(menuItem, menuIndex) of item.items">

          <!-- Traversal second-group start -->
            <el-menu-item-group
              v-if="menuItem.items"
              :title="menuItem.title">
          <!-- Traversal second-level menu start -->
              <a v-for="(subItem, subIndex) of menuItem.items"
                @click="startRouter(subIndex)"
                :key="subIndex">
                <el-menu-item
                  :index="getIndex(subIndex, index)">
                  <i :class="subItem.icon" />
                    {{ subItem.title }}
                </el-menu-item>
              </a>
          <!-- Traversal second-level menu end -->
            </el-menu-item-group>
          <!-- Traversal second-group end -->

          <!-- Traversal second-level menu start -->
            <a v-else
              @click="startRouter(menuItem)">
              <el-menu-item
                :index="getIndex(menuIndex, index)">
                <i :class="menuItem.icon" />
                  {{ menuItem.title }}
                </el-menu-item>
            </a>
         <!-- Traversal second-level menu start -->
       </template>

        </el-submenu>
       <!-- Traversal sub menu end -->

        <!-- Traversal first-level menu start -->
        <a
          v-else
          @click="startRouter(item)">
          <el-menu-item
            :index="getIndex(index)">
            <i :class="item.icon" />
              {{ item.title }}
            </el-menu-item>
        </a>

        <!-- Traversal first-level menu end -->

      </template>
    </div>

    <slot />

  </el-menu>
</template>

<script>
import { Menu } from 'element-ui'
import {
  addClass,
  removeClass,
  hasClass
} from '../utils'

const PULL = 'pull-sidebar'
const PULL_BACK = 'pull-sidebar-back'

export default {
  name: 'sidebar',

  components: [Menu],

  props: {

    data: {
      type: Array
    },

    titlename: {
      type: String
    },

    ...Menu.props
  },

  methods: {

    getIndex (index, subIndex) {
      // + 2 because appname use 1
      return subIndex ? `${subIndex + 2}-${index + 1}` : `${index + 2}`
    },

    select (...args) {
      this.$emit('select', ...args)
    },

    open (...args) {
      this.$emit('select', ...args)
    },

    close (...args) {
      this.$emit('close', ...args)
    },

    getLink (link) {
      const routeQuery = this.$route.query
      var query = link.indexOf('?') > -1 ? '&' : '?'
      Object.keys(routeQuery).forEach(key => {
        query += `${key}=${routeQuery[key]}&`
      })
      query = query.substring(0, query.length - 1) // remove last &
      return query ? link + query : link
    },

    startRouter (item) {
      if (!this.$router || !this.$route) throw new Error('请使用Vue Router')
      if (item.hash) {
        this.$router.push({
          path: item.hash,
          query: this.$route.query
        })
      } else if (item.name) {
        this.$router.push({
          name: item.name,
          query: this.$route.query
        })
      } else if (item.link) {
        window.location.href = this.getLink(item.link)
      }
    },

    handleSidebar () {
      this.$nextTick(() => {
        const container = document.getElementsByClassName('ci-container')[0]
        if (!hasClass(container, PULL) && !hasClass(container, PULL_BACK)) {
          addClass(container, PULL_BACK)
        } else if (hasClass(container, PULL)) {
          removeClass(container, PULL)
          addClass(container, PULL_BACK)
        } else {
          removeClass(container, PULL_BACK)
          addClass(container, PULL)
        }
      })
    }

  },

  watch: {
    '$route' () {
      const container = document.getElementsByClassName('ci-container')[0]
      if (hasClass(container, PULL_BACK)) {
        removeClass(container, PULL_BACK)
        addClass(container, PULL)
      }
    }
  }
}
</script>
