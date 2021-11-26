<script setup lang="ts">
import Chart from 'chart.js/auto'
import { nextTick, onMounted } from 'vue'
import { randomData, months } from '~/data/charts'
const props = defineProps({
  canvasId: {
    type: String,
    required: true,
  },
})
onMounted(() => {
  nextTick(() => {
    return new Chart(document.getElementById(props.canvasId), {
      type: 'bar',
      data: {
        labels: months,
        datasets: [
          {
            data: randomData(),
            backgroundColor: 'rgba(55, 125, 255)',
            hoverBackgroundColor: 'rgba(55, 125, 255, 0.7)',
            showLine: false,
          },
        ],
      },
      options: {
        scales: {
          yAxis: {
            grid: {
              display: false,
            },
          },
          xAxis: {
            grid: {
              display: false,
            },
          },
        },
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        elements: {
          bar: {
            borderRadius: 5,
          },
        },
      },
    })
  })
})
</script>
<template>
  <div>
    <canvas :id="canvasId"></canvas>
  </div>
</template>
