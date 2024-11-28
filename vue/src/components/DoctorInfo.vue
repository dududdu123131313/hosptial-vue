<!-- DoctorInfo.vue -->
<template>
    <div class="doctor-info">
      <div class="doctor-profile">
        <img :src="doctor.image" alt="doctor photo" />
        <div>
          <h3>{{ doctor.name }}</h3>
          <p>专家医师</p>
          <p>简介: {{ doctor.description }}</p>
        </div>
      </div>
      <div class="appointment-options">
        <div v-for="option in appointmentOptions" :key="option.time">
          <p>{{ option.date }} {{ option.period }}</p>
          <button @click="bookAppointment(option)">
            预约
            <span v-if="option.remainingSlots > 0">（剩余号数：{{ option.remainingSlots }}）</span>
          </button>
        </div>
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
      bookAppointment(option) {
        alert(`预约${this.doctor.name}在${option.date} ${option.period}`);
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