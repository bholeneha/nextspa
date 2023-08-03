import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
	session: {
		strategy: 'jwt',
		maxAge: 60*5
	},
	jwt: {
		maxAge: 60*5
	},
	callbacks: {
		// modify jwt info - add accesstoken to jwt payload 
		jwt: async ({token, user}) => {
			// console.log('jwt', token, user);
			if (user) {
				// @ts-ignore
				token.accessToken = user['accessToken'];
			}
			return token;
		},
		// update session info
		session: async ({session, token}) => {
			// @ts-ignore
			session['accessToken'] = token.accessToken;
			return session;
		}
	},
	providers: [CredentialsProvider({
		credentials: {
			email: { label: "email", type: "text", placeholder: "js@gmail.com" },
			password: { label: "Password", type: "password" }
		},
		// @ts-ignore
		// authorize function to check user credentials
		authorize: async (credentials: { email: string; password: string }) => {
			// console.log(credentials);
			const isValid = credentials.email === 'john@gmail.com' && credentials.password === 'john123';
			// console.log(isValid);
			if (isValid) {
				return {
					id: '1',
					name: 'John',
					email: 'john@gmail.com',
				};
			} 
			
			return null;
		}
	})],
	secret: process.env.NEXTAUTH_SECRET || 'nextspa',
});

export {handler as GET , handler as POST}
