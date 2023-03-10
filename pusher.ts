import Pusher from "pusher"
import ClientPusher from "pusher-js"

export const serverPusher: Pusher = new Pusher({
    appId: `${process.env.NEXT_PUBLIC_PUSHER_ID}`,
    key: `${process.env.NEXT_PUBLIC_PUSHER_KEY}`,
    secret: `${process.env.NEXT_PUBLIC_PUSHER_SECRET}`,
    cluster: `${process.env.NEXT_PUBLIC_PUSHER_CLUSTER}`,
    useTLS: true,
})

export const clientPusher = new ClientPusher(
    `${process.env.NEXT_PUBLIC_PUSHER_KEY}`,
    {
        cluster: `${process.env.NEXT_PUBLIC_PUSHER_CLUSTER}`,
        forceTLS: true,
    }
)
