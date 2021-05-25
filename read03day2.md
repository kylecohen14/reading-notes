## Version Control allows you to revisit diffrent versions of a file/files by recording changes

- Centralized VC
collaboration with a team

- Distributed version Control (**DVCS)**
Creates mirrored repos to prevent work being lost incase **CVS** goes down


## What is GIT
- Snapshots
Its a DVCS, stores data in a file made up of snapshots.

Every time you "commit" git creats a snapshot, and stores a reference

- Local operations
Git relies mostly on local.

## Changes
Every change applied to any fiel or directory is tracked by GIT
## Loss of Data
Git makes it hard to damage files

## States of files
Stages are 
- **Committed**
- **Modified**
- **Staged**

### Setting up a Git Repository
- _**Importing**_
  - Switch to the target project directory
 cd test
  - Use git init command
 git init
 
 ## To track these repo files
 ``` git add *.c ```
 ``` git add LICENSE ```
 ``` git commit -m “any message here” ```
 
 ### Cloning
 - Clone command with the repo URL
 ``` git clone https://github.com/test ```
 
 # To clone a repo into a directory with anothe name of your choosing....
 ``` git clone https://github.com/test mydirectory ```
 
 
 ### Workflow
 ![Workflow chart](https://blog.udemy.com/wp-content/uploads/2015/08/image066.png)
 # Three components
 - Working directory (files)
 - Index (staging)
 - Head (most recent commit)
 
 
 ### Check file status
 TO determine the state of files utilize this command
 ``` git status ```
 
 
 ### Tracking and stagin a new file
 - Single file
 to track one file
 ``` git add filename ```
 - All files
 ``` git add * ```
 
 Files are now staged and tracked, ready for committing
 
 # After adding new file, and using ``` git status ```
 ``` git status ```
 On branch master
 Changes to be committed
 ( use ``` git reset HEAD ... ``` to unstage)
  this should tell us that the changes that need commitment. And that it has been staged
  
  ### Committing a file
  - Once staged, commit the changes and add a note as to what was changed
  ``` git commit -m “made change x,y,z” ```
  
  ### Committing all changes made
  ``` git commit -a ```
  Commits snapshot of all mods to tracked files in Directory
  
  ##### Pushing Changes
  - Now you want these changes in a remote repository
  ``` git push origin master ```


## Stashing changes
- If you want to save changes without commiting use ``` git stash ```
If ready to commit these stashed changes use ``` git stash apply ```
