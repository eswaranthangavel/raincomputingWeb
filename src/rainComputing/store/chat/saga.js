import { takeEvery, put, call } from "redux-saga/effects"
import { GET_ALL_CHATS } from "./actionTypes"
import { getAllChats } from "helpers/backend_helper"
import { getAllChatsFail, getAllChatsSuccess } from "./actions"

function* onGetAllChats({ payload: userID }) {
  try {
    const response = yield call(getAllChats, { userID })

    if (response.success) {
      yield put(getAllChatsSuccess(response.chats))
    } else {
      yield put(getAllChatsFail(response.msg))
    }
  } catch (error) {
    yield put(getAllChatsFail(error))
  }
}

function* rcChatSaga() {
  yield takeEvery(GET_ALL_CHATS, onGetAllChats)
}

export default rcChatSaga
