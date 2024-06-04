import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Provider } from '@supabase/supabase-js';

const SupabaseProviders = Object.freeze({
    Discord: 'discord',
    Github: 'github',
    Google: 'google',
    Notion: 'notion',
    Twitch: 'twitch'
});

type Result = {
    success: boolean;
    message: string;
    data?: string;
};

// noinspection JSUnusedGlobalSymbols
class Supabase {
    private supabase: SupabaseClient;

    constructor() {
        this.supabase = createClient(
            'https://okzounnvdejvweamyzsd.supabase.co',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rem91bm52ZGVqdndlYW15enNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxMzU2MDYsImV4cCI6MjAzMjcxMTYwNn0.0gOgO3J5ybGbHANtLp9xe-QpmS-CL1EVxG1mcyBqHzw'
        );
    }

    from(table: string) {
        return this.supabase.from(table);
    }

    async isSignIn() {
        const session = await this.supabase.auth.getSession();
        return session.data.session !== null;
    }

    async signIn(provider: Provider) {
        await this.supabase.auth.signInWithOAuth({
            provider: provider
        });
        return this.isSignIn();
    }

    async signOut() {
        const { error } = await this.supabase.auth.signOut();
        if (error) {
            throw error;
        }
    }

    async getPosts() {
        const { data, error } = await this.supabase.from('posts').select();
        if (error) {
            throw error;
        }
        return data;
    }

    async writePosts(title: string, content: string): Promise<Result> {
        const isSignIn = await this.isSignIn();
        if (!isSignIn) {
            return {
                success: false,
                message: '로그인이 필요합니다.'
            };
        }

        const { error } = await this.supabase.from('posts').insert([{ title, content }]);

        if (error) {
            return {
                success: false,
                message: '글 작성에 실패했습니다: ' + error.message
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

        const { data: user_data, error: user_error } = await this.supabase.auth.getUser();
        if (user_error) {
            throw user_error;
        }

        const { data, error } = await this.supabase
            .from('likes')
            .select()
            .eq('post_id', post_id)
            .eq('user_id', user_data.user.id);
        if (error) {
            throw error;
        }

        return data.length > 0;
    }

    async setLiking(post_id: string, liked: boolean): Promise<Result> {
        const isSignIn = await this.isSignIn();
        if (!isSignIn) {
            return {
                success: false,
                message: '로그인이 필요합니다.'
            };
        }

        const { data: user_data, error: user_error } = await this.supabase.auth.getUser();
        if (user_error) {
            throw user_error;
        }

        if (liked) {
            const { error } = await this.supabase.from('likes').insert([{ post_id, user_id: user_data.user.id }]);
            if (error) {
                return {
                    success: false,
                    message: '좋아요 설정에 실패했습니다: ' + error.message
                };
            }
        } else {
            const { error } = await this.supabase
                .from('likes')
                .delete()
                .eq('post_id', post_id)
                .eq('user_id', user_data.user.id);
            if (error) {
                return {
                    success: false,
                    message: '좋아요 해제에 실패했습니다: ' + error.message
                };
            }
        }

        return {
            success: true,
            message: '성공적으로 설정되었습니다.'
        };
    }

    async getPostAvgRating(post_id: string): Promise<number> {
        const { data, error } = await this.supabase.from('ratings').select('rating').eq('post_id', post_id);
        if (error) {
            throw error;
        }
        if (data.length === 0) return 0;

        return data.reduce((acc: number, cur: { rating: number }) => acc + cur.rating, 0) / data.length;
    }

    async getMyPostRating(post_id: string): Promise<number> {
        const isSignIn = await this.isSignIn();
        if (!isSignIn) return 0;

        const { data: user_data, error: user_error } = await this.supabase.auth.getUser();
        if (user_error) {
            throw user_error;
        }

        const { data, error } = await this.supabase
            .from('ratings')
            .select('rating')
            .eq('post_id', post_id)
            .eq('user_id', user_data.user.id);
        if (error) {
            throw error;
        }
        if (data.length === 0) return 0;

        return data[0].rating;
    }

    async setPostRating(post_id: string, rating: number): Promise<Result> {
        const isSignIn = await this.isSignIn();
        if (!isSignIn) {
            return {
                success: false,
                message: '로그인이 필요합니다.'
            };
        }

        const { data: user_data, error: user_error } = await this.supabase.auth.getUser();
        if (user_error) {
            throw user_error;
        }

        const { data, error } = await this.supabase
            .from('ratings')
            .select()
            .eq('post_id', post_id)
            .eq('user_id', user_data.user.id);
        if (error) {
            throw error;
        }

        if (data.length > 0) {
            const { error: update_error } = await this.supabase
                .from('ratings')
                .update({ rating })
                .eq('post_id', post_id)
                .eq('user_id', user_data.user.id);
            if (update_error) {
                return {
                    success: false,
                    message: '평점 설정에 실패했습니다: ' + update_error.message
                };
            }
        } else {
            const { error: insert_error } = await this.supabase
                .from('ratings')
                .insert([{ post_id, user_id: user_data.user.id, rating }]);
            if (insert_error) {
                return {
                    success: false,
                    message: '평점 설정에 실패했습니다: ' + insert_error.message
                };
            }
        }

        return {
            success: true,
            message: '성공적으로 설정되었습니다.'
        };
    }

    async setProfileImg(file: File): Promise<Result> {
        const isSignIn = await this.isSignIn();
        if (!isSignIn) {
            return {
                success: false,
                message: '로그인이 필요합니다.'
            };
        }

        const { data: user_data, error: user_error } = await this.supabase.auth.getUser();
        if (user_error) {
            throw user_error;
        }

        const { data, error } = await this.supabase.storage.from('profile_img').upload(file.name, file);
        if (error) {
            return {
                success: false,
                message: '프로필 이미지 업로드에 실패했습니다: ' + error.message
            };
        }

        const { data: profile_data, error: profile_error } = await this.supabase
            .from('profile_img')
            .select()
            .eq('user_id', user_data.user.id);
        if (profile_error) {
            throw profile_error;
        }

        if (profile_data.length > 0) {
            const { error: update_error } = await this.supabase
                .from('profile_img')
                .update({ img_path: data.path })
                .eq('user_id', user_data.user.id);
            if (update_error) {
                return {
                    success: false,
                    message: '프로필 이미지 설정에 실패했습니다: ' + update_error.message
                };
            }
        } else {
            const { error: insert_error } = await this.supabase
                .from('profile_img')
                .insert([{ user_id: user_data.user.id, img_path: data.path }]);
            if (insert_error) {
                return {
                    success: false,
                    message: '프로필 이미지 설정에 실패했습니다: ' + insert_error.message
                };
            }
        }

        return {
            success: true,
            message: '성공적으로 설정되었습니다.'
        };
    }

    async getProfileImg(): Promise<string> {
        const isSignIn = await this.isSignIn();
        let imgPath = '280399195_364166439077307_3657201037652503136_n';

        if (isSignIn) {
            const { data: user_data, error: user_error } = await this.supabase.auth.getUser();
            if (user_error) {
                throw user_error;
            }

            const { data: profile_data, error: profile_error } = await this.supabase
                .from('profile_img')
                .select()
                .eq('user_id', user_data.user.id);
            if (profile_error) {
                throw profile_error;
            }

            if (profile_data.length !== 0) {
                imgPath = profile_data[0].img_path;
            }
        }

        try {
            const { data: img_data } = this.supabase.storage.from('profile_img').getPublicUrl(imgPath);
            return img_data.publicUrl;
        } catch (error) {
            throw error;
        }
    }

    async uploadImage(file: File): Promise<Result> {
        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0,
                v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });

        const { data, error } = await this.supabase.storage.from('images').upload(uuid, file);
        if (error) {
            return {
                success: false,
                message: '이미지 업로드에 실패했습니다: ' + error.message
            };
        }

        try {
            const { data: img_data } = this.supabase.storage.from('images').getPublicUrl(data.path);
            return {
                success: true,
                message: '성공적으로 업로드되었습니다.',
                data: img_data.publicUrl
            };
        } catch (error) {
            throw error;
        }
    }

    async getImage(image_path: string): Promise<string> {
        try {
            const { data: img_data } = this.supabase.storage.from('images').getPublicUrl(image_path);
            return img_data.publicUrl;
        } catch (error) {
            throw error;
        }
    }
}

export default Supabase;
export { SupabaseProviders, Result };
