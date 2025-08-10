declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': {
        'media-id': string;
        aspect?: string;
        className?: string;
        style?: React.CSSProperties;
        [key: string]: any;
      };
    }
  }
}

export {};
