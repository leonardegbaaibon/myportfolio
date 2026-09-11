import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  FiCalendar, FiClock, FiCheckCircle, FiDollarSign, 
  FiBell, FiLayers, FiActivity, FiNavigation, 
  FiShield, FiTrendingUp, FiCpu, FiZap
} from 'react-icons/fi';
import { 
  IoSparkles, IoCarSportOutline, 
  IoCardOutline, IoNotificationsOutline 
} from 'react-icons/io5';

const ProductEcosystemConnector = () => {
  const { isDarkMode } = useTheme();
  const [activePreset, setActivePreset] = useState('glamorgram');
  const [hoveredCard, setHoveredCard] = useState(null);

  // Define ecosystems based on his real projects (Glamorgram, Kabu Chauffeur, Swiftpoint)
  const presets = {
    glamorgram: {
      title: "Glamorgram Product Ecosystem",
      tagline: "Automated beauty salon booking, scheduling conflict resolution, and payment engine",
      hubLabel: "Glamorgram Core Hub",
      hubSub: "React Native • Redux • Stripe",
      cards: {
        topLeft: {
          id: 'booking',
          badge: '24/7 Booking',
          title: 'Sarah Mitchell',
          subtitle: 'Classic Lashes Treatment',
          meta: 'Jun 12, 2026 • 10:00 AM',
          status: 'Confirmed',
          statusColor: 'emerald',
          avatar: 'S',
          icon: FiCalendar
        },
        bottomLeft: {
          id: 'reminder',
          badge: 'Smart Calendar',
          title: 'Appointment Reminder',
          subtitle: 'Automated Email & SMS Alerts',
          meta: 'Dispatched 2h Before Slot',
          status: 'Active Automation',
          statusColor: 'purple',
          avatar: null,
          icon: IoNotificationsOutline
        },
        topRight: {
          id: 'schedule',
          badge: 'Real-time Slots',
          title: 'Weekly Capacity Hub',
          subtitle: 'Dynamic Conflict Prevention',
          meta: 'Thu 12 • 10:00 AM Booked',
          status: 'Syncing Live',
          statusColor: 'blue',
          avatar: null,
          icon: FiClock
        },
        bottomRight: {
          id: 'payment',
          badge: 'Instant Checkout',
          title: 'Payment Collected',
          subtitle: 'Stripe Gateway & Split Payout',
          meta: 'Classic Lashes Package',
          status: '€80.00 Received',
          statusColor: 'emerald',
          avatar: null,
          icon: FiDollarSign
        }
      }
    },
    kabu: {
      title: "Kabu Chauffeur & Mobility Network",
      tagline: "Lagos premium chauffeur dispatch, live GPS trip lifecycle, and fleet management",
      hubLabel: "Kabu Dispatch Engine",
      hubSub: "React Native • Google Maps • Live Websockets",
      cards: {
        topLeft: {
          id: 'dispatch',
          badge: 'Rider Request',
          title: 'Chauffeur Booking',
          subtitle: 'Victoria Island ➔ Lekki Phase 1',
          meta: 'Executive Sedan • Trip #8492',
          status: 'Driver Assigned',
          statusColor: 'emerald',
          avatar: 'K',
          icon: IoCarSportOutline
        },
        bottomLeft: {
          id: 'telematics',
          badge: 'Live Telematics',
          title: 'Real-Time GPS Tracking',
          subtitle: 'Sub-second Coordinate Streaming',
          meta: 'ETA 6 mins • Speed: 42 km/h',
          status: 'En Route',
          statusColor: 'blue',
          avatar: null,
          icon: FiNavigation
        },
        topRight: {
          id: 'fleet',
          badge: 'Fleet Ops',
          title: 'Driver Verification Hub',
          subtitle: 'Background Vetted Chauffeurs',
          meta: '99.8% On-Time Rating',
          status: 'Verified Badge',
          statusColor: 'purple',
          avatar: null,
          icon: FiShield
        },
        bottomRight: {
          id: 'fare',
          badge: 'Dynamic Fare',
          title: 'Automated Trip Settlement',
          subtitle: 'In-App Wallet & Split Dispatch',
          meta: 'Toll & Chauffeur Fee Included',
          status: '₦28,500 Settled',
          statusColor: 'emerald',
          avatar: null,
          icon: FiCheckCircle
        }
      }
    },
    swiftpoint: {
      title: "Swiftpoint High-Availability Fintech",
      tagline: "Processing multi-currency wallet transactions with 99.2% crash-free stability",
      hubLabel: "Swiftpoint Fintech Core",
      hubSub: "React Native • Expo • Kotlin/Swift • APIs <2s",
      cards: {
        topLeft: {
          id: 'wallet',
          badge: 'Multi-Currency',
          title: 'Primary Merchant Wallet',
          subtitle: 'USD / NGN / EUR Balance Sync',
          meta: 'Zero-Latency Ledger Updates',
          status: '$70k+ Monthly Vol',
          statusColor: 'emerald',
          avatar: '$',
          icon: IoCardOutline
        },
        bottomLeft: {
          id: 'airtime',
          badge: 'Instant Vending',
          title: 'Bill Pay & Utility Engine',
          subtitle: 'Automated Provider Failover',
          meta: '99.9% Route Success Rate',
          status: 'Processed <1.4s',
          statusColor: 'blue',
          avatar: null,
          icon: FiZap
        },
        topRight: {
          id: 'monitoring',
          badge: 'SRE Monitor',
          title: 'Admin Reconciliation',
          subtitle: 'Role-Based Audit Dashboard',
          meta: 'Sub-2s API Latency Benchmark',
          status: '99.2% Crash-Free',
          statusColor: 'purple',
          avatar: null,
          icon: FiActivity
        },
        bottomRight: {
          id: 'reconciliation',
          badge: 'Instant Settlement',
          title: 'Merchant Payout Complete',
          subtitle: 'Automated Bank Clearing',
          meta: 'Multi-tier Signature Approved',
          status: '$14,250 Cleared',
          statusColor: 'emerald',
          avatar: null,
          icon: FiTrendingUp
        }
      }
    }
  };

  const current = presets[activePreset];

  return (
    <section className="py-20 relative overflow-hidden bg-transparent">
      {/* Background concentric radial rings (like the Glamorgram design) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 dark:opacity-20">
        <div className="w-[600px] h-[600px] rounded-full border border-blue-500/20 dark:border-blue-400/10 animate-pulse-subtle" />
        <div className="absolute w-[900px] h-[900px] rounded-full border border-purple-500/15 dark:border-purple-400/10" />
        <div className="absolute w-[1200px] h-[1200px] rounded-full border border-indigo-500/10" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-3 shadow-sm">
            <IoSparkles className="text-sm text-blue-500" /> Interactive Architecture Flow
          </div>
          <h2 className="section-title">
            Connected Product Systems & Live Data Flows
          </h2>
          <p className="section-subtitle">
            Demonstrating how complex frontend components, state machines, and real-time backend integrations seamlessly connect in production.
          </p>

          {/* Preset Selector Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white/80 dark:bg-surface-dark border border-gray-200/80 dark:border-white/10 shadow-lg backdrop-blur-xl gap-1.5">
            {[
              { id: 'glamorgram', label: 'Glamorgram Scheduling' },
              { id: 'kabu', label: 'Kabu Chauffeur Network' },
              { id: 'swiftpoint', label: 'Swiftpoint Fintech Core' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActivePreset(tab.id)}
                className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activePreset === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]'
                    : 'text-text-mutedLight dark:text-text-mutedDark hover:text-text-light dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Connector Canvas */}
        <div className="relative max-w-5xl mx-auto min-h-[580px] lg:min-h-[640px] flex flex-col justify-between py-6">
          
          {/* SVG Animated Connector Path Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 650"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="laserGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>

              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Central Spine Line rising from bottom Hub */}
            <path
              d="M 500 560 L 500 350"
              stroke={isDarkMode ? "rgba(96, 165, 250, 0.4)" : "rgba(167, 139, 250, 0.5)"}
              strokeWidth="2.5"
              strokeDasharray="4 4"
            />

            {/* Branch to Top-Left Card */}
            <path
              d="M 500 350 C 450 350, 360 350, 360 210 C 360 210, 360 140, 320 140"
              stroke={hoveredCard === 'booking' ? "url(#laserGrad)" : isDarkMode ? "rgba(96, 165, 250, 0.4)" : "rgba(167, 139, 250, 0.5)"}
              strokeWidth={hoveredCard === 'booking' ? "3.5" : "2"}
              filter={hoveredCard === 'booking' ? "url(#glow)" : "none"}
              className="transition-all duration-300"
            />

            {/* Branch to Bottom-Left Card */}
            <path
              d="M 500 350 C 450 350, 360 350, 360 440 C 360 440, 360 460, 320 460"
              stroke={hoveredCard === 'reminder' ? "url(#laserGrad)" : isDarkMode ? "rgba(96, 165, 250, 0.4)" : "rgba(167, 139, 250, 0.5)"}
              strokeWidth={hoveredCard === 'reminder' ? "3.5" : "2"}
              filter={hoveredCard === 'reminder' ? "url(#glow)" : "none"}
              className="transition-all duration-300"
            />

            {/* Branch to Top-Right Card */}
            <path
              d="M 500 350 C 550 350, 640 350, 640 210 C 640 210, 640 140, 680 140"
              stroke={hoveredCard === 'schedule' ? "url(#laserGrad)" : isDarkMode ? "rgba(96, 165, 250, 0.4)" : "rgba(167, 139, 250, 0.5)"}
              strokeWidth={hoveredCard === 'schedule' ? "3.5" : "2"}
              filter={hoveredCard === 'schedule' ? "url(#glow)" : "none"}
              className="transition-all duration-300"
            />

            {/* Branch to Bottom-Right Card */}
            <path
              d="M 500 350 C 550 350, 640 350, 640 440 C 640 440, 640 460, 680 460"
              stroke={hoveredCard === 'payment' ? "url(#laserGrad)" : isDarkMode ? "rgba(96, 165, 250, 0.4)" : "rgba(167, 139, 250, 0.5)"}
              strokeWidth={hoveredCard === 'payment' ? "3.5" : "2"}
              filter={hoveredCard === 'payment' ? "url(#glow)" : "none"}
              className="transition-all duration-300"
            />

            {/* Flowing animated pulse particles along the paths */}
            <circle r="4" fill="#3b82f6" filter="url(#glow)">
              <animateMotion
                path="M 500 560 L 500 350 C 450 350, 360 350, 360 210 C 360 210, 360 140, 320 140"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>

            <circle r="4" fill="#8b5cf6" filter="url(#glow)">
              <animateMotion
                path="M 500 560 L 500 350 C 450 350, 360 350, 360 440 C 360 440, 360 460, 320 460"
                dur="3.4s"
                repeatCount="indefinite"
              />
            </circle>

            <circle r="4" fill="#06b6d4" filter="url(#glow)">
              <animateMotion
                path="M 500 560 L 500 350 C 550 350, 640 350, 640 210 C 640 210, 640 140, 680 140"
                dur="3.2s"
                repeatCount="indefinite"
              />
            </circle>

            <circle r="4" fill="#10b981" filter="url(#glow)">
              <animateMotion
                path="M 500 560 L 500 350 C 550 350, 640 350, 640 440 C 640 440, 640 460, 680 460"
                dur="3.6s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>

          {/* Top Layer: 2 Cards (Top Left & Top Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-32 relative z-10">
            {/* Top Left Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredCard('booking')}
              onMouseLeave={() => setHoveredCard(null)}
              className={`p-6 rounded-3xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-surface-dark/95 border border-white/10 hover:border-blue-500/40 shadow-2xl' 
                  : 'bg-white border border-gray-200/90 hover:border-blue-500/40 shadow-xl'
              } backdrop-blur-2xl hover:scale-[1.02] cursor-pointer`}
            >
              <div className="flex items-start gap-4">
                {current.cards.topLeft.avatar ? (
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-500/20 shrink-0">
                    {current.cards.topLeft.avatar}
                  </div>
                ) : (
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500 shrink-0">
                    <current.cards.topLeft.icon className="text-xl" />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-base text-text-light dark:text-text-dark">
                      {current.cards.topLeft.title}
                    </h4>
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      {current.cards.topLeft.status}
                    </span>
                  </div>
                  <p className="text-xs text-text-mutedLight dark:text-text-mutedDark mb-2 font-medium">
                    {current.cards.topLeft.subtitle}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-text-mutedLight dark:text-text-mutedDark">
                    <FiClock className="text-blue-500" />
                    <span>{current.cards.topLeft.meta}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Top Right Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredCard('schedule')}
              onMouseLeave={() => setHoveredCard(null)}
              className={`p-6 rounded-3xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-surface-dark/95 border border-white/10 hover:border-indigo-500/40 shadow-2xl' 
                  : 'bg-white border border-gray-200/90 hover:border-indigo-500/40 shadow-xl'
              } backdrop-blur-2xl hover:scale-[1.02] cursor-pointer`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-500 shrink-0">
                  <current.cards.topRight.icon className="text-xl" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-base text-text-light dark:text-text-dark">
                      {current.cards.topRight.title}
                    </h4>
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      {current.cards.topRight.status}
                    </span>
                  </div>
                  <p className="text-xs text-text-mutedLight dark:text-text-mutedDark mb-2 font-medium">
                    {current.cards.topRight.subtitle}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-text-mutedLight dark:text-text-mutedDark">
                    <FiActivity className="text-indigo-500" />
                    <span>{current.cards.topRight.meta}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Middle Branching Badges (Intermediary tags along the curves) */}
          <div className="hidden lg:flex items-center justify-between px-16 relative z-10 my-4 pointer-events-none">
            <div className="flex gap-16">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/90 dark:bg-surface-darkElevated border border-gray-200 dark:border-white/10 shadow-md text-text-mutedLight dark:text-gray-300 flex items-center gap-1.5">
                <FiZap className="text-blue-500" /> {current.cards.topLeft.badge}
              </span>
            </div>

            <div className="flex gap-16">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/90 dark:bg-surface-darkElevated border border-gray-200 dark:border-white/10 shadow-md text-text-mutedLight dark:text-gray-300 flex items-center gap-1.5">
                <FiLayers className="text-indigo-500" /> {current.cards.topRight.badge}
              </span>
            </div>
          </div>

          {/* Bottom Layer: 2 Cards (Bottom Left & Bottom Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-32 relative z-10 mb-8">
            {/* Bottom Left Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onMouseEnter={() => setHoveredCard('reminder')}
              onMouseLeave={() => setHoveredCard(null)}
              className={`p-6 rounded-3xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-surface-dark/95 border border-white/10 hover:border-purple-500/40 shadow-2xl' 
                  : 'bg-white border border-gray-200/90 hover:border-purple-500/40 shadow-xl'
              } backdrop-blur-2xl hover:scale-[1.02] cursor-pointer`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-500 shrink-0">
                  <current.cards.bottomLeft.icon className="text-xl" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-base text-text-light dark:text-text-dark">
                      {current.cards.bottomLeft.title}
                    </h4>
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400">
                      {current.cards.bottomLeft.status}
                    </span>
                  </div>
                  <p className="text-xs text-text-mutedLight dark:text-text-mutedDark mb-2 font-medium">
                    {current.cards.bottomLeft.subtitle}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-text-mutedLight dark:text-text-mutedDark">
                    <FiBell className="text-purple-500" />
                    <span>{current.cards.bottomLeft.meta}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Right Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onMouseEnter={() => setHoveredCard('payment')}
              onMouseLeave={() => setHoveredCard(null)}
              className={`p-6 rounded-3xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-surface-dark/95 border border-white/10 hover:border-emerald-500/40 shadow-2xl' 
                  : 'bg-white border border-gray-200/90 hover:border-emerald-500/40 shadow-xl'
              } backdrop-blur-2xl hover:scale-[1.02] cursor-pointer`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 shrink-0">
                  <current.cards.bottomRight.icon className="text-xl" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-base text-text-light dark:text-text-dark">
                      {current.cards.bottomRight.title}
                    </h4>
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      {current.cards.bottomRight.status}
                    </span>
                  </div>
                  <p className="text-xs text-text-mutedLight dark:text-text-mutedDark mb-2 font-medium">
                    {current.cards.bottomRight.subtitle}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-text-mutedLight dark:text-text-mutedDark">
                    <FiCheckCircle className="text-emerald-500" />
                    <span>{current.cards.bottomRight.meta}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Central Anchor / Product Hub Node */}
          <div className="flex justify-center relative z-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`px-6 sm:px-8 py-3.5 rounded-full flex items-center gap-3 shadow-2xl ${
                isDarkMode 
                  ? 'bg-surface-darkElevated border-2 border-primary-500/40 text-white shadow-blue-500/20' 
                  : 'bg-white border-2 border-primary-500 text-gray-900 shadow-xl shadow-blue-500/15'
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-sm font-bold shadow-md shadow-blue-500/40">
                <FiCpu className="text-base" />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-black tracking-wide flex items-center gap-1.5">
                  <span>{current.hubLabel}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                </div>
                <div className="text-[10px] sm:text-xs text-primary-500 font-semibold">
                  {current.hubSub}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductEcosystemConnector;
