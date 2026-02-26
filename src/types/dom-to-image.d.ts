declare module "dom-to-image" {
  interface Options {
    quality?: number;
    bgcolor?: string;
    style?: Record<string, string>;
    filter?: (node: Node) => boolean;
    width?: number;
    height?: number;
  }

  export function toPng(node: HTMLElement, options?: Options): Promise<string>;
  export function toJpeg(node: HTMLElement, options?: Options): Promise<string>;
  export function toBlob(node: HTMLElement, options?: Options): Promise<Blob>;
  export function toPixelData(
    node: HTMLElement,
    options?: Options,
  ): Promise<Uint8ClampedArray>;
  export function toSvg(node: HTMLElement, options?: Options): Promise<string>;

  const domtoimage: {
    toPng: typeof toPng;
    toJpeg: typeof toJpeg;
    toBlob: typeof toBlob;
    toPixelData: typeof toPixelData;
    toSvg: typeof toSvg;
  };

  export default domtoimage;
}
