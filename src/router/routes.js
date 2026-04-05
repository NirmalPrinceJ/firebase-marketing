import HomeView from '../views/HomeView.vue'
import ProductView from '../views/product/ProductView.vue'
import SolutionsView from '../views/solutions/SolutionsView.vue'
import HowItWorksView from '../views/how-it-works/HowItWorksView.vue'
import OurStoryView from '../views/company/OurStoryView.vue'
import FAQView from '../views/company/FAQView.vue'
import ContactView from '../views/company/ContactView.vue'
import RequestDemoView from '../views/RequestDemoView.vue'
import EvidenceView from '../views/product/EvidenceView.vue'
import SecurityView from '../views/company/SecurityView.vue'
import CompanyView from '../views/company/CompanyView.vue'
import ResourcesView from '../views/resources/ResourcesView.vue'
import BlogView from '../views/company/BlogView.vue'
import RoleView from '../views/solutions/RoleView.vue'
import IndustryView from '../views/solutions/IndustryView.vue'
import ModuleView from '../views/solutions/ModuleView.vue'
import ThankYouView from '../views/ThankYouView.vue'
import NotFoundView from '../views/NotFoundView.vue'

// Product sub-pages
import SpineView from '../views/product/SpineView.vue'
import Entity360View from '../views/product/Entity360View.vue'
import SignalsView from '../views/product/SignalsView.vue'
import ApprovalsView from '../views/product/ApprovalsView.vue'
import MemoryView from '../views/product/MemoryView.vue'
import IntegrationsView from '../views/product/IntegrationsView.vue'

// How It Works sub-pages
import ArchitectureView from '../views/how-it-works/ArchitectureView.vue'
import GovernanceView from '../views/how-it-works/GovernanceView.vue'
import EvidenceDeepView from '../views/how-it-works/EvidenceDeepView.vue'

const routes = [
  // Home
  { path: '/', name: 'home', component: HomeView },

  // Product
  {
    path: '/product',
    name: 'product',
    component: ProductView,
    children: [
      { path: 'spine', name: 'product-spine', component: SpineView },
      { path: 'entity-360', name: 'product-entity-360', component: Entity360View },
      { path: 'signals', name: 'product-signals', component: SignalsView },
      { path: 'approvals', name: 'product-approvals', component: ApprovalsView },
      { path: 'memory', name: 'product-memory', component: MemoryView },
      { path: 'integrations', name: 'product-integrations', component: IntegrationsView },
    ]
  },

  // Solutions hub
  { path: '/solutions', name: 'solutions', component: SolutionsView },

  // Dynamic role pages
  { path: '/solutions/roles/:role', name: 'role', component: RoleView },

  // Dynamic industry pages
  { path: '/solutions/industries/:industry', name: 'industry', component: IndustryView },

  // Dynamic module pages
  { path: '/solutions/modules/:module', name: 'module', component: ModuleView },

  // How It Works
  {
    path: '/how-it-works',
    name: 'how-it-works',
    component: HowItWorksView,
    children: [
      { path: 'architecture', name: 'how-it-works-architecture', component: ArchitectureView },
      { path: 'governance', name: 'how-it-works-governance', component: GovernanceView },
      { path: 'evidence', name: 'how-it-works-evidence', component: EvidenceDeepView },
    ]
  },

  // Standalone pages
  { path: '/our-story', name: 'our-story', component: OurStoryView },
  { path: '/faq', name: 'faq', component: FAQView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/request-demo', name: 'request-demo', component: RequestDemoView },
  { path: '/evidence', name: 'evidence', component: EvidenceView },
  { path: '/security', name: 'security', component: SecurityView },
  { path: '/blog', name: 'blog', component: BlogView },
  { path: '/thank-you', name: 'thank-you', component: ThankYouView },

  // Company catch-all
  { path: '/company/:page?', name: 'company', component: CompanyView },

  // Resources catch-all
  { path: '/resources/:section?/:page?', name: 'resources', component: ResourcesView },

  // 404
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView },
]

export default routes
