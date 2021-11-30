// const Hello = () => {
//     <p>Hello</p>
// };

import World from "./World";
import styles from "./Hello.module.css";

// export default Hello;

export default function Hello() {

    function showName(){
        console.log("khs!");
    }
    function showAge(age) {
        console.log(age);
    }
    function showText(e){
        console.log(e.target.value);
    }
    return (
        <div>
            <h1>Hello</h1>
            
            <button onClick={showName}>Show name</button>
            <button 
            onClick={() => {
                showAge(10);
            }}
            >
                Show age
            </button>
            <input type="text" onChange={showText} />
        </div>
        
    );
    }   
