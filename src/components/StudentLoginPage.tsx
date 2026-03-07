import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  GraduationCap,
  ArrowLeft,
  Smartphone,
  KeyRound,
  ChevronRight,
  Check,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { CarouselHeader } from "./CarouselHeader";
import { Footer } from "./Footer";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function StudentLoginPage() {
  const [step, setStep] = useState<"mobile" | "otp">("mobile");
  
  // For mobile/OTP login
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Handle mobile number submission
  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length === 10) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setStep("otp");
      }, 1500);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(
          `otp-${index + 1}`,
        );
        nextInput?.focus();
      }
    }
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        navigate("/student/dashboard");
      }, 1500);
    }
  };

  const handleBack = () => {
    if (step === "otp") {
      setStep("mobile");
      setOtp(["", "", "", "", "", ""]);
    }
  };

  return (
    <>
      <CarouselHeader />
      <div className="min-h-screen bg-slate-50">
        {/* Banner Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-64 md:h-80 overflow-hidden"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760111085279-6c4b6d831acc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwY29sbGVnZSUyMGNhbXB1cyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NzI4OTY5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Campus Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/80 to-blue-900/85" />
          
          {/* Banner Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center mb-4"
            >
              <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-center"
            >
              Dumri College
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-blue-100"
            >
              Student Portal Login
            </motion.p>
          </div>
        </motion.div>

        {/* Login Form Section */}
        <div className="flex items-center justify-center py-12 px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-md"
          >
            <AnimatePresence mode="wait">
              {/* Step 1: Mobile Number Entry */}
              {step === "mobile" && (
                <motion.div
                  key="mobile"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-8 shadow-xl bg-white border-0">
                    <div className="text-center mb-6">
                      <Badge className="bg-blue-100 text-blue-700 border-0 mb-3 px-3 py-1">
                        Step 1 of 2
                      </Badge>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Welcome Back!
                      </h2>
                      <p className="text-gray-600 text-sm">
                        Enter your mobile number to continue
                      </p>
                    </div>

                    <form onSubmit={handleSendOTP} className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Mobile Number
                        </label>
                        <div className="relative">
                          <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            type="tel"
                            placeholder="Enter 10-digit number"
                            value={mobile}
                            onChange={(e) =>
                              setMobile(
                                e.target.value
                                  .replace(/\D/g, "")
                                  .slice(0, 10),
                              )
                            }
                            className="pl-11 h-12"
                            required
                            maxLength={10}
                          />
                        </div>
                        {mobile.length > 0 && mobile.length < 10 && (
                          <p className="text-xs text-red-500 mt-1">
                            Please enter a valid 10-digit number
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={mobile.length !== 10 || isLoading}
                        className="w-full h-12 bg-blue-600 hover:bg-blue-700 cursor-pointer"
                      >
                        {isLoading ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            Send OTP
                            <ChevronRight className="w-5 h-5 ml-1" />
                          </>
                        )}
                      </Button>
                    </form>

                    <div className="mt-6 p-3 bg-blue-50 rounded-lg">
                      <p className="text-xs text-blue-800 text-center">
                        🔒 An OTP will be sent to your registered mobile
                      </p>
                    </div>
                  </Card>
                </motion.div>
              )}

              {/* Step 2: OTP Verification */}
              {step === "otp" && (
                <motion.div
                  key="otp"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-8 shadow-xl bg-white border-0">
                    <button
                      onClick={handleBack}
                      className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors text-sm cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4 mr-1" />
                      Back
                    </button>

                    <div className="text-center mb-6">
                      <Badge className="bg-green-100 text-green-700 border-0 mb-3 px-3 py-1">
                        <Check className="w-3 h-3 mr-1" />
                        Step 2 of 2
                      </Badge>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Verify OTP
                      </h2>
                      <p className="text-gray-600 text-sm">
                        Code sent to{" "}
                        <span className="font-semibold">+91 {mobile}</span>
                      </p>
                    </div>

                    <form onSubmit={handleVerifyOTP} className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3 text-center">
                          Enter 6-digit OTP
                        </label>
                        <div className="flex gap-2 justify-center">
                          {otp.map((digit, index) => (
                            <input
                              key={index}
                              id={`otp-${index}`}
                              type="text"
                              inputMode="numeric"
                              maxLength={1}
                              value={digit}
                              onChange={(e) =>
                                handleOtpChange(index, e.target.value)
                              }
                              onKeyDown={(e) => {
                                if (
                                  e.key === "Backspace" &&
                                  !digit &&
                                  index > 0
                                ) {
                                  const prevInput =
                                    document.getElementById(
                                      `otp-${index - 1}`,
                                    );
                                  prevInput?.focus();
                                }
                              }}
                              className="w-11 h-12 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none cursor-pointer"
                            />
                          ))}
                        </div>
                      </div>

                      <div className="text-center">
                        <button
                          type="button"
                          onClick={() => {
                            setStep("mobile");
                            setOtp(["", "", "", "", "", ""]);
                          }}
                          className="text-sm text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
                        >
                          Resend OTP
                        </button>
                      </div>

                      <Button
                        type="submit"
                        disabled={otp.join("").length !== 6 || isLoading}
                        className="w-full h-12 bg-blue-600 hover:bg-blue-700 cursor-pointer"
                      >
                        {isLoading ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            Verify & Login
                            <ChevronRight className="w-5 h-5 ml-1" />
                          </>
                        )}
                      </Button>
                    </form>

                    <div className="mt-6 p-3 bg-blue-50 rounded-lg">
                      <p className="text-xs text-blue-800 text-center">
                        🔒 OTP is valid for 10 minutes
                      </p>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}