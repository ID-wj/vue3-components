<template>
  <div>
    <wTable
      :table-data="tableData"
      :config="tableConfig"
    >
      <template #oper="slot">
        <el-button type="primary">
          {{ slot.data.name }}
        </el-button>
      </template>
    </wTable>
    <MultilineTextVue text="安抚急啊看电视剧啊发生的纠纷哈吉斯的话放假啊回复安徽福建安徽的时间发哈手机发哈技术大会发按计划的发掘和顺丰哈计划" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';
import { reactive } from 'vue';
import { useStore } from '../store';
import wTable from '../components/WTable/WTable.vue';
import MultilineTextVue from '../components/multiline-text/MultilineText.vue';
// import tableCol from '../components/WTable/tableCol.vue';
// import wButton from '../components/wButton.vue';

export default defineComponent({
  components: {
    wTable,
    MultilineTextVue,
    // tableCol,
    // wButton,
  },
  setup() {
    const store = useStore();
    const name1 = store.getName;
    const tableData = reactive([{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄',
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄',
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    }]);
    const tableConfig = reactive([
      {
        prop: 'date',
        label: '日期',
        width: 300,
      },
      {
        prop: 'name',
        label: '姓名',
      },
      {
        prop: 'address',
        label: '地址',
      },
      {
        label: '操作',
        type: 'slot',
        slot_name: 'oper',
      },
    ]);
    return { name1, tableData, tableConfig };
  },
});
</script>
