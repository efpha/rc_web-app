export default function subscribe() {
  return (
    <div className="register-page">
      <h1>Register for the Responsible Computing Challenge</h1>
      <p>Please fill out the form below to register.</p>
      {/* Registration form can be added here */}
      <form>
        {/* Example input fields */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}