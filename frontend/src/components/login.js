export default function Login() {
  return (
    <div
      className="card h-50 d-flex flex-column justify-content-evenly align-items-center"
      style={{ width: 500 }}
    >
      <form>
        <div classname="mb-3">
          <label for="exampleFormControlInput1" classname="form-label">
            Email address
          </label>
          <input
            type="email"
            classname="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div classname="mb-3">
          <label for="exampleFormControlTextarea1" classname="form-label">
            Example textarea
          </label>
          <textarea
            classname="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
