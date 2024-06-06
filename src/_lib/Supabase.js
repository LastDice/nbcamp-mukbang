import { createClient } from '@supabase/supabase-js';

const SupabaseProviders = Object.freeze({
    Discord: 'discord',
    Github: 'github',
    Google: 'google',
    Notion: 'notion',
    Twitch: 'twitch'
});

class Supabase {
    constructor() {
        this.supabase = createClient(
            'https://okzounnvdejvweamyzsd.supabase.co',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rem91bm52ZGVqdndlYW15enNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxMzU2MDYsImV4cCI6MjAzMjcxMTYwNn0.0gOgO3J5ybGbHANtLp9xe-QpmS-CL1EVxG1mcyBqHzw'
        );
    }

    async isSignIn() {
        const session = await this.supabase.auth.getSession();
        return !!session.data.session;
    }

    async getSession() {
        const { data, error } = await this.supabase.auth.getSession();
        if (error) {
            console.error(error);
        } else {
            return data;
        }
    }

    async updateUser(nickname, description, imageUrl, user) {
        console.log('Updating user with data:', { nickname, description, imageUrl });

        const response = await this.supabase
            .from('profiles')
            .update({
                nickname: nickname,
                description: description
                // imageUrl: imageUrl
            })
            .eq('id', user.id);

        console.log('API response:', response);

        if (!response) {
            console.error('API response is undefined');
            return false;
        }

        const { data, error } = response;

        if (error) {
            console.error('Error updating user:', error);
            return false;
        }

        return true;
    }

    async signInEmail(email, password) {
        await this.supabase.auth.signInWithPassword({
            email,
            password
        });
        return this.isSignIn();
    }

    async registerEmail(email, password) {
        await this.supabase.auth.signUp({
            email,
            password
        });
        return this.isSignIn();
    }

    async signIn(provider) {
        const response = await this.supabase.auth.signInWithOAuth({
            provider
        });
        response.data.provider;
        return this.isSignIn();
    }

    async signOut() {
        return await this.supabase.auth.signOut();
    }

    async getPostsByUserId(userId) {
        const posts = await this.supabase.from('posts').select('post_id, title, content').eq('post_id', userId);
        return posts;
    }

    async getPosts() {
        const { data } = await this.supabase.from('posts').select();

        return data.reduce((acc, post) => {
            const imgReg = /\[IMG](.+?)\[\/IMG]/g;
            const imgPath = imgReg.exec(post.content);
            acc.push({
                post_id: post.id,
                created_at: post.created_at,
                author_uuid: post.author_uuid,
                title: post.title,
                content: post.content,
                post_image: imgPath ? imgPath[1] : undefined
            });
        }, []);
    }

    async writePosts(title, content) {
        const isSignIn = await this.isSignIn();
        if (!isSignIn) {
            return {
                success: false,
                message: '로그인이 필요합니다.'
            };
        }
        const user_data = await this.supabase.auth.getUser();
        const author_uuid = user_data.data.user.id;
        const result = await this.supabase.from('posts').insert([{ title, content, author_uuid }]);

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

    async updatePost(post_id, title, content) {
        const isSignIn = await this.isSignIn();
        if (!isSignIn) {
            return {
                success: false,
                message: '로그인이 필요합니다.'
            };
        }

        const result = await this.supabase.from('posts').update({ title, content }).eq('id', post_id);

        if (result.error) {
            return {
                success: false,
                message: '글 수정에 실패했습니다: ' + result.statusText
            };
        }

        return {
            success: true,
            message: '성공적으로 수정되었습니다.'
        };
    }

    async isLiking(post_id) {
        const isSignIn = await this.isSignIn();
        if (!isSignIn) return false;

        const user_data = await this.supabase.auth.getUser();
        const { data } = await this.supabase
            .from('likes')
            .select()
            .eq('post_id', post_id)
            .eq('user_id', user_data.data.user.id);
        return data.length > 0;
    }

    async setLiking(post_id, liked) {
        const isSignIn = await this.isSignIn();
        if (!isSignIn) {
            return {
                success: false,
                message: '로그인이 필요합니다.'
            };
        }

        const user_data = await this.supabase.auth.getUser();
        if (liked) {
            const result = await this.supabase.from('likes').insert([{ post_id, user_id: user_data.data.user.id }]);
            if (result.error) {
                return {
                    success: false,
                    message: '좋아요 설정에 실패했습니다: ' + result.statusText
                };
            }
        } else {
            const result = await this.supabase
                .from('likes')
                .delete()
                .eq('post_id', post_id)
                .eq('user_id', user_data.data.user.id);
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

    async getPostAvgRating(post_id) {
        const { data } = await this.supabase.from('ratings').select('rating').eq('post_id', post_id);
        if (data.length === 0) return 0;

        return data.reduce((acc, cur) => acc + cur.rating, 0) / data.length;
    }

    async getMyPostRating(post_id) {
        const isSignIn = await this.isSignIn();
        if (!isSignIn) return 0;

        const user_data = await this.supabase.auth.getUser();
        const { data } = await this.supabase
            .from('ratings')
            .select('rating')
            .eq('post_id', post_id)
            .eq('user_id', user_data.data.user.id);
        if (data.length === 0) return 0;

        return data[0].rating;
    }

    async setPostRating(post_id, rating) {
        const isSignIn = await this.isSignIn();
        if (!isSignIn) {
            return {
                success: false,
                message: '로그인이 필요합니다.'
            };
        }

        const user_data = await this.supabase.auth.getUser();

        const { data } = await this.supabase
            .from('ratings')
            .select()
            .eq('post_id', post_id)
            .eq('user_id', user_data.data.user.id);
        if (data.length > 0) {
            const result = await this.supabase
                .from('ratings')
                .update({ rating })
                .eq('post_id', post_id)
                .eq('user_id', user_data.data.user.id);
            if (result.error) {
                return {
                    success: false,
                    message: '평점 설정에 실패했습니다: ' + result.statusText
                };
            }
        } else {
            const result = await this.supabase
                .from('ratings')
                .insert([{ post_id, user_id: user_data.data.user.id, rating }]);
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

    async setProfileImg(file) {
        const isSignIn = await this.isSignIn();
        if (!isSignIn) {
            return {
                success: false,
                message: '로그인이 필요합니다.'
            };
        }

        const user_data = await this.supabase.auth.getUser();
        console.log('supbase caller file => ', file, file.name);
        const filePath = `${Date.now()} ${file.name}`;
        const { data, error } = await this.supabase.storage.from('profile-img').upload(filePath, file);
        if (error) {
            return {
                success: false,
                message: '프로필 이미지 업로드에 실패했습니다: ' + error.message
            };
        }
        const profile_data = await this.supabase.from('profile_img').select().eq('user_id', user_data.data.user.id);
        if (profile_data.data.length > 0) {
            const { error } = await this.supabase
                .from('profile_img')
                .update({ img_path: data.path })
                .eq('user_id', user_data.data.user.id);
            if (error) {
                return {
                    success: false,
                    message: '프로필 이미지 설정에 실패했습니다: ' + error.message
                };
            }
        } else {
            const { error } = await this.supabase
                .from('profile_img')
                .insert([{ user_id: user_data.data.user.id, img_path: data.path }]);
            if (error) {
                return {
                    success: false,
                    message: '프로필 이미지 설정에 실패했습니다: ' + error.message
                };
            }
        }

        return {
            success: true,
            message: '성공적으로 설정되었습니다.'
        };
    }

    async getProfileImg() {
        const img_data = this.supabase.storage.from('profile-img').getPublicUrl(
            await (async () => {
                const isSignIn = await this.isSignIn();
                if (isSignIn) {
                    const user_data = await this.supabase.auth.getUser();
                    const profile_data = await this.supabase
                        .from('profile_img')
                        .select()
                        .eq('user_id', user_data.data.user.id);
                    if (profile_data.data.length !== 0) {
                        return profile_data.data[0].img_path;
                    }
                }
                return '280399195_364166439077307_3657201037652503136_n';
            })()
        );
        return img_data.data.publicUrl;
    }

    async uploadImage(file) {
        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0,
                v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });

        const { data, error } = await this.supabase.storage.from('images').upload(uuid, file);
        if (error) {
            return {
                success: false,
                message: '이미지 업로드에 실패했습니다: ' + error.message
            };
        }

        return {
            success: true,
            message: '성공적으로 업로드되었습니다.',
            data: this.supabase.storage.from('images').getPublicUrl(data.path).data.publicUrl
        };
    }

    async getImage(image_path) {
        return this.supabase.storage.from('images').getPublicUrl(image_path).data.publicUrl;
    }
}

const supabase = new Supabase();
export default supabase;
export { SupabaseProviders };
