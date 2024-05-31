import { createClient } from "@supabase/supabase-js";

const SupabaseProviders = Object.freeze({
    Discord: 'discord',
    Github: 'github',
    Google: 'google',
    Kakao: 'kakao',
    Notion: 'notion',
    Twitch: 'twitch',
    Zoom: 'zoom',
});

class Supabase {
    constructor() {
        this.supabase = createClient(
            "https://okzounnvdejvweamyzsd.supabase.co",
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rem91bm52ZGVqdndlYW15enNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxMzU2MDYsImV4cCI6MjAzMjcxMTYwNn0.0gOgO3J5ybGbHANtLp9xe-QpmS-CL1EVxG1mcyBqHzw"
        );
    }

    async isSignIn() {
        const session = await this.supabase.auth.getSession();
        return !!session.data.session;
    }

    async signIn(provider) {
        await this.supabase.auth.signInWithOAuth({
            provider: provider
        });
        return this.isSignIn();
    }


    async signOut() {
        return await this.supabase.auth.signOut();
    }

    async getMainPosts() {
        const { data } = await this.supabase.from('posts').select();
        return data;
    }
}

export default Supabase;
export { SupabaseProviders };