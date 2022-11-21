# Image-Processing-Api
resizing images and save it a folder of the project folders with a custom size

===> please make sure to install all modules in the dependencies & devDependencies in the package.json :-

    ---> npm install 
    ---> npm install <dev_dependencies> --save-dev 

===>to run the project correctly follow the following instructures :-

    ---> npm run start       ---> to compile typescript and get build folder and start server
    ---> npm run prettier   ---> to format the code
    ---> npm run lint       ---> to ensure that is no errors in the code
    ---> npm run test       ---> to get the build folder and test the code using jasmine and supertest
    ---> npm run nodemon    ---> to run the server in typescript
    ---> npm run build      ---> to compile typescript to common jave script and get the build folder
    ---> node build/server  ---> to run the server in common jave script
    ---> npm run jasmine    ---> to test the code using jasmine and supertest 


===> use the following urls to test :-

    ---> http://localhost:3005/image?name=fjord&width=500&height=500
    ---> http://localhost:3005/image?name=fjord&width=150&height=150
    ---> http://localhost:3005/image?name=fjord&width=600&height=600




