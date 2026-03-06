import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  GraduationCap,
  ArrowLeft,
  Smartphone,
  KeyRound,
  ChevronRight,
  Sparkles,
  Check,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { CarouselHeader } from "./CarouselHeader";
import { Footer } from "./Footer";

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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 50, 0],
              x: [0, 30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="w-full max-w-6xl">
            <AnimatePresence mode="wait">
              {/* Step 1: Mobile Number Entry */}
              {step === "mobile" && (
                <motion.div
                  key="mobile"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="max-w-md mx-auto p-8 md:p-10 shadow-2xl border-0 backdrop-blur-sm bg-white/80">
                    <div className="text-center mb-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 items-center justify-center mb-4 shadow-lg"
                      >
                        <GraduationCap className="w-8 h-8 text-white" />
                      </motion.div>
                      <Badge className="bg-gradient-to-r from-blue-50 to-blue-100 border-0 mb-4 px-4 py-2">
                        <KeyRound className="w-4 h-4 mr-2" />
                        Step 1 of 2
                      </Badge>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Student Login
                      </h2>
                      <p className="text-gray-600">
                        Enter your registered mobile number
                      </p>
                    </div>

                    <form
                      onSubmit={handleSendOTP}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Mobile Number
                        </label>
                        <div className="relative">
                          <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            type="tel"
                            placeholder="Enter 10-digit mobile number"
                            value={mobile}
                            onChange={(e) =>
                              setMobile(
                                e.target.value
                                  .replace(/\D/g, "")
                                  .slice(0, 10),
                              )
                            }
                            className="pl-12 h-14 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                            required
                            maxLength={10}
                          />
                        </div>
                        {mobile.length > 0 &&
                          mobile.length < 10 && (
                            <p className="text-sm text-red-500 mt-2">
                              Please enter a valid 10-digit number
                            </p>
                          )}
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={
                            mobile.length !== 10 || isLoading
                          }
                          className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 shadow-lg"
                        >
                          {isLoading ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                            />
                          ) : (
                            <>
                              Send OTP
                              <ChevronRight className="w-5 h-5 ml-2" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>

                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <p className="text-sm text-blue-800">
                        <span className="font-semibold">
                          🔒 Secure Login:
                        </span>{" "}
                        An OTP will be sent to your registered mobile number
                      </p>
                    </div>
                  </Card>
                </motion.div>
              )}

              {/* Step 2: OTP Verification */}
              {step === "otp" && (
                <motion.div
                  key="otp"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="max-w-md mx-auto p-8 md:p-10 shadow-2xl border-0 backdrop-blur-sm bg-white/80">
                    <button
                      onClick={handleBack}
                      className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </button>

                    <div className="text-center mb-8">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 items-center justify-center mb-4 shadow-lg"
                      >
                        <Smartphone className="w-8 h-8 text-white" />
                      </motion.div>
                      <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-0 mb-4 px-4 py-2">
                        <Check className="w-4 h-4 mr-2" />
                        Step 2 of 2
                      </Badge>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Verify OTP
                      </h2>
                      <p className="text-gray-600">
                        Enter the 6-digit code sent to
                        <br />
                        <span className="font-semibold text-gray-900">
                          +91 {mobile}
                        </span>
                      </p>
                    </div>

                    <form
                      onSubmit={handleVerifyOTP}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-4 text-center">
                          Enter OTP
                        </label>
                        <div className="flex gap-2 justify-center">
                          {otp.map((digit, index) => (
                            <motion.input
                              key={index}
                              id={`otp-${index}`}
                              type="text"
                              inputMode="numeric"
                              maxLength={1}
                              value={digit}
                              onChange={(e) =>
                                handleOtpChange(
                                  index,
                                  e.target.value,
                                )
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
                              whileFocus={{ scale: 1.1 }}
                              className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
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
                          className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-semibold"
                        >
                          Resend OTP
                        </button>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={
                            otp.join("").length !== 6 ||
                            isLoading
                          }
                          className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 shadow-lg"
                        >
                          {isLoading ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                            />
                          ) : (
                            <>
                              Verify & Login
                              <ChevronRight className="w-5 h-5 ml-2" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>

                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <p className="text-sm text-blue-800">
                        <span className="font-semibold">
                          🔒 Secure Login:
                        </span>{" "}
                        Your OTP is valid for 10 minutes
                      </p>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
