declare global {
  interface Window {
    Wistia?: any;
    customElements?: CustomElementRegistry;
  }
  
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': {
        'media-id': string;
        aspect?: string;
        style?: React.CSSProperties;
        [key: string]: any;
      };
    }
  }
}

export {};
