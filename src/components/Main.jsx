import { Editor } from "./LaunchedMainComponents/Editor"
import { Title } from "./LaunchedMainComponents/Title";

// show about info, display app when launch app button in header clicked
export const Main = () => {
    return (
        <main className="main">
            <Title />
            <Editor />
            {/* Guide */}
        </main>
    )
}