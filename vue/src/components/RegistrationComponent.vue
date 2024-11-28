<!-- RegistrationComponent.vue -->
<template>
  <div class="container">
    <h1 class="title">预约挂号</h1>
    <div class="selection-container">
      <!-- 选择科室 -->
      <div class="selection-row">
        <span>选择科室：</span>
        <button v-for="department in departments" :key="department" @click="selectDepartment(department)">
          {{ department }}
        </button>
        <input type="text" v-model="selectedDepartment" class="selection-input" />
      </div>
      <!-- 选择类型 -->
      <div class="selection-row">
        <span>选择类型：</span>
        <button v-for="type in types" :key="type" @click="selectType(type)">
          {{ type }}
        </button>
        <input type="text" v-model="selectedType" class="selection-input" />
      </div>
      <!-- 选择日期 -->
      <div class="selection-row">
        <span>选择日期：</span>
        <button v-for="date in dates" :key="date" @click="selectDate(date)">
          {{ date }}
        </button>
        <input type="text" v-model="selectedDate" class="selection-input" />
      </div>
    </div>
    <!-- 查询按钮 -->
    <button class="query-button" @click="handleQuery">查询</button>
    <!-- 结果容器 -->
    <div class="results-container">
      <div class="results" v-if="doctors.length">
        <doctor-info
          v-for="doctor in doctors"
          :key="doctor.id"
          :doctor="doctor"
        ></doctor-info>
      </div>
      <div class="no-results" v-else>
        <p>没有找到相关数据。</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import DoctorInfo from './DoctorInfo.vue';

export default {
  components: {
    DoctorInfo
  },
  data() {
    return {
      departments: ['神经内科', '眼病诊疗中心', '肿瘤中心', '心血管内科', '血液内科', '内分泌科', '肾内科', '消化内科', '疼痛科', '骨科'],
      types: ['专家', '普通', '帕金森专病门诊', '眩晕门诊'],
      selectedDepartment: '',
      selectedType: '',
      selectedDate: '',
      dates: [],
      doctors: [],
      showResults: false
    };
  },
  created() {
    this.dates = this.generateDates(5);
  },
  methods: {
    selectDepartment(department) {
      this.selectedDepartment = department;
    },
    selectType(type) {
      this.selectedType = type;
    },
    selectDate(date) {
      this.selectedDate = date;
    },
    handleQuery() {
      axios.get('/api/doctors', {
        params: {
          department: this.selectedDepartment,
          type: this.selectedType,
          date: this.selectedDate
        }
      })
      .then(response => {
        this.doctors = response.data;
        this.showResults = true;
      })
      .catch(error => {
        console.error('Error fetching doctor info:', error);
      });
    },
    generateDates(days) {
      const dates = [];
      const today = new Date();
      for (let i = 0; i < days; i++) {
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + i);
        const year = nextDay.getFullYear();
        const month = (nextDay.getMonth() + 1).toString().padStart(2, '0');
        const day = nextDay.getDate().toString().padStart(2, '0');
        dates.push(`${year}-${month}-${day}`);
      }
      return dates;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: center;
  height: 100vh; /* 使容器占满整个视口高度 */
  width: 100%; /* 沾满整个视口宽度 */
  box-sizing: border-box; /* 确保 padding 不会影响宽度和高度 */
  padding: 20px; /* 根据需要添加内边距 */
}

.title {
  margin-bottom: 20px;
}

.selection-container {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  margin-bottom: 20px;
  background-color: white;
}

.selection-row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.selection-input {
  margin-left: 10px;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 4px;
  width: 200px;
  margin-left: auto;
}

.query-button {
  padding: 10px 20px;
  border: none;
  background-color: #3161FF;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.query-button:hover {
  background-color: #304add;
}

.results-container {
  width: 90%;
  height: 100%;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.results {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.doctor-info {
  flex: 1 1 300px;
  margin: 10px;
  border: 0;
  padding: 0;
  border-radius: 0;
  background-color: transparent;
}

.no-results {
  color: #999;
  text-align: center;
  height: 100%;
  width: 100%;
}
</style>