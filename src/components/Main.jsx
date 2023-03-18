import { Editor } from "./LaunchedMainComponents/Editor"
import FileUpload from "./LaunchedMainComponents/EditorComponents/Storer";
import { Title } from "./LaunchedMainComponents/Title";
import useGetPhantomContext from "./LaunchedMainComponents/useGetPhantomContext";

// show about info, display app when launch app button in header clicked
export const Main = () => {
    const wallet = useGetPhantomContext();
    console.log(wallet);
    return (
        <main className="main">
            <Title />
            <Editor />
            {/* Guide */}
        </main>
    )
}