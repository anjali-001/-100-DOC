import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'Sita : Warrior of Mithila', id: 1},
        {title: 'Murakaami', id: 2},
        {title: '1984', id: 3}
    ]);
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;