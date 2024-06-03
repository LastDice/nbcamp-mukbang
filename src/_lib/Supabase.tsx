import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Provider } from "@supabase/auth-js/src/lib/types";

const SupabaseProviders = Object.freeze({
    Discord: 'discord',
    Github: 'github',
    Google: 'google',
    Notion: 'notion',
    Twitch: 'twitch',
});

type Result = {
    success: boolean;
    message: string;
};

// noinspection JSUnusedGlobalSymbols
class Supabase {
    private supabase: SupabaseClient<any, any, any>;
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

    async signIn(provider: string) {
        await this.supabase.auth.signInWithOAuth({
            provider: provider as Provider,
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

    async writePosts(title: string, content: string): Promise<Result> {
        const isSignIn = await this.isSignIn();
        if (!isSignIn) {
            return {
                success: false,
                message: '로그인이 필요합니다.'
            }
        }

        const result = await this.supabase.from('posts').insert([
            { title, content }
        ]);

        if (result.error) {
            return {
                success: false,
                message: '글 작성에 실패했습니다: ' + result.statusText
            };
        }

        return {
            success: true,
            message: '성공적으로 작성되었습니다.'
        };
    }

    async isLiking(post_id: string): Promise<boolean> {
        const isSignIn = await this.isSignIn();
        if (!isSignIn) return false;

        const user_data = await this.supabase.auth.getUser()
        const { data } = await this.supabase.from('likes').select().eq('post_id', post_id).eq('user_id', user_data.data.user.id);
        return data.length > 0;
    }

    async setLiking(post_id: string, liked: boolean): Promise<Result> {
        const isSignIn = await this.isSignIn();
        if (!isSignIn) {
            return {
                success: false,
                message: '로그인이 필요합니다.'
            }
        }

        const user_data = await this.supabase.auth.getUser()
        if (liked) {
            const result = await this.supabase.from('likes').insert([
                { post_id, user_id: user_data.data.user.id }
            ]);
            if (result.error) {
                return {
                    success: false,
                    message: '좋아요 설정에 실패했습니다: ' + result.statusText
                };
            }
        } else {
            const result = await this.supabase.from('likes').delete().eq('post_id', post_id).eq('user_id', user_data.data.user.id);
            if (result.error) {
                return {
                    success: false,
                    message: '좋아요 해제에 실패했습니다: ' + result.statusText
                };
            }
        }

        return {
            success: true,
            message: '성공적으로 설정되었습니다.'
        };
    }

    async getPostAvgRating(post_id: string): Promise<number> {
        const { data } = await this.supabase.from('ratings').select('rating').eq('post_id', post_id);
        if (data.length === 0) return 0;

        return data.reduce((acc: number, cur: { rating: number; }) => acc + cur.rating, 0) / data.length;
    }

    async getMyPostRating(post_id: string): Promise<number> {
        const isSignIn = await this.isSignIn();
        if (!isSignIn) return 0;

        const user_data = await this.supabase.auth.getUser()
        const { data } = await this.supabase.from('ratings').select('rating').eq('post_id', post_id).eq('user_id', user_data.data.user.id);
        if (data.length === 0) return 0;

        return data[0].rating;
    }

    async setPostRating(post_id: string, rating: number): Promise<Result> {
        const isSignIn = await this.isSignIn();
        if (!isSignIn) {
            return {
                success: false,
                message: '로그인이 필요합니다.'
            }
        }

        const user_data = await this.supabase.auth.getUser()

        // 본인이 남긴 리뷰가 있는지 확인.
        const { data } = await this.supabase.from('ratings').select().eq('post_id', post_id).eq('user_id', user_data.data.user.id);
        if (data.length > 0) {
            const result = await this.supabase.from('ratings').update({ rating }).eq('post_id', post_id).eq('user_id', user_data.data.user.id);
            if (result.error) {
                return {
                    success: false,
                    message: '평점 설정에 실패했습니다: ' + result.statusText
                };
            }
        } else {
            const result = await this.supabase.from('ratings').insert([
                { post_id, user_id: user_data.data.user.id, rating }
            ]);
            if (result.error) {
                return {
                    success: false,
                    message: '평점 설정에 실패했습니다: ' + result.statusText
                };
            }
        }

        return {
            success: true,
            message: '성공적으로 설정되었습니다.'
        };
    }
}

export default Supabase;
export { SupabaseProviders, Result };