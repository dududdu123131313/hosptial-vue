<!-- DoctorInfo.vue -->
<template>
    <div class="doctor-info">
      <div class="doctor-profile">
        <img :src="doctor.image" alt="doctor photo" />
        <div>
          <h3>{{ doctor.name }}</h3>
          <p>{{ doctor.department }}</p>
        </div>
      </div>
      <div class="appointment-options">
      <!-- 显示医生的可预约时间 -->
      <p>可预约时间：{{ doctor.VisitTime }}</p>
      <!-- 预约按钮 -->
      <button @click="bookAppointment(doctor)">
        预约
        <span v-if="doctor.remainingNumbers > 0">（剩余号数：{{ doctor.remainingNumbers}}）</span>
      </button>
    </div>
      <div class="fee">挂号费 {{ doctor.fee }}元</div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      doctor: {
        type: Object,
        required: true
      }
    },
    methods: {
      bookAppointment() {
        alert();
        // 在这里添加预约逻辑
      }
    }
  };
  </script>
  
  <style scoped>
  .doctor-info {
    border: 1px solid #ddd;
    padding: 20px;
    margin-bottom: 20px;
  }
  
  .doctor-profile {
    display: flex;
    align-items: center;
  }
  
  .doctor-profile img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 20px;
  }
  
  .appointment-options {
    margin-top: 20px;
  }
  
  .fee {
    margin-top: 20px;
    font-weight: bold;
  }
  </style>