"use client"

import { FormEvent, useState } from "react"
import { v4 as uuid } from "uuid"
import { Message } from "../typings"
import useSWR from "swr"
import fetcher from "../utils/fetchMesages"

const ChatInput = () => {
    const [input, setInput] = useState("")
    const { data, error, mutate } = useSWR("api/getMessages", fetcher)
    console.log("data: ", data)

    const addMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!input) return
        const messageTosend = input
        setInput("")
        const id = uuid()

        const message: Message = {
            id,
            message: messageTosend,
            createdAt: Date.now(),
            username: "test user",
            porfilePic: "/blue.png",
            email: process.env.EMAIL!,
        }

        const uploadMessageToUpstash = async () => {
            const res = await fetch("/api/addMessage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message }),
            })

            const data = await res.json()
            console.log("MESSAGE ADDED >>>", data)
        }
        uploadMessageToUpstash()
    }
    return (
        <form
            onSubmit={addMessage}
            className="fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-t boerder-gray-100"
        >
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Enter message here..."
                type="text"
            />
            <button
                type="submit"
                disabled={!input}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Send
            </button>
        </form>
    )
}

export default ChatInput
