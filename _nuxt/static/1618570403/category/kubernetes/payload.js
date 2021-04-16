__NUXT_JSONP__("/category/kubernetes", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S){return {data:[{posts:[{slug:"ignore_differences_in_argocd",title:"🦑 Ignore differences in ArgoCD",desc:"Sometimes you simply want it green instead of yellow",date:new Date(1606003200000),categories:[y],toc:[{id:B,depth:r,text:C},{id:D,depth:r,text:E},{id:F,depth:r,text:G},{id:H,depth:I,text:"Ignore differences in an object"},{id:J,depth:I,text:"Ignore objects as differences"},{id:K,depth:r,text:L}],body:{type:M,children:[{type:b,tag:s,props:{id:B},children:[{type:b,tag:e,props:{href:"#a-difference",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Imagine the day you have your full gitops-process up and running and joyfully login to ArgoCD to see all running with green icons and then... there it is, a yellow icon indicating your app has drifted off from your gitops repository."}]},{type:a,value:c},{type:b,tag:t,props:{src:"\u002Fimages\u002Fargo_oos.png",alt:"ArgoCD out of sync"},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"But you didn't change anything?"}]},{type:a,value:c},{type:b,tag:s,props:{id:D},children:[{type:b,tag:e,props:{href:"#analyze-the-difference",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Luckily it's pretty easy to analyze the difference in an ArgoCD app. Just click on your application and the detail-view opens.\nIn my case this came into my view:"}]},{type:a,value:c},{type:b,tag:t,props:{src:N,alt:z},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"And that explained it pretty quick! Sure I wanted to release a new version of the awesome-app. The code change which got pushed to the git repository triggered a new pipelinerun of the build-app pipeline - so far so good - but the new pipelinerun object "},{type:b,tag:f,props:{},children:[{type:a,value:"build-app-xnhzw"}]},{type:a,value:" doesn't exist in the gitops repository!"}]},{type:a,value:c},{type:b,tag:s,props:{id:F},children:[{type:b,tag:e,props:{href:"#a-note-on-argocd-differences",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"In general, we can divide out-of-sync differences into two groups:"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:O,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"differences "},{type:b,tag:f,props:{},children:[{type:a,value:P}]},{type:a,value:" an object: That's the case if you have an object defined in a manifest and now some attributes get changed or added without any changes in your gitops repostory"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:O,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"whole objects "},{type:b,tag:f,props:{},children:[{type:a,value:Q}]},{type:a,value:" differences: This is the case if someone adds new objects in your namespace where your app is located and managed by ArgoCD"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"With ArgoCD you can solve both cases just by changing a few manifests ;-)"}]},{type:a,value:c},{type:b,tag:R,props:{id:H},children:[{type:b,tag:e,props:{href:"#ignore-differences-in-an-object",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"Ignore differences "},{type:b,tag:f,props:{},children:[{type:a,value:P}]},{type:a,value:" an object"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you want to ignore certain differences which may occur in a specific object then you can set an annotation in this object as described in the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fargo-cd.readthedocs.io\u002Fen\u002Fstable\u002Fuser-guide\u002Fcompare-options\u002F#ignoring-resources-that-are-extraneous",rel:[u,v,w],target:x},children:[{type:a,value:"argocd-documentation"}]},{type:a,value:":"}]},{type:a,value:c},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,p]},children:[{type:b,tag:q,props:{},children:[{type:a,value:"metadata:\n  annotations:\n    argocd.argoproj.io\u002Fcompare-options: IgnoreExtraneous\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It gets more interesting if you want to ignore certain attributes in all objects or in all objects of a certain kind of your app.\nArgoCD also has a solution for this and this gets explained in their "},{type:b,tag:e,props:{href:"https:\u002F\u002Fargo-cd.readthedocs.io\u002Fen\u002Fstable\u002Fuser-guide\u002Fdiffing\u002F#application-level-configuration",rel:[u,v,w],target:x},children:[{type:a,value:"documentation"}]},{type:a,value:". The example was a bit weired for me at first but after I tried it out it became clear to me how it can be used, here is an example how to ignore all imagepullsecrets of the serviceaccounts of your app:"}]},{type:a,value:c},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,p]},children:[{type:b,tag:q,props:{},children:[{type:a,value:"apiVersion: argoproj.io\u002Fv1alpha1\nkind: Application\nmetadata:\n  name: awesome-app\n  namespace: argocd-ns\nspec:\n  destination:\n    namespace: awesome-ns\n    server: 'https:\u002F\u002Fkubernetes.default.svc'\n  ignoreDifferences:\n    - jsonPointers:\n        - \u002FimagePullSecrets\n        - \u002Fsecrets\n      kind: ServiceAccount\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you add a name: attribue right under kind: ServiceAccount you can narrow the ignore down again to a specific sa."}]},{type:a,value:c},{type:b,tag:R,props:{id:J},children:[{type:b,tag:e,props:{href:"#ignore-objects-as-differences",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"Ignore objects "},{type:b,tag:f,props:{},children:[{type:a,value:Q}]},{type:a,value:" differences"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This was much harder for me to find and at some point I thought this feature is missing at all.. Let's take a look at the screenshot I showed earlier:"}]},{type:a,value:c},{type:b,tag:t,props:{src:N,alt:z},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"ArgoCD tells me it's out of sync because of a PipelineRun object. If we click on it we see this detail difference view:"}]},{type:a,value:c},{type:b,tag:t,props:{src:"\u002Fimages\u002Fargo_diff_detail.png",alt:z},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This means, the object is not known by ArgoCD at all!\nIf we have autoprune enabled then ArgoCD would try to delete this object immediately which would be pretty bad for us because we want to get our new app built and the deletion cancels this all of a sudden."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The problem is that our pipeline is defined in our gitops-repository and ArgoCD automatically sets a label to the applied objects:"}]},{type:a,value:c},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,p]},children:[{type:b,tag:q,props:{},children:[{type:a,value:"  labels:\n    app.kubernetes.io\u002Finstance: awesome-app\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If a pipelinerun gets created this run inherits the label"}]},{type:a,value:c},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,p]},children:[{type:b,tag:q,props:{},children:[{type:a,value:"    app.kubernetes.io\u002Finstance: awesome-app\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"and because of this ArgoCD recognizes the pipelinerun as object which exists but is not present in our repository."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The ultimate solution of this problem is to ignore the whole object-kind (in my case the Tekton PipelineRun) at instance-level of our ArgoCD instance!\nIf you have deployed ArgoCD with the awesome "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fargoproj-labs\u002Fargocd-operator",rel:[u,v,w],target:x},children:[{type:a,value:"ArgoCD-Operator"}]},{type:a,value:" then just add "},{type:b,tag:f,props:{},children:[{type:a,value:"resourceExclusions"}]},{type:a,value:" to your manifest of the instance:"}]},{type:a,value:c},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,p]},children:[{type:b,tag:q,props:{},children:[{type:a,value:"apiVersion: argoproj.io\u002Fv1alpha1\nkind: ArgoCD\nmetadata:\n  name: example-argocd\n  namespace: argocd\nspec:\n  resourceExclusions: |\n    - apiGroups:\n      - tekton.dev\n      kinds:\n      - PipelineRun\n      - TaskRun\n      clusters:\n      - \"*\"\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If not then you can add "},{type:b,tag:f,props:{},children:[{type:a,value:"resource.exclusions"}]},{type:a,value:" to your argocd-cm configmap as described in the "},{type:b,tag:e,props:{href:"https:\u002F\u002Fargo-cd.readthedocs.io\u002Fen\u002Fstable\u002Foperator-manual\u002Fdeclarative-setup\u002F#resource-exclusioninclusion",rel:[u,v,w],target:x},children:[{type:a,value:"argocd-docs"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:s,props:{id:K},children:[{type:b,tag:e,props:{href:"#conclusion",ariaHidden:g,tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That's it 🎉🎊! As you can see there are plenty of options to ignore certain types of differences, and from my point of view if you want to use a gitops-process to deploy apps there will be a situation where you need to ignore some tiny diffs - and it will be there soon!"}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fignore_differences_in_argocd",extension:S,createdAt:A,updatedAt:A}],category:{slug:y,name:y,icon:"kubernetes.svg",desc:"Kubernetes related things like operators, gitops and so on",toc:[],body:{type:M,children:[]},dir:"\u002Fcategories",path:"\u002Fcategories\u002Fkubernetes",extension:S,createdAt:"2021-04-16T10:52:03.229Z",updatedAt:A}}],fetch:{},mutations:void 0}}("text","element","\n","p","a","em","true",-1,"span","icon","icon-link","div","nuxt-content-highlight","pre","language-text","line-numbers","code",2,"h2","img","nofollow","noopener","noreferrer","_blank","kubernetes","ArgoCD difference","2021-04-16T10:52:03.233Z","a-difference","A difference","analyze-the-difference","Analyze the difference","a-note-on-argocd-differences","A note on ArgoCD differences","ignore-differences-in-an-object",3,"ignore-objects-as-differences","conclusion","Conclusion","root","\u002Fimages\u002Fargo_diff.png","li","in","as","h3",".md")));