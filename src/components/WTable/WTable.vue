<template>
  <el-table
    :data="tableData"
  >
    <template
      v-for="item of config"
      :key="item.prop"
    >
      <el-table-column
        v-if="item.type === 'slot'"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
        <template #default="{row}">
          <slot
            :name="item.slot_name"
            :data="row"
          />
        </template>
      </el-table-column>
      <el-table-column
        v-else
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      />
    </template>
  </el-table>
</template>

<script lang="ts" setup>
interface Props {
  config: Array<any>
  tableData: Array<any>
}

const props = withDefaults(defineProps<Props>(), {
  config: () => [],
  tableData: () => [],
});

</script>
