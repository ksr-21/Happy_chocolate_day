
export type AppState = 'intro' | 'grid' | 'final' | 'shayari';

export interface FloatingMessage {
  id: number;
  text: string;
  x: number;
  y: number;
}
