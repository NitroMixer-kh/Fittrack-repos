export enum WorkoutsActions {
  ADD_WORKOUT = 'ADD_WORKOUT',
  ADD_WORKOUT_WITHOUT_GPX = 'ADD_WORKOUT_WITHOUT_GPX',
  DELETE_WORKOUT = 'DELETE_WORKOUT',
  EDIT_WORKOUT = 'EDIT_WORKOUT',
  GET_CALENDAR_WORKOUTS = 'GET_CALENDAR_WORKOUTS',
  GET_USER_WORKOUTS = 'GET_USER_WORKOUTS',
  GET_TIMELINE_WORKOUTS = 'GET_TIMELINE_WORKOUTS',
  GET_MORE_TIMELINE_WORKOUTS = 'GET_MORE_TIMELINE_WORKOUTS',
  GET_WORKOUT_DATA = 'GET_WORKOUT_DATA',
}

export enum WorkoutsGetters {
  CALENDAR_WORKOUTS = 'CALENDAR_WORKOUTS',
  TIMELINE_WORKOUTS = 'TIMELINE_WORKOUTS',
  USER_WORKOUTS = 'USER_WORKOUTS',
  WORKOUT_DATA = 'WORKOUT_DATA',
  WORKOUTS_PAGINATION = 'WORKOUTS_PAGINATION',
}

export enum WorkoutsMutations {
  ADD_TIMELINE_WORKOUTS = 'ADD_TIMELINE_WORKOUTS',
  EMPTY_WORKOUTS = 'EMPTY_WORKOUTS',
  EMPTY_CALENDAR_WORKOUTS = 'EMPTY_CALENDAR_WORKOUTS',
  EMPTY_WORKOUT = 'EMPTY_WORKOUT',
  SET_CALENDAR_WORKOUTS = 'SET_CALENDAR_WORKOUTS',
  SET_TIMELINE_WORKOUTS = 'SET_TIMELINE_WORKOUTS',
  SET_USER_WORKOUTS = 'SET_USER_WORKOUTS',
  SET_WORKOUT = 'SET_WORKOUT',
  SET_WORKOUT_GPX = 'SET_WORKOUT_GPX',
  SET_WORKOUT_CHART_DATA = 'SET_WORKOUT_CHART_DATA',
  SET_WORKOUT_LOADING = 'SET_WORKOUT_LOADING',
  SET_WORKOUTS_PAGINATION = 'SET_WORKOUTS_PAGINATION',
}
