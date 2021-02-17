<template>
  <div class="performance">
    <div class="performance__container">
      <a-tabs size="large" default-active-key="1">
        <a-tab-pane class="performance__tab" key="1">
          <span class="performance__span" slot="tab"> Total revenue </span>
          <CourseRevenue />
        </a-tab-pane>
        <a-tab-pane class="performance__tab" key="2">
          <span class="performance__span" slot="tab"> Total enrollments </span>
          <CourseEnrollments />
        </a-tab-pane>
        <a-tab-pane class="performance__tab" key="3">
          <span class="performance__span" slot="tab"> Instructor rating </span>
          <CourseRating />
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)
export default {
  data() {
    return {}
  },
}
</script>

<style></style>
