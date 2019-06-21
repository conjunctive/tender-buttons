import { createStore } from 'redux'
import { get, set } from 'partial.lenses'
import data from './data.js'

/// Action Types
const SET_LAYOUT = 'SET_LAYOUT'
const SET_SECTION = 'SET_SECTION'

/// Action Creators
var setLayout = layout => ({ type: SET_LAYOUT, layout })
var setSection = section => ({ type: SET_SECTION, section })

/// Initial State
/// - Layout: the style of content presentation
/// - Section: the current section to display
/// - Data: the content to be displayed
var initialState = {
  layout: 'Stack',
  section: 'Objects',
  data
}

// Layout value validation predicate
var isValidLayout = layout =>
  layout === 'Stack'
    || layout === 'Grid'

// Section value validation predicate
var isValidSection = section =>
  section === 'Objects'
    || section === 'Food'
    || section === 'Rooms'

// Perform state transition when action payload is deemed valid
// - key: a string, used for state/action access
// - isValid: a predicate function, for action payload validation
// - action: provided by the reducer
// - state: the previous state, provided by the reducer
var over = key => isValid => action => state => {
  var data = get(key, action)
  return isValid(data)
    ? set(key, data, state)
    : state
}

/// Creates a reducer from an object of handlers
/// Handler function application is curried and reversed
/// Action payload is applied first, followed by the state
var createReducer = (initialState, handlers) => (
  state = initialState,
  action
) =>
  handlers.hasOwnProperty(action.type)
    ? handlers[action.type](action)(state)
    : state

// Reducers
var setLayoutReducer = over('layout')(isValidLayout)
var setSectionReducer = over('section')(isValidSection)

// Root reducer
var rootReducer = createReducer(initialState, {
  [SET_LAYOUT]: setLayoutReducer,
  [SET_SECTION]: setSectionReducer
})

// Redux Store
var store = createStore(rootReducer)

export { store, setLayout, setSection }
