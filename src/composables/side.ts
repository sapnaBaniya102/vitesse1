import { ref, computed } from 'vue'

export const collapsed = ref(false)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_WIDTH = 240
export const SIDEBAR_WIDTH_COLLAPSED = 45
export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`,
)

export const NAVBAR_WIDTH = 1280
export const NAVBAR_WIDTH_COLLAPSED = 1470
export const navbarWidth = computed(
  () => `${collapsed.value ? NAVBAR_WIDTH_COLLAPSED : NAVBAR_WIDTH}px`,
)
export const FOOTER_WIDTH = 1280
export const FOOTER_WIDTH_COLLAPSED = 1470
export const footerWidth = computed(
  () => `${collapsed.value ? FOOTER_WIDTH_COLLAPSED : FOOTER_WIDTH}px`,
)
export const DASHBOARD_WIDTH = 1280
export const DASHBOARD_WIDTH_COLLAPSED = 1470
export const DashboardWidth = computed(
  () => `${collapsed.value ? DASHBOARD_WIDTH_COLLAPSED : DASHBOARD_WIDTH}px`,
)
