import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Users from "./components/Users";

function App() {
    const [datas, setData] = useState(null);
    // useEffect(() => {
    //     console.log('useffect', datas);
    // }, [datas]);

    return (
        <div className="App">
            <Navbar setData={setData} />
            <Users datas={datas} />
        </div>
    );
}

export default App;
