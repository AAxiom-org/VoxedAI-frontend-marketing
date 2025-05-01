import { Waitlist } from '@clerk/clerk-react'

export default function WaitlistPage() {
    const waitlistProps = {
        appearance: {
          elements: {
            footer: {
              display: "none"
            },
            formButtonPrimary: {
              backgroundColor: "black",
              color: "white",
              borderRadius: "0.125rem",
              "&:hover": {
                backgroundColor: "#333"
              }
            },
            card: {
              border: "0px solid",
              borderColor: "rgba(51, 65, 85, 0.1)",
              borderRadius: "0.125rem",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              color: "#0f172a",
            },
            formFieldLabel: {
              color: "#334155",
            },
            formFieldInput: {
              border: "0px solid",
              borderColor: "rgba(51, 65, 85, 0.1)",
              color: "#0f172a",
            }
          }
        }
    };
    
    return (
        <section id="waitlist" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-serif font-medium text-gray-900 mb-4">
                    Join Our Waitlist
                  </h2>
                  <div className="w-16 h-0.5 bg-gray-200 mx-auto mb-6"></div>
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Be among the first to experience Voxed, our AI-powered research platform. 
                    Sign up now to get early access and help shape the future of automated research.
                  </p>
                </div>
                <div className="relative rounded-sm overflow-hidden border border-gray-100 bg-white shadow-sm ">
                    <Waitlist {...waitlistProps} />
                </div>
            </div>
        </section>
    )
}