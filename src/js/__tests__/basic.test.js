import ErrorRepository from "../ErrorRepository.js"

test("testing the return of a correct error description", () => {
  const error = new ErrorRepository();
  error.errors.set(101, "Invalid input data");
  error.errors.set(201, "Resource not found");
  error.errors.set(301, "Network timeout");
  expect(error.translate(201)).toBe("Resource not found");
});

test("testing the 'Unknown error' return", () => {
  const error = new ErrorRepository();
  expect(error.translate(501)).toBe("Unknown error");
});
