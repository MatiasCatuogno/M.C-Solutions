<!-- BASICOS -->
 ls
 pwd
 cd /c, cd /f
 cd ../
    
<!-- INICIO EL REPOSITORIO -->
 git init
 git status
 git add (file)

<!-- LOGUEO CON GITHUB -->
 git config --global user.name ""
 git config --global user.email ""
 git config --list

<!-- COMMITS -->
 git log
 git blame
 git commit
 git commit -m "Comentario"

<!-- ARREGLAR CORREGIR UN COMMIT -->
 git commit -m "Comentario" --amend

<!-- ELIMINAR COMMITS -->
 git checkout (COMMIT)
 git checkout (COMMIT)(COMMIT)
 git checkout (COMMIT)~1 - (File Name)
 git remove (COMMIT)
 git reset --hard HEAD~1
 git reset --hard <sha1-commit-id>
 git push origin HEAD --force

<!-- DIFERENCIAS -->
 git diff (File)
    
<!-- BRANCHES-->
 git branch
 git branch (Nombre) Crea un branch nuevo
 git branch -d (Nombre del branch) (Elimina el Branch)
 git branch -M (Nombre del Branch) (Cambia el nombre del Branch)
 git checkout (Nombre del Branch)
 git add . (Agrega Todos Los Archivos)
 git remote show origin

<!-- PIDE LOGUEAR -->
 git remote add origin (Link)
 git push -u origin (Nombre del Branch)
 git pull origin (Nombre del Branch)

<!-- CLONADO -->
 git clone (Link)
 git clone -b (Nombre Del Branch)
 git clone --branch (Nombre Del Branch)
    
 clonar en la cd carpeta que quieras

<!-- ELIMINA EL REPOSITORIO LOCAL ACTUAL -->
rm -rf .git (COLOCADO EN LA CARPETA DEL REPOSITORIO)
/f/Documentos/Web Development/X (BRANCH)

cd <repository-name>
find . -type f | grep -i "\.git" | xargs rm
cd ..
rm -rf <repository-name>
mkdir <repository-name>
cd <repository-name>
git init
    
<!-- ELIMINA EL REPOSITORIO REMOTO, EL URL REMOTO -->
 git remote set-url --push --delete origin (LINK GITHUB REPO)