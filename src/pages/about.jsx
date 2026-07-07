import { useEffect, useState } from "react";
import CustomCard from "./common/customCard";

const About = () => {

    useEffect(() => {
        console.log('About Mounted');
    }, []);


    // Definition of a variable 
   /* const a = 'Hello, World!';
    const b = 42;
    const c = true;

    const name = "Rashid Husain";
    const role = "Full Stack Developer";
    const age = 25;
    const dateOfBirth = "1998-01-01";

    console.log('Name:', name);
    console.log('Role:', role);
    console.log('Age:', age);
    console.log('Date of Birth:', dateOfBirth);

    // array of objects mixed data types
    const usersDetails = [
        "Rashid Husain",
        "Full Stack Developer",
        25,
        "1998-01-01"
    ];

    // homogeneous array of strings
    const usersNames = ["Rashid Husain", "Rufayada Khatoon", "John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Charlie Davis", "David Evans", "Eva Foster", "Frank Green"];
    // homogeneous array of numbers
    const usersAges = [25, 30, 35, 40];

    // homogeneous array of booleans
    const usersActive = [true, false, true, false];

    // Defining an array with mixed data types
    const arrData = ['Item 1', 'Item 2', 'Item 3', 12, 34, 5, 6, 7, 8, 9, 10];
    // for loop
    // condition expression of for loop
    //intialization expression of for loop
    //condition expression of for loop
    //increment expression of for loop
    for (let i = 0; i < arrData.length; i++) {
        console.log('For Loop:', arrData[i]);
    }

    // forEach loop
    // forEach is a method available on arrays in JavaScript that allows you to iterate over each element in the array and execute a provided function for each element. It takes a callback function as an argument, which is called for each element in the array. The callback function can take up to three arguments: the current element, the index of the current element, and the array itself.
      // syntax of forEach loop
        // 1. array.forEach(callback(currentValue, index, array) {
        // Code to be executed for each element
    //  });
    arrData.forEach((item, index) => {
        console.log('ForEach Loop:', item, 'Index:', index);
    });

    // map
    const mappedData = arrData.map((item, index) => {
        console.log('Map Loop:', item, 'Index:', index);
        return item; // You can modify the item if needed
    });

    console.log('Mapped Data:', mappedData);

    // filter
    const filteredData = usersNames.filter((item) => {
        return item === 'Rufayada Khatoon' || item === 'Rashid Husain'; // Filter only the specified names
    });

    console.log('Filtered Data:', filteredData);
     

    const arr=[1,2,3,4,5,6];
    const newArr=arr.filter((val)=>{
        return (val>3);
    })
    console.log('newArr',newArr);*/
    /*const Mapped=arr.map((val)=>{
        return val;
    })
    console.log('Mapped',Mapped);
*/

    


    // Ternary operator
    // condition ? expressionIfTrue : expressionIfFalse
   /* 16 > 17 ? console.log('You can vote') : console.log('You cannot vote, because you are not an adult yet.');
    25 > 18 ? console.log('You can vote') : console.log('You cannot vote, because you are not an adult yet.');

    const passingScore = 75;
    
    (passingScore > 59.9) ? console.log('you are pass first division') : console.log('you are not pass first division.');
   
   (passingScore > 60 && passingScore <= 70) ? console.log('we will plan a trip to Lucknow') : console.log('We will not plan a trip to Gorakhpur.');

    (passingScore > 70 && passingScore <= 80) ? console.log('we will plan a trip to Delhi') : console.log('We will not plan a trip to Lucknow.');
    
    const isAdult = age >= 18 ? 'Yes, You can vote' : 'No, you cannot vote, because you are not an adult yet.';
    console.log('Is Adult:', isAdult);*/

    const Table = () => {
        return (
        //  fragment
            <>
                <table cellPadding={5} cellSpacing={5} border={1}>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Age</th>
                    </tr>
                    </thead>
                   {/* <tbody>
                         employeeDetails.map(item => {
                            return (
                            <tr>
                              <td>  {item.id} </td>
                               <td>  {item.name} </td>
                               <td>  {item.role} </td>
                               <td>  {item.age} </td>
                            </tr>
                            )
                        }) 
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>Developer</td>
                        <td>30</td>
                    </tr>
                    </tbody>*/}

                </table>

                <p>
                    This is the table Component
                    </p>

                <button style={{ width: '100px', height: '100px', padding: '5px', border: '1px solid gray', borderRadius: '5px', backgroundColor: 'lightgray' }} onClick={() => alert(props.message)}>Table Button</button>
            </>
        );
    }

    const WelcomeButton = (props) => {

        useEffect(() => {
            console.log('WelcomeButton Mounted');   
            console.log('Button Props:', props);
        });

        useEffect(() => {
            console.log('WelcomeButton Mounted');   
            console.log('Button Props:', props);
        }, []);

        return (
            <button style={{width: '100px', height:'100px', padding:'5px', border:'1px solid gray', borderRadius:'5px', backgroundColor:'lightgray'}} onClick={() => alert(props.message)}>{props.name}</button>
        );
    }

    const Counter = () => {
        const [count, setCount] = useState(0);

        useEffect(() => {
        
        }, []); // This useEffect will run only once when the component mounts, because it has an empty dependency array

        useEffect(() => {
            alert("welcome");
        }) // This useEffect will run on every render, because it has no dependency array

        useEffect(() => {
            console.log('Counter Updated with new value of the count state:', count);
        }, [count]); // condition expression of useEffect hook, it will run only when count changes

        return (
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
        );
    }

    
    return (
        <>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>

            <input type="text" placeholder='Enter your name' />
            <input type="email" placeholder='Enter your email' />
            <textarea placeholder='Enter your message'></textarea>
            <input type="file" />
            <input type="checkbox" /> I agree to the terms and conditions
            <input type="radio" name="gender" value="male" /> Male
            <input type="radio" name="gender" value="female" /> Female
            <input type="number" placeholder='Enter your age' />
            <input type="date" />
            <input type="time" />   
            <input type="color" />
            <input type="range" min="0" max="100" />
            <input type="url" placeholder='Enter your website' />
            <input type="tel" placeholder='Enter your phone number' />
            <input type="search" placeholder='Search...' />
            <input type="password" placeholder='Enter your password' />
            <input type="hidden" value="hiddenValue" />
            <button type="reset">Reset</button>
            <button type="button" onClick={() => alert('Button clicked!')}>Click Me</button>
            <button type="submit">Submit Form</button>
            </form>
            <h1>do you wants to know the purpose of this website?</h1>
            
            <Table />
            <WelcomeButton name="Click Me" message="Welcome!" />
            <Counter />
            <CustomCard name="Rashid" age="50" role="Senior Developer" />
        </>
    )
}
export default About;
