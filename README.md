# TtockClinic Front-end
똑똑 클리닉 어플리케이션

### Project versions
react-native 2.0.1
expo
npm 6.14.13

### Preview
![smartmockups_ku15foxj](https://user-images.githubusercontent.com/68368633/134806101-a3ed8191-383a-4604-86e7-5c59270233da.jpg)
![smartmockups_ku16hufu](https://user-images.githubusercontent.com/68368633/134807356-372ca5cc-98ed-464d-8b08-028763d12731.jpg)
![smartmockups_ku16c3nq](https://user-images.githubusercontent.com/68368633/134807391-e3eaa51c-500d-45b8-a71a-0cc261f89e66.jpg)
![smartmockups_ku16efl6](https://user-images.githubusercontent.com/68368633/134807374-ebdc1afc-d0cc-4711-a476-35830076ea86.jpg)
- 기능 설명
  - 코로나 정보: 오늘의 코로나19 확진자 정보 및 지역별 거리두기 정보 확인
  - 가까운 선별진료소: 사용자 현재 위치를 기반으로 가까운 선별진료소의 대기자 순 리스트 확인
  - 지역별 선별진료소: 사용자가 선택한 지역을 기반으로 한 선별진료소의 대기자 순 리스트 확인
    - 문진표 작성: 이름, 생년월일, 전화번호, 현재 증상 등의 정보를 작성
  - 나의 접수 정보: 이름과 전화번호 입력 시 작성 문진표 기반 QR코드 확인 

#### Maps
- MapView: react-native-maps
  ```
  $ npm install --save react-native-maps
  ```
- Geocode: react-geocode
  ```
  $ npm install --save react-geocode
  ```
- PickerSelect: react-native-picker-select
  ```
  $ npm install react-native-picker-select
  ```

#### QRcode
- Qrcode generator: react-native-qrcode-svg
  ```
  $ npm i -S react-native-svg react-native-qrcode-svg
  ```

#### Others
- Icon: react-native-vectors-icons
  ```
  $ npm install --save react-native-vector-icons
  ```
- Checkbox: react-native-paper
  ```
  $ npm install react-native-paper
  ```

