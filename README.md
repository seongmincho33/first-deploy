# NVM

1. 이전에 설치한 Nodejs는 윈도우 용임. 우분투에 다시 설치해야함.
2. Nodejs를 설치하려면 nvm을 먼저 설치해야함 아래 명령어실행
 
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

3. 이제 설치하고싶은 nodejs 버전을 확인

```
nvm ls-remote
```

4. LTS 설치권장

```
nvm install --lts
```
