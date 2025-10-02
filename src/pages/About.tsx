import { motion } from "framer-motion";
import { BookOpen, Bot, Brain, Calendar, Code, Database, Loader as Loader2, QrCode, Server, Sparkles, Users } from "lucide-react";
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
  const { t, i18n } = useTranslation();
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
               "Lập trình chức năng quiz",
            "Quản lý cơ sở dữ liệu Supabase",
            "Triển khai và bảo trì server",
          ]
        : [
            "Design and build user interface",
            "Integrate AI Chatbot with Groq",
                    "Program quiz functionality",
            "Manage Supabase database",
            "Deploy and maintain server",
          ],
      avatar: "/image.png",
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
         
            "Kiểm thử và đảm bảo chất lượng",
            "Viết tài liệu kỹ thuật",
            "Tối ưu hóa trải nghiệm người dùng",
          ]
        : [
    
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
            "Kiểm thử trải nghiệm người dùng",
            "Thu thập và phân tích phản hồi",
          ]
        : [
            "Design project presentations",
            "Test user experience",
            "Collect and analyze feedback",
          ],
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    },
    {
      name: "Trần Huy Hanh",
      role: isVietnamese
        ? "Thiết kế & Phát triển Web, AI Chatbot, Quản trị Server"
        : "Web Design & Development, AI Chatbot, Server Administration",
      contributions: isVietnamese
        ? [
            "Thiết kế và xây dựng giao diện người dùng",
            "Tích hợp AI Chatbot với Groq",
               "Lập trình chức năng quiz",
            "Quản lý cơ sở dữ liệu Supabase",
            "Triển khai và bảo trì server",
          ]
        : [
            "Design and build user interface",
            "Integrate AI Chatbot with Groq",
                    "Program quiz functionality",
            "Manage Supabase database",
            "Deploy and maintain server",
          ],
      avatar: "/image.png",
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
         
            "Kiểm thử và đảm bảo chất lượng",
            "Viết tài liệu kỹ thuật",
            "Tối ưu hóa trải nghiệm người dùng",
          ]
        : [
    
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
            "Kiểm thử trải nghiệm người dùng",
            "Thu thập và phân tích phản hồi",
          ]
        : [
            "Design project presentations",
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
    <section className="relative min-h-screen pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-800/40 via-purple-900/50 to-fuchsia-900/60" />
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_220px_rgba(0,0,0,0.6)]" />
      <motion.div
        aria-hidden
        className="absolute inset-y-0 -left-1/3 w-1/4 bg-white/5 blur-3xl"
        animate={{ x: ["0%", "180%"] }}
        transition={{ duration: 16, ease: "linear", repeat: Infinity }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-amber-100 to-pink-100 bg-clip-text text-transparent mb-4">
              {isVietnamese ? "Giới thiệu" : "About Us"}
            </h1>
            <p className="text-lg text-white/85 max-w-3xl mx-auto">
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
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 shadow-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">
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
                    <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                      <Bot className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white mb-1">
                          {isVietnamese ? "Mô hình AI hiện tại" : "Current AI Model"}
                        </p>
                        <p className="text-sm text-white/80">
                          {systemInfo.groqModel}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                      <Code className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white mb-1">
                          Bolt New
                        </p>
                        <p className="text-sm text-white/80">
                          v{systemInfo.boltVersion}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                      <Database className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white mb-1">
                          {isVietnamese ? "Công cụ hoạt động" : "Active Tools"}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {systemInfo.activeTools.map((tool) => (
                            <span
                              key={tool}
                              className="px-2 py-1 text-xs font-medium bg-white/20 text-white rounded-lg border border-white/20"
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
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 shadow-lg p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">
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
                    <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                      <Database className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white mb-1">
                          Supabase
                        </p>
                        <p className="text-sm text-white/80">
                          v{systemInfo.supabaseVersion}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                      <Code className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white mb-1">
                          React
                        </p>
                        <p className="text-sm text-white/80">
                          v{systemInfo.reactVersion}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                      <Code className="h-5 w-5 text-violet-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white mb-1">
                          Vite
                        </p>
                        <p className="text-sm text-white/80">
                          v{systemInfo.viteVersion}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-400/30">
                      <Calendar className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white mb-1">
                          {isVietnamese ? "Trạng thái Server" : "Server Status"}
                        </p>
                        <p className="text-sm text-green-300 font-medium">
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
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-16"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 shadow-lg p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  {t("about.aiTraining.title")}
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <p className="text-white/85 text-lg leading-relaxed">
                    {t("about.aiTraining.description")}
                  </p>

                  <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 p-6 overflow-x-auto">
                    <div className="flex items-center gap-2 mb-4">
                      <Code className="h-5 w-5 text-green-400" />
                      <span className="text-sm font-semibold text-white/90 uppercase tracking-wide">
                        {isVietnamese ? "Ví dụ lệnh huấn luyện" : "Training Commands"}
                      </span>
                    </div>
                    <pre className="text-sm text-green-300 font-mono leading-relaxed">
                      <code>{t("about.aiTraining.codeExample")}</code>
                    </pre>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-amber-500/10 backdrop-blur-sm rounded-xl border border-amber-400/30">
                    <Sparkles className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-white/85 leading-relaxed">
                      {t("about.aiTraining.note")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/15 p-8 text-center space-y-6 w-full max-w-sm">
                    <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
                      <QrCode className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white">
                      {t("about.aiTraining.qrTitle")}
                    </h3>

                   <div className="relative aspect-square w-full bg-white rounded-xl p-4 flex items-center justify-center">
                        <img
                            src="./image.png"
                            alt="QR Code"
                            className="h-full w-auto object-contain"
                        />
                    </div>

                    <p className="text-sm text-white/70">
                      {isVietnamese
                        ? "Quét mã QR để truy cập trang web của chúng tôi trên thiết bị di động"
                        : "Scan the QR code to access our website on your mobile device"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16"
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <Users className="h-8 w-8 text-purple-600" />
                <h2 className="text-3xl font-bold text-white">
                  {isVietnamese ? "Đội ngũ của chúng tôi" : "Our Team"}
                </h2>
              </div>
              <p className="text-white/85 mb-2">
                {isVietnamese
                  ? "Những người đã xây dựng và phát triển dự án này"
                  : "The people who built and developed this project"}
              </p>
              <p className="text-white/60 text-sm">
                {isVietnamese
                  ? "← Vuốt để xem thêm →"
                  : "← Swipe to see more →"}
              </p>
            </div>

            <div className="relative px-4">
              <div
                className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex-shrink-0 w-[280px] snap-center"
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-full border border-white/15 shadow-2xl p-8 hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 h-[280px] w-[280px] flex flex-col items-center justify-center text-center">
                      {/* <div className="mb-4">
                        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-red-600 via-purple-700 to-fuchsia-700 flex items-center justify-center shadow-lg">
                          <span className="text-2xl font-bold text-white">
                            {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                          </span>
                        </div>
                      </div> */}

                      <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                        {member.name}
                      </h3>

                      <p className="text-xs text-purple-400 font-medium mb-3 line-clamp-2 px-2">
                        {member.role}
                      </p>

                      <div className="w-full">
                        <p className="text-[10px] font-semibold text-white/70 uppercase tracking-wide mb-1">
                          {isVietnamese ? "Đóng góp" : "Contributions"}
                        </p>
                        <div className="space-y-0.5 max-h-16 overflow-y-auto scrollbar-hide">
                          {member.contributions.slice(0, 3).map((contribution, idx) => (
                            <p
                              key={idx}
                              className="text-[10px] text-white/70 line-clamp-1"
                            >
                              • {contribution}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
          </motion.section>
        </motion.div>
      </div>
    </section>
  );
}
