import Layout from "../layout"
import Hero from "../../components/hero";

export default function Work() {
    return (
        <Layout>
            <main className="min-h-screen bg-zinc-950">
                <div className=" flex flex-col items-center p-24 mb-89">
                    <div className="w-full font-mono text-sm lg:flex">
                        <Hero descriptions={["Fullstack developer with around 2 YoE"]}>Hi! I'm Albin</Hero>
                    </div>
                    <div>
                        {/* Additional content */}
                    </div>
                </div>
            </main>
        </Layout>
    );
}
