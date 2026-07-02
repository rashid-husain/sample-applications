import { use, useEffect, useState } from "react";

const Blog = () => {
    const [data, setData] = useState([]);

    // Objects definition:
    // create object
    const student = {
        name: "John",
        age: 30,
        city: "New York",
        // method
        greet: function () {
            console.log(`Hello, my name is ${student.name} and I am ${student.age} years old.`);

        }
    }
    const student2 = [
        {
            name: "John",
            age: 30,
            city: "New York",
        },
        {
            name: "Jane",
            age: 25,
            city: "Los Angeles",
        },
        {
            name: "Mike",
            age: 35,
            city: "Chicago",
        }
    ]

    // const name = "John Doe";
    // const age = 30;
    // const city = "New York";

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.log('Data:', data);
            }).catch(error => {
                console.error('Error fetching data:', error);
            }
            )
    }, []);


    // fetch('https://jsonplaceholder.typicode.com/photos')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data);
    //         console.log('Data:', data);
    //      }).catch(error => {
    //         console.error('Error fetching data:', error);
    //     }   
    // )

    // fetch('https://jsonplaceholder.typicode.com/photos')
    //     .then(response => console.log('Response:', response.json().then(data => {
    //         // setData(data);
    //         console.log('Data:', data);
    //     })))



    return (
        <>
            <h1>Blogs post</h1>
            <p>{student.name}</p>
            <p>{student.age}</p>
            <p>{student.city}</p>
            {/* <p> {student.greet()} </p> */}
            <p>{student.role}</p>
            <button onClick={student.greet}>Greet</button>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <table cellPadding={2} cellSpacing={2} border={1} width="100%">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {student2.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.city}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <br />
            <h1>Blog Posts</h1>
            <p>Below is the list of blog posts fetched from the API:</p>
            <p>Number of posts: {data.length}</p>
            <p>First post title: {data.length > 0 ? data[0].title : 'No data available'}</p>
            <p>First post body: {data.length > 0 ? data[0].body : 'No data available'}</p>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
                <table cellPadding={2} cellSpacing={2} border={1} width="100%">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Blog;