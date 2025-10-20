import { GamifiedForm } from "@/components/join/gamified-form";

export default function JoinPage() {
    return(
        <div className="min-h-screen bg-black w-full">
            <div className="flex min-h-screen w-full items-center justify-center px-4 py-8 md:px-6 lg:px-8">
                <div className="w-full max-w-3xl">
                    <GamifiedForm/>
                </div>
            </div>
        </div>
    )
}
