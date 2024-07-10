import EmailEditor from "@editex/react-email-editor";
import { useRef, useState } from "react";
import defaultBlockList from "./defaultBlockList.json";
import Header from "./Header";
import { useEffect } from "react";

function Dashboard() {
  const emailEditorRef = useRef(null);
  const [emailData, setEmailData] = useState(null);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    setTimeout(() => {
      setEmailData(defaultBlockList);
    }, 300);
  }, []);

  return (
    <div className="dashboard">
      <Header emailEditorEl={emailEditorRef} setLanguage={setLanguage} />
      <div className="dashboard-content">
        {emailData && (
          <EmailEditor
            ref={emailEditorRef}
            defaultBlockList={emailData}
            language={language}
            customLanguageLibraries={{
              en: {
                column: "Column",
                columns: "Columns",
              },
              zh: {
                column: "列",
                columns: "列",
              },
              zh_TW: {
               drag_block_here: "Drag block here",
                blocks: "Blocks",
                photos: "Photos",
                loading: "Loading...",
                content: "Content",
                body_settings: "Email Subject Settings",
                pre_header: "Preheader",
                pre_header_description:
                  "A preheader is a short summary text that follows the subject line when viewing an email in the inbox.",
                confirm: "Confirm",
                cancel: "Cancel",
                // ........
              },
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
