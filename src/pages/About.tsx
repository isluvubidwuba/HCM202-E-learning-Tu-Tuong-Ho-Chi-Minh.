import { motion } from "framer-motion";
import { BookOpen, Bot, Brain, Calendar, Code, Database, Loader as Loader2, Server, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getSystemInfo } from "../utils/systemInfo";

interface TeamMember {
  name: string;
  role: string;
  contributions: string[];
  avatar: string;
}

interface SystemInfo {
  groqModel: string;
  boltVersion: string;
  activeTools: string[];
  supabaseVersion: string;
  reactVersion: string;
  viteVersion: string;
  serverStatus: string;
}

export default function About() {
  const { i18n } = useTranslation();
  const [systemInfo, setSystemInfo] = useState<SystemInfo | null>(null);
  const [loading, setLoading] = useState(true);

  const isVietnamese = i18n.language === "vi";

  const teamMembers: TeamMember[] = [
    {
      name: "Trần Huy Hanh",
      role: isVietnamese
        ? "Thiết kế & Phát triển Web, AI Chatbot, Quản trị Server"
        : "Web Design & Development, AI Chatbot, Server Administration",
      contributions: isVietnamese
        ? [
            "Thiết kế và xây dựng giao diện người dùng",
            "Tích hợp AI Chatbot với Groq",
            "Quản lý cơ sở dữ liệu Supabase",
            "Triển khai và bảo trì server",
          ]
        : [
            "Design and build user interface",
            "Integrate AI Chatbot with Groq",
            "Manage Supabase database",
            "Deploy and maintain server",
          ],
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    },
    {
      name: "Trí Trần",
      role: isVietnamese
        ? "Chiến lược Nội dung, Phát triển Tài nguyên, Thiết kế Quiz"
        : "Content Strategy, Visual Asset Development, Quiz Design",
      contributions: isVietnamese
        ? [
            "Xây dựng chiến lược nội dung",
            "Sáng tạo tài nguyên hình ảnh",
            "Thiết kế câu hỏi quiz",
            "Đảm bảo chất lượng nội dung",
          ]
        : [
            "Build content strategy",
            "Create visual assets",
            "Design quiz questions",
            "Ensure content quality",
          ],
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    },
    {
      name: "Tạ Thị Hải Yến",
      role: isVietnamese
        ? "Sáng tạo Nội dung, Quản lý Hình ảnh, Phát triển Quiz"
        : "Content Creation, Image Curation, Educational Quiz Development",
      contributions: isVietnamese
        ? [
            "Viết và biên tập nội dung giáo dục",
            "Lựa chọn và tối ưu hóa hình ảnh",
            "Phát triển câu hỏi giáo dục",
            "Kiểm tra độ chính xác nội dung",
          ]
        : [
            "Write and edit educational content",
            "Select and optimize images",
            "Develop educational questions",
            "Verify content accuracy",
          ],
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    },
    {
      name: "Gia Bảo",
      role: isVietnamese
        ? "Phát triển & Kiểm thử Quiz, Tài liệu Kỹ thuật"
        : "Quiz Development & Testing, Technical Documentation",
      contributions: isVietnamese
        ? [
            "Lập trình chức năng quiz",
            "Kiểm thử và đảm bảo chất lượng",
            "Viết tài liệu kỹ thuật",
            "Tối ưu hóa trải nghiệm người dùng",
          ]
        : [
            "Program quiz functionality",
            "Test and ensure quality",
            "Write technical documentation",
            "Optimize user experience",
          ],
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
    },
    {
      name: "Nguyễn Đức Tuyên",
      role: isVietnamese
        ? "Thiết kế Bài thuyết trình, Triển khai Quiz, Kiểm thử UX"
        : "Presentation Design, Quiz Implementation, User Experience Testing",
      contributions: isVietnamese
        ? [
            "Thiết kế bài thuyết trình dự án",
            "Triển khai giao diện quiz",
            "Kiểm thử trải nghiệm người dùng",
            "Thu thập và phân tích phản hồi",
          ]
        : [
            "Design project presentations",
            "Implement quiz interface",
            "Test user experience",
            "Collect and analyze feedback",
          ],
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
  ];

  useEffect(() => {
    const loadSystemInfo = async () => {
      setLoading(true);
      try {
        const info = await getSystemInfo();
        setSystemInfo(info);
      } catch (error) {
        console.error("Failed to load system info:", error);
      } finally {
        setLoading(false);
      }
    };

    loadSystemInfo();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-red-600 to-yellow-500 rounded-2xl shadow-xl mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <BookOpen className="h-12 w-12 text-white" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent mb-4">
              {isVietnamese ? "Giới thiệu" : "About Us"}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {isVietnamese
                ? "Gặp gỡ đội ngũ và công nghệ đằng sau dự án"
                : "Meet the team and technology behind the project"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {isVietnamese ? "Công cụ AI của chúng tôi" : "Our AI Tools"}
                </h2>
              </div>

              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
                </div>
              ) : (
                systemInfo && (
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                      <Bot className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          {isVietnamese ? "Mô hình AI hiện tại" : "Current AI Model"}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {systemInfo.groqModel}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                      <Code className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          Bolt New
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          v{systemInfo.boltVersion}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                      <Database className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          {isVietnamese ? "Công cụ hoạt động" : "Active Tools"}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {systemInfo.activeTools.map((tool) => (
                            <span
                              key={tool}
                              className="px-2 py-1 text-xs font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-600"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {isVietnamese ? "Thông tin hệ thống" : "System Information"}
                </h2>
              </div>

              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                </div>
              ) : (
                systemInfo && (
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                      <Database className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          Supabase
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          v{systemInfo.supabaseVersion}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                      <Code className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          React
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          v{systemInfo.reactVersion}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                      <Code className="h-5 w-5 text-violet-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          Vite
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          v{systemInfo.viteVersion}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
                      <Calendar className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          {isVietnamese ? "Trạng thái Server" : "Server Status"}
                        </p>
                        <p className="text-sm text-green-700 dark:text-green-400 font-medium">
                          {systemInfo.serverStatus}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </motion.section>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <Users className="h-8 w-8 text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {isVietnamese ? "Đội ngũ của chúng tôi" : "Our Team"}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {isVietnamese
                  ? "Những người đã xây dựng và phát triển dự án này"
                  : "The people who built and developed this project"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden"
                >
                  <div className="relative h-48 bg-gradient-to-br from-red-600 via-purple-700 to-fuchsia-700 overflow-hidden">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-4">
                      {member.role}
                    </p>

                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                        {isVietnamese ? "Đóng góp chính" : "Key Contributions"}
                      </p>
                      <ul className="space-y-1.5">
                        {member.contributions.map((contribution, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                          >
                            <span className="text-purple-600 mt-1">•</span>
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}
