import React from 'react';
import { Table } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <h1>Questions and answers</h1>
            <div className='container'>
                <h1>Q1: Difference between Javascript and Node.js?</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>JavaScrips</th>
                            <th>Node JS</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Javascript is a programming language that is used for writing scripts on the website.</td>
                            <td>NodeJS is a Javascript runtime environment.</td>
                            
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Javascript can only be run in the browsers.</td>
                            <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                          
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>It is basically used on the client-side.</td>
                            <td>It is mostly used on the server-side.</td>
                          
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Javascript is capable enough to add HTML and play with the DOM.</td>
                            <td>Nodejs does not have capability to add HTML tags.</td>
                          
                        </tr>
                       
                    </tbody>
                </Table>
            </div>

            <div className='container pt-8'>
                <h1> Difference between SQL and NoSQL database?</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>SQL</th>
                            <th>NoSQL</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>These databases have fixed or static or predefined schema</td>
                            <td>They have dynamic schema</td>
                            
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>JSQL is relational database management system</td>
                            <td>NoSQL is non-relational database system</td>
                          
                        </tr>

                       
                    </tbody>
                </Table>
            </div>

            <div className='container mt-10'>
            <h1>When should you use nodejs and when should you use mongodb?</h1>
            <p>Ans: Nodejs is a Javascript engine that you can write any application you want with on the other hand MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. Nodejs is such as tool for the Javascript programming language. When a project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code, you can use nodejs. MongoDB is a database engine. If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database, you can use mongodb.</p>
            </div>

            <div className='container mt-10'>
                <h1>What is the purpose of jwt and how it works?</h1>
                <p>The main purpose of jwt or json web token is to share security information between two parties - a client and a server. A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization. JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
            </div>
        </div>
    );
};

export default Blog;