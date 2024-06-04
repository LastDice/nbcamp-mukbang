import Supabase, { SupabaseProviders } from '../_lib/Supabase.jsx';

const supabase = new Supabase();

export default function LoginPage({ signIn, setSignIn, updateSignIn, posts }) {
    return (
        <div className="flex flex-col space-y-5 p-14">
            {signIn ? (
                <button
                    type="button"
                    onClick={async () => {
                        await supabase.signOut();
                        await updateSignIn();
                    }}
                    className="btn btn-primary"
                >
                    로그아웃
                </button>
            ) : (
                <div className="flex space-x-4 w-full">
                    {Object.keys(SupabaseProviders).map((provider, index) => (
                        <button
                            type="button"
                            onClick={async () => {
                                await supabase.signIn(provider);
                                await updateSignIn();
                            }}
                            className="btn btn-info"
                            key={index}
                        >
                            {provider}로 로그인
                        </button>
                    ))}
                </div>
            )}
            <div className="grid grid-cols-4 gap-4 bg-white shadow-2xl p-5 rounded-2xl">
                {posts.map((post) => (
                    <div className="card bg-base-100 shadow-xl" key={post.id}>
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p>{post.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}