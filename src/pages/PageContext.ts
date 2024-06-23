// https://vike.dev/pageContext#typescript
declare global {
  namespace Vike {
    interface PageContext {
      user?: {
        email: string;
        id: string;
        two_factor: any;
      };
    }
  }
}

// Tell TypeScript that this file isn't an ambient module
export {};
