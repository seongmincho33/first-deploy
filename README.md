



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

---
2025-09-23

# STEP 1 (README.md 수정 및 화면스크린샷)
- 메인 페이지에 기본으로 나오는 내용을 각자 조금씩 바꾸고README.md 도 바꾸고로컬에서 테스트 해서 브라우저에서 확인이 되면 # STEP 1 이라고 하고 스크린샷을 아래 코맨트에 붙임
<img width="421" height="386" alt="image" src="https://github.com/user-attachments/assets/a1935d31-9b3e-4128-a406-726b2730befe" />

<br>
<br>
<br>

---

# STEP 2 (VERCEL 에 배포)

1. <b>원래 자동으로 뜨는데 안뜨면 여기 일단 클릭</b>
<img width="500" alt="image" src="https://github.com/user-attachments/assets/c1635c3c-bf34-4fc1-8ebd-7ab45e835980" />

2. <b>내 아이디를 선택해주고</b>
<img width="500" alt="image" src="https://github.com/user-attachments/assets/df65521d-5ccb-45d5-bb25-b685a883dfff" />

3. <b>사용할 레파지토리를 선택해줍니다. first-deploy가 되겠습니다.</b>
<img width="500" alt="image" src="https://github.com/user-attachments/assets/e4edffba-67ae-4682-bd1c-186c79734a67" />

4. <b>first-deploy가 뜨면 임포트 클릭</b>
<img width="500" alt="image" src="https://github.com/user-attachments/assets/268cdadc-536e-459a-93a0-4fa561b0c88b" />

5. <b>화면에 새로운 프로젝트 생성버튼 클릭. 아래화면과 같이 뜨고 건들지말고 바로 deploy 클릭. </b>
<img width="500" alt="image" src="https://github.com/user-attachments/assets/3f0d128e-34d2-4226-8b1e-6a2b6b2ef97a" />

6. <b>배포가 완료됩니다.~ 'ㅁ'</b>
<img width="500" alt="image" src="https://github.com/user-attachments/assets/ed8667a8-7eee-4412-896c-93ba60af7e23" />

7. <b>근데 내 레파지토리에서 Merge를 시작하면 자동으로 Vercel이 캐치해서 다시 빌드합니다. </b>
<img width="500" alt="image" src="https://github.com/user-attachments/assets/fa4e5b3a-7d12-4fe9-92d0-a4a73499406a" />

8. <b>놀랍게도.. 다시 빌드되고 생성되는 사이트...</b>
<img width="500" alt="image" src="https://github.com/user-attachments/assets/7ceacfa5-56ec-4865-a529-ba8bce7f6399" />

<br>
<br>
<br>
seongmin
---


# STEP 3 (가비아 도메인 붙이기)

1. <b>가비아 회원가입후 도메인 구입하면 My 가비아 -> 서비스관리탭으로 이동합니다. 5분정도 기다리면 구매한 도메인이 생깁니다.</b> 
<img width="500" alt="image" src="https://github.com/user-attachments/assets/d815fb26-9ddc-4efc-aaf2-70ab629fa67d" />

2. <b>다시 Vercel가서 도메인 클릭</b>
<img width="500" alt="image" src="https://github.com/user-attachments/assets/9b33e76e-0bbd-4430-a981-113ca56eae67" />

3. <b>도메인 추가 클릭</b>
<img width="500" alt="image" src="https://github.com/user-attachments/assets/6051f88c-bd0d-47de-b1c2-7b3906c5eff8" />

4. <b>구매한 도메인을 입력</b>
<img width="500" alt="image" src="https://github.com/user-attachments/assets/eff86b9e-f06e-4f88-ab08-9f7aeddc1533" />

5. <b>도메인이 2개가 뜹니다. 하나는 배포용이고 하나는 리다이렉트용입니다.</b>
<img width="500" alt="image" src="https://github.com/user-attachments/assets/091c2b2c-1484-47da-ac7f-4dcff24f47c0" />

6. <b>다시 가비아로 가서 도메인 관리 화면으로 갑니다.</b>
<img width="500" alt="image" src="https://github.com/user-attachments/assets/8c7349aa-f17c-4053-bf6d-a2924ee32a95" />

7. <b>구매한 도메인을 설정들어가서</b>
<img width="500" alt="image" src="https://github.com/user-attachments/assets/c1a5b687-a468-4c6a-b88c-48ead43804d3" />

8. <b>레코드를 수정 클릭</b>
<img width="500" alt="image" src="https://github.com/user-attachments/assets/ca64d41d-4bfa-4d90-8ad3-8df54788e49b" />

9. <b>Vercel에서 추가한 도메인 설정을 그대로 따라써줍니다. </b>
<img width="500" alt="image" src="https://github.com/user-attachments/assets/3aa99548-f15e-4701-a773-c39d2b670eac" />

10. <b>Vercel에 가면 놀랍게 이걸 캐치하고 도메인이 빨강에서 파랑으로 변합니다 'ㅁ'</b>
<img width="500" alt="image" src="https://github.com/user-attachments/assets/59fedfba-accb-4677-8214-1e9b7766b769" />














