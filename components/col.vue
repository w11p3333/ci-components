<template>
  <el-col v-bind="$props">
    <slot />
  </el-col>
</template>

<script>
import { Col } from 'element-ui'
export default {
  name: 'col',
  props: {
    ...Col.props
  }
}
</script>
