<h1>USERS CRUD WITH NESTJ/TYPEORM/POSTGRES/DOCKER</h1>

<p>login, crud users, crud roles with NestJs in the Backend and Postgres in the Database amongst other libreries and frameworks.</p>


<h1> THINGS YOU CAN DO: </h1>


<h2> Create an account, login, create roles, create users, find users and theirs roles, update users and their roles, delete users and their roles... </h2>

<h> Create a profile... </h>

[![crear.png](https://i.postimg.cc/pVkyV32F/crear.png)](https://postimg.cc/pyhPqG5W)

<h> Login... </h>

[![inicio-sesion.png](https://i.postimg.cc/zXKzbMN7/inicio-sesion.png)](https://postimg.cc/xcjDB6cN)

<h> Get users - all or by Id (For admin)... </h>

[![get-all-users.png](https://i.postimg.cc/ZnjLVjtM/get-all-users.png)](https://postimg.cc/0KMmNYNY)

<h> Get roles - all or by Id(For admin)... </h>

[![get-all-roles.png](https://i.postimg.cc/kXXsBrW3/get-all-roles.png)](https://postimg.cc/xqhM44st)

<h> Update users - all or by Id (For admin)... </h>

[![update-users.png](https://i.postimg.cc/W1c45V8x/update-users.png)](https://postimg.cc/2VTm5PPx)

<h> Update roles - all or by Id(For admin)... </h>

[![update-roles.png](https://i.postimg.cc/zBvDyGDH/update-roles.png)](https://postimg.cc/LYdF7R1m)

<h> Delete users - by Id (For admin)... </h>

[![usuario-eliminado.png](https://i.postimg.cc/Jh4HQm4M/usuario-eliminado.png)](https://postimg.cc/xXhd0wz4)

<h> Delete roles - by Id(For admin)... </h>

[![rol-eliminado.png](https://i.postimg.cc/C19ZYqCx/rol-eliminado.png)](https://postimg.cc/9RtXYzN6)

<h1>Enviroment Variables</h1>

<li>POSTGRES_PORT_EXTERNAL=5432</li>
<li>DB_USER=postgres</li>
<li>DB_PASS=postgres</li>
<li>DB_NAME=postgres</li>
<li>DB_TYPE=postgres</li>

<li>DB_HOST=localhost</li>
<li>DB_PORT=5432</li>
<li>DB_SYNC=false</li>
<li>PG_DB=postgres</li>

<h1>Installing and running</h1>

<li>npm install --save @nestjs/swagger swagger-ui-express</li>
<li>npx nest generate module users</li>
<li>npx nest generate module roles</li>
<li>npx nest generate module common</li>
<li>https://docs.docker.com/desktop/install/windows-install/</li>
<li>docker-compose up -d</li>
<li>docker-compose ps</li>
<li>npm install --save @nestjs/typeorm typeorm pg</li>
<li>npm run verify</li>
<li>git clone https://github.com/lauriy91/usersCRUD.git</li>
<li>cd USERS-CRUD</li>
<li>npm install</li>

<h1>Running the app</h1>
# development
<li>npm run start</li>
# watch mode
<li>npm run start:dev</li>
# production mode
<li>npm run start:prod</li>
# test swagger mode
<li>http://localhost:3000/api</li>

<h1>Test</h1>
# unit tests
<li>npm run test</li>
# e2e tests
<li>npm run test:e2e</li>
# test coverage
<li>npm run test:cov</li>

<h1>Testing Tools Api</h1>

<label>ThunderClient</label>
<label>&</label>
<label>Swagger</label>

<li>POST</li>
<li>GET</li>
<li>PUT</li>
<li>PATH</li>
<li>DELETE</li>

<h1>Support</h1>

<li>Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).</li>

<h1>Stay in touch</h1>
<h2>Laura Rodriguez King (https://github.com/lauriy91)</h2>

<h1>License</h1>
<li>Nest is [MIT licensed](LICENSE).</li>
