import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { poppins } from "@/lib/fonts";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          🔐 Auth
        </h1>
        <p className={`${poppins.className} text-white text-lg tracking-wide`}>
          Simple authentication service
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary">Sign in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
