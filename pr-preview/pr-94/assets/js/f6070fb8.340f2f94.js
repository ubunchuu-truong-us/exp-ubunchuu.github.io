"use strict";(self.webpackChunkubunchuu_truong_us_github_io=self.webpackChunkubunchuu_truong_us_github_io||[]).push([[6792],{9480:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>t,contentTitle:()=>s,default:()=>g,frontMatter:()=>h,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"15DFWT/package-management","title":"Day 6 - Package Management","description":"Package Management","source":"@site/docs/15DFWT/6-package-management.md","sourceDirName":"15DFWT","slug":"/15DFWT/package-management","permalink":"/docs/15DFWT/package-management","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"15DFWT","permalink":"/docs/tags/15-dfwt"},{"inline":true,"label":"Package Management","permalink":"/docs/tags/package-management"},{"inline":true,"label":"APT","permalink":"/docs/tags/apt"}],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Day 6 - Package Management","description":"Package Management","slug":"package-management","authors":["thangbuiq"],"tags":["15DFWT","Package Management","APT"],"hide_table_of_contents":false,"date":"2025-02-10T00:00:00.000Z","sidebar-position":6},"sidebar":"tutorialSidebar","previous":{"title":"Day 4 - Git c\u01a1 b\u1ea3n","permalink":"/docs/15DFWT/basic-git"}}');var i=c(4848),l=c(8453);const h={title:"Day 6 - Package Management",description:"Package Management",slug:"package-management",authors:["thangbuiq"],tags:["15DFWT","Package Management","APT"],hide_table_of_contents:!1,date:new Date("2025-02-10T00:00:00.000Z"),"sidebar-position":6},s="Day 6 - Package Management",t={},d=[{value:"Package manager \u0111\u1ec3 l\xe0m g\xec nh\u1ec9?",id:"package-manager-\u0111\u1ec3-l\xe0m-g\xec-nh\u1ec9",level:2},{value:"C\xe1c lo\u1ea1i package manager tr\xean Linux",id:"c\xe1c-lo\u1ea1i-package-manager-tr\xean-linux",level:2},{value:"1. Distribution-Specific Package Managers",id:"1-distribution-specific-package-managers",level:3},{value:"2. Universal Package Managers",id:"2-universal-package-managers",level:3},{value:"3. Low-Level Package Managers",id:"3-low-level-package-managers",level:3},{value:"4. S\u1eed d\u1ee5ng <code>tar</code> v\xe0 <code>gzip</code>",id:"4-s\u1eed-d\u1ee5ng-tar-v\xe0-gzip",level:3},{value:"Qu\u1ea3n l\xfd package tr\xean Ubuntu/Debian v\u1edbi APT",id:"qu\u1ea3n-l\xfd-package-tr\xean-ubuntudebian-v\u1edbi-apt",level:2},{value:"C\u1eadp nh\u1eadt, s\u1eeda l\u1ed7i, v\xe0 g\u1ee1 ph\u1ea7n m\u1ec1m v\u1edbi APT",id:"c\u1eadp-nh\u1eadt-s\u1eeda-l\u1ed7i-v\xe0-g\u1ee1-ph\u1ea7n-m\u1ec1m-v\u1edbi-apt",level:3},{value:"M\u1ed9t s\u1ed1 c\xe2u l\u1ec7nh th\u01b0\u1eddng d\xf9ng v\u1edbi APT",id:"m\u1ed9t-s\u1ed1-c\xe2u-l\u1ec7nh-th\u01b0\u1eddng-d\xf9ng-v\u1edbi-apt",level:3},{value:"1. C\u1eadp nh\u1eadt danh s\xe1ch package",id:"1-c\u1eadp-nh\u1eadt-danh-s\xe1ch-package",level:4},{value:"2. N\xe2ng c\u1ea5p t\u1ea5t c\u1ea3 c\xe1c package",id:"2-n\xe2ng-c\u1ea5p-t\u1ea5t-c\u1ea3-c\xe1c-package",level:4},{value:"3. C\xe0i \u0111\u1eb7t package m\u1edbi",id:"3-c\xe0i-\u0111\u1eb7t-package-m\u1edbi",level:4},{value:"4.G\u1ee1 b\u1ecf package",id:"4g\u1ee1-b\u1ecf-package",level:4},{value:"5. X\xf3a ho\xe0n to\xe0n package v\xe0 c\xe1c file config",id:"5-x\xf3a-ho\xe0n-to\xe0n-package-v\xe0-c\xe1c-file-config",level:4},{value:"6. C\xe0i \u0111\u1eb7t t\u1eeb file .deb",id:"6-c\xe0i-\u0111\u1eb7t-t\u1eeb-file-deb",level:4},{value:"7. C\xe0i \u0111\u1eb7t c\xe1c dependencies b\u1ecb thi\u1ebfu",id:"7-c\xe0i-\u0111\u1eb7t-c\xe1c-dependencies-b\u1ecb-thi\u1ebfu",level:4},{value:"Th\xeam APT repository m\u1edbi v\xe0 c\xe0i \u0111\u1eb7t ch\xfang",id:"th\xeam-apt-repository-m\u1edbi-v\xe0-c\xe0i-\u0111\u1eb7t-ch\xfang",level:3},{value:"1. Th\xeam repository m\u1edbi",id:"1-th\xeam-repository-m\u1edbi",level:4},{value:"2. Ki\u1ec3m tra package t\u1eeb repository m\u1edbi",id:"2-ki\u1ec3m-tra-package-t\u1eeb-repository-m\u1edbi",level:4},{value:"3. X\xf3a repository n\u1ebfu kh\xf4ng c\u1ea7n n\u1eefa",id:"3-x\xf3a-repository-n\u1ebfu-kh\xf4ng-c\u1ea7n-n\u1eefa",level:4},{value:"Qu\u1ea3n l\xfd Package V\u1edbi dpkg",id:"qu\u1ea3n-l\xfd-package-v\u1edbi-dpkg",level:2},{value:"1. C\xe0i \u0111\u1eb7t package t\u1eeb file .deb",id:"1-c\xe0i-\u0111\u1eb7t-package-t\u1eeb-file-deb",level:3},{value:"2. Ki\u1ec3m tra package \u0111\xe3 c\xe0i",id:"2-ki\u1ec3m-tra-package-\u0111\xe3-c\xe0i",level:3},{value:"3. G\u1ee1 c\xe0i \u0111\u1eb7t package",id:"3-g\u1ee1-c\xe0i-\u0111\u1eb7t-package",level:3},{value:"S\u1eed d\u1ee5ng <code>tar</code> v\xe0 <code>gzip</code> \u0111\u1ec3 c\xe0i \u0111\u1eb7t package",id:"s\u1eed-d\u1ee5ng-tar-v\xe0-gzip-\u0111\u1ec3-c\xe0i-\u0111\u1eb7t-package",level:2},{value:"1. Gi\u1ea3i n\xe9n file <code>.tar</code>",id:"1-gi\u1ea3i-n\xe9n-file-tar",level:3},{value:"2. Gi\u1ea3i n\xe9n file <code>.tar.gz</code>",id:"2-gi\u1ea3i-n\xe9n-file-targz",level:3},{value:"3. N\xe9n file v\xe0 th\u01b0 m\u1ee5c",id:"3-n\xe9n-file-v\xe0-th\u01b0-m\u1ee5c",level:3},{value:"Qu\u1ea3n l\xfd Package B\xean Ngo\xe0i V\u1edbi Snap v\xe0 Flatpak",id:"qu\u1ea3n-l\xfd-package-b\xean-ngo\xe0i-v\u1edbi-snap-v\xe0-flatpak",level:2},{value:"1. C\xe0i \u0111\u1eb7t v\xe0 s\u1eed d\u1ee5ng Snap",id:"1-c\xe0i-\u0111\u1eb7t-v\xe0-s\u1eed-d\u1ee5ng-snap",level:3},{value:"2. C\xe0i \u0111\u1eb7t v\xe0 s\u1eed d\u1ee5ng Flatpak",id:"2-c\xe0i-\u0111\u1eb7t-v\xe0-s\u1eed-d\u1ee5ng-flatpak",level:3},{value:"AppImage - \u1ee8ng D\u1ee5ng Portable Kh\xf4ng C\u1ea7n C\xe0i \u0110\u1eb7t",id:"appimage---\u1ee9ng-d\u1ee5ng-portable-kh\xf4ng-c\u1ea7n-c\xe0i-\u0111\u1eb7t",level:2},{value:"1. T\u1ea3i AppImage",id:"1-t\u1ea3i-appimage",level:4},{value:"2. C\u1ea5p quy\u1ec1n th\u1ef1c thi",id:"2-c\u1ea5p-quy\u1ec1n-th\u1ef1c-thi",level:4},{value:"3. Ch\u1ea1y \u1ee9ng d\u1ee5ng",id:"3-ch\u1ea1y-\u1ee9ng-d\u1ee5ng",level:4}];function r(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"day-6---package-management",children:"Day 6 - Package Management"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"cover",src:c(2715).A+"",width:"940",height:"788"})}),"\n",(0,i.jsx)(e.p,{children:"D\xf9ng Linux g\u1ea7n m\u1ed9t tu\u1ea7n r\u1ed3i, c\xe1c b\u1ea1n \u0111\xe3 th\u1ea5y c\xe2u n\xe0y quen ch\u01b0a?"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo apt install zsh\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u0110\xe2y l\xe0 c\xe1ch c\xe0i \u0111\u1eb7t ",(0,i.jsx)(e.code,{children:"zsh"})," (Z-shell) \u0111\xe3 \u0111\u1ec1 c\u1eadp \u1edf c\xe1c b\xe0i tr\u01b0\u1edbc b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng package manager APT."]}),"\n",(0,i.jsx)(e.p,{children:"Nh\u01b0ng khoan \u0111\xe3, package manager l\xe0 g\xec?"}),"\n",(0,i.jsx)(e.p,{children:"H\xe3y t\u01b0\u1edfng t\u01b0\u1ee3ng b\u1ea1n \u0111ang \u0111i si\xeau th\u1ecb \u0111\u1ec3 mua qu\xe0, v\xe0 nh\xe2n vi\xean si\xeau th\u1ecb (package manager) gi\xfap b\u1ea1n t\xecm qu\xe0, r\u1ed3i g\xf3i qu\xe0 (k\xe8m lu\xf4n c\u1ea3 gi\u1ea5y g\xf3i, h\u1ed9p gi\u1ea5y, n\u01a1 trang tr\xed c\xe1c ki\u1ec3u) cho b\u1ea1n lu\xf4n, t\u1ea5t c\u1ea3 trong m\u1ed9t \ud83e\udd78. Th\u1ebf l\xe0, b\u1ea1n ch\u1ec9 c\u1ea7n tr\u1ea3 ti\u1ec1n (g\xf5 command) v\xe0 nh\u1eadn qu\xe0 v\u1ec1 th\xf4i."}),"\n",(0,i.jsx)(e.h2,{id:"package-manager-\u0111\u1ec3-l\xe0m-g\xec-nh\u1ec9",children:"Package manager \u0111\u1ec3 l\xe0m g\xec nh\u1ec9?"}),"\n",(0,i.jsx)(e.p,{children:"V\u1eady th\xec tr\xean Windows, b\u1ea1n ph\u1ea3i l\xean m\u1ea1ng t\xecm ph\u1ea7n m\u1ec1m, t\u1ea3i v\u1ec1, r\u1ed3i c\xe0i t\u1eebng c\xe1i m\u1ed9t t\u1eeb dependencies (driver,...) \u0111\u1ebfn c\xe0i \u0111\u1eb7t ch\xednh software \u0111\xf3. C\xf2n tr\xean Linux, b\u1ea1n ch\u1ec9 c\u1ea7n g\xf5 l\u1ec7nh th\xf4i, c\xe1c \u1ee9ng d\u1ee5ng (v\xe0 c\u1ea3 dependencies c\u1ee7a ch\xfang) s\u1ebd \u0111\u01b0\u1ee3c t\u1ea3i v\u1ec1 v\xe0 c\xe0i \u0111\u1eb7t t\u1ef1 \u0111\u1ed9ng. Package manager ch\xednh l\xe0 th\u1ee9 \u0111\u1ee9ng \u0111\u1eb1ng sau s\u1ef1 t\u1ef1 \u0111\u1ed9ng \u0111\xf3."}),"\n",(0,i.jsx)(e.p,{children:"B\u1ea1n ch\u1ec9 c\u1ea7n nh\u1edb l\xe0 m\u1ed7i package manager \u0111\u1ec1u gi\xfap b\u1ea1n l\xe0m m\u1ed9t vi\u1ec7c duy nh\u1ea5t: t\u1ea3i v\u1ec1, c\xe0i \u0111\u1eb7t ph\u1ea7n m\u1ec1m v\xe0 qu\u1ea3n l\xfd ph\u1ea7n m\u1ec1m (c\u1eadp nh\u1eadt, g\u1ee1 b\u1ecf,...)"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"image",src:c(4265).A+"",width:"699",height:"572"})}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsx)(e.mdxAdmonitionTitle,{children:(0,i.jsx)(e.em,{children:"\u201cQu\u1ea3n l\xfd \u1ee9ng d\u1ee5ng tinh g\u1ecdn d\xe0nh cho ng\u01b0\u1eddi tinh t\u1ebf!\u201d"})})}),"\n",(0,i.jsx)(e.h2,{id:"c\xe1c-lo\u1ea1i-package-manager-tr\xean-linux",children:"C\xe1c lo\u1ea1i package manager tr\xean Linux"}),"\n",(0,i.jsx)(e.h3,{id:"1-distribution-specific-package-managers",children:"1. Distribution-Specific Package Managers"}),"\n",(0,i.jsx)(e.p,{children:"M\u1ed7i distro Linux c\xf3 m\u1ed9t package manager kh\xe1c nhau, v\xed d\u1ee5:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"APT"})," cho Ubuntu, Debian."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"YUM/DNF"})," cho Fedora, CentOS, RHEL."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Pacman"})," cho Arch Linux."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Zypper"})," cho openSUSE."]}),"\n",(0,i.jsx)(e.li,{children:"..."}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["C\xe1c package manager c\u1ee7a ri\xeang t\u1eebng distro nh\u01b0 th\u1ebf n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi l\xe0 ",(0,i.jsx)(e.strong,{children:"Distribution-Specific Package Managers"}),"."]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"2-universal-package-managers",children:"2. Universal Package Managers"}),"\n",(0,i.jsx)(e.p,{children:"\u0110\xe2y l\xe0 c\xe1c package manager c\xf3 th\u1ec3 ho\u1ea1t \u0111\u1ed9ng tr\xean nhi\u1ec1u distro kh\xe1c nhau:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Snap"})," \u2013 Ph\xe1t tri\u1ec3n b\u1edfi Canonical, c\xf3 th\u1ec3 ch\u1ea1y tr\xean h\u1ea7u h\u1ebft c\xe1c Linux distro."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Flatpak"})," \u2013 Thi\u1ebft k\u1ebf \u0111\u1ec3 ch\u1ea1y \u1ee9ng d\u1ee5ng \u0111\u1ed9c l\u1eadp, sandbox tr\xean Linux."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"AppImage"})," \u2013 \u1ee8ng d\u1ee5ng d\u1ea1ng portable, kh\xf4ng c\u1ea7n c\xe0i \u0111\u1eb7t."]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["V\xec kh\xf4ng ph\u1ee5 thu\u1ed9c v\xe0o h\u1ec7 th\u1ed1ng package c\u1ee7a t\u1eebng distro, ch\xfang \u0111\u01b0\u1ee3c g\u1ecdi l\xe0 ",(0,i.jsx)(e.strong,{children:"Universal Package Managers"}),"."]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"3-low-level-package-managers",children:"3. Low-Level Package Managers"}),"\n",(0,i.jsx)(e.p,{children:"\u0110\xe2y l\xe0 nh\u1eefng c\xf4ng c\u1ee5 n\u1ec1n t\u1ea3ng, h\u1ed7 tr\u1ee3 c\xe1c package manager c\u1ea5p cao h\u01a1n:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"dpkg"})," \u2013 C\xf4ng c\u1ee5 qu\u1ea3n l\xfd g\xf3i c\u1ee7a Debian (APT s\u1eed d\u1ee5ng dpkg)."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"rpm"})," \u2013 C\xf4ng c\u1ee5 qu\u1ea3n l\xfd g\xf3i c\u1ee7a Red Hat (YUM/DNF s\u1eed d\u1ee5ng rpm)."]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["C\xe1c package manager n\xe0y ho\u1ea1t \u0111\u1ed9ng \u1edf m\u1ee9c th\u1ea5p h\u01a1n, tr\u1ef1c ti\u1ebfp x\u1eed l\xfd c\xe1c t\u1ec7p ",(0,i.jsx)(e.code,{children:".deb"})," ho\u1eb7c ",(0,i.jsx)(e.code,{children:".rpm"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(e.h3,{id:"4-s\u1eed-d\u1ee5ng-tar-v\xe0-gzip",children:["4. S\u1eed d\u1ee5ng ",(0,i.jsx)(e.code,{children:"tar"})," v\xe0 ",(0,i.jsx)(e.code,{children:"gzip"})]}),"\n",(0,i.jsxs)(e.p,{children:["Kh\xf4ng ph\u1ea3i l\xfac n\xe0o c\u0169ng c\u1ea7n \u0111\u1ebfn c\xe1c package manager ph\u1ee9c t\u1ea1p, \u0111\xf4i khi c\xe1c ",(0,i.jsx)(e.code,{children:"packages"})," hay ",(0,i.jsx)(e.code,{children:"softwares"})," ch\u1ec9 \u0111\u01b0\u1ee3c release trong m\u1ed9t file ",(0,i.jsx)(e.code,{children:".tar.gz"})," ho\u1eb7c ",(0,i.jsx)(e.code,{children:".tar"})," v\xe0 b\u1ea1n ch\u1ec9 c\u1ea7n gi\u1ea3i n\xe9n ra v\xe0 ch\u1ea1y th\xf4i. \u0110\xf3 c\u0169ng l\xe0 l\xfd do m\xe0 ch\xfang m\xecnh \u0111\u1eb7t ",(0,i.jsx)(e.code,{children:"tar"})," v\xe0 ",(0,i.jsx)(e.code,{children:"gzip"})," v\xe0o \u0111\xe2y."]}),"\n",(0,i.jsx)(e.h2,{id:"qu\u1ea3n-l\xfd-package-tr\xean-ubuntudebian-v\u1edbi-apt",children:"Qu\u1ea3n l\xfd package tr\xean Ubuntu/Debian v\u1edbi APT"}),"\n",(0,i.jsx)(e.p,{children:"APT \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng tr\xean c\xe1c h\u1ec7 \u0111i\u1ec1u h\xe0nh d\u1ef1a tr\xean Debian nh\u01b0 Ubuntu."}),"\n",(0,i.jsx)(e.h3,{id:"c\u1eadp-nh\u1eadt-s\u1eeda-l\u1ed7i-v\xe0-g\u1ee1-ph\u1ea7n-m\u1ec1m-v\u1edbi-apt",children:"C\u1eadp nh\u1eadt, s\u1eeda l\u1ed7i, v\xe0 g\u1ee1 ph\u1ea7n m\u1ec1m v\u1edbi APT"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"D\xf9ng package manager \u0111\xfang c\xe1ch gi\xfap ng\u01b0\u1eddi d\xf9ng Linux duy tr\xec h\u1ec7 th\u1ed1ng s\u1ea1ch s\u1ebd, \u1ed5n \u0111\u1ecbnh v\xe0 lu\xf4n c\u1eadp nh\u1eadt!"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Kh\xf4ng ch\u1ec9 l\xe0 c\xe0i \u0111\u1eb7t, package manager c\xf2n c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Fix"})," c\xe1c package b\u1ecb l\u1ed7i."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Update"})," c\xe1c package l\xean phi\xean b\u1ea3n m\u1edbi."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"G\u1ee1 b\u1ecf"})," ph\u1ea7n m\u1ec1m kh\u1ecfi m\xe1y t\xednh."]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"image",src:c(1996).A+"",width:"1000",height:"681"})}),"\n",(0,i.jsx)(e.h3,{id:"m\u1ed9t-s\u1ed1-c\xe2u-l\u1ec7nh-th\u01b0\u1eddng-d\xf9ng-v\u1edbi-apt",children:"M\u1ed9t s\u1ed1 c\xe2u l\u1ec7nh th\u01b0\u1eddng d\xf9ng v\u1edbi APT"}),"\n",(0,i.jsxs)(e.p,{children:["Th\u1eadt ra th\xec c\xf3 kh\xe1 nhi\u1ec1u c\xe2u l\u1ec7nh \u0111\u1ec3 ngh\u1ecbch v\u1edbi apt, c\xe1c b\u1ea1n c\xf3 th\u1ec3 t\u1ef1 kh\xe1m ph\xe1 v\u1edbi command ",(0,i.jsx)(e.code,{children:"man apt"}),", nh\u01b0ng \u1edf \u0111\xe2y Tux s\u1ebd h\u01b0\u1edbng d\u1eabn cho c\xe1c b\u1ea1n m\u1ed9t s\u1ed1 syntax quen thu\u1ed9c th\u01b0\u1eddng d\xf9ng."]}),"\n",(0,i.jsx)(e.h4,{id:"1-c\u1eadp-nh\u1eadt-danh-s\xe1ch-package",children:"1. C\u1eadp nh\u1eadt danh s\xe1ch package"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo apt update\n"})}),"\n",(0,i.jsx)(e.h4,{id:"2-n\xe2ng-c\u1ea5p-t\u1ea5t-c\u1ea3-c\xe1c-package",children:"2. N\xe2ng c\u1ea5p t\u1ea5t c\u1ea3 c\xe1c package"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo apt upgrade -y\n"})}),"\n",(0,i.jsx)(e.h4,{id:"3-c\xe0i-\u0111\u1eb7t-package-m\u1edbi",children:"3. C\xe0i \u0111\u1eb7t package m\u1edbi"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo apt install <package-name>\n"})}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsxs)(e.p,{children:["C\xf3 th\u1ec3 th\xeam ",(0,i.jsx)(e.code,{children:"-y"})," cu\u1ed1i c\xe2u l\u1ec7nh \u0111\u1ec3 skip b\u01b0\u1edbc x\xe1c nh\u1eadn Y/n t\u1eeb package manager, c\xe1i n\xe0y s\u1ebd si\xeau ti\u1ec7n n\u1ebfu c\xe1c b\u1ea1n \u0111ang vi\u1ebft CI hay Dockerfile."]})}),"\n",(0,i.jsx)(e.h4,{id:"4g\u1ee1-b\u1ecf-package",children:"4.G\u1ee1 b\u1ecf package"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo apt remove <package-name>\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Tuy nhi\xean g\u1ee1 c\xe0i \u0111\u1eb7t b\u1eb1ng ",(0,i.jsx)(e.code,{children:"remove"})," v\u1eabn s\u1ebd \u0111\u1ec3 l\u1ea1i m\u1ed9t s\u1ed1 file config, tham kh\u1ea3o c\xe1ch b\xean d\u01b0\u1edbi nha."]}),"\n",(0,i.jsx)(e.h4,{id:"5-x\xf3a-ho\xe0n-to\xe0n-package-v\xe0-c\xe1c-file-config",children:"5. X\xf3a ho\xe0n to\xe0n package v\xe0 c\xe1c file config"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo apt purge <package-name>\n"})}),"\n",(0,i.jsx)(e.h4,{id:"6-c\xe0i-\u0111\u1eb7t-t\u1eeb-file-deb",children:"6. C\xe0i \u0111\u1eb7t t\u1eeb file .deb"}),"\n",(0,i.jsxs)(e.p,{children:["File ",(0,i.jsx)(e.code,{children:".deb"})," c\u0169ng c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c c\xe0i \u0111\u1eb7t v\u1edbi package manager nh\u01b0 ",(0,i.jsx)(e.code,{children:"apt"})," nha, \u0111\u01a1n gi\u1ea3n ch\u1ec9 l\xe0 \u0111\u1eb7t path (\u0111\u01b0\u1eddng d\u1eabn) \u0111\u1ebfn file \u1edf sau ",(0,i.jsx)(e.code,{children:"apt install"})," m\xe0 th\xf4i."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo apt install <absolute-or-relative-path>\n"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["L\u01b0u \xfd r\u1eb1ng, n\u1ebfu ",(0,i.jsx)(e.code,{children:"pwd"})," (current working dir) c\u1ee7a b\u1ea1n \u0111ang c\xf9ng m\u1ed9t n\u01a1i v\u1edbi file ",(0,i.jsx)(e.code,{children:".deb"}),", h\xe3y th\xeam ",(0,i.jsx)(e.code,{children:"./"})," \u1edf tr\u01b0\u1edbc nha, nh\u01b0 v\u1eady ",(0,i.jsx)(e.code,{children:"apt"})," s\u1ebd kh\xf4ng hi\u1ec3u nh\u1ea7m b\u1ea1n \u0111ang c\xe0i m\u1ed9t package n\xe0o d\u1ef1a tr\xean t\xean c\u1ee7a package \u0111\xf3."]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"V\xed d\u1ee5: C\xe0i \u0111\u1eb7t tr\xecnh duy\u1ec7t Google Chrome:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb\n\nsudo apt install ./google-chrome-stable_current_amd64.deb\n"})}),"\n",(0,i.jsx)(e.h4,{id:"7-c\xe0i-\u0111\u1eb7t-c\xe1c-dependencies-b\u1ecb-thi\u1ebfu",children:"7. C\xe0i \u0111\u1eb7t c\xe1c dependencies b\u1ecb thi\u1ebfu"}),"\n",(0,i.jsxs)(e.p,{children:["N\u1ebfu g\u1eb7p tr\u01b0\u1eddng h\u1ee3p b\u1ecb thi\u1ebfu dependencies khi c\xe0i package, h\xe3y ch\u1ea1y l\u1ec7nh sau \u0111\u1ec3 ",(0,i.jsx)(e.code,{children:"apt"})," t\u1ef1 fill l\u1ea1i cho b\u1ea1n:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo apt install -f\n"})}),"\n",(0,i.jsx)(e.h3,{id:"th\xeam-apt-repository-m\u1edbi-v\xe0-c\xe0i-\u0111\u1eb7t-ch\xfang",children:"Th\xeam APT repository m\u1edbi v\xe0 c\xe0i \u0111\u1eb7t ch\xfang"}),"\n",(0,i.jsx)(e.p,{children:"APT kh\xf4ng ch\u1ec9 gi\xfap b\u1ea1n c\xe0i \u0111\u1eb7t package t\u1eeb kho m\u1eb7c \u0111\u1ecbnh m\xe0 c\xf2n cho ph\xe9p b\u1ea1n th\xeam repository b\xean ngo\xe0i \u0111\u1ec3 c\xe0i \u0111\u1eb7t c\xe1c ph\u1ea7n m\u1ec1m kh\xf4ng c\xf3 s\u1eb5n trong h\u1ec7 th\u1ed1ng."}),"\n",(0,i.jsx)(e.h4,{id:"1-th\xeam-repository-m\u1edbi",children:"1. Th\xeam repository m\u1edbi"}),"\n",(0,i.jsx)(e.p,{children:"V\xed d\u1ee5, n\u1ebfu b\u1ea1n mu\u1ed1n c\xe0i \u0111\u1eb7t m\u1ed9t ph\u1ea7n m\u1ec1m t\u1eeb PPA (Personal Package Archive), b\u1ea1n c\xf3 th\u1ec3 th\xeam n\xf3 b\u1eb1ng l\u1ec7nh:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo add-apt-repository ppa:obsproject/obs-studio\n"})}),"\n",(0,i.jsx)(e.p,{children:"Sau \u0111\xf3, c\u1eadp nh\u1eadt danh s\xe1ch package \u0111\u1ec3 nh\u1eadn di\u1ec7n repository m\u1edbi r\u1ed3i c\xe0i n\xf3 th\xf4i:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo apt update\nsudo apt install -y obs-studio\n"})}),"\n",(0,i.jsx)(e.h4,{id:"2-ki\u1ec3m-tra-package-t\u1eeb-repository-m\u1edbi",children:"2. Ki\u1ec3m tra package t\u1eeb repository m\u1edbi"}),"\n",(0,i.jsx)(e.p,{children:"Sau khi th\xeam repository, b\u1ea1n c\xf3 th\u1ec3 t\xecm ki\u1ebfm package b\u1eb1ng c\xe1ch:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo apt search <package-name>\n"})}),"\n",(0,i.jsx)(e.p,{children:"V\xed d\u1ee5:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo apt search obs-studio\n"})}),"\n",(0,i.jsx)(e.h4,{id:"3-x\xf3a-repository-n\u1ebfu-kh\xf4ng-c\u1ea7n-n\u1eefa",children:"3. X\xf3a repository n\u1ebfu kh\xf4ng c\u1ea7n n\u1eefa"}),"\n",(0,i.jsx)(e.p,{children:"N\u1ebfu b\u1ea1n mu\u1ed1n x\xf3a repository \u0111\xe3 th\xeam, b\u1ea1n c\xf3 th\u1ec3 s\u1eed d\u1ee5ng:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo add-apt-repository --remove ppa:obsproject/obs-studio\nsudo apt update\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Ho\u1eb7c b\u1ea1n c\xf3 th\u1ec3 ch\u1ec9nh s\u1eeda tr\u1ef1c ti\u1ebfp file ",(0,i.jsx)(e.code,{children:"/etc/apt/sources.list"})," ho\u1eb7c x\xf3a file t\u01b0\u01a1ng \u1ee9ng trong ",(0,i.jsx)(e.code,{children:"/etc/apt/sources.list.d/"}),"."]}),"\n",(0,i.jsx)(e.h2,{id:"qu\u1ea3n-l\xfd-package-v\u1edbi-dpkg",children:"Qu\u1ea3n l\xfd Package V\u1edbi dpkg"}),"\n",(0,i.jsxs)(e.p,{children:["APT l\xe0 m\u1ed9t package manager built on top c\u1ee7a ",(0,i.jsx)(e.code,{children:"dpkg"}),", nh\u01b0ng n\u1ebfu b\u1ea1n c\xf3 m\u1ed9t file ",(0,i.jsx)(e.code,{children:".deb"})," v\xe0 mu\u1ed1n c\xe0i \u0111\u1eb7t tr\u1ef1c ti\u1ebfp m\xe0 kh\xf4ng qua APT, ",(0,i.jsx)(e.code,{children:"dpkg"})," s\u1ebd gi\xfap b\u1ea1n l\xe0m \u0111i\u1ec1u \u0111\xf3."]}),"\n",(0,i.jsx)(e.h3,{id:"1-c\xe0i-\u0111\u1eb7t-package-t\u1eeb-file-deb",children:"1. C\xe0i \u0111\u1eb7t package t\u1eeb file .deb"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo dpkg -i <package-name>.deb\n"})}),"\n",(0,i.jsx)(e.p,{children:"V\xed d\u1ee5, n\u1ebfu b\u1ea1n t\u1ea3i v\u1ec1 file c\xe0i \u0111\u1eb7t c\u1ee7a Google Chrome:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo dpkg -i google-chrome-stable_current_amd64.deb\n"})}),"\n",(0,i.jsx)(e.p,{children:"N\u1ebfu g\u1eb7p l\u1ed7i thi\u1ebfu dependencies, b\u1ea1n c\xf3 th\u1ec3 s\u1eeda b\u1eb1ng l\u1ec7nh:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo apt install -f\n"})}),"\n",(0,i.jsx)(e.h3,{id:"2-ki\u1ec3m-tra-package-\u0111\xe3-c\xe0i",children:"2. Ki\u1ec3m tra package \u0111\xe3 c\xe0i"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"dpkg -l | grep <package-name>\n"})}),"\n",(0,i.jsx)(e.h3,{id:"3-g\u1ee1-c\xe0i-\u0111\u1eb7t-package",children:"3. G\u1ee1 c\xe0i \u0111\u1eb7t package"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo dpkg -r <package-name>\n"})}),"\n",(0,i.jsxs)(e.h2,{id:"s\u1eed-d\u1ee5ng-tar-v\xe0-gzip-\u0111\u1ec3-c\xe0i-\u0111\u1eb7t-package",children:["S\u1eed d\u1ee5ng ",(0,i.jsx)(e.code,{children:"tar"})," v\xe0 ",(0,i.jsx)(e.code,{children:"gzip"})," \u0111\u1ec3 c\xe0i \u0111\u1eb7t package"]}),"\n",(0,i.jsxs)(e.h3,{id:"1-gi\u1ea3i-n\xe9n-file-tar",children:["1. Gi\u1ea3i n\xe9n file ",(0,i.jsx)(e.code,{children:".tar"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u0110\u1ec3 gi\u1ea3i n\xe9n m\u1ed9t file ",(0,i.jsx)(e.code,{children:".tar"}),", h\xe3y th\u1eed l\u1ec7nh sau:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"tar -xf mytarfile.tar\n"})}),"\n",(0,i.jsx)(e.p,{children:"Trong \u0111\xf3:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"-x"})," l\xe0 l\u1ec7nh extract."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"-f"})," d\xf9ng \u0111\u1ec3 ch\u1ec9 \u0111\u1ecbnh file."]}),"\n"]}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:["C\xf3 th\u1ec3 th\xeam ",(0,i.jsx)(e.code,{children:"-v"})," (verbose) \u0111\u1ec3 hi\u1ec3n th\u1ecb chi ti\u1ebft qu\xe1 tr\xecnh gi\u1ea3i n\xe9n, bao g\u1ed3m dung l\u01b0\u1ee3ng, s\u1ed1 l\u01b0\u1ee3ng file, th\u1eddi gian, v.v."]})}),"\n",(0,i.jsxs)(e.h3,{id:"2-gi\u1ea3i-n\xe9n-file-targz",children:["2. Gi\u1ea3i n\xe9n file ",(0,i.jsx)(e.code,{children:".tar.gz"})]}),"\n",(0,i.jsxs)(e.p,{children:["Nh\u01b0ng n\u1ebfu file \u0111\u01b0\u1ee3c n\xe9n c\xf3 \u0111u\xf4i ",(0,i.jsx)(e.code,{children:".tar.gz"}),", c\xf3 th\u1ec3 hi\u1ec3u \u0111\u01a1n gi\u1ea3n, c\xe1c t\u1ec7p \u0111\u01b0\u1ee3c compress b\u1eb1ng ",(0,i.jsx)(e.code,{children:"gzip"})," tr\u01b0\u1edbc, sau \u0111\xf3 \u0111\u01b0\u1ee3c \u0111\u1eb7t v\xe0o m\u1ed9t file ",(0,i.jsx)(e.code,{children:".tar"})," \u0111\u1ec3 t\u1ea1o th\xe0nh ",(0,i.jsx)(e.code,{children:".tar.gz"}),", nh\u01b0 n\xe0y dung l\u01b0\u1ee3ng s\u1ebd nh\u1ecf h\u01a1n so v\u1edbi ",(0,i.jsx)(e.code,{children:".tar"})," nhi\u1ec1u ch\xfat. Nh\u01b0ng ta kh\xf4ng c\u1ea7n h\u1ecdc th\xeam syntax c\u1ee7a ",(0,i.jsx)(e.code,{children:"gzip"})," v\xec b\u1ea3n th\xe2n ",(0,i.jsx)(e.code,{children:"tar"})," \u0111\xe3 t\xedch h\u1ee3p s\u1eb5n r\u1ed3i."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Tar GZ Compare",src:c(7135).A+"",width:"517",height:"392"})}),"\n",(0,i.jsxs)(e.p,{children:["Gi\u1ea3i n\xe9n c\u0169ng r\u1ea5t \u0111\u01a1n gi\u1ea3n th\xf4i, ch\u1ec9 c\u1ea7n th\xeam ",(0,i.jsx)(e.code,{children:"-z"})," v\xe0o l\u1ec7nh extract l\xe0 xong:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"tar -xzf mytarfile.tar.gz\n"})}),"\n",(0,i.jsxs)(e.p,{children:["N\u1ebfu b\u1ea1n c\u1ea7n c\xe2u th\u1ea7n ch\xfa, h\xe3y nh\u1edb: e",(0,i.jsx)(e.strong,{children:"X"}),"tract all ",(0,i.jsx)(e.strong,{children:"Z"}),"ee ",(0,i.jsx)(e.strong,{children:"F"}),"iles!"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u0110\u1ecdc th\xeam v\u1ec1 ",(0,i.jsx)(e.code,{children:"gzip"}),", l\xe0 ch\u01b0\u01a1ng tr\xecnh \u0111\u1ec3 n\xe9n file v\u1edbi \u0111u\xf4i ",(0,i.jsx)(e.code,{children:".gz"})," ",(0,i.jsx)(e.a,{href:"https://www.gnu.org/software/gzip/",children:"\u1edf \u0111\xe2y"}),"."]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"3-n\xe9n-file-v\xe0-th\u01b0-m\u1ee5c",children:"3. N\xe9n file v\xe0 th\u01b0 m\u1ee5c"}),"\n",(0,i.jsxs)(e.p,{children:["Trong qu\xe1 tr\xecnh ph\xe1t tri\u1ec3n software, \u0111\xf4i khi b\u1ea1n s\u1ebd c\u1ea7n release m\u1ed9t phi\xean b\u1ea3n m\u1edbi, v\xe0 \u0111\u1ec3 ng\u01b0\u1eddi d\xf9ng d\u1ec5 d\xe0ng c\xe0i \u0111\u1eb7t, b\u1ea1n s\u1ebd \u0111\xf3ng g\xf3i n\xf3 v\xe0o m\u1ed9t file ",(0,i.jsx)(e.code,{children:".tar.gz"})," ho\u1eb7c ",(0,i.jsx)(e.code,{children:".tar"})," \u0111\u1ec3 ng\u01b0\u1eddi d\xf9ng ch\u1ec9 c\u1ea7n gi\u1ea3i n\xe9n v\xe0 ch\u1ea1y th\xf4i. C\u0169ng t\u01b0\u01a1ng t\u1ef1 v\u1edbi extract nh\u01b0 ban n\xe3y, th\xec b\xe2y gi\u1edd ta c\u1ea7n:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"tar -czf mytarfile.tar.gz myfolder\n"})}),"\n",(0,i.jsx)(e.p,{children:"Trong \u0111\xf3:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"-c"})," l\xe0 l\u1ec7nh create."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"-z"})," d\xf9ng \u0111\u1ec3 compress file b\u1eb1ng ",(0,i.jsx)(e.code,{children:"gzip"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"-f"})," d\xf9ng \u0111\u1ec3 ch\u1ec9 \u0111\u1ecbnh file."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"myfolder"})," l\xe0 th\u01b0 m\u1ee5c c\u1ea7n n\xe9n."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"mytarfile.tar.gz"})," l\xe0 t\xean file sau khi n\xe9n."]}),"\n"]}),"\n",(0,i.jsx)(e.admonition,{title:"N\xe9n nhi\u1ec1u file hay folder l\u1ebb",type:"note",children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"tar -czf mytarfile.tar.gz mycoolfile1 mycoolfile2 mycoolfolder\n"})})}),"\n",(0,i.jsxs)(e.p,{children:["\xc0 \u1eddm, b\u1ecf ",(0,i.jsx)(e.code,{children:"-z"})," \u0111i th\xec n\xf3 ch\u1ec9 n\xe9n b\u1eb1ng ",(0,i.jsx)(e.code,{children:"tar"})," th\xf4i, kh\xf4ng n\xe9n b\u1eb1ng ",(0,i.jsx)(e.code,{children:"gzip"})," n\u1eefa, nh\u01b0ng m\xe0 dung l\u01b0\u1ee3ng s\u1ebd l\u1edbn h\u01a1n nhi\u1ec1u l\u1ea7n \u0111\xf3."]}),"\n",(0,i.jsx)(e.h2,{id:"qu\u1ea3n-l\xfd-package-b\xean-ngo\xe0i-v\u1edbi-snap-v\xe0-flatpak",children:"Qu\u1ea3n l\xfd Package B\xean Ngo\xe0i V\u1edbi Snap v\xe0 Flatpak"}),"\n",(0,i.jsx)(e.p,{children:"Kh\xf4ng ph\u1ea3i app n\xe0o c\u0169ng c\xf3 s\u1eb5n trong kho c\u1ee7a APT, v\xec th\u1ebf Snap v\xe0 Flatpak ra \u0111\u1eddi \u0111\u1ec3 gi\xfap b\u1ea1n c\xe0i \u0111\u1eb7t d\u1ec5 d\xe0ng h\u01a1n, nh\u01b0ng c\u0169ng v\xec kho \u1ee9ng d\u1ee5ng c\u1ee7a n\xf3 build t\u1eeb community n\xean kh\xf4ng ph\u1ea3i app n\xe0o c\u0169ng l\xe0 official v\xe0 ho\u1ea1t \u0111\u1ed9ng \u1ed5n \u0111\u1ecbnh."}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u0110\u01b0\u1ee3c c\xe1i l\xe0 n\xf3 r\u1ea5t \u0111a d\u1ea1ng v\xe0 v\xf4 t\u01b0 app tr\xean \u0111\xe2y lu\xf4n"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"1-c\xe0i-\u0111\u1eb7t-v\xe0-s\u1eed-d\u1ee5ng-snap",children:"1. C\xe0i \u0111\u1eb7t v\xe0 s\u1eed d\u1ee5ng Snap"}),"\n",(0,i.jsx)(e.p,{children:"Snap \u0111\u01b0\u1ee3c ph\xe1t tri\u1ec3n b\u1edfi Canonical v\xe0 c\xf3 th\u1ec3 ch\u1ea1y tr\xean nhi\u1ec1u distro Linux."}),"\n",(0,i.jsxs)(e.admonition,{type:"info",children:[(0,i.jsx)(e.p,{children:"N\u1ebfu trong m\xe1y ch\u01b0a c\xf3 snap, th\xec m\xecnh c\xe0i snap th\xf4i nghen:"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo apt install snapd\n"})})]}),"\n",(0,i.jsx)(e.p,{children:"C\xe0i \u0111\u1eb7t m\u1ed9t package v\u1edbi Snap:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo snap install spotify\n"})}),"\n",(0,i.jsx)(e.p,{children:"G\u1ee1 c\xe0i \u0111\u1eb7t:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo snap remove spotify\n"})}),"\n",(0,i.jsx)(e.h3,{id:"2-c\xe0i-\u0111\u1eb7t-v\xe0-s\u1eed-d\u1ee5ng-flatpak",children:"2. C\xe0i \u0111\u1eb7t v\xe0 s\u1eed d\u1ee5ng Flatpak"}),"\n",(0,i.jsx)(e.p,{children:"Flatpak l\xe0 m\u1ed9t h\u1ec7 th\u1ed1ng sandbox cho \u1ee9ng d\u1ee5ng Linux. Tr\u01b0\u1edbc ti\xean, c\u1ea7n c\xe0i \u0111\u1eb7t Flatpak:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo apt install flatpak\n"})}),"\n",(0,i.jsx)(e.p,{children:"Th\xeam repository Flathub (n\u01a1i ch\u1ee9a h\u1ea7u h\u1ebft package Flatpak):"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo\n"})}),"\n",(0,i.jsx)(e.p,{children:"C\xe0i \u0111\u1eb7t m\u1ed9t \u1ee9ng d\u1ee5ng, v\xed d\u1ee5 VLC:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"flatpak install flathub org.videolan.VLC\n"})}),"\n",(0,i.jsx)(e.p,{children:"Ch\u1ea1y \u1ee9ng d\u1ee5ng:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"flatpak run org.videolan.VLC\n"})}),"\n",(0,i.jsx)(e.p,{children:"G\u1ee1 c\xe0i \u0111\u1eb7t:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"flatpak uninstall org.videolan.VLC\n"})}),"\n",(0,i.jsx)(e.h2,{id:"appimage---\u1ee9ng-d\u1ee5ng-portable-kh\xf4ng-c\u1ea7n-c\xe0i-\u0111\u1eb7t",children:"AppImage - \u1ee8ng D\u1ee5ng Portable Kh\xf4ng C\u1ea7n C\xe0i \u0110\u1eb7t"}),"\n",(0,i.jsxs)(e.p,{children:["AppImage l\xe0 \u0111\u1ecbnh d\u1ea1ng gi\xfap b\u1ea1n ch\u1ea1y \u1ee9ng d\u1ee5ng m\xe0 kh\xf4ng c\u1ea7n c\xe0i \u0111\u1eb7t. Ch\u1ec9 c\u1ea7n t\u1ea3i v\u1ec1, c\u1ea5p quy\u1ec1n th\u1ef1c thi cho file v\xe0 ch\u1ea1y. Th\u1eb1ng n\xe0y nh\u01b0 ki\u1ec3u m\u1ea5y app portable 1 file ",(0,i.jsx)(e.code,{children:".exe"})," c\u1ee7a Windows \u1ea5y, v\xe0 ",(0,i.jsx)(e.code,{children:"unikey"})," l\xe0 m\u1ed9t v\xed d\u1ee5 \u0111i\u1ec3n h\xecnh."]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u0110\u1ebfn b\u1ed1 t\u1ed5 c\u1ee7a Linux c\u0169ng ph\u1ea3i d\xe0nh m\u1ed9t l\u1eddi khen cho AppImage v\xec t\xednh ti\u1ec7n d\u1ee5ng c\u1ee7a n\xf3:"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"image",src:c(6574).A+"",width:"917",height:"562"})}),"\n",(0,i.jsx)(e.h4,{id:"1-t\u1ea3i-appimage",children:"1. T\u1ea3i AppImage"}),"\n",(0,i.jsx)(e.p,{children:"V\xed d\u1ee5, t\u1ea3i Balena Etcher:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"wget https://github.com/balena-io/etcher/releases/download/v1.7.9/balenaEtcher-1.7.9-ia32.AppImage\n"})}),"\n",(0,i.jsx)(e.h4,{id:"2-c\u1ea5p-quy\u1ec1n-th\u1ef1c-thi",children:"2. C\u1ea5p quy\u1ec1n th\u1ef1c thi"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"chmod +x ./balenaEtcher-1.7.9-ia32.AppImage\n"})}),"\n",(0,i.jsx)(e.h4,{id:"3-ch\u1ea1y-\u1ee9ng-d\u1ee5ng",children:"3. Ch\u1ea1y \u1ee9ng d\u1ee5ng"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"./balenaEtcher-1.7.9-ia32.AppImage\n"})}),"\n",(0,i.jsx)(e.p,{children:"D\xf9ng AppImage s\u1ebd r\u1ea5t ti\u1ec7n \u1edf ch\u1ed7 l\xe0 kh\xf4ng c\u1ea7n c\xe0i \u0111\u1eb7t, kh\xf4ng c\u1ea7n ph\u1ee5 thu\u1ed9c v\xe0o dependencies, ch\u1ec9 c\u1ea7n t\u1ea3i v\u1ec1 v\xe0 ch\u1ea1y! \ud83d\ude80"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["Tham kh\u1ea3o th\xeam \u1edf \u0111\xe2y nh\xe9 ",(0,i.jsx)(e.a,{href:"https://appimage.org/",children:"appimage.org"})]}),"\n"]})]})}function g(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},6574:(n,e,c)=>{c.d(e,{A:()=>a});const a=c.p+"assets/images/day6-appimage-linus-7488ed8b673c431119445f2a5c8da2ac.png"},2715:(n,e,c)=>{c.d(e,{A:()=>a});const a=c.p+"assets/images/day6-cover-d9019dd50d2f76f0bec8a43637563301.png"},1996:(n,e,c)=>{c.d(e,{A:()=>a});const a=c.p+"assets/images/day6-memeuninstall-af3122404e76d910f71341ea6d22233f.png"},4265:(n,e,c)=>{c.d(e,{A:()=>a});const a=c.p+"assets/images/day6-memewindows-12a4faabb0eeef3d5531a20352ab9ac1.png"},7135:(n,e,c)=>{c.d(e,{A:()=>a});const a=c.p+"assets/images/day6-tar-gz-compare-7d3c202989ef87510a3d5dd1fb9590bf.png"},8453:(n,e,c)=>{c.d(e,{R:()=>h,x:()=>s});var a=c(6540);const i={},l=a.createContext(i);function h(n){const e=a.useContext(l);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:h(n.components),a.createElement(l.Provider,{value:e},n.children)}}}]);