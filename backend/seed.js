const mongoose = require('mongoose');
const Category = require('./models/Category');
const Post = require('./models/Post');

mongoose.connect('mongodb://127.0.0.1:27017/BlogProject');

async function seed() {
  try {
    // Clear old data
    await Category.deleteMany({});
    await Post.deleteMany({});

    // Insert categories
    const programmingCategory = new Category({
      name: 'Programming',
      slug: 'programming',
      description: 'Posts about general programming concepts and languages',
    });
    const databaseCategory = new Category({
      name: 'Database',
      slug: 'database',
      description: 'Posts about databases and queries',
    });
    const frameworkCategory = new Category({
      name: 'Framework',
      slug: 'framework',
      description: 'Posts on various web application frameworks',
    });
    const apiCategory = new Category({
      name: 'API',
      slug: 'api',
      description: 'Posts about APIs and integration',
    });
    const javascriptCategory = new Category({
      name: 'JavaScript',
      slug: 'javascript',
      description: 'Posts about JavaScript and frontend development',
    });

    await programmingCategory.save();
    await databaseCategory.save();
    await frameworkCategory.save();
    await apiCategory.save();
    await javascriptCategory.save();

    // Insert posts with long content
    const post1 = new Post({
      title: 'Getting Started with Node.js',
      content: `
Node.js is a runtime environment that allows you to run JavaScript on the server side.
It uses the V8 engine from Chrome, making it fast and efficient.
With Node.js, you can build scalable network applications, APIs, and real-time apps like chat servers.

Installation:
1. Download Node.js from the official website.
2. Verify installation using 'node -v' and 'npm -v'.

Modules:
Node.js has a rich ecosystem of modules. You can use 'require' to import them.
For example, 'http' module lets you create servers easily.

npm:
npm (Node Package Manager) is bundled with Node.js. It allows you to install libraries like Express, Mongoose, etc.

Building Your First Server:
const http = require('http');
http.createServer((req, res) => {
  res.write('Hello World');
  res.end();
}).listen(3000);

Best Practices:
- Use async/await for clean asynchronous code.
- Organize your project with clear folder structures.
- Handle errors gracefully.

Conclusion:
Node.js is powerful for backend development, enabling JavaScript everywhere.
This post introduced basics, but in future posts we’ll dive into Express, MongoDB integration, and REST APIs.
`.repeat(5), // repeat to make ~100 lines
      category: programmingCategory._id,
      author: 'Alice Johnson',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    });

    const post2 = new Post({
      title: 'Getting Started with MongoDB',
      content: `
MongoDB is a popular NoSQL database that stores data in flexible JSON-like documents.
It is schema-less, allowing developers to adapt quickly to changing requirements.
MongoDB supports powerful queries, indexing, and aggregation pipelines.

Key Features:
- Document-oriented storage
- High availability with replica sets
- Horizontal scaling with sharding
- Rich query language

Use Cases:
- Content management systems
- Real-time analytics
- IoT applications
- Catalogs and inventory

Conclusion:
MongoDB is a great choice for modern applications requiring flexibility and scalability.
`.repeat(5),
      category: databaseCategory._id,
      author: 'Bob Brown',
      image: 'https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png',
    });

    const post3 = new Post({
      title: 'Exploring Express.js',
      content: `
Express.js is a fast, unopinionated, minimalist web framework for Node.js.
It simplifies routing, middleware, and server creation.

Features:
- Simple routing system
- Middleware support
- Template engines
- REST API creation

Example:
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello World'));
app.listen(3000);

Conclusion:
Express.js is the backbone of many Node.js applications, including the MERN stack.
`.repeat(5),
      category: frameworkCategory._id,
      author: 'Charlie Davis',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
    });

    const post4 = new Post({
      title: 'Understanding RESTful APIs',
      content: `
RESTful APIs allow communication between client and server using HTTP methods.
They follow principles of statelessness, resource-based URLs, and standard methods (GET, POST, PUT, DELETE).

Benefits:
- Scalability
- Simplicity
- Language independence
- Widely adopted

Example:
GET /users
POST /users
PUT /users/:id
DELETE /users/:id

Conclusion:
RESTful APIs are the foundation of modern web and mobile applications.
`.repeat(5),
      category: apiCategory._id,
      author: 'Dana Lee',
      image: 'https://cdn-icons-png.flaticon.com/512/2799/2799187.png',
    });

    const post5 = new Post({
      title: 'JavaScript Basics',
      content: `
JavaScript is a versatile language used to add interactivity to web pages.
It runs in the browser and on the server (via Node.js).

Basics:
- Variables (var, let, const)
- Functions
- Events
- DOM manipulation

Example:
document.getElementById('btn').addEventListener('click', () => {
  alert('Button clicked!');
});

Conclusion:
JavaScript is the backbone of frontend development and a must-learn for web developers.
`.repeat(5),
      category: javascriptCategory._id,
      author: 'Ethan Wright',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    });

    await post1.save();
    await post2.save();
    await post3.save();
    await post4.save();
    await post5.save();

    console.log('✅ Database seeded successfully with long content!');
    mongoose.connection.close();
  } catch (error) {
    console.error(error);
    mongoose.connection.close();
  }
}

seed();