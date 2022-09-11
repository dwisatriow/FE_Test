import { createStore } from 'redux'

const initialState = {
  sidebarShow: true,
  roadSegments: [],
  apiUrl: 'https://630c319983986f74a7bb0dc5.mockapi.io/jm/ruas',
  selectedSegment: null,
  showModal: false,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
