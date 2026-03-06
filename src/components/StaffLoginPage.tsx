import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  Shield,
  User,
  Lock,
  ArrowLeft,
  KeyRound,
  Eye,
  EyeOff,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { CarouselHeader } from "./CarouselHeader";
import { Footer } from "./Footer";

const roles = [
  {
    id: "teacher",
    label: "Teacher",
    icon: BookOpen,
    gradient: "from-emerald-500 to-emerald-600",
    bgGradient: "from-emerald-50 to-emerald-100",
    description: "Manage classes, assignments, and student progress",
  },
  {
    id: "admin",
    label: "Admin",
    icon: Shield,
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100",
    description: "Full system access and administrative controls",
  },
];

export function StaffLoginPage() {
  const [selectedRole, setSelectedRole] = useState<
    "teacher" | "admin" | null
  >(null);
  const [step, setStep] = useState<"role" | "credentials">("role");
  
  // For username/password login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const navigate = useNavigate();

  const handleRoleSelect = (role: "teacher" | "admin") => {
    setSelectedRole(role);
    setStep("credentials");
  };

  // Handle username/password login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        // Navigate based on role
        if (selectedRole === "admin") {
          navigate("/admin/dashboard");
        } else if (selectedRole === "teacher") {
          navigate("/teacher/dashboard");
        }
      }, 1500);
    }
  };

  const handleBack = () => {
    setStep("role");
    setSelectedRole(null);
    setUsername("");
    setPassword("");
    setShowPassword(false);
    setShowResetPassword(false);
  };

  const handleResetPassword = () => {
    setShowResetPassword(true);
    // In a real application, you would handle password reset here
    setTimeout(() => {
      alert("Password reset link has been sent to your registered email!");
      setShowResetPassword(false);
    }, 1500);
  };

  const selectedRoleData = roles.find((r) => r.id === selectedRole);

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
              {/* Step 1: Role Selection */}
              {step === "role" && (
                <motion.div
                  key="role"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="max-w-3xl mx-auto p-8 md:p-12 shadow-2xl border-0 backdrop-blur-sm bg-white/80">
                    <div className="text-center mb-8">
                      <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-0 mb-4 px-4 py-2">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Step 1 of 2
                      </Badge>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Staff Login
                      </h2>
                      <p className="text-gray-600">
                        Select your role to continue
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {roles.map((role, index) => (
                        <motion.div
                          key={role.id}
                          initial={{ opacity: 0, y: 50, rotateX: -60 }}
                          animate={{ opacity: 1, y: 0, rotateX: 0 }}
                          transition={{
                            delay: index * 0.15,
                            duration: 0.6,
                            type: "spring",
                            stiffness: 100
                          }}
                          whileHover={{ 
                            y: -15, 
                            scale: 1.05,
                            rotateY: 10,
                            rotateX: -10,
                            z: 80,
                            transition: { duration: 0.3 }
                          }}
                          whileTap={{ scale: 0.95, rotateY: 0 }}
                          style={{ transformStyle: "preserve-3d", perspective: 1200 }}
                        >
                          <button
                            onClick={() =>
                              handleRoleSelect(role.id as "teacher" | "admin")
                            }
                            className="w-full p-6 rounded-2xl border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all text-left relative overflow-hidden group"
                          >
                            {/* Background gradient on hover */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${role.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                            />

                            <div className="relative z-10">
                              <motion.div
                                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${role.gradient} flex items-center justify-center mb-4 shadow-lg`}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                              >
                                <role.icon className="w-7 h-7 text-white" />
                              </motion.div>
                              <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {role.label}
                              </h3>
                              <p className="text-sm text-gray-600 mb-4">
                                {role.description}
                              </p>
                              <div className="flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                                Continue
                                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )}

              {/* Step 2: Username/Password Login */}
              {step === "credentials" && selectedRoleData && (
                <motion.div
                  key="credentials"
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
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                        }}
                        className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedRoleData.gradient} items-center justify-center mb-4 shadow-lg`}
                      >
                        <selectedRoleData.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <Badge
                        className={`bg-gradient-to-r ${selectedRoleData.bgGradient} border-0 mb-4 px-4 py-2`}
                      >
                        <KeyRound className="w-4 h-4 mr-2" />
                        Step 2 of 2
                      </Badge>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedRoleData.label} Login
                      </h2>
                      <p className="text-gray-600">
                        Enter your credentials to continue
                      </p>
                    </div>

                    <form
                      onSubmit={handleLogin}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Username
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="pl-12 h-14 text-lg border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-12 pr-12 h-14 text-lg border-2 border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Forgot Password Link */}
                      <div className="text-right">
                        <button
                          type="button"
                          onClick={handleResetPassword}
                          disabled={showResetPassword}
                          className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-semibold disabled:opacity-50"
                        >
                          {showResetPassword ? "Sending reset link..." : "Forgot Password?"}
                        </button>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={!username || !password || isLoading}
                          className={`w-full h-14 text-lg font-semibold bg-gradient-to-r ${selectedRoleData.gradient} hover:opacity-90 shadow-lg`}
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
                              Login
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
                        Your credentials are encrypted and secure
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
