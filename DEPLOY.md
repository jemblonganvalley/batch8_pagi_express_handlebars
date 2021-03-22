## Deploy app to HEROKU
1. Buat akun di heroku [disini](https://heroku.com)

2. Install heroku dengan npm
```
npm install -g heroku
```

3. login Heroku
```
heroku login
```

4. Ubah script pada package.json yang sebelumnya start menjadi dev

5. Initialisasi git di project kita
```
git init
git add .
git commit -m "update project"
```

6. Buat project heroku
```
heroku create namaPorjectnya
```

7. Push ke heroku
```
heroku push origin master
```

