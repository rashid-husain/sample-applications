import { use, useEffect, useState } from "react";
import CustomCard from "./common/customCard";

const Blog = () => {
    const [data, setData] = useState([]);
    const [idSearch, setIdSearch] = useState('');
    const [titleSearch, setTitleSearch] = useState('');
    const [bodySearch, setBodySearch] = useState('');

    const [filteredData, setFilteredData] = useState([]);

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
                setFilteredData(data);
            }).catch(error => {
                console.error('Error fetching data:', error);
            }
            )
    }, []);

    useEffect(() => {
        setFilteredData(data);
        filterData();
        console.log('Searched data:', idSearch, titleSearch, bodySearch);
    }, [idSearch, titleSearch, bodySearch]);

    // const filterData = () => {
    //     const filtered = data.filter(item => (item.id.toString().includes(idSearch) ||
    //         item.title.toLowerCase().includes(titleSearch.toLowerCase()) ||
    //         item.body.toLowerCase().includes(bodySearch.toLowerCase())));

    //     setFilteredData(filtered);
    // };


    const filterData = () => {
        const filtered = data.filter(item => (item.title.toString().includes(titleSearch)));
        setFilteredData(filtered);

    };


    // multiple conditions (AND logic) for filtering for multiple search inputs (id, title, body) with case-insensitive search for title and body
    // const filterData = () => {
    //     const filtered = data.filter(item => {
    //         // 1. Check ID (safely handle null/undefined)
    //         const matchesId = item.id ? item.id.toString().includes(idSearch) : true;

    //         // 2. Check Title (safely handle case-insensitivity)
    //         const matchesTitle = item.title ? item.title.toLowerCase().includes(titleSearch.toLowerCase()) : true;

    //         // 3. Check Body
    //         const matchesBody = item.body ? item.body.toLowerCase().includes(bodySearch.toLowerCase()) : true;

    //         // All conditions must be met (AND logic)
    //         return matchesId && matchesTitle && matchesBody;
    //     });

    //     setFilteredData(filtered);
    // };

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
                        <tr>
                            <td>
                                <input type="text" placeholder="Id search" value={idSearch} onChange={(e) => setIdSearch(e.target.value)} style={{ width: '90%', height:"30px", border: '1px solid #ccc', borderRadius: '4px', padding: '2px' }} />
                            </td>
                            <td>
                                <input type="text" placeholder="Title search" value={titleSearch} onChange={(e) => setTitleSearch(e.target.value)} style={{ width: '90%', height:"30px", border: '1px solid #ccc', borderRadius: '4px', padding: '2px' }} />
                            </td>
                            <td>
                                <input type="text" placeholder="Body search" value={bodySearch} onChange={(e) => setBodySearch(e.target.value)} style={{ width: '90%', height:"30px", border: '1px solid #ccc', borderRadius: '4px', padding: '2px' }} />
                            </td>
                        </tr>
                        {filteredData.map((item, index) => {
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

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                        <p> {filteredData.length < 1 && <span>No filtered posts found.</span>}</p>
                </div>

                <CustomCard data={data} />

            </div>
        </>
    )
}
export default Blog;