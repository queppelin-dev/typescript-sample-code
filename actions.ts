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

export interface FetchChatUIListState {
    pending: boolean,
    chatTileState: ChatTile[],
    requestsState: any,
    isSearchBoxVisible: boolean,
    confirmationDialogOpened: boolean,
    confirmationDialogData: any,
    error: string
}

export interface ChatTile {
  conversationId: number,
  contactUserId: string,
  contactName: string,
  isOnline: boolean,
  lastMessage: string,
  lastMessageTimestamp: Date,
  showTick: boolean,
  isDelivered: boolean,
  isRead: boolean
}

export interface FetchChatUIListAction {
    type: string,
    chatTileState?: ChatTile[],
    conversationId?: number,
    contactUserId?: string,
    isOnline?: boolean,
    lastMessage?: string,
    lastMessageTimestamp?: Date,
    showTick?: boolean,
    isDelivered?: boolean,
    isRead?: boolean,
    requestsState?: any,
    confirmationDialogData?: any,
    error?: string
}


export function fetchChatUIListPending(): FetchChatUIListAction {
    return {
        type: FETCH_CHAT_UI_LIST_PENDING
    }
}

export function fetchChatUIListSuccess(chatTileState): FetchChatUIListAction {
    return {
        type: FETCH_CHAT_UI_LIST_SUCCESS,
        chatTileState
    }
}

export function fetchChatUIListError(error): FetchChatUIListAction {
    return {
        type: FETCH_CHAT_UI_LIST_ERROR,
        error: error
    }
}

export function updateLastMessage(conversationId, lastMessage): FetchChatUIListAction {
    return {
        type: UPDATE_LAST_MESSAGE,
        conversationId,
        lastMessage
    }
}

export function updateLastMessageTimestamp(conversationId: number, lastMessageTimestamp: Date): FetchChatUIListAction {
    return {
        type: UPDATE_LAST_MESSAGE_TIMESTAMP,
        conversationId,
        lastMessageTimestamp
    }
}

export function updateShowTick(conversationId: number, showTick: boolean): FetchChatUIListAction {
    return {
        type: UPDATE_SHOW_TICK,
        conversationId,
        showTick
    }
}

export function updateIsDelivered(conversationId: number, isDelivered: boolean): FetchChatUIListAction {
    return {
        type: UPDATE_IS_DELIVERED,
        conversationId,
        isDelivered
    }
}

export function updateIsRead(conversationId: number, isRead: boolean): FetchChatUIListAction {
    return {
        type: UPDATE_IS_READ,
        conversationId,
        isRead
    }
}

export function updateIsOnline(contactUserId: string, isOnline: boolean): FetchChatUIListAction {
    return {
        type: UPDATE_IS_ONLINE,
        contactUserId,
        isOnline
    }
}

export function sortChatUIList(chatTileState): FetchChatUIListAction {
    return {
        type: SORT_CHAT_UI_LIST,
        chatTileState
    }
}

export function showSearchBox(): FetchChatUIListAction {
    return {
        type: SHOW_SEARCH_BOX
    }
}

export function hideSearchBox(): FetchChatUIListAction {
    return {
        type: HIDE_SEARCH_BOX
    }
}

export function updateRequestsState(requestsState: any): FetchChatUIListAction {
    return {
        type: UPDATE_REQUESTS_STATE,
        requestsState
    }
}

export function showConfirmationDialog(confirmationDialogData: any): FetchChatUIListAction {
    return {
        type: SHOW_CONFIRMATION_DIALOG,
        confirmationDialogData
    }
}

export function hideConfirmationDialog(): FetchChatUIListAction {
    return {
        type: HIDE_CONFIRMATION_DIALOG,
    }
}
