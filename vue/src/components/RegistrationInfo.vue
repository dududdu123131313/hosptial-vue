<!-- RegistrationInfo.vue -->
<template>
  <div class="registration-info">
    <p>就诊科室: {{ registration.department }}</p>
    <p>科室地址: {{ registration.address }}</p>
    <p>看诊医生: {{ registration.doctor }}</p>
    <p>就诊时间: {{ registration.appointmentTime }}</p>
    <p>挂号时间: {{ registration.registrationTime }}</p>
    <p>状态: {{ registration.status }}</p>
    <p>就诊人: {{ registration.registrant }}</p>
    <p>挂号费用: ¥{{ registration.cost }}</p>
    <p>排队号: {{ registration.queueNumber }}</p>
    <button v-if="canCancel" class="cancel-button" @click="cancelAppointment">取消预约</button>
  </div>
</template>

<script>
export default {
  props: {
    registration: {
      type: Object,
      required: true
    }
  },
  computed: {
    canCancel() {
      const now = new Date();
      const appointmentTime = new Date(this.registration.appointmentTime);
      const registrationTime = new Date(this.registration.registrationTime);
      return !(now.getDate() === appointmentTime.getDate() || now.getDate() === registrationTime.getDate());
    }
  },
  methods: {
    cancelAppointment() {
      // 在这里添加取消预约的逻辑
      alert('预约已取消');
      // 发出请求到后端API来取消预约
   }
  }
};
</script>

<style scoped>
.registration-info {
  padding: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
}

.cancel-button {
  padding: 10px 20px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
 
}

.cancel-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>