/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface DcSwiper {
    'loop': boolean;
    'speed': number;
  }
  interface DcSwiperAttributes extends StencilHTMLAttributes {
    'loop'?: boolean;
    'speed'?: number;
  }
}

declare global {
  interface StencilElementInterfaces {
    'DcSwiper': Components.DcSwiper;
  }

  interface StencilIntrinsicElements {
    'dc-swiper': Components.DcSwiperAttributes;
  }


  interface HTMLDcSwiperElement extends Components.DcSwiper, HTMLStencilElement {}
  var HTMLDcSwiperElement: {
    prototype: HTMLDcSwiperElement;
    new (): HTMLDcSwiperElement;
  };

  interface HTMLElementTagNameMap {
    'dc-swiper': HTMLDcSwiperElement
  }

  interface ElementTagNameMap {
    'dc-swiper': HTMLDcSwiperElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
