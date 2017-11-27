import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'aps-cog',
  template: `
  <svg height="100%" width="100%" viewBox="0 0 1 1">
    <g style="fill: #2e2e2e; stroke: #2e2e2e;">
      <rect y=".375" width=".25" height=".25" rx=".0625" ry=".0625" stroke="none" />
      <rect y=".375" width=".25" height=".25" rx=".0625" ry=".0625" stroke="none" transform="rotate(45 .5,.5)" />
      <rect x=".375" width=".25" height=".25" rx=".0625" ry=".0625" stroke="none" />
      <rect x=".375" width=".25" height=".25" rx=".0625" ry=".0625" stroke="none" transform="rotate(45 .5,.5)" />
      <rect y=".375" width=".25" height=".25" rx=".0625" ry=".0625" stroke="none" transform="translate(.75,0)" />
      <rect y=".375" width=".25" height=".25" rx=".0625" ry=".0625" stroke="none" transform="rotate(45 .5,.5) translate(.75,0)" />
      <rect x=".375" width=".25" height=".25" rx=".0625" ry=".0625" stroke="none" transform="translate(0,.75)" />
      <rect x=".375" width=".25" height=".25" rx=".0625" ry=".0625" stroke="none" transform="rotate(45 .5,.5) translate(0,.75)" />
      <circle cx=".5" cy=".5" r=".3" fill="none" stroke-width=".2" />
    </g>
  </svg>
  `
})
export class ApsCogComponent {

  constructor() { }
}
