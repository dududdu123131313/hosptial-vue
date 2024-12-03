<!-- RegistrationInfo.vue -->
<template>
  <div class="registration-info" :class="{ 'disabled-appointment':!canCancel }">
    <p>就诊科室: {{ registration.department }}</p>
    <p>门诊类型: {{ registration.outpatientType }}</p>
    <p>看诊医生: {{ registration.doctor_Name }}</p>
    <p>就诊时间: {{ formatTime(registration.visitTime) }}</p>
    <p>挂号时间: {{ formatTime(registration.registrationTime) }}</p>
    <p>就诊人: {{ registration.name }}</p>
    <button class="cancel - button" @click="cancelAppointment">取消预约</button>
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
      const visitTime = new Date(this.registration.visitTime);
      const registrationTime = new Date(this.registration.registrationTime);
      return now.getTime() < visitTime.getTime() && now.getTime() < registrationTime.getTime();
    }
  },
  methods: {
    formatTime(time) {
      if (time) {
        return new Date(time).toLocaleString();
      }
      return '';
    },
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
.registration-info {
                  padding: 20px;
                  margin-bottom: 20px;
                  border-bottom: 1px solid #ddd;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                  background-color: #fff;
                  border-radius: 8px;
                }
.disabled-appointment {
              opacity: 0.5;
            }
.cancel-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>