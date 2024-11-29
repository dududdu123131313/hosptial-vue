<template>
    <div class="calendar">
      <div class="header">
        <button @click="prevMonth">&lt;</button>
        <span>{{ currentMonthName }} {{ currentYear }}</span>
        <button @click="nextMonth">&gt;</button>
      </div>
      <div class="weekdays">
        <div v-for="day in weekdays" :key="day">{{ day }}</div>
      </div>
      <div class="days">
        <div v-for="day in days" :key="day.id"
             :class="{ 'other-month': day.otherMonth, 'today': day.isToday }"
             @click="selectDate(day.date)">
          {{ day.date }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
        currentMonth: new Date().getMonth(),
        weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        days: []
      };
    },
    computed: {
      currentMonthName() {
        return this.weekdays[new Date(this.currentYear, this.currentMonth, 1).getDay()];
      }
    },
    created() {
      this.generateDays();
    },
    methods: {
      generateDays() {
        const firstDay = new Date(this.currentYear, this.currentMonth, 1);
        const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
        const startDay = firstDay.getDay();
        const numberOfDays = lastDay.getDate();
  
        const days = [];
        for (let i = startDay; i > 0; i--) {
          days.push({ id: days.length, date: '', otherMonth: true });
        }
        for (let i = 1; i <= numberOfDays; i++) {
          days.push({ id: days.length, date: i, otherMonth: false, isToday: i === new Date().getDate() && this.currentMonth === new Date().getMonth() && this.currentYear === new Date().getFullYear() });
        }
        this.days = days;
      },
      nextMonth() {
        if (this.currentMonth < 11) {
          this.currentMonth++;
        } else {
          this.currentMonth = 0;
          this.currentYear++;
        }
        this.generateDays();
      },
      prevMonth() {
        if (this.currentMonth > 0) {
          this.currentMonth--;
        } else {
          this.currentMonth = 11;
          this.currentYear--;
        }
        this.generateDays();
      },
      selectDate(date) {
        alert(`Selected date: ${date}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .calendar {
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .header button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
  
  .weekdays {
    display: flex;
    margin-bottom: 5px;
  }
  
  .weekdays div, .days div {
    width: 14.28%;
    text-align: center;
    padding: 5px;
  }
  
  .days div {
    border: 1px solid #eee;
    border-radius: 50%;
    cursor: pointer;
  }
  
  .days div:hover {
    background-color: #f0f0f0;
  }
  
  .other-month {
    color: #ccc;
  }
  
  .today {
    color: #fff;
    background-color: #3498db;
  }
  </style>