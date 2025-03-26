import { SignInButton, SignUpButton } from "@clerk/clerk-react";


export default function SignInUp() {
    return (
        <div className="w-full max-w-full min-h-screen bg-transparent color-primary overflow-x-hidden relative flex flex-col items-center justify-center">
            
            <div className="text-center space-y-8 z-10 bg-secondary backdrop-blur-lg border border-adaptive rounded-xl p-12 shadow-adaptive max-w-md">
                <div>
                    <h1 className="text-6xl font-bold color-primary mb-4">
                        Vox
                        <span className="font-black color-secondary">
                        Ed
                        </span>
                    </h1>
                    <p className="text-xl color-secondary max-w-md mx-auto">
                        Experience the future of voice interaction
                    </p>
                </div>

                <div className="flex gap-4 justify-center">
                    <SignInButton mode="modal" fallbackRedirectUrl={"https://app.voxed.ai/"} forceRedirectUrl={"https://app.voxed.ai/"}>
                        <button className="bg-gradient-to-br from-sky-400 to-indigo-400 color-primary border-none py-3 px-6 rounded-lg font-semibold cursor-pointer transition duration-200 hover:translate-y-[-2px] hover:shadow-lg shadow-adaptive no-underline">
                            Sign In
                        </button>
                    </SignInButton>
                    <SignUpButton mode="modal" fallbackRedirectUrl={"https://app.voxed.ai/"} forceRedirectUrl={"https://app.voxed.ai/"}>
                        <button className="bg-secondary color-primary border border-adaptive py-3 px-6 rounded-lg font-semibold cursor-pointer transition-all duration-200 hover-bg-adaptive hover:translate-y-[-2px] no-underline">
                            Sign Up
                        </button>
                    </SignUpButton>
                </div>
            </div>
        </div>
    )
}