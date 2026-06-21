"use client";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#6C5CE7] to-[#00CEC9] rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-sm">0D</span>
            </div>
            <span className="text-white font-black text-xl">Zero Due</span>
          </div>
          <p className="text-[#8888A0] text-sm">Create your Zero Due account</p>
        </div>
        <SignUp
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "bg-[#111118] border border-[#1E1E2E] shadow-2xl rounded-2xl",
              headerTitle: "text-white",
              headerSubtitle: "text-[#8888A0]",
              formFieldLabel: "text-[#8888A0]",
              formFieldInput: "bg-[#0A0A0F] border-[#1E1E2E] text-white rounded-xl focus:border-[#6C5CE7]",
              formButtonPrimary: "bg-[#6C5CE7] hover:bg-[#8B7FFF] rounded-xl",
              footerActionLink: "text-[#6C5CE7] hover:text-[#8B7FFF]",
            },
          }}
        />
      </div>
    </div>
  );
}
