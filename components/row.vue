<template>
  <el-row v-bind="$props">
    <slot />
  </el-row>
</template>

<script>
import { Row } from 'element-ui'
export default {
  name: 'row',
  props: {
    ...Row.props
  }
}
</script>
