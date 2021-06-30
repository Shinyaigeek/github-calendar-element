import React, { ReactNode } from "react";

declare global {
  export namespace JSX {
    interface IntrinsicElements {
      "github-calendar": {
        "user-name": string;
        cache?: number;
        tooltips?: boolean;
        children?: ReactNode;
        summary?: string;
      };
    }
  }
}
