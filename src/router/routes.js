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

  // 404
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView },
]

export default routes
