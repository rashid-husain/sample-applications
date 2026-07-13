import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [name, setName] = useState('Rashid');

    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const resp = await response.json();
        return resp;
    }

    const testMethod = () => {
        console.log('Hi, I am from Context Api');
    }


    return (

        <>
            <AppContext.Provider value={{
                name, setName, getData, testMethod
            }}>
                {children}
            </AppContext.Provider>
        </>
    )

}


