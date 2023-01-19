import { LOTR } from './index';
import * as dotenv from "dotenv";

dotenv.config();

describe("End to end tests with live data", () => {
  const lotr = new LOTR({apiToken: process.env.LOTR_API_TOKEN});
  it("Can fetch all movies", async () => {
    const result = await lotr.movies.getAll();
    expect(result?.docs.length).toBeGreaterThan(0);
  });
  it('Can fetch one movie by its ID', async () => {
    const result = await lotr.movies.getOne("5cd95395de30eff6ebccde56");
    expect(result?.docs.length).toBe(1);
  });

  it('Can fetch quotes from one movie', async () => {
    const result = await lotr.quotes.getQuotesFromMovie("5cd95395de30eff6ebccde5d");
    expect(result?.docs.length).toBeGreaterThan(100);
  });

  it('Can fetch quotes from one movie with config options', async () => {
    const result = await lotr.quotes.getQuotesFromMovie("5cd95395de30eff6ebccde5d", {
      limit: 100,
      page: 2,
      offset: 3
    });
    expect(result?.docs.length).toBe(100);
  });
});
