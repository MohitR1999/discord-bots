import { handler } from '../src/app'
describe("Basic handler", () => {
  beforeEach(() => {
    process.env.DISCORD_TOKEN = "test-token"
  })

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Should return basic status 200 code", async () => {
    const spyLog = jest.spyOn(console, 'log');
    handler()
    expect(spyLog).toHaveBeenCalledWith('Hello World')
    expect(spyLog).toHaveBeenCalledWith('Discord token exists')
  });
});
