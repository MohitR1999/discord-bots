import { handler } from "../src";
import { APIGatewayEvent, Context } from "aws-lambda";

describe("Basic handler", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Should return basic status 200 code", async () => {
    const event: unknown = {};
    const context: unknown = {};
    const returnObject = await handler(
      event as APIGatewayEvent,
      context as Context,
    );
    expect(returnObject.statusCode).toBe(200);
    expect(returnObject.body).toBe(
      JSON.stringify({
        message: "Hello World",
      }),
    );
  });
});
