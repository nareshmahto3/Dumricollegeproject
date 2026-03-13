import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  BookOpen,
  Shield,
  User,
  Lock,
  ArrowLeft,
  Eye,
  EyeOff,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { CarouselHeader } from "./CarouselHeader";
import { Footer } from "./Footer";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { toast } from "sonner";

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
        
        // Show success toast
        toast.success('Login Successful!', {
          description: `Welcome back, ${username}!`,
        });
        
        // Navigate based on role
        setTimeout(() => {
          if (selectedRole === "admin") {
            navigate("/admin/dashboard");
          } else if (selectedRole === "teacher") {
            navigate("/teacher/dashboard");
          }
        }, 500);
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
      <div className="min-h-screen bg-slate-50">
        {/* Banner Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-64 md:h-80 overflow-hidden"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758685845906-6f705cde4fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY2xhc3Nyb29tJTIwdGVhY2hpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyODk2OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Staff Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/80 to-slate-900/85" />
          
          {/* Banner Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center mb-4"
            >
              <Shield className="w-8 h-8 md:w-10 md:h-10 text-white" />
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
              Staff Portal Login
            </motion.p>
          </div>
        </motion.div>

        {/* Login Form Section */}
        <div className="flex items-center justify-center py-12 px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-3xl"
          >
            <AnimatePresence mode="wait">
              {/* Step 1: Role Selection */}
              {step === "role" && (
                <motion.div
                  key="role"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-8 md:p-12 shadow-xl bg-white border-0">
                    <div className="text-center mb-8">
                      <Badge className="bg-blue-100 text-blue-700 border-0 mb-3 px-4 py-2">
                        Step 1 of 2
                      </Badge>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Select Your Role
                      </h2>
                      <p className="text-gray-600">
                        Choose how you want to login
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {roles.map((role, index) => (
                        <motion.div
                          key={role.id}
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: index * 0.15,
                            duration: 0.5,
                          }}
                          whileHover={{ 
                            y: -8,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <button
                            onClick={() =>
                              handleRoleSelect(role.id as "teacher" | "admin")
                            }
                            className="w-full p-6 rounded-xl border-2 border-gray-200 hover:border-transparent hover:shadow-xl transition-all text-left relative overflow-hidden group cursor-pointer"
                          >
                            {/* Background gradient on hover */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${role.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                            />

                            <div className="relative z-10">
                              <div
                                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${role.gradient} flex items-center justify-center mb-4 shadow-lg`}
                              >
                                <role.icon className="w-7 h-7 text-white" />
                              </div>
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
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="max-w-md mx-auto p-8 md:p-10 shadow-xl bg-white border-0">
                    <button
                      onClick={handleBack}
                      className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors text-sm cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4 mr-1" />
                      Back
                    </button>

                    <div className="text-center mb-6">
                      <div
                        className={`inline-flex w-16 h-16 rounded-xl bg-gradient-to-br ${selectedRoleData.gradient} items-center justify-center mb-3 shadow-lg`}
                      >
                        <selectedRoleData.icon className="w-8 h-8 text-white" />
                      </div>
                      <Badge className={`bg-gradient-to-r ${selectedRoleData.bgGradient} border-0 mb-3 px-4 py-2`}>
                        Step 2 of 2
                      </Badge>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedRoleData.label} Login
                      </h2>
                      <p className="text-gray-600 text-sm">
                        Enter your credentials to continue
                      </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Username
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="pl-11 h-12"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-11 pr-11 h-12"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="text-right">
                        <button
                          type="button"
                          onClick={handleResetPassword}
                          disabled={showResetPassword}
                          className="text-sm text-blue-600 hover:text-blue-700 hover:underline disabled:opacity-50 cursor-pointer"
                        >
                          {showResetPassword
                            ? "Sending reset link..."
                            : "Forgot Password?"}
                        </button>
                      </div>

                      <Button
                        type="submit"
                        disabled={!username || !password || isLoading}
                        className={`w-full h-12 bg-gradient-to-r ${selectedRoleData.gradient} hover:opacity-90 cursor-pointer`}
                      >
                        {isLoading ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            Login
                            <ChevronRight className="w-5 h-5 ml-1" />
                          </>
                        )}
                      </Button>
                    </form>

                    <div className="mt-6 p-3 bg-blue-50 rounded-lg">
                      <p className="text-xs text-blue-800 text-center">
                        🔒 Your credentials are encrypted and secure
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