import HomeView from '../views/HomeView.vue'

// MuleSoft Account Success
const MuleSoftOverview = () => import('../views/product/mulesoft/MuleSoftOverview.vue')
const CsmAccountsHub = () => import('../views/product/mulesoft/CsmAccountsHub.vue')
const CsmAccount360 = () => import('../views/product/mulesoft/CsmAccount360.vue')
const IntelligenceCenter = () => import('../views/product/mulesoft/IntelligenceCenter.vue')
const StrategicAccountSuccess = () => import('../views/product/mulesoft/StrategicAccountSuccess.vue')

// Business Ops Command Center
const BizOpsOverview = () => import('../views/product/bizops/BizOpsOverview.vue')
const FounderOps = () => import('../views/product/bizops/FounderOps.vue')
const CeoDashboard = () => import('../views/product/bizops/CeoDashboard.vue')
const CooDashboard = () => import('../views/product/bizops/CooDashboard.vue')
const CioCtoBoard = () => import('../views/product/bizops/CioCtoBoard.vue')

// Other pages
const HowItWorks = () => import('../views/HowItWorksView.vue')
const PricingView = () => import('../views/PricingView.vue')
const ResourcesView = () => import('../views/ResourcesView.vue')
const AboutView = () => import('../views/AboutView.vue')
const RequestDemoView = () => import('../views/RequestDemoView.vue')
const ContactView = () => import('../views/company/ContactView.vue')
const ThankYouView = () => import('../views/ThankYouView.vue')
const NotFoundView = () => import('../views/NotFoundView.vue')

// Company pages
const OurStoryView = () => import('../views/company/OurStoryView.vue')
const BlogView = () => import('../views/company/BlogView.vue')
const SecurityView = () => import('../views/company/SecurityView.vue')
const FAQView = () => import('../views/company/FAQView.vue')
const CompanyView = () => import('../views/company/CompanyView.vue')

// How It Works deep dives
const ArchitectureView = () => import('../views/how-it-works/ArchitectureView.vue')
const GovernanceView = () => import('../views/how-it-works/GovernanceView.vue')
const EvidenceDeepView = () => import('../views/how-it-works/EvidenceDeepView.vue')

const routes = [
  { path: '/', name: 'home', component: HomeView },

  // MuleSoft Account Success
  { path: '/product/mulesoft-account-success', name: 'mulesoft', component: MuleSoftOverview },
  { path: '/product/csm-accounts-hub', name: 'csm-hub', component: CsmAccountsHub },
  { path: '/product/csm-account-360', name: 'csm-360', component: CsmAccount360 },
  { path: '/product/intelligence-center', name: 'intelligence-center', component: IntelligenceCenter },
  { path: '/product/strategic-account-success', name: 'strategic-success', component: StrategicAccountSuccess },

  // Business Ops Command Center
  { path: '/product/business-ops-command-center', name: 'bizops', component: BizOpsOverview },
  { path: '/product/founder-ops', name: 'founder-ops', component: FounderOps },
  { path: '/product/ceo-dashboard', name: 'ceo-dashboard', component: CeoDashboard },
  { path: '/product/coo-dashboard', name: 'coo-dashboard', component: CooDashboard },
  { path: '/product/cio-cto-dashboard', name: 'cio-cto-dashboard', component: CioCtoBoard },

  // Core pages
  { path: '/how-it-works', name: 'how-it-works', component: HowItWorks },
  { path: '/pricing', name: 'pricing', component: PricingView },
  { path: '/resources', name: 'resources', component: ResourcesView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/request-demo', name: 'request-demo', component: RequestDemoView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/thank-you', name: 'thank-you', component: ThankYouView },

  // Company
  { path: '/our-story', name: 'our-story', component: OurStoryView },
  { path: '/blog', name: 'blog', component: BlogView },
  { path: '/security', name: 'security', component: SecurityView },
  { path: '/faq', name: 'faq', component: FAQView },
  { path: '/company/:page?', name: 'company', component: CompanyView },

  // How It Works deep dives
  { path: '/how-it-works/architecture', name: 'how-it-works-architecture', component: ArchitectureView },
  { path: '/how-it-works/governance', name: 'how-it-works-governance', component: GovernanceView },
  { path: '/how-it-works/evidence', name: 'how-it-works-evidence', component: EvidenceDeepView },

  // 404
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView },
]

export default routes
