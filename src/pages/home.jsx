import React from 'react';


const StandardImageList = () => {
  return (
    <ImageList cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>

  );
}

const Home = () => {

  // variable..let, const, var
  // 1. let: Block-scoped variable, can be reassigned, not hoisted to the top of the block.
  // 2. const: Block-scoped variable, cannot be reassigned, must be initialized at the time of declaration.
  // 3. var: Function-scoped variable, can be reassigned, hoisted to the top of the function.


  const [newSum, setNewSum] = React.useState(0); // Initialize newSum with the initial sum
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [display, setDisplay] = React.useState(false);

  const a = 10;
  const b = 20;
  const sum = a + b;
  // var c = 30; // Using var for demonstration, but it's generally recommended to use let or const
  // let newSum = a + b; // Initialize newSum with the initial sum

  console.log('Sum:', sum);

  const handleClick = () => {

    setNewSum(a +b+5); // Example of updating the sum
    // console.log('Button clicked!');
    // setNewSum(a + b + 5); // Example of updating the sum
    // let temp = "Rashid Husain";
    // console.log('Temp:', temp);
    // temp = "Rufayada Khatoon";
    // console.log('Temp after reassignment:', temp);
    // const constantValue = "This is a constant";
    // console.log('Constant Value:', constantValue);
    // constantValue = "Trying to reassign"; // This will throw an error
    // console.log('Constant Value after reassignment attempt:', constantValue);
    // console.log('Var c:', c);
  }

  // c = 40; // Reassigning var c
  // console.log('Var c after reassignment:', c);


  // const onChangeFirstName = (e) => {
  //   setFirstName(e.target.value);
  //   }


  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay(true);

  }



  return (
    <>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      <p>
        The sum of a={a} and b={b} is: {sum}
      </p>
      <p>
        State Value:  The sum of a={a} and b={b} is: {newSum}
      </p>
      <button onClick={handleClick}>Click Me</button>

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
          
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Contact:</label>
          <input type="Number" max="9999999999" value={contact} onChange={(e) => setContact(e.target.value)} />
          <button type="submit" >Submit</button>
        

        </div>
      </form >

      {display == true && (
        <div>
          <h2>Student Result:</h2>
          <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Contact: {contact}</p>
          </div>
        </div>
      )}

       {/*<StandardImageList /> */}

      {/* flexbox layout examples */}

      {/* <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid red', padding: '10px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '50%', border: '1px solid blue', padding: '10px' }}>
                Rufayada
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid green', padding: '10px', width:'50%' }}>
          <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid purple', padding: '10px', width:'100%' }}>
              Khatoon
            </div>
        </div>
        <div>
        </div>
      </div>

      <div style={{ border: '1px solid black', padding: '10px', marginTop: '20px'}}>
        Rashid Husain
      </div> */}


    </>

  )
}
export default Home;