export default function Diagnosis() {
    return (
        <div
            className="card d-flex flex-column justify-content-evenly p-5"
            style={{ width: 500, minHeight: 600 }}
        >
            <h1>Upload image of affected area and describe your symptoms</h1>
            <div className="">
                <label className="form-label">Email Address</label>
                <input
                    type="file"
                    className="form-control"
                    placeholder="enter your email"
                />
            </div>
            <div classname="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control" />
            </div>

            <button
                type="submit"
                class="btn btn-primary"
                style={{ width: 100 }}
            >
                Submit
            </button>
        </div>
    );
}
