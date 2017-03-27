<template>
  <el-menu
    :class="className"
    v-bind="$props"
    @select="select"
    @open="open"
    @close="close">

    <!-- app start -->
    <el-menu-item v-if="appname" index="1">{{ appname }}</el-menu-item>
    <!-- app end -->

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

    <!-- user start -->
    <el-submenu class="username" v-if="username" :index="`${data.length + 1}`">
      <template slot="title">{{ username }}</template>
      <a @click="loginOut">
        <el-menu-item :index="`${data.length + 1}-1`">登出</el-menu-item>
      </a>
    </el-submenu>
    <!-- user end -->

    <slot />

  </el-menu>
</template>

<script>
import { Menu } from 'element-ui'

export default {
  name: 'navbar',

  components: [Menu],

  props: {

    data: {
      type: Array
    },

    appname: {
      type: String
    },

    username: {
      type: String
    },

    ...Menu.props
  },

  computed: {

    className () {
      return this.mode === 'horizontal' ? 'ci-topbar' : 'ci-sidebar'
    }

  },

  methods: {

    getIndex (index, subIndex) {
      // + 2 because appname use 1
      const count = this.appname ? 2 : 1
      return subIndex ? `${subIndex + count}-${index + 1}` : `${index + count}`
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

    loginOut () {
      if (!this.$router || !this.$route) throw new Error('请使用Vue Router')
      const { appkey = '' } = this.$route.query
      const loginoutUrl = '/account/main.php?action=logout.html'
      const redirect = encodeURIComponent(`/site/main.php?action=index.html&appkey=${appkey}`)
      window.location.href = `${loginoutUrl}&appkey=${appkey}&redirect=${redirect}`
    }
  }
}
</script>

<style lang="scss">
  .username {
    float: right !important;
  }
</style>
