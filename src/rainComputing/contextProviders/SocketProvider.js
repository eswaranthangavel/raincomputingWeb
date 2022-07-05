import React, { useContext, useEffect, useState } from "react"
import io from "socket.io-client"
import PropTypes from "prop-types"
import { SERVER_URL } from "rainComputing/helpers/configuration"

const SocketContext = React.createContext()

export function useSocket() {
  return useContext(SocketContext)
}

export function SocketProvider({ children }) {
  const [notifications, setNotifications] = useState([])
  const user = JSON.parse(localStorage.getItem("authUser"))
  const socket = user
    ? io(SERVER_URL, {
        query: { id: user.userID },
      })
    : null
  const handleSetNotifications = noti => {
    setNotifications(noti)
  }

  return (
    <SocketContext.Provider
      value={{
        socket,
        notifications,
        setNotifications: handleSetNotifications,
      }}
    >
      {children}
    </SocketContext.Provider>
  )
}

SocketProvider.propTypes = {
  children: PropTypes.any,
}
