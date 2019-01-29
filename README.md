# Astrophotography Condition Checker

This web application is to be used to check the weather 
conditions that would affect Astrophotography in any 
specific geographical area that the user selects.

Data such as cloud coverage, high altitude wind, seeing
conditions and moon phase will be evaluated and an over all score will be 
given to determine if the night is good for astrophotography.

# How to run
1. Git clone the repository
2. Run 'npm install' inside repo
3. Create account at https://darksky.net/dev for API key
4. Create file 'config.js' in root of project with the following code
  ```
    const API_KEY='Your_API_KEY'
    export default API_KEY
  ```


5. Run 'npm run dev'
