<template>
  <div>
    <h1>主页</h1>
    <p>这里是主页，欢迎使用医疗预约系统。</p>
    <!-- 使用日历组件 -->
    <CalendarComponent />
  </div>
</template>

<script>
// 引入日历组件
import CalendarComponent from './CalendarComponent.vue';

export default {
  name: 'HomeComponent',
  components: {
    // 注册日历组件
    CalendarComponent
  }
};
</script>

<style scoped>
/* 你可以在这里添加主页特有的样式 */
</style>