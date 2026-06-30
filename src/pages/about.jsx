const About = () => {

    // Definition of a variable 
    const a = 'Hello, World!';
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

    
    return (
        <>
        <h1>do you wants to know the purpose of this website?</h1>
        </>
    )
}
export default About;