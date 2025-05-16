const k=["50","100","200","300","400","500","600","700","800","900"],L=e=>(e=e.replace(/^#/,""),e.length===3?e[0]+e[0]+e[1]+e[1]+e[2]+e[2]:e),I=e=>{e=L(e);let t=parseInt(e.substring(0,2),16)/255,s=parseInt(e.substring(2,4),16)/255,o=parseInt(e.substring(4,6),16)/255;const n=Math.max(t,s,o),a=Math.min(t,s,o);let r,l,i=(n+a)/2;if(n===a)r=l=0;else{const c=n-a;switch(l=i>.5?c/(2-n-a):c/(n+a),n){case t:r=(s-o)/c+(s<o?6:0);break;case s:r=(o-t)/c+2;break;case o:r=(t-s)/c+4;break}r/=6}return{h:r*360,s:l*100,l:i*100}};function M(e,t,s){let o=e/255,n=t/255,a=s/255;o=o>.04045?Math.pow((o+.055)/1.055,2.4):o/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,a=a>.04045?Math.pow((a+.055)/1.055,2.4):a/12.92;const r=o*.4124+n*.3576+a*.1805,l=o*.2126+n*.7152+a*.0722,i=o*.0193+n*.1192+a*.9505,c=r/.95047,p=l/1,m=i/1.08883,d=c>.008856?Math.pow(c,1/3):7.787*c+16/116,b=p>.008856?Math.pow(p,1/3):7.787*p+16/116,f=m>.008856?Math.pow(m,1/3):7.787*m+16/116,g=116*b-16,u=500*(d-b),$=200*(b-f),w=Math.sqrt(u*u+$*$);let h=Math.atan2($,u)*(180/Math.PI);return h<0&&(h+=360),{L:g,C:w,h}}const C=e=>{const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},S=e=>M(C(e)),U=e=>{const t=y(e),s=new Blob([t],{type:"text/scss"}),o=URL.createObjectURL(s),n=document.createElement("a");n.href=o,n.download="be-color-palette.scss",document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(o)},y=e=>{let t=`// Color Palette SCSS Variables
// Generated on `+new Date().toLocaleString()+`

`;return e.forEach(s=>{const o=s.name;t+=`// ${o.charAt(0).toUpperCase()+o.slice(1)}
`,t+=`$${o}-palette: (
`,s.palette.forEach(n=>{t+=`  ${n.shade}: ${n.value},
`}),t=t.slice(0,-2),t+=`
);

`}),t+=`// All colors collection
$colors-palettes: (
`,e.forEach(s=>{t+=`  ${s.name}: $${s.name}-palette,
`}),t=t.slice(0,-2),t+=`
);

`,t+=`// Function to access color values easily
@function color($color-name, $tone) {
@if map-has-key(map-get($colors, $color-name), $tone) {
@return map-get(map-get($colors, $color-name), $tone);
}
@warn "Unknown \`#{$tone}\` in color family \`#{$color-name}\`.";
@return null;
}
`,t};export{S as a,U as e,I as h,k as s};
