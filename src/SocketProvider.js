import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'
import PropTypes from "prop-types"

const SocketContext = React.createContext()

export function useSocket() {
  return useContext(SocketContext)
}

export function SocketProvider({ children }) {

const user = JSON.parse(localStorage.getItem("authUser"))
const socket = user?io("http://localhost:5100", {
    query: { id: user.userID },
  }):null

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}

SocketProvider.propTypes={
    children:PropTypes.any
}