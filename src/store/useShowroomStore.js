import { create } from 'zustand';

export const useShowroomStore = create((set) => ({
  // Currently selected component id
  selectedComponent: null,
  setSelectedComponent: (id) => set({ selectedComponent: id }),

  // Is the detail panel open
  detailOpen: false,
  setDetailOpen: (v) => set({ detailOpen: v }),

  // Camera is transitioning
  cameraTransitioning: false,
  setCameraTransitioning: (v) => set({ cameraTransitioning: v }),

  // Hotspot hover (from sidebar click/hover)
  hoveredComponent: null,
  setHoveredComponent: (id) => set({ hoveredComponent: id }),

  // Component ID resolved from hovering a 3D mesh on the bike
  // Read via getState() inside useFrame — does NOT trigger React renders
  hoveredMeshId: null,
  setHoveredMeshId: (id) => set({ hoveredMeshId: id }),

  // Loading progress
  loadingProgress: 0,
  setLoadingProgress: (v) => set({ loadingProgress: v }),

  // Active filter category
  activeCategory: 'All',
  setActiveCategory: (cat) => set({ activeCategory: cat }),

  // Dynamic hotspot anchors calculated from 3D meshes at runtime
  dynamicAnchors: {},
  setDynamicAnchors: (anchors) => set({ dynamicAnchors: anchors }),

  // Bike view mode ('ICE' or 'EV')
  bikeMode: 'ICE',
  setBikeMode: (mode) => set({ bikeMode: mode }),
}));

