import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        FacebookProvider({
            clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET!,
        }),
        // ...add more providers here
    ],
    secret: process.env.NEXTAUTH_SERCRET!,
    pages: {
        signIn: "/auth/signin",
    },
}

export default NextAuth(authOptions)
