import Immutable from 'immutable'
import { FetchChatUIListState, FetchChatUIListAction } from './actions'
import {
    FETCH_CHAT_UI_LIST_ERROR,
    FETCH_CHAT_UI_LIST_PENDING,
    FETCH_CHAT_UI_LIST_SUCCESS,
    UPDATE_LAST_MESSAGE,
    UPDATE_LAST_MESSAGE_TIMESTAMP,
    UPDATE_IS_DELIVERED,
    UPDATE_IS_READ,
    UPDATE_IS_ONLINE,
    UPDATE_SHOW_TICK,
    SORT_CHAT_UI_LIST,
    SHOW_SEARCH_BOX,
    HIDE_SEARCH_BOX,
    UPDATE_REQUESTS_STATE,
    SHOW_CONFIRMATION_DIALOG,
    HIDE_CONFIRMATION_DIALOG
} from '../actions'

const initialState: FetchChatUIListState = {
    pending: false,
    chatTileState: [],
    requestsState: [],
    isSearchBoxVisible: false,
    confirmationDialogOpened: false,
    confirmationDialogData: [],
    error: null
}

const immutableState = Immutable.fromJS(initialState)

export default function chatUIReducer(state = immutableState, action: FetchChatUIListAction) {
    let index = null
    switch (action.type) {
        case FETCH_CHAT_UI_LIST_PENDING: 
            return state
                .set('pending', true)
        case FETCH_CHAT_UI_LIST_SUCCESS:
            return state
                .set('pending', false)
                .set('chatTileState', action.chatTileState)
        case FETCH_CHAT_UI_LIST_ERROR:
            return state
                .set('pending', false)
                .set('error', action.error)
        case UPDATE_LAST_MESSAGE:
            index = state.get('chatTileState').findIndex(listItem => {
                return listItem.conversationId === action.conversationId
              });
            return state
                .setIn(['chatTileState', index, 'lastMessage'], action.lastMessage)
        case UPDATE_LAST_MESSAGE_TIMESTAMP:
            index = state.get('chatTileState').findIndex(listItem => {
                return listItem.conversationId === action.conversationId
              })
            return state
                .setIn(['chatTileState', index, 'lastMessageTimestamp'], action.lastMessageTimestamp)
        case UPDATE_SHOW_TICK:
            index = state.get('chatTileState').findIndex(listItem => {
                return listItem.conversationId === action.conversationId
              })
            return state
                .setIn(['chatTileState', index, 'showTick'], action.showTick)
        case UPDATE_IS_DELIVERED:
            index = state.get('chatTileState').findIndex(listItem => {
                return listItem.conversationId === action.conversationId
              })
            return state
                .setIn(['chatTileState', index, 'isDelivered'], action.isDelivered)
        case UPDATE_IS_READ:
            index = state.get('chatTileState').findIndex(listItem => {
                return listItem.conversationId === action.conversationId
              })
            return state
                .setIn(['chatTileState', index, 'isRead'], action.isRead)
        case UPDATE_IS_ONLINE:
            index = state.get('chatTileState').findIndex(listItem => {
                return listItem.contactUserId === action.contactUserId
              })
            return state
                .setIn(['chatTileState', index, 'isOnline'], action.isOnline)
        case SORT_CHAT_UI_LIST:
            return state
                .set('chatTileState', action.chatTileState)
        case SHOW_SEARCH_BOX:
            return state
              .set('isSearchBoxVisible', true)
        case HIDE_SEARCH_BOX:
            return state
              .set('isSearchBoxVisible', false)
        case UPDATE_REQUESTS_STATE:
            return state
              .set('requestsState', action.requestsState)
        case SHOW_CONFIRMATION_DIALOG:
            return state
              .set('confirmationDialogOpened', true)
              .set('confirmationDialogData', action.confirmationDialogData)
        case HIDE_CONFIRMATION_DIALOG:
            return state
              .set('confirmationDialogOpened', false)
              .set('confirmationDialogData', [])
        default: 
            return state;
    }
}
