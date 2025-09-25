import Form from "../components/Form";
import GitHubEmbed from "../utils/GitHubEmbed";

export default function FormDemo() {
  return (
    <>
      <div className="max-w-md mx-auto mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Form example with a mix of controlled and uncontrolled inputs
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-2">
            Phone number is the only controlled field, since it requires
            formatting. Using uncontrolled inputs for other inputs and a
            separate component for phone input avoids unnecessary renders and
            simplifies code by using built in form validation.
          </li>
          <li className="mb-2">Use FormData for form data</li>
        </ul>

        <Form />
      </div>
      <GitHubEmbed url="https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fnathansf%2Ffirebase-react-ts-sandbox%2Fblob%2Fmain%2Fsrc%2Fcomponents%2FForm.tsx&style=github-dark-dimmed&type=code&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on" />
      <GitHubEmbed url="https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fnathansf%2Ffirebase-react-ts-sandbox%2Fblob%2Fmain%2Fsrc%2Fcomponents%2FPhoneInput.tsx&style=github-dark-dimmed&type=code&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on" />
    </>
  );
}
