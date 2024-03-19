import { Editor } from "@monaco-editor/react";
import React, { useRef, useState } from "react";
import { Button, OutlineButton, Select } from "../../library";
import { LANGUAGES_AND_VERSIONS } from "../../assets/data/programming-languages";
import { Paper } from "../paper";
import { PlayArrowRounded, PublishRounded } from "@mui/icons-material";

const CodeEditor = () => {
	const [language, setLanguage] = useState(
		LANGUAGES_AND_VERSIONS[0].language
	);
	const [code, setCode] = useState("");

	const editorRef = useRef();

	const onMount = (editor: any) => {
		editorRef.current = editor;
		editor.focus();
	};

	return (
		<div>
			<Paper>
                <div className="editor__Panel">
                    <div className="left">
                        <Select
                            options={LANGUAGES_AND_VERSIONS}
                            name="alias"
                            value="language"
                            selected={language}
                            onChange={(c) => setLanguage(c)}
                        />
                    </div>
                    <div className="right">
                        <OutlineButton>Go Fullscreen</OutlineButton>
                        <OutlineButton>Run</OutlineButton>
                        <Button>Submit</Button>
                    </div>
                </div>
				<Editor
					height="72vh"
					language={language}
					value={code}
					onChange={(e) => setCode(e!)}
					onMount={onMount}
				/>
			</Paper>
		</div>
	);
};

export default CodeEditor;
