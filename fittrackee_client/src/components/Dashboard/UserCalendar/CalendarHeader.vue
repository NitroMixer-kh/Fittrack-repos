<template>
  <div class="calendar-header">
    <div
      class="calendar-arrow calendar-arrow-left"
      @click="emit('displayPreviousMonth')"
    >
      <i class="fa fa-chevron-left" aria-hidden="true" />
    </div>
    <div class="calendar-month">
      <span>
        {{ format(day, 'MMM yyyy', { locale: localeOptions }) }}
      </span>
    </div>
    <div
      class="calendar-arrow calendar-arrow-right"
      @click="emit('displayNextMonth')"
    >
      <i class="fa fa-chevron-right" aria-hidden="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Locale, format } from 'date-fns'
  import { toRefs } from 'vue'

  interface Props {
    day: Date
    localeOptions: Locale
  }
  const props = defineProps<Props>()

  const emit = defineEmits(['displayNextMonth', 'displayPreviousMonth'])

  const { day, localeOptions } = toRefs(props)
</script>

<style lang="scss">
  @import '~@/scss/vars.scss';
  .calendar-header {
    display: flex;
    flex-direction: row;

    .calendar-arrow,
    .calendar-month {
      flex-grow: 1;
      padding: $default-padding;
    }
    .calendar-arrow-left {
      text-align: left;
      cursor: pointer;
    }
    .calendar-arrow-right {
      text-align: right;
      cursor: pointer;
    }
    .calendar-month {
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
    }
  }
</style>
