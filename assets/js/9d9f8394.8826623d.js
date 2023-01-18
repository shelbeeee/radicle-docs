"use strict";(self.webpackChunkradicle_docs=self.webpackChunkradicle_docs||[]).push([[360],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8037:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return g},default:function(){return C},frontMatter:function(){return y},metadata:function(){return b},toc:function(){return w}});var r=n(3117),a=n(7294),o=n(3905),i=n(4334),l=n(2389),s=n(7392),u=n(7094),p=n(2466),c="tabList__CuJ",d="tabItem_LNqP";function h(e){var t;const{lazy:n,block:o,defaultValue:l,values:h,groupId:m,className:f}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=h??k.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,s.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===l?l:l??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,u.U)(),[N,C]=(0,a.useState)(b),S=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=m){const e=v[m];null!=e&&e!==N&&y.some((t=>t.value===e))&&C(e)}const I=e=>{const t=e.currentTarget,n=S.indexOf(t),r=y[n].value;r!==N&&(O(t),C(r),null!=m&&w(m,String(r)))},T=e=>{var t;let n=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;n=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;n=S[t]??S[S.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},f)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>S.push(e),onKeyDown:T,onClick:I},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,a.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return a.createElement(h,(0,r.Z)({key:String(t)},e))}var f="tabItem_Ymn6";function k(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(f,r),hidden:n},t)}const y={id:"troubleshooting",title:"Troubleshooting"},g=void 0,b={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"As the team behind the various protocols and projects that utilize the Radicle network, we want you, the user, to have",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/troubleshooting",draft:!1,editUrl:"https://github.com/radicle-dev/radicle-docs/blob/master/docs/troubleshooting.md",tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"docsSidebar",previous:{title:"Migrate from GitHub to Radicle",permalink:"/migrate-github-radicle"},next:{title:"Create a project",permalink:"/using-radicle/create"}},v={},w=[{value:"I ran into a issue \u2014 where can I report it?",id:"i-ran-into-a-issue--where-can-i-report-it",level:2},{value:"Installation prerequisites for <code>rad</code>",id:"installation-prerequisites-for-rad",level:2},{value:"Issues with <code>ssh-agent</code>",id:"issues-with-ssh-agent",level:2},{value:"Unsupported Git version",id:"unsupported-git-version",level:2},{value:"SLOP failure",id:"slop-failure",level:2},{value:"Install Radicle CLI on Apple Silicon",id:"install-radicle-cli-on-apple-silicon",level:2},{value:"Install Radicle on Windows with WSL",id:"install-radicle-on-windows-with-wsl",level:2}],N={toc:w};function C(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As the team behind the various protocols and projects that utilize the Radicle network, we want you, the user, to have\nthe best experience possible. Also, as the developers, we know that there will be bugs and errors. "),(0,o.kt)("p",null,"To help consolidate these diametrically opposed pieces of knowledge, we will try and document any of the errors that we\nare aware of and provide some troubleshooting advice."),(0,o.kt)("h2",{id:"i-ran-into-a-issue--where-can-i-report-it"},"I ran into a issue \u2014 where can I report it?"),(0,o.kt)("p",null,"We suggest you send your report through the ",(0,o.kt)("strong",{parentName:"p"},"#support")," channel on our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/j2HZCBDUvF"},"Discord server"),"\nor in the ",(0,o.kt)("strong",{parentName:"p"},"Support")," category of our ",(0,o.kt)("a",{parentName:"p",href:"https://radicle.community"},"forum"),". A member of the Radicle team will try resolve\nyour issue right away, and if they can't, work with you on creating a formal issue/request."),(0,o.kt)("p",null,"If you know which Radicle project is most relevant to your issue, you can also create an issue in the appropriate\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/radicle-dev"},"repository on GitHub"),"."),(0,o.kt)("h2",{id:"installation-prerequisites-for-rad"},"Installation prerequisites for ",(0,o.kt)("inlineCode",{parentName:"h2"},"rad")),(0,o.kt)("p",null,"If you have trouble with ",(0,o.kt)("a",{parentName:"p",href:"https://radicle.xyz/get-started.html"},"installing the Radicle CLI"),", make sure you have\ninstalled the correct versions of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Git: ",(0,o.kt)("inlineCode",{parentName:"li"},"2.34.0")," or later"),(0,o.kt)("li",{parentName:"ul"},"OpenSSH: ",(0,o.kt)("inlineCode",{parentName:"li"},"8.0")," or later")),(0,o.kt)("h2",{id:"issues-with-ssh-agent"},"Issues with ",(0,o.kt)("inlineCode",{parentName:"h2"},"ssh-agent")),(0,o.kt)("p",null,"The following two errors are related to your cryptographic keys, which Radicle uses to authenticate your identity, not\nbeing properly managed by ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh-agent"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Fatal: the key is not in the ssh-agent, consider adding it via lnk profile ssh add\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'error: Load key "/tmp/.git_signing_key_tmp....": Invalid format\n')),(0,o.kt)("p",null,"The most likely issue is that your system isn't running ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh-agent"),". After you get ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh-agent")," running using one of the two methods below, based on your OS, run ",(0,o.kt)("inlineCode",{parentName:"p"},"rad auth")," once more to ensure your keys are properly added."),(0,o.kt)(m,{mdxType:"Tabs"},(0,o.kt)(k,{value:"macos",label:"macOS",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"lnk profile ssh add\nrad auth\n"))),(0,o.kt)(k,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'eval "$(ssh-agent -s)"\nrad auth\n')))),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"rad")," successfully loads a key into ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh-agent"),", it outputs the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ok Unlocking...\nok Radicle key added to ssh-agent\nok Signing key configured in git\n")),(0,o.kt)("h2",{id:"unsupported-git-version"},"Unsupported Git version"),(0,o.kt)("p",null,"If you see the below error when using ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," after initializing a project, you're most likely running a version of Git\nthat's incompatible with ",(0,o.kt)("inlineCode",{parentName:"p"},"rad"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"error: unsupported value for gpg.format\n")),(0,o.kt)("p",null,"See our ",(0,o.kt)("a",{parentName:"p",href:"#installation-prerequisites-for-rad"},"prerequisites")," for the minimum Git version number you need to run ",(0,o.kt)("inlineCode",{parentName:"p"},"rad"),"\nand access the Radicle network. "),(0,o.kt)("h2",{id:"slop-failure"},"SLOP failure"),(0,o.kt)("p",null,"When Git pushes a signed commit to a remote repository, it sends a nonce ","\u2014"," an arbitrary number only used once ","\u2014"," based on your system time as a security measure. If that nonce doesn't match with what the remote system expects, Git outputs this warning:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"remote: Running pre-receive hook...        \nremote: Verifying certificate...        \nremote: Received `SLOP` certificate status, please re-submit signed push to request new certificate        \nremote: Error: failed certification verification\n")),(0,o.kt)("p",null,"There are two solutions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Push your code again using ",(0,o.kt)("inlineCode",{parentName:"li"},"rad push"),"."),(0,o.kt)("li",{parentName:"ol"},"Check your system time for discrepancies.")),(0,o.kt)("h2",{id:"install-radicle-cli-on-apple-silicon"},"Install Radicle CLI on Apple Silicon"),(0,o.kt)("p",null,"Previously, installing ",(0,o.kt)("inlineCode",{parentName:"p"},"rad")," on M1/M2-based systems required you to install the x86_64 version of Homebrew."),(0,o.kt)("p",null,"As of September 2022, you can install Radicle using our formulae repository whether you're on Apple Silicon or an older\nIntel-based system. If you're on Apple Silicon, ",(0,o.kt)("inlineCode",{parentName:"p"},"rad")," will not run natively, but it will work!"),(0,o.kt)("p",null,"See our ",(0,o.kt)("a",{parentName:"p",href:"https://radicle.xyz/get-started.html"},"installation instructions")," for the Homebrew method."),(0,o.kt)("h2",{id:"install-radicle-on-windows-with-wsl"},"Install Radicle on Windows with WSL"),(0,o.kt)("p",null,"This installation method isn't officially supported by the Radicle team, but you can try it at your own risk! "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Our thanks go to the folks behind ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cytechmobile/radicle-jetbrains-plugin/"},"radicle-jetbrains-plugin"),",\nwho first discovered this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cytechmobile/radicle-jetbrains-plugin/blob/main/README.md"},"method")," of\ninstalling ",(0,o.kt)("inlineCode",{parentName:"p"},"rad")," on WSL and Windows.")),(0,o.kt)("p",null,"Assuming you already have ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install"},"WSL installed"),", follow the\n",(0,o.kt)("strong",{parentName:"p"},"Debian/Ubuntu")," instructions on our ",(0,o.kt)("a",{parentName:"p",href:"https://radicle.xyz/get-started.html"},"get started guide"),"."),(0,o.kt)("p",null,"Check what version of Git your WSL installation has with ",(0,o.kt)("inlineCode",{parentName:"p"},"git --version"),". If it's lower than ",(0,o.kt)("inlineCode",{parentName:"p"},"2.34.0"),", you need to\nupdate, and if you're using the WSL default ","\u2014"," Ubuntu 20.04 ","\u2014"," you can add the ",(0,o.kt)("a",{parentName:"p",href:"https://launchpad.net/~git-core/+archive/ubuntu/ppa"},(0,o.kt)("inlineCode",{parentName:"a"},"git-core"),"\nPPA")," to your system to supply a newer version of Git."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo add-apt-repository ppa:git-core/ppa\nsudo apt update\nsudo apt install git\n")),(0,o.kt)("p",null,"With the appropriate version of Git installed, run ",(0,o.kt)("inlineCode",{parentName:"p"},"rad auth")," to create your identity."),(0,o.kt)("p",null,"But to properly load and manage your identity's keys, you need an SSH agent. Install\n",(0,o.kt)("a",{parentName:"p",href:"https://manpages.ubuntu.com/manpages/xenial/man1/keychain.1.html"},"keychain")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo apt install keychain"),", then open\nyour ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," file. Add the following two lines:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"eval `keychain --quiet --eval --agents ssh`;\nexport WSLENV=$WSLENV:SSH_AGENT_PID:SSH_AUTH_SOCK;\n")),(0,o.kt)("p",null,"Save the file, exit WSL, and relaunch."),(0,o.kt)("p",null,"You can now navigate to an existing Git repository and run ",(0,o.kt)("inlineCode",{parentName:"p"},"rad init")," to create a new Radicle project, or\n",(0,o.kt)("a",{parentName:"p",href:"/using-radicle/clone"},"clone")," an existing project with ",(0,o.kt)("inlineCode",{parentName:"p"},"rad clone"),"."))}C.isMDXComponent=!0}}]);