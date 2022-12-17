import React from "react"
import ChatInput from "./ChatInput"
import MessageList from "./MessageList"

const HomePage = () => {
    return (
        <main>
            {/* message list */}
            <MessageList />
            <ChatInput />
        </main>
    )
}

export default HomePage
