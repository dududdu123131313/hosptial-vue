<!-- MyRegistrationsComponent.vue -->
<template>
  <div class="my-registrations-container">
    <h1 class="title">我的挂号</h1>
    <div class="registration-info-container">
      <!-- 使用v - for遍历筛选后的挂号信息 -->
      <registration-info
                    v-for="reg in filteredRegistrationInfo"
                    :key="reg.medicalNumber"
                    :registration="reg"
      ></registration-info>
    </div>
  </div>
</template>
<script>
import RegistrationInfo from './RegistrationInfo.vue';
import axios from 'axios';

export default {
  components: {
    RegistrationInfo
  },
  data() {
    return {
      registrationInfo: [],
      filteredRegistrationInfo: []
    };
  },
  created() {
    this.fetchRegistrationInfo();
  },
  methods: {
    async fetchRegistrationInfo() {
      try {
        const response = await axios.get(`/api/registrationLists/account/user123`);
        this.registrationInfo = response.data;
        console.log(response.data);
        this.filterRegistrationInfo();
      } catch (error) {
        console.error('Error fetching registration info:', error);
      }
    },
    filterRegistrationInfo() {
      this.filteredRegistrationInfo = this.registrationInfo.filter(item => item.accountName === 'user123');
    }
  }
};
</script>

<style scoped>
.my-registrations-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.title {
  margin-bottom: 20px;
}

.registration-info-container {
  width: 80%;
  max-width: 1200px;
  flex: 1;
  overflow-y: auto;
  border: 1px solid #ddd;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}
</style>