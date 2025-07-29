// src/types/vanta.d.ts
declare module 'vanta/dist/vanta.birds.min' {
  import { VantaBase } from 'vanta/types';

  const VANTA: {
    BIRDS: (options: VantaBase & { el: HTMLElement }) => {
      destroy: () => void;
    };
  };

  export default VANTA;
}
