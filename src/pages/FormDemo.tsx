import Form from "../components/Form";

export default function FormDemo() {
  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        From example with a mix of controlled and uncontrolled inputs
      </h2>
      <p>
        Phone number is the only controlled field, since it requires formatting.
        Using uncontrolled inputs for other inputs avoids unnecessary renders
        and simplifies code by using built in form validation.
      </p>
      <Form />
    </div>
  );
}
