Since git is such a difficult thing to figure out at first, we need some strategies to manage our version of code. 

In general, we will have branches as follows

```
main #Production Code
├── develop #Integration Branch
│   ├── feature/frontend #e.g. new authentication "feature/auth" 
│   ├── feature/backend  #e.g. UI changes "feature/ui"
│   └── feature/pdf-manipulation #e.g API changes
├── hotfix/security     # Emergency fixes
└── release/v1.0.0      # Release preparation
```


As you can see, 
- whenever we have a bug in production code, we will do `git checkout -b <new-branch-name> <source-branch>` (e.g.`git checkout -b hotfix/TC-1234-button-not-work main`)

- whenever we have new features or ideas to develop, we do `git checkout -b <new-branch-name> <source-branch>` e.g. `git checkout -b feature/tc-1234-add-hover-effect develop`

- `[Optional]` whenever we want to merge successful, we are going to try to marge to release branch 


![](https://i.imgur.com/EdYktRV.png)

![](https://i.imgur.com/n3ykfvy.png)


### Rules

- Please go to Setting to set up at least one reviewer to prevent accidentally approve pull request


