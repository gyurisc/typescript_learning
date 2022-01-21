
import { ChildAsFC } from './Child';



const Parent = () => {
    return <ChildAsFC color="red" onClick={() => console.log("Clicked")}>
        SomeMessage
    </ChildAsFC>
};

export default Parent;