export default function Login() {
    return (
        <div
            className="card d-flex flex-column justify-content-evenly p-5"
            style={{ width: 500, minHeight: 600 }}
        >
            <h1>Login</h1>
            <div className="">
                <label className="form-label">Email Address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="enter your email"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Your Password</label>
                <input type="password" className="form-control" />
            </div>
            <div className="d-flex flex-row justify-content-between">
                <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: 100 }}
                >
                    Submit
                </button>
                <a href="#">Login instead</a>
            </div>
        </div>
    );
}
